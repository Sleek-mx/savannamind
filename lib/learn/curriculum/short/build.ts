import type { CurriculumUnit, LessonCard } from "@/lib/learn/curriculum/types";
import type { LearnLevel } from "@/lib/learn/types";

export type UnitKind = "basics" | "specific" | "application" | "conclusion";

export const UNIT_KINDS: UnitKind[] = ["basics", "specific", "application", "conclusion"];

export const UNIT_LABEL: Record<UnitKind, { en: string; sw: string }> = {
  basics: { en: "Unit 1 The basics", sw: "Kitengo 1 Misingi" },
  specific: { en: "Unit 2 The specific notes", sw: "Kitengo 2 Maelezo mahususi" },
  application: { en: "Unit 3 Application", sw: "Kitengo 3 Matumizi" },
  conclusion: { en: "Unit 4 Conclusion", sw: "Kitengo 4 Hitimisho" },
};

const UNIT_TITLE: Record<UnitKind, { en: string; sw: string }> = {
  basics: { en: "The basics", sw: "Misingi" },
  specific: { en: "The specific notes", sw: "Maelezo mahususi" },
  application: { en: "Application", sw: "Matumizi" },
  conclusion: { en: "Conclusion", sw: "Hitimisho" },
};

export type CheckSpec = {
  t: string;
  qEn: string;
  qSw: string;
  optionsEn: [string, string, string, string];
  optionsSw: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
};

export type VideoSpec = {
  id: string;
  titleEn: string;
  titleSw: string;
  channel: string;
  checks: [CheckSpec, CheckSpec, CheckSpec];
};

export type UnitSpec = {
  notesEn: string[];
  notesSw: string[];
  video?: VideoSpec;
};

export type RestudySpec = {
  unit: UnitKind;
  videoTitle?: string;
  times?: string[];
  /** Replaces the default "notes only, no video" phrase when the miss is notes. */
  extra?: string;
};

export type QuizItemSpec = {
  qEn: string;
  qSw: string;
  optionsEn: [string, string, string, string];
  optionsSw: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  answerEn: string;
  answerSw: string;
  restudy: RestudySpec;
};

export type ModuleSpec = {
  titleEn: string;
  titleSw: string;
  descEn: string;
  descSw: string;
  units: [UnitSpec, UnitSpec, UnitSpec, UnitSpec];
  quiz: [QuizItemSpec, QuizItemSpec, QuizItemSpec, QuizItemSpec, QuizItemSpec];
};

export const SHORT_SLOTS = ["s1", "s2", "s3", "s4", "s5"] as const;
export type ShortSlot = (typeof SHORT_SLOTS)[number];

export const MODULE_PASS_COUNT = 4;

function levelLetter(level: LearnLevel): "b" | "i" | "a" {
  if (level === "beginner") return "b";
  if (level === "intermediate") return "i";
  return "a";
}

function bullets(lines: string[]): string {
  return lines.map((line) => `- ${line}`).join("\n");
}

export function buildTrackUnits(slot: ShortSlot, level: LearnLevel, spec: ModuleSpec): CurriculumUnit[] {
  const letter = levelLetter(level);
  return spec.units.map((unit, index) => {
    const kind = UNIT_KINDS[index];
    const title = UNIT_TITLE[kind];
    const cards: LessonCard[] = [
      {
        type: "note",
        titleEn: title.en,
        titleSw: title.sw,
        bodyEn: bullets(unit.notesEn),
        bodySw: bullets(unit.notesSw),
      },
    ];
    if (unit.video) {
      cards.push({
        type: "video",
        titleEn: unit.video.titleEn,
        titleSw: unit.video.titleSw,
        youtubeId: unit.video.id,
        captionEn: `${unit.video.channel}. The three questions stay locked until this player reaches the end.`,
        captionSw: `${unit.video.channel}. Maswali matatu yanasalia yamefungwa hadi kicheza kifikie mwisho.`,
        checks: unit.video.checks.map((check) => ({
          timestamp: check.t,
          questionEn: check.qEn,
          questionSw: check.qSw,
          optionsEn: [...check.optionsEn],
          optionsSw: [...check.optionsSw],
          correctIndex: check.correct,
        })),
      });
    }
    return {
      id: `${slot}-${letter}-u${index + 1}`,
      titleEn: title.en,
      titleSw: title.sw,
      cards,
    };
  });
}

export type ModuleGateItem = QuizItemSpec & { restudyEn: string; restudySw: string };

export function restudyLine(restudy: RestudySpec, itemNumber: number, locale: "en" | "sw"): string {
  const label = UNIT_LABEL[restudy.unit][locale];
  const missed =
    locale === "sw" ? `swali la mtihani lililokosewa ${itemNumber}` : `missed quiz item ${itemNumber}`;
  if (restudy.videoTitle && restudy.times && restudy.times.length > 0) {
    const from = restudy.times.join(locale === "sw" ? " na " : " and ");
    const extra = restudy.extra ? ` (${restudy.extra})` : "";
    const fromWord = locale === "sw" ? "kuanzia" : "from";
    return `${label} — ${restudy.videoTitle} ${fromWord} ${from}${extra} — ${missed}`;
  }
  const notes = restudy.extra ?? (locale === "sw" ? "maelegezo tu, hakuna video" : "notes only, no video");
  return `${label} — ${notes} — ${missed}`;
}

export function gateItems(spec: ModuleSpec): ModuleGateItem[] {
  return spec.quiz.map((item, index) => ({
    ...item,
    restudyEn: restudyLine(item.restudy, index + 1, "en"),
    restudySw: restudyLine(item.restudy, index + 1, "sw"),
  }));
}
