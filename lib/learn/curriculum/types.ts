import type { AgeBand, LearnLevel } from "@/lib/learn/types";

export type LessonCard =
  | {
      type: "note";
      titleEn: string;
      titleSw: string;
      bodyEn: string;
      bodySw: string;
      image?: string;
    }
  | {
      type: "video";
      titleEn: string;
      titleSw: string;
      youtubeId: string;
      captionEn?: string;
      captionSw?: string;
    }
  | {
      type: "quiz";
      /** Optional heading override (e.g. scenario practice titles). */
      titleEn?: string;
      titleSw?: string;
      questionEn: string;
      questionSw: string;
      optionsEn: string[];
      optionsSw: string[];
      correctIndex: number;
      explainEn?: string;
      explainSw?: string;
      /** Optional scenario framing shown before the question (situation-based practice). */
      situationEn?: string;
      situationSw?: string;
      /** Per-option remediation aligned to optionsEn/optionsSw; shown when that option is picked. */
      hintsEn?: string[];
      hintsSw?: string[];
    }
  | {
      type: "reveal";
      /** Tap-to-flip definition cards */
      items: { termEn: string; termSw: string; defEn: string; defSw: string }[];
    }
  | {
      type: "prompt-builder";
      titleEn: string;
      titleSw: string;
      introEn: string;
      introSw: string;
      /** What the learner must achieve with the assembled prompt. */
      goalEn: string;
      goalSw: string;
      /** Building blocks the learner taps to assemble a prompt, in the ideal order. */
      blocksEn: string[];
      blocksSw: string[];
      /** Indexes (into blocksEn) that must be present for the prompt to pass. */
      required: number[];
      /** Model answer shown after success. */
      sampleEn: string;
      sampleSw: string;
    };

export type CurriculumUnit = {
  id: string;
  titleEn: string;
  titleSw: string;
  cards: LessonCard[];
};

/** Pick one LessonCard variant by its `type` discriminant. */
export type ExtractCard<T extends LessonCard["type"]> = Extract<LessonCard, { type: T }>;

/** Full track for one module at one difficulty level (target ≥3,000 words EN per track). */
export type ModuleLevelTrack = {
  level: LearnLevel;
  units: CurriculumUnit[];
};

export type ModuleCurriculum = {
  id: string;
  sdg: number;
  xpReward: number;
  tracks: Record<LearnLevel, ModuleLevelTrack>;
};

/** Resolved for a specific learner — subset of units by age band. */
export type ResolvedModule = {
  id: string;
  sdg: number;
  xpReward: number;
  level: LearnLevel;
  ageBand: AgeBand;
  units: CurriculumUnit[];
};

export function unitCountForAge(age: AgeBand): number {
  switch (age) {
    case "kids":
      return 9;
    case "youth":
      return 12;
    case "adult":
      return 18;
    default:
      return 12;
  }
}
