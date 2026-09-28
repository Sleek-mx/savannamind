import type { LessonCard } from "./types";

export function note(
  titleEn: string,
  titleSw: string,
  bodyEn: string,
  bodySw: string,
  image?: string
): LessonCard {
  return { type: "note", titleEn, titleSw, bodyEn, bodySw, image };
}

export function quiz(
  questionEn: string,
  questionSw: string,
  optionsEn: string[],
  optionsSw: string[],
  correctIndex: number,
  explainEn?: string,
  explainSw?: string
): LessonCard {
  return {
    type: "quiz",
    questionEn,
    questionSw,
    optionsEn,
    optionsSw,
    correctIndex,
    explainEn,
    explainSw,
  };
}

/** Scenario quiz: situation framing + per-option remediation hints. */
export function scenario(opts: {
  titleEn: string;
  titleSw: string;
  situationEn: string;
  situationSw: string;
  questionEn: string;
  questionSw: string;
  optionsEn: string[];
  optionsSw: string[];
  correctIndex: number;
  hintsEn: string[];
  hintsSw: string[];
  explainEn?: string;
  explainSw?: string;
}): LessonCard {
  return {
    type: "quiz",
    titleEn: opts.titleEn,
    titleSw: opts.titleSw,
    situationEn: opts.situationEn,
    situationSw: opts.situationSw,
    questionEn: opts.questionEn,
    questionSw: opts.questionSw,
    optionsEn: opts.optionsEn,
    optionsSw: opts.optionsSw,
    correctIndex: opts.correctIndex,
    hintsEn: opts.hintsEn,
    hintsSw: opts.hintsSw,
    explainEn: opts.explainEn,
    explainSw: opts.explainSw,
  };
}

/** Prompt-builder exercise: assemble a strong prompt from blocks. */
export function pb(opts: {
  titleEn: string;
  titleSw: string;
  introEn: string;
  introSw: string;
  goalEn: string;
  goalSw: string;
  blocksEn: string[];
  blocksSw: string[];
  required: number[];
  sampleEn: string;
  sampleSw: string;
}): LessonCard {
  return {
    type: "prompt-builder",
    titleEn: opts.titleEn,
    titleSw: opts.titleSw,
    introEn: opts.introEn,
    introSw: opts.introSw,
    goalEn: opts.goalEn,
    goalSw: opts.goalSw,
    blocksEn: opts.blocksEn,
    blocksSw: opts.blocksSw,
    required: opts.required,
    sampleEn: opts.sampleEn,
    sampleSw: opts.sampleSw,
  };
}

export function reveal(
  items: { termEn: string; termSw: string; defEn: string; defSw: string }[]
): LessonCard {
  return { type: "reveal", items };
}

export function video(
  titleEn: string,
  titleSw: string,
  youtubeId: string,
  captionEn?: string,
  captionSw?: string
): LessonCard {
  return { type: "video", titleEn, titleSw, youtubeId, captionEn, captionSw };
}
