import { loadProgress, type LearnProgress } from "./progress";
import { loadQuizProgress, type QuizProgressState } from "./quiz-progress";
import { loadRemediation, type RemediationState } from "./remediation";
import { loadProfile, saveProfile, clearOnboardingDraft } from "./storage";
import { STORAGE_KEY, LEGACY_STORAGE_KEYS } from "./types";
import type { CloudLearnState } from "./cloud-state";
import { emptyCloudLearnState } from "./cloud-state";
import { PROGRESS_KEY } from "./progress";
import { createClient } from "@/lib/supabase/client";

const QUIZ_KEY = "savannamind-learn-quiz-state-v1";
const REMEDIATION_KEY = "savannamind-learn-remediation-v1";
/** Records which account the current local learn state belongs to. */
const OWNER_KEY = "savannamind-learn-cloud-owner-v1";

let syncTimer: ReturnType<typeof setTimeout> | null = null;
let cloudHydrated = false;

export function isCloudHydrated() {
  return cloudHydrated;
}

export function markCloudHydrated() {
  cloudHydrated = true;
}

/** Cancels any pending debounced push (used on account switch). */
function cancelPendingSync() {
  if (syncTimer) {
    clearTimeout(syncTimer);
    syncTimer = null;
  }
}

/** Removes every learn-state localStorage key belonging to the previous account. */
function clearLocalLearnState() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    for (const legacyKey of LEGACY_STORAGE_KEYS) {
      window.localStorage.removeItem(legacyKey);
    }
    window.localStorage.removeItem(PROGRESS_KEY);
    window.localStorage.removeItem("savannamind-learn-progress-v1");
    window.localStorage.removeItem(QUIZ_KEY);
    window.localStorage.removeItem(REMEDIATION_KEY);
    clearOnboardingDraft();
  } catch {
    /* storage unavailable — nothing to wipe */
  }
}

function readStoredOwner(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(OWNER_KEY);
  } catch {
    return null;
  }
}

function writeStoredOwner(ownerId: string | null) {
  if (typeof window === "undefined") return;
  try {
    if (ownerId) {
      window.localStorage.setItem(OWNER_KEY, ownerId);
    } else {
      window.localStorage.removeItem(OWNER_KEY);
    }
  } catch {
    /* storage unavailable */
  }
}

export function buildLocalCloudState(): CloudLearnState {
  return {
    version: 1,
    profile: loadProfile(),
    progress: loadProgress(),
    quiz: loadQuizProgress(),
    remediation: loadRemediation(),
  };
}

export function applyCloudState(state: CloudLearnState) {
  if (typeof window === "undefined") return;
  if (state.profile) {
    saveProfile(state.profile);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(state.progress));
  localStorage.setItem(QUIZ_KEY, JSON.stringify(state.quiz));
  localStorage.setItem(REMEDIATION_KEY, JSON.stringify(state.remediation));
}

export type FetchedCloudState = {
  state: CloudLearnState;
  ownerId: string | null;
};

export async function fetchCloudState(): Promise<FetchedCloudState | null> {
  const res = await fetch("/api/learn/state", { credentials: "include" });
  if (res.status === 401) return null;
  if (!res.ok) {
    throw new Error("Failed to load learn state");
  }
  const data = (await res.json()) as CloudLearnState;
  const ownerId = res.headers.get("x-learn-user-id");
  return {
    state: data ?? emptyCloudLearnState(),
    ownerId: ownerId && ownerId.length > 0 ? ownerId : null,
  };
}

export async function pushCloudState(state: CloudLearnState) {
  const res = await fetch("/api/learn/state", {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state),
  });
  if (res.status === 401) return;
  if (!res.ok) {
    throw new Error("Failed to save learn state");
  }
}

export function scheduleCloudSync() {
  if (typeof window === "undefined") return;
  if (!cloudHydrated) return;
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    void pushCloudState(buildLocalCloudState()).catch(() => {
      /* network blip — local data remains source until next save */
    });
  }, 800);
}

export function mergeCloudWithLocal(
  remote: CloudLearnState,
  local: CloudLearnState
): CloudLearnState {
  const remoteHasProfile = remote.profile?.onboardingComplete;
  const localHasProfile = local.profile?.onboardingComplete;
  if (localHasProfile && !remoteHasProfile) return local;
  if (remoteHasProfile && !localHasProfile) return remote;
  const remoteXp = remote.progress?.totalXp ?? 0;
  const localXp = local.progress?.totalXp ?? 0;
  const chosen = remoteXp >= localXp ? remote : local;
  const other = chosen === remote ? local : remote;
  return mergeScoreFields(chosen, other);
}

function mergeScoreFields(chosen: CloudLearnState, other: CloudLearnState): CloudLearnState {
  const primary = chosen.profile;
  const secondary = other.profile;
  if (!primary || !secondary) return chosen;
  const placementScore = primary.placementScore ?? secondary.placementScore;
  const placementCompleted = Boolean(primary.placementCompleted || secondary.placementCompleted);
  const bestPrimary = primary.outcomeBestScore;
  const bestSecondary = secondary.outcomeBestScore;
  let outcomeBestScore = bestPrimary;
  let outcomeCompletedAt = primary.outcomeCompletedAt;
  if (typeof bestSecondary === "number" && (typeof bestPrimary !== "number" || bestSecondary > bestPrimary)) {
    outcomeBestScore = bestSecondary;
    outcomeCompletedAt = secondary.outcomeCompletedAt ?? outcomeCompletedAt;
  }
  return {
    ...chosen,
    profile: {
      ...primary,
      placementCompleted: placementCompleted || primary.placementCompleted,
      placementScore,
      placementAnswers: primary.placementAnswers ?? secondary.placementAnswers,
      outcomeBestScore,
      outcomeCompletedAt,
    },
  };
}

export async function hydrateLearnStateFromCloud(): Promise<CloudLearnState> {
  cloudHydrated = false;
  cancelPendingSync();
  const storedOwner = readStoredOwner();
  const { data: { session } } = await createClient().auth.getSession();
  const sessionOwner = session?.user?.id ?? null;
  if (sessionOwner && storedOwner !== sessionOwner) {
    // Unowned legacy cache must not silently become another account's data.
    clearLocalLearnState();
    writeStoredOwner(sessionOwner);
  }

  const fetched = await fetchCloudState();

  if (!fetched) {
    // 401 — not signed in; local cache stays as-is and is never pushed.
    return buildLocalCloudState();
  }

  const { state: remote, ownerId } = fetched;
  if (!ownerId) throw new Error("Learn state owner missing from response");
  if (readStoredOwner() !== ownerId) {
    // The authenticated server identity is authoritative if a session changed.
    clearLocalLearnState();
    writeStoredOwner(ownerId);
    applyCloudState(remote);
    markCloudHydrated();
    return remote;
  }

  const local = buildLocalCloudState();
  const merged = mergeCloudWithLocal(remote, local);
  applyCloudState(merged);
  if (merged !== remote && (local.profile || local.progress.totalXp > 0)) {
    await pushCloudState(merged);
  }
  markCloudHydrated();
  return merged;
}
