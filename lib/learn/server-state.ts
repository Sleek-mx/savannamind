import type { User } from "@supabase/supabase-js";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  decodeProfileMeta,
  encodeProfileMeta,
  emptyCloudLearnState,
  LEARN_STATE_VERSION,
  type CloudLearnState,
} from "./cloud-state";
import { deriveLearnerName } from "./learner-name";
import type { LearnProfile } from "./types";
import type { LearnProgress } from "./progress";
import type { QuizProgressState } from "./quiz-progress";
import { isCareerId, migrateLegacyCareer } from "./careers";
import { randomUUID } from "node:crypto";

const BUCKET = "learner-data";
const statePath = (userId: string) => `${userId}/learn-state.json`;
const stateDirectory = (userId: string) => `${userId}/states`;

async function latestStatePath(userId: string): Promise<string> {
  const admin = createAdminClient();
  const { data, error } = await admin.storage.from(BUCKET).list(stateDirectory(userId), {
    limit: 1,
    sortBy: { column: "name", order: "desc" },
  });
  if (error) throw error;
  return data?.[0]?.name
    ? `${stateDirectory(userId)}/${data[0].name}`
    : statePath(userId);
}

/** Max serialized learn-state size accepted for storage (and PUT bodies). */
export const LEARN_STATE_MAX_BYTES = 512 * 1024;

/**
 * True only when Storage says the object does not exist (first-time user).
 * Any other Storage failure (network, 5xx, permissions) must NOT be treated
 * as "empty state" — callers would then overwrite real cloud data.
 */
function isStorageNotFound(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  const err = error as { message?: unknown; statusCode?: unknown; status?: unknown };
  const status = typeof err.statusCode === "string" ? Number.parseInt(err.statusCode, 10) : err.statusCode;
  return (status === 404 || err.status === 404) &&
    typeof err.message === "string" && err.message.toLowerCase() === "object not found";
}

export async function readCloudLearnState(userId: string): Promise<CloudLearnState> {
  const admin = createAdminClient();
  const { data, error } = await admin.storage.from(BUCKET).download(await latestStatePath(userId));
  if (error || !data) {
    if (error && !isStorageNotFound(error)) {
      // Real Storage failure — surface it instead of falling back to empty.
      throw error instanceof Error ? error : new Error("Failed to read learn state from storage");
    }
    const fromTables = await readStateFromTables(userId);
    if (fromTables && (
      fromTables.profile?.onboardingComplete ||
      fromTables.progress.totalXp > 0 ||
      Object.values(fromTables.progress.modules).some((module) =>
        module.completed || module.unitIndex > 0 || module.cardIndex > 0 ||
        Boolean(module.failedUnitIds?.length)
      )
    )) {
      // Tables hold only a projection. Returning it as a full state would erase
      // quiz history and remediation when the client hydrates.
      throw new Error("Complete learn state missing from storage");
    }
    return emptyCloudLearnState();
  }
  const text = await data.text();
  try {
    return sanitizeStoredCloudState(JSON.parse(text));
  } catch (err) {
    // Corrupt blob: surface so the client keeps its local cache instead of
    // treating the account as fresh and overwriting cloud data.
    throw err instanceof Error && err.message.startsWith("Malformed stored learn state")
      ? err
      : new Error("Corrupt learn state payload in storage");
  }
}

export async function writeCloudLearnState(userId: string, state: CloudLearnState) {
  const admin = createAdminClient();
  const body = JSON.stringify(state);
  if (body.length > LEARN_STATE_MAX_BYTES) {
    throw new Error("Learn state exceeds maximum allowed size");
  }
  // A new object path on each save avoids stale reads from Storage's CDN.
  const path = `${stateDirectory(userId)}/${Date.now()}-${randomUUID()}.json`;
  const { error } = await admin.storage.from(BUCKET).upload(path, body, {
    upsert: false,
    cacheControl: "0",
    contentType: "application/json",
  });
  if (error) throw error;
  await syncTablesFromState(userId, state);

  // Keep two previous snapshots for recovery without unbounded Storage growth.
  const { data: versions, error: listError } = await admin.storage.from(BUCKET).list(stateDirectory(userId), {
    limit: 100,
    sortBy: { column: "name", order: "desc" },
  });
  if (!listError && versions && versions.length > 3) {
    await admin.storage.from(BUCKET).remove(
      versions.slice(3).map((item) => `${stateDirectory(userId)}/${item.name}`)
    );
  }
}

