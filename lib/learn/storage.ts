import { clearProgress } from "./progress";
import { clearRemediation } from "./remediation";
import { clearQuizProgress } from "./quiz-progress";
import { migrateLegacyCareer, isCareerId } from "./careers";
import type { AgeBand, LearnProfile } from "./types";
import { LEGACY_STORAGE_KEYS, STORAGE_KEY } from "./types";

function migrateAgeBand(raw: string): AgeBand {
  if (raw === "kids" || raw === "youth" || raw === "adult") return raw;
  if (raw === "8-10" || raw === "11-13") return "kids";
  if (raw === "14-17") return "youth";
  return "adult";
}

function normalizeProfile(parsed: LearnProfile): LearnProfile {
  return {
    ...parsed,
    ageBand: migrateAgeBand(parsed.ageBand),
    career: isCareerId(parsed.career) ? parsed.career : migrateLegacyCareer(String(parsed.career)),
    tutorialSeen: true,
  };
}

export function loadProfile(): LearnProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return normalizeProfile(JSON.parse(raw) as LearnProfile);

    for (const legacyKey of LEGACY_STORAGE_KEYS) {
      const legacyRaw = localStorage.getItem(legacyKey);
      if (!legacyRaw) continue;
      const migrated = normalizeProfile(JSON.parse(legacyRaw) as LearnProfile);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    }
    return null;
  } catch {
    return null;
  }
}

export function saveProfile(profile: LearnProfile) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export function clearProfile() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  for (const legacyKey of LEGACY_STORAGE_KEYS) {
    localStorage.removeItem(legacyKey);
  }
}

export function resetLearnProgress() {
  if (typeof window === "undefined") return;
  clearProgress();
  clearQuizProgress();
  clearRemediation();
}

// —— Onboarding draft (session-scoped so a locale switch resumes where you were)
const DRAFT_KEY = "savannamind-learn-onboarding-draft";

export type OnboardingDraft = {
  step: string;
  ageBand?: string;
  career?: string;
  level?: string;
  nickname?: string;
  guardianConfirmed?: boolean;
};

export function saveOnboardingDraft(draft: OnboardingDraft) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  } catch {
    /* storage unavailable — resume silently skipped */
  }
}

export function loadOnboardingDraft(): OnboardingDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    return raw ? (JSON.parse(raw) as OnboardingDraft) : null;
  } catch {
    return null;
  }
}

export function clearOnboardingDraft() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(DRAFT_KEY);
  } catch {
    /* noop */
  }
}

// —— Kibo tutor history (local-only, clearable)
export type TutorMessage = { role: "user" | "assistant"; text: string; at: string };
const TUTOR_HISTORY_KEY = "savannamind-learn-tutor-history-v1";
const TUTOR_HISTORY_LIMIT = 40;

export function loadTutorHistory(): TutorMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(TUTOR_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as TutorMessage[];
    return Array.isArray(parsed) ? parsed.slice(-TUTOR_HISTORY_LIMIT) : [];
  } catch {
    return [];
  }
}

export function saveTutorMessages(messages: TutorMessage[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      TUTOR_HISTORY_KEY,
      JSON.stringify(messages.slice(-TUTOR_HISTORY_LIMIT))
    );
  } catch {
    /* storage full or unavailable — history simply not persisted */
  }
}

export function clearTutorHistory() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(TUTOR_HISTORY_KEY);
  } catch {
    /* noop */
  }
}
