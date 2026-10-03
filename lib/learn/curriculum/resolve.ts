import type { AgeBand, LearnLevel } from "@/lib/learn/types";
import { moduleCurricula } from "@/lib/learn/curriculum/modules";
import type { CurriculumUnit, ResolvedModule } from "@/lib/learn/curriculum/types";

function unitsForBand(
  mod: (typeof moduleCurricula)[number],
  level: LearnLevel,
  _ageBand: AgeBand
): CurriculumUnit[] {
  const track = mod.tracks[level] ?? mod.tracks.beginner;
  // The approved short course is four units for every learner at the placed level.
  return track.units;
}

export function getCurriculumModule(
  moduleId: string,
  ageBand: AgeBand,
  level: LearnLevel
): ResolvedModule | undefined {
  const mod = moduleCurricula.find((m) => m.id === moduleId);
  if (!mod) return undefined;

  const units = unitsForBand(mod, level, ageBand);

  return {
    id: mod.id,
    sdg: mod.sdg,
    xpReward: mod.xpReward,
    level,
    ageBand,
    units,
  };
}

export function countWordsInModule(resolved: ResolvedModule, locale: "en" | "sw"): number {
  let n = 0;
  for (const unit of resolved.units) {
    for (const card of unit.cards) {
      if (card.type === "note") {
        const text = locale === "sw" ? card.bodySw : card.bodyEn;
        n += text.split(/\s+/).filter(Boolean).length;
      }
      if (card.type === "quiz") {
        const text =
          locale === "sw"
            ? `${card.questionSw} ${card.optionsSw.join(" ")}`
            : `${card.questionEn} ${card.optionsEn.join(" ")}`;
        n += text.split(/\s+/).filter(Boolean).length;
      }
    }
  }
  return n;
}
