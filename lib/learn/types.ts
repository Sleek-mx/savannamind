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
  /** @deprecated Tutorial removed from product; kept for storage compat */
  tutorialSeen: boolean;
  createdAt: string;
};

export const STORAGE_KEY = "savannamind-learn-profile-v3";
export const LEGACY_STORAGE_KEYS = [
  "savannamind-learn-profile-v1",
  "savannamind-learn-profile-v2",
] as const;
