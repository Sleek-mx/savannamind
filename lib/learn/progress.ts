import { scheduleCloudSync } from "./cloud-sync";

export const PROGRESS_KEY = "savannamind-learn-progress-v2";

export type ModuleProgress = {
  moduleId: string;
  completed: boolean;
  xp: number;
  unitIndex: number;
  cardIndex: number;
  /** Units flagged after module exam miss (sidebar highlight) */
  failedUnitIds?: string[];
};

export type LearnProgress = {
  modules: Record<string, ModuleProgress>;
  totalXp: number;
  certificateIssuedAt?: string;
};

const MODULE_IDS = ["s1", "s2", "s3", "s4", "s5"];

export function loadProgress(): LearnProgress {
  if (typeof window === "undefined") {
    return { modules: {}, totalXp: 0 };
  }
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) {
      const legacy = localStorage.getItem("savannamind-learn-progress-v1");
      if (legacy) {
        const old = JSON.parse(legacy) as LearnProgress;
        const migrated: LearnProgress = { modules: {}, totalXp: old.totalXp, certificateIssuedAt: old.certificateIssuedAt };
        for (const [id, m] of Object.entries(old.modules ?? {})) {
          migrated.modules[id] = {
            moduleId: id,
            completed: m.completed,
            xp: m.xp,
            unitIndex: 0,
            cardIndex: 0,
          };
        }
        saveProgress(migrated);
        return migrated;
      }
      return { modules: {}, totalXp: 0 };
    }
    return JSON.parse(raw) as LearnProgress;
  } catch {
    return { modules: {}, totalXp: 0 };
  }
}

export function saveProgress(p: LearnProgress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  scheduleCloudSync();
}

export function getModuleProgress(progress: LearnProgress, moduleId: string): ModuleProgress {
  return (
    progress.modules[moduleId] ?? {
      moduleId,
      completed: false,
      xp: 0,
      unitIndex: 0,
      cardIndex: 0,
    }
  );
}

export function saveLessonPosition(
  moduleId: string,
  unitIndex: number,
  cardIndex: number,
  partialXp = 0
) {
  const p = loadProgress();
  const prev = getModuleProgress(p, moduleId);
  if (prev.completed) return p;
  p.modules[moduleId] = {
    ...prev,
    unitIndex,
    cardIndex,
    xp: prev.xp + partialXp,
  };
  p.totalXp = Object.values(p.modules).reduce((s, m) => s + m.xp, 0);
  saveProgress(p);
  return p;
}

/** Spec §8 — ~25 XP per unit (10 cards + 15 quiz); require 85% before module counts complete. */
export function moduleXpThreshold(unitCount: number): number {
  const perUnit = 25;
  return Math.ceil(unitCount * perUnit * 0.85);
}

export function canCompleteModule(moduleId: string, unitCount: number, progress: LearnProgress): boolean {
  const mp = getModuleProgress(progress, moduleId);
  return mp.xp >= moduleXpThreshold(unitCount);
}

export function setModuleFailedUnits(moduleId: string, unitIds: string[]) {
  const p = loadProgress();
  const prev = getModuleProgress(p, moduleId);
  p.modules[moduleId] = { ...prev, failedUnitIds: [...new Set(unitIds)] };
  saveProgress(p);
  return p;
}

export function markModuleComplete(
  moduleId: string,
  xpEarned: number,
  unitCount = 4,
  opts?: { quizPassed?: boolean }
) {
  const p = loadProgress();
  const prev = getModuleProgress(p, moduleId);
  // Idempotent: replays and re-completions never mint extra XP.
  if (prev.completed) return p;
  const projectedXp = prev.xp + xpEarned;
  if (!opts?.quizPassed && projectedXp < moduleXpThreshold(unitCount)) {
    p.modules[moduleId] = {
      ...prev,
      xp: projectedXp,
      failedUnitIds: [],
    };
    p.totalXp = Object.values(p.modules).reduce((s, m) => s + m.xp, 0);
    saveProgress(p);
    return p;
  }
  p.modules[moduleId] = {
    moduleId,
    completed: true,
    xp: projectedXp,
    unitIndex: 0,
    cardIndex: 0,
    failedUnitIds: [],
  };
  p.totalXp = Object.values(p.modules).reduce((s, m) => s + m.xp, 0);
  const allDone = MODULE_IDS.every((id) => p.modules[id]?.completed);
  if (allDone && !p.certificateIssuedAt) {
    p.certificateIssuedAt = new Date().toISOString();
  }
  saveProgress(p);
  return p;
}

export function isModuleUnlocked(
  moduleId: string,
  order: string[],
  progress: LearnProgress
): boolean {
  const idx = order.indexOf(moduleId);
  if (idx <= 0) return true;
  const prevId = order[idx - 1];
  return progress.modules[prevId]?.completed === true;
}

export function moduleProgressPercent(
  moduleId: string,
  totalUnits: number,
  progress: LearnProgress
): number {
  const m = progress.modules[moduleId];
  if (!m) return 0;
  if (m.completed) return 100;
  if (totalUnits <= 0) return 0;
  return Math.min(99, Math.round(((m.unitIndex + 0.5) / totalUnits) * 100));
}

export function completionPercent(order: string[], progress: LearnProgress) {
  const done = order.filter((id) => progress.modules[id]?.completed).length;
  return Math.round((done / order.length) * 100);
}

export function firstIncompleteModule(order: string[], progress: LearnProgress) {
  return order.find((id) => !progress.modules[id]?.completed) ?? order[0];
}

export function clearProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(PROGRESS_KEY);
  localStorage.removeItem("savannamind-learn-progress-v1");
}

/** Spec §8 — pass unit timed quiz */
export function awardUnitQuizXp(moduleId: string, amount = 15) {
  const p = loadProgress();
  const prev = getModuleProgress(p, moduleId);
  if (prev.completed) return p;
  p.modules[moduleId] = {
    ...prev,
    xp: prev.xp + amount,
  };
  p.totalXp = Object.values(p.modules).reduce((s, m) => s + m.xp, 0);
  saveProgress(p);
  return p;
}

/** Spec §8 — reach end of unit flashcards */
export function awardFlashcardReachXp(moduleId: string, amount = 10) {
  return awardUnitQuizXp(moduleId, amount);
}
