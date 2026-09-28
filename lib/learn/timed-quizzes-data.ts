import type { LearnLevel } from "./types";

export type QuizVariantId = "A" | "B" | "C";
export type ModuleVariantId = "M-A" | "M-B" | "M-C";

export type TimedYesNoQ = {
  id: string;
  type: "yes_no";
  question: string;
  correctAnswer: "yes" | "no";
  sourceUnitId?: string;
};

export type TimedSelectAllQ = {
  id: string;
  type: "select_all_that_apply";
  question: string;
  options: string[];
  correctIndices: number[];
  sourceUnitId?: string;
};

export type TimedArrangeQ = {
  id: string;
  type: "arrange_ascending";
  question: string;
  items: string[];
  correctSequence: string[];
  sourceUnitId?: string;
};

export type TimedQuestion = TimedYesNoQ | TimedSelectAllQ | TimedArrangeQ;

export type UnitQuizBank = {
  unitId: string;
  titleEn: string;
  passMarkPercent: number;
  timeLimitMinutes: number;
  questionCount: number;
  variants: Record<QuizVariantId, TimedQuestion[]>;
};

export type ModuleExamBank = {
  moduleId: string;
  level: LearnLevel;
  passMarkPercent: number;
  timeLimitMinutes: number;
  questionCount: number;
  variants: Record<ModuleVariantId, TimedQuestion[]>;
};

type BankFile = {
  passMarkPercent: number;
  unitQuizzes: Record<string, UnitQuizBank>;
  moduleExams: Record<string, ModuleExamBank>;
};

let data: BankFile | null = null;
let loadPromise: Promise<BankFile> | null = null;

/** Load ~1MB quiz bank at runtime (keeps lesson route JS bundle smaller). */
export function ensureTimedQuizzesLoaded(): Promise<BankFile> {
  if (data) return Promise.resolve(data);
  if (!loadPromise) {
    loadPromise = fetch("/learn/timed-quizzes.json")
      .then((r) => {
        if (!r.ok) throw new Error(`timed-quizzes.json ${r.status}`);
        return r.json() as Promise<BankFile>;
      })
      .then((json) => {
        data = json;
        return json;
      });
  }
  return loadPromise;
}

export function timedQuizzesReady(): boolean {
  return data !== null;
}

export function getUnitQuizBank(unitId: string): UnitQuizBank | undefined {
  return data?.unitQuizzes[unitId];
}

export function moduleExamKey(moduleId: string, level: LearnLevel): string {
  return `${moduleId}|${level}`;
}

export function getModuleExamBank(moduleId: string, level: LearnLevel): ModuleExamBank | undefined {
  return data?.moduleExams[moduleExamKey(moduleId, level)];
}

export function defaultPassPercent(): number {
  return data?.passMarkPercent ?? 80;
}

const UNIT_VARIANTS: QuizVariantId[] = ["A", "B", "C"];
const MODULE_VARIANTS: ModuleVariantId[] = ["M-A", "M-B", "M-C"];

export function pickUnitVariantWithHistory(used: string[]): QuizVariantId {
  if (used.length === 0) return "A";
  const unused = UNIT_VARIANTS.filter((v) => !used.includes(v));
  if (unused.length > 0) return unused[0];
  return (used[0] as QuizVariantId) ?? "A";
}

export function pickModuleVariantWithHistory(used: string[]): ModuleVariantId {
  if (used.length === 0) return "M-A";
  const unused = MODULE_VARIANTS.filter((v) => !used.includes(v));
  if (unused.length > 0) return unused[0];
  return (used[0] as ModuleVariantId) ?? "M-A";
}