async function readStateFromTables(userId: string): Promise<CloudLearnState | null> {
  const admin = createAdminClient();
  const { data: profileRow, error: profileError } = await admin
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();

  if (profileError) {
    throw profileError instanceof Error
      ? profileError
      : new Error("Failed to read profile row");
  }
  if (!profileRow) return null;

  const { data: progressRow, error: progressError } = await admin
    .from("learner_progress")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  if (progressError) {
    throw progressError instanceof Error
      ? progressError
      : new Error("Failed to read learner progress row");
  }

  const meta = decodeProfileMeta(profileRow.learning_goal, "en");
  const careerRaw = profileRow.career_id;
  const career = isCareerId(careerRaw) ? careerRaw : migrateLegacyCareer(String(careerRaw ?? "exploring"));

  const profile: LearnProfile | null = meta.onboardingComplete
    ? {
        nickname: profileRow.full_name || "Learner",
        ageBand: (profileRow.age_band as LearnProfile["ageBand"]) || "adult",
        career,
        level: meta.level || "beginner",
        guardianConfirmed: meta.guardianConfirmed ?? true,
        locale: meta.locale || "en",
        onboardingComplete: true,
        placementCompleted: meta.placementCompleted,
        placementScore: meta.placementScore,
        placementAnswers: meta.placementAnswers,
        outcomeBestScore: meta.outcomeBestScore,
        outcomeCompletedAt: meta.outcomeCompletedAt,
        tutorialSeen: true,
        createdAt: profileRow.created_at || new Date().toISOString(),
      }
    : null;

  const progress: LearnProgress = {
    modules: {},
    totalXp: profileRow.total_xp ?? 0,
  };

  if (progressRow) {
    const moduleId = progressRow.current_module_id || "s1";
    progress.modules[moduleId] = {
      moduleId,
      completed: (progressRow.completed_module_ids ?? []).includes(moduleId),
      xp: profileRow.total_xp ?? 0,
      unitIndex: progressRow.current_unit_index ?? 0,
      cardIndex: progressRow.current_card_index ?? 0,
      failedUnitIds: progressRow.failed_unit_ids ?? [],
    };
  }

  const empty = emptyCloudLearnState();
  return {
    version: 1,
    profile,
    progress,
    quiz: empty.quiz,
    remediation: empty.remediation,
  };
}

async function syncTablesFromState(userId: string, state: CloudLearnState) {
  const admin = createAdminClient();
  const { data: userData, error: userError } = await admin.auth.admin.getUserById(userId);
  if (userError) {
    throw userError instanceof Error ? userError : new Error("Failed to load auth user");
  }
  const email = userData.user?.email ?? null;

  const profile = state.profile;
  const totalXp = state.progress?.totalXp ?? 0;

  if (profile) {
    const { error } = await admin.from("profiles").upsert({
      id: userId,
      email,
      full_name: profile.nickname,
      age_band: profile.ageBand,
      career_id: profile.career,
      learning_goal: encodeProfileMeta(profile),
      total_xp: totalXp,
      updated_at: new Date().toISOString(),
    });
    if (error) {
      throw error instanceof Error ? error : new Error("Failed to upsert profiles table");
    }
  } else if (email) {
    const { error } = await admin.from("profiles").upsert({
      id: userId,
      email,
      updated_at: new Date().toISOString(),
    });
    if (error) {
      throw error instanceof Error ? error : new Error("Failed to upsert profiles table");
    }
  }

  const activeModule =
    Object.values(state.progress.modules).find((m) => !m.completed)?.moduleId ?? "s1";
  const active = state.progress.modules[activeModule];
  const completedIds = Object.entries(state.progress.modules)
    .filter(([, m]) => m.completed)
    .map(([id]) => id);

  const { error: progressWriteError } = await admin.from("learner_progress").upsert({
    user_id: userId,
    current_module_id: activeModule,
    current_unit_index: active?.unitIndex ?? 0,
    current_card_index: active?.cardIndex ?? 0,
    completed_module_ids: completedIds,
    failed_unit_ids: active?.failedUnitIds ?? [],
    updated_at: new Date().toISOString(),
  });
  if (progressWriteError) {
    throw progressWriteError instanceof Error
      ? progressWriteError
      : new Error("Failed to upsert learner_progress table");
  }
}

