import type { LearnProgress } from "./progress";
import type { LearnProfile } from "./types";
import type { QuizProgressState } from "./quiz-progress";
import type { RemediationState } from "./remediation";

export const LEARN_STATE_VERSION = 1;

export type CloudLearnState = {
  version: number;
  profile: LearnProfile | null;
  progress: LearnProgress;
  quiz: QuizProgressState;
  remediation: RemediationState;
};

export function emptyCloudLearnState(): CloudLearnState {
  return {
    version: LEARN_STATE_VERSION,
    profile: null,
    progress: { modules: {}, totalXp: 0 },
    quiz: {
      unitVariantsUsed: {},
      moduleVariantsUsed: {},
      unitFailCount: {},
      flashXpUnitIds: [],
    },
    remediation: { assignedUnitIds: [], moduleId: null, videoNotesUnitIds: [] },
  };
}

export type ProfileMeta = {
  level: LearnProfile["level"];
  locale: LearnProfile["locale"];
  guardianConfirmed: boolean;
  onboardingComplete: boolean;
  placementCompleted?: boolean;
  placementScore?: number;
  placementAnswers?: Record<string, string>;
};

export function encodeProfileMeta(profile: LearnProfile): string {
  const meta: ProfileMeta = {
    level: profile.level,
    locale: profile.locale,
    guardianConfirmed: profile.guardianConfirmed,
    onboardingComplete: profile.onboardingComplete,
    placementCompleted: profile.placementCompleted,
    placementScore: profile.placementScore,
    placementAnswers: profile.placementAnswers,
  };
  return JSON.stringify(meta);
}

export function decodeProfileMeta(
  raw: string | null | undefined,
  fallbackLocale: "en" | "sw"
): Partial<ProfileMeta> {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as ProfileMeta;
    if (parsed && typeof parsed === "object") return parsed;
  } catch {
    if (raw === "beginner" || raw === "intermediate" || raw === "advanced") {
      return { level: raw };
    }
  }
  return { locale: fallbackLocale };
}
