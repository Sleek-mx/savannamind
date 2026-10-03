import type { CareerId } from "./careers";

export type AgeBand = "kids" | "youth" | "adult";

export type LearnLevel = "beginner" | "intermediate" | "advanced";

export type { CareerId };

export type LearnProfile = {
  nickname: string;
  ageBand: AgeBand;
  career: CareerId;
  level: LearnLevel;
  guardianConfirmed: boolean;
  locale: "en" | "sw";
  onboardingComplete: boolean;
  placementCompleted?: boolean;
  /** Baseline: 12 scored pre-check items. Language, age, and career are not included. */
  placementScore?: number;
  placementAnswers?: Record<string, string>;
  /** Best end-of-course check on the same 12 skills. A module pass is not this score. */
  outcomeBestScore?: number;
  outcomeCompletedAt?: string;
  /** @deprecated Tutorial removed from product; kept for storage compat */
  tutorialSeen: boolean;
  createdAt: string;
};

export const STORAGE_KEY = "savannamind-learn-profile-v3";
export const LEGACY_STORAGE_KEYS = [
  "savannamind-learn-profile-v1",
  "savannamind-learn-profile-v2",
] as const;