// —— PUT payload validation ————————————————————————————————————————————

const MAX_MODULES = 50;
const MAX_MAP_KEYS = 500;
const MAX_VARIANTS_PER_KEY = 20;
const MAX_ARRAY_IDS = 500;
const MAX_STRING_LEN = 200;

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function isFiniteNumber(v: unknown): v is number {
  return typeof v === "number" && Number.isFinite(v);
}

function isBoundedString(v: unknown, max = MAX_STRING_LEN): v is string {
  return typeof v === "string" && v.length <= max;
}

function isBoundedIdArray(v: unknown, max = MAX_ARRAY_IDS): v is string[] {
  return Array.isArray(v) && v.length <= max && v.every((id) => isBoundedString(id, 100));
}

export type ParsedLearnStateResult =
  | { ok: true; state: CloudLearnState }
  | { ok: false; reason: string };

/**
 * Validates an untrusted PUT body into a strict CloudLearnState.
 * Returns { ok: false, reason } for anything malformed or oversized so the
 * route can return 400 instead of persisting arbitrary JSON.
 */
export function parseCloudLearnState(body: unknown): ParsedLearnStateResult {
  if (!isPlainObject(body)) {
    return { ok: false, reason: "Body must be a JSON object" };
  }

  const version = body.version ?? LEARN_STATE_VERSION;
  if (!isFiniteNumber(version) || version < 1 || version > 2) {
    return { ok: false, reason: "Unsupported state version" };
  }

  // —— profile
  let profile: LearnProfile | null = null;
  const rawProfile = body.profile;
  if (rawProfile !== null && rawProfile !== undefined) {
    if (!isPlainObject(rawProfile)) {
      return { ok: false, reason: "profile must be an object or null" };
    }
    if (!isBoundedString(rawProfile.nickname, 100)) {
      return { ok: false, reason: "profile.nickname invalid" };
    }
    if (
      rawProfile.ageBand !== "kids" &&
      rawProfile.ageBand !== "youth" &&
      rawProfile.ageBand !== "adult"
    ) {
      return { ok: false, reason: "profile.ageBand invalid" };
    }
    if (typeof rawProfile.career !== "string" || !isCareerId(rawProfile.career)) {
      return { ok: false, reason: "profile.career invalid" };
    }
    if (
      rawProfile.level !== "beginner" &&
      rawProfile.level !== "intermediate" &&
      rawProfile.level !== "advanced"
    ) {
      return { ok: false, reason: "profile.level invalid" };
    }
    if (typeof rawProfile.guardianConfirmed !== "boolean") {
      return { ok: false, reason: "profile.guardianConfirmed invalid" };
    }
    if (rawProfile.locale !== "en" && rawProfile.locale !== "sw") {
      return { ok: false, reason: "profile.locale invalid" };
    }
    if (typeof rawProfile.onboardingComplete !== "boolean") {
      return { ok: false, reason: "profile.onboardingComplete invalid" };
    }
    if (!isBoundedString(rawProfile.createdAt, 40)) {
      return { ok: false, reason: "profile.createdAt invalid" };
    }
    const placementCompleted = typeof rawProfile.placementCompleted === "boolean" ? rawProfile.placementCompleted : undefined;
    const placementScore = isFiniteNumber(rawProfile.placementScore) ? rawProfile.placementScore : undefined;
    const placementAnswers = isPlainObject(rawProfile.placementAnswers)
      ? (rawProfile.placementAnswers as Record<string, string>)
      : undefined;
    const outcomeBestScore = isFiniteNumber(rawProfile.outcomeBestScore) ? rawProfile.outcomeBestScore : undefined;
    const outcomeCompletedAt = isBoundedString(rawProfile.outcomeCompletedAt, 40)
      ? rawProfile.outcomeCompletedAt
      : undefined;
    if (placementScore !== undefined && (placementScore < 0 || placementScore > 12)) {
      return { ok: false, reason: "profile.placementScore out of range" };
    }
    if (outcomeBestScore !== undefined && (outcomeBestScore < 0 || outcomeBestScore > 12)) {
      return { ok: false, reason: "profile.outcomeBestScore out of range" };
    }

    profile = {
      nickname: rawProfile.nickname,
      ageBand: rawProfile.ageBand,
      career: rawProfile.career,
      level: rawProfile.level,
      guardianConfirmed: rawProfile.guardianConfirmed,
      locale: rawProfile.locale,
      onboardingComplete: rawProfile.onboardingComplete,
      placementCompleted,
      placementScore,
      placementAnswers,
      outcomeBestScore,
      outcomeCompletedAt,
      tutorialSeen: true,
      createdAt: rawProfile.createdAt,
    };
  }

  // —— progress
  const rawProgress = body.progress;
  if (!isPlainObject(rawProgress)) {
    return { ok: false, reason: "progress must be an object" };
  }
  if (!isPlainObject(rawProgress.modules)) {
    return { ok: false, reason: "progress.modules must be an object" };
  }
  const moduleEntries = Object.entries(rawProgress.modules);
  if (moduleEntries.length > MAX_MODULES) {
    return { ok: false, reason: "progress.modules too large" };
  }
  const modules: LearnProgress["modules"] = {};
  for (const [moduleId, rawModule] of moduleEntries) {
    if (!isBoundedString(moduleId, 50) || !isPlainObject(rawModule)) {
      return { ok: false, reason: `progress.modules[${moduleId}] invalid` };
    }
    if (typeof rawModule.completed !== "boolean" || !isFiniteNumber(rawModule.xp)) {
      return { ok: false, reason: `progress.modules[${moduleId}] invalid` };
    }
    if (!isFiniteNumber(rawModule.unitIndex) || !isFiniteNumber(rawModule.cardIndex)) {
      return { ok: false, reason: `progress.modules[${moduleId}] invalid` };
    }
    if (rawModule.xp < 0 || rawModule.xp > 1_000_000) {
      return { ok: false, reason: `progress.modules[${moduleId}].xp out of range` };
    }
    if (rawModule.unitIndex < 0 || rawModule.unitIndex > 10_000) {
      return { ok: false, reason: `progress.modules[${moduleId}].unitIndex out of range` };
    }
    if (rawModule.cardIndex < 0 || rawModule.cardIndex > 10_000) {
      return { ok: false, reason: `progress.modules[${moduleId}].cardIndex out of range` };
    }
    let failedUnitIds: string[] = [];
    if (rawModule.failedUnitIds !== undefined) {
      if (!isBoundedIdArray(rawModule.failedUnitIds, 100)) {
        return { ok: false, reason: `progress.modules[${moduleId}].failedUnitIds invalid` };
      }
      failedUnitIds = rawModule.failedUnitIds;
    }
    modules[moduleId] = {
      moduleId,
      completed: rawModule.completed,
      xp: rawModule.xp,
      unitIndex: rawModule.unitIndex,
      cardIndex: rawModule.cardIndex,
      failedUnitIds,
    };
  }
  if (!isFiniteNumber(rawProgress.totalXp) || rawProgress.totalXp < 0 || rawProgress.totalXp > 10_000_000) {
    return { ok: false, reason: "progress.totalXp out of range" };
  }
  let certificateIssuedAt: string | undefined;
  if (rawProgress.certificateIssuedAt !== undefined) {
    if (!isBoundedString(rawProgress.certificateIssuedAt, 40)) {
      return { ok: false, reason: "progress.certificateIssuedAt invalid" };
    }
    certificateIssuedAt = rawProgress.certificateIssuedAt;
  }
  const progress: LearnProgress = {
    modules,
    totalXp: rawProgress.totalXp,
    ...(certificateIssuedAt ? { certificateIssuedAt } : {}),
  };

  // —— quiz
  const rawQuiz = body.quiz;
  if (!isPlainObject(rawQuiz)) {
    return { ok: false, reason: "quiz must be an object" };
  }
  const validateVariantMap = (
    value: unknown,
    field: string
  ): Record<string, string[]> => {
    if (!isPlainObject(value)) {
      throw new Error(`${field} must be an object`);
    }
    const keys = Object.keys(value);
    if (keys.length > MAX_MAP_KEYS) {
      throw new Error(`${field} too large`);
    }
    const out: Record<string, string[]> = {};
    for (const key of keys) {
      const variants = value[key];
      if (
        !Array.isArray(variants) ||
        variants.length > MAX_VARIANTS_PER_KEY ||
        !variants.every((v) => v === "A" || v === "B" || v === "C" || v === "M-A" || v === "M-B" || v === "M-C")
      ) {
        throw new Error(`${field}[${key}] invalid`);
      }
      out[key] = variants;
    }
    return out;
  };
  let validatedQuiz: {
    unitVariantsUsed: Record<string, string[]>;
    moduleVariantsUsed: Record<string, string[]>;
  };
  try {
    validatedQuiz = {
      unitVariantsUsed: validateVariantMap(rawQuiz.unitVariantsUsed, "quiz.unitVariantsUsed"),
      moduleVariantsUsed: validateVariantMap(rawQuiz.moduleVariantsUsed, "quiz.moduleVariantsUsed"),
    };
  } catch (err) {
    return { ok: false, reason: err instanceof Error ? err.message : "quiz invalid" };
  }
  if (!isPlainObject(rawQuiz.unitFailCount) || Object.keys(rawQuiz.unitFailCount).length > MAX_MAP_KEYS) {
    return { ok: false, reason: "quiz.unitFailCount invalid" };
  }
  const unitFailCount: Record<string, number> = {};
  for (const [key, count] of Object.entries(rawQuiz.unitFailCount)) {
    if (!isBoundedString(key, 100) || !isFiniteNumber(count) || count < 0 || count > 1000) {
      return { ok: false, reason: "quiz.unitFailCount invalid" };
    }
    unitFailCount[key] = count;
  }
  if (!isBoundedIdArray(rawQuiz.flashXpUnitIds)) {
    return { ok: false, reason: "quiz.flashXpUnitIds invalid" };
  }
  const quiz: QuizProgressState = {
    unitVariantsUsed: validatedQuiz.unitVariantsUsed,
    moduleVariantsUsed: validatedQuiz.moduleVariantsUsed,
    unitFailCount,
    flashXpUnitIds: rawQuiz.flashXpUnitIds,
  };

  // —— remediation
  const rawRemediation = body.remediation;
  if (!isPlainObject(rawRemediation)) {
    return { ok: false, reason: "remediation must be an object" };
  }
  if (!isBoundedIdArray(rawRemediation.assignedUnitIds, 200)) {
    return { ok: false, reason: "remediation.assignedUnitIds invalid" };
  }
  if (rawRemediation.moduleId !== null && !isBoundedString(rawRemediation.moduleId, 50)) {
    return { ok: false, reason: "remediation.moduleId invalid" };
  }
  if (!isBoundedIdArray(rawRemediation.videoNotesUnitIds, 200)) {
    return { ok: false, reason: "remediation.videoNotesUnitIds invalid" };
  }

  return {
    ok: true,
    state: {
      version: LEARN_STATE_VERSION,
      profile,
      progress,
      quiz,
      remediation: {
        assignedUnitIds: rawRemediation.assignedUnitIds,
        moduleId: rawRemediation.moduleId,
        videoNotesUnitIds: rawRemediation.videoNotesUnitIds,
      },
    },
  };
}

