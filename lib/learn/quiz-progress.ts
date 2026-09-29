import { scheduleCloudSync } from "./cloud-sync";

const KEY = "savannamind-learn-quiz-state-v1";

export type QuizProgressState = {
  unitVariantsUsed: Record<string, string[]>;
  moduleVariantsUsed: Record<string, string[]>;
  unitFailCount: Record<string, number>;
  /** Units that already received flashcard-reach XP (10) */
  flashXpUnitIds: string[];
};

function empty(): QuizProgressState {
  return { unitVariantsUsed: {}, moduleVariantsUsed: {}, unitFailCount: {}, flashXpUnitIds: [] };
}

export function loadQuizProgress(): QuizProgressState {
  if (typeof window === "undefined") return empty();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as Partial<QuizProgressState>;
    return {
      unitVariantsUsed: parsed.unitVariantsUsed ?? {},
      moduleVariantsUsed: parsed.moduleVariantsUsed ?? {},
      unitFailCount: parsed.unitFailCount ?? {},
      flashXpUnitIds: parsed.flashXpUnitIds ?? [],
    };
  } catch {
    return empty();
  }
}

export function saveQuizProgress(state: QuizProgressState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(state));
  scheduleCloudSync();
}

export function recordUnitVariantUsed(unitId: string, variant: string) {
  const s = loadQuizProgress();
  const prev = s.unitVariantsUsed[unitId] ?? [];
  if (!prev.includes(variant)) {
    s.unitVariantsUsed[unitId] = [...prev, variant];
    saveQuizProgress(s);
  }
}

export function recordModuleVariantUsed(examKey: string, variant: string) {
  const s = loadQuizProgress();
  const prev = s.moduleVariantsUsed[examKey] ?? [];
  if (!prev.includes(variant)) {
    s.moduleVariantsUsed[examKey] = [...prev, variant];
    saveQuizProgress(s);
  }
}

export function bumpUnitFail(unitId: string): number {
  const s = loadQuizProgress();
  const n = (s.unitFailCount[unitId] ?? 0) + 1;
  s.unitFailCount[unitId] = n;
  saveQuizProgress(s);
  return n;
}

export function clearQuizProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}

export function markFlashXpAwarded(unitId: string): boolean {
  const s = loadQuizProgress();
  if (s.flashXpUnitIds.includes(unitId)) return false;
  s.flashXpUnitIds = [...s.flashXpUnitIds, unitId];
  saveQuizProgress(s);
  return true;
}