function migrateAgeBandValue(raw: unknown): unknown {
  if (raw === "8-10" || raw === "11-13") return "kids";
  if (raw === "14-17") return "youth";
  return raw;
}

/** Guards state loaded back from our own storage bucket (legacy values tolerated). */
function sanitizeStoredCloudState(value: unknown): CloudLearnState {
  if (isPlainObject(value) && isPlainObject(value.profile) && value.profile.ageBand) {
    value.profile.ageBand = migrateAgeBandValue(value.profile.ageBand);
  }
  const result = parseCloudLearnState(value);
  if (!result.ok) {
    // Legacy career ids from retired data sets: migrate and retry once.
    if (
      isPlainObject(value) &&
      isPlainObject(value.profile) &&
      typeof value.profile.career === "string" &&
      result.reason === "profile.career invalid"
    ) {
      value.profile.career = migrateLegacyCareer(value.profile.career);
      const retry = parseCloudLearnState(value);
      if (retry.ok) return retry.state;
    }
    throw new Error(`Malformed stored learn state: ${result.reason}`);
  }
  return result.state;
}

export async function ensureProfileRow(user: User) {
  const admin = createAdminClient();
  const { error } = await admin.from("profiles").upsert({
    id: user.id,
    email: user.email,
    full_name: deriveLearnerName(user, "Learner"),
    updated_at: new Date().toISOString(),
  }, { onConflict: "id", ignoreDuplicates: true });
  if (error) {
    throw error instanceof Error ? error : new Error("Failed to ensure profile row");
  }
}
