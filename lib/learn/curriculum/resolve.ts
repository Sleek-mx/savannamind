import type { AgeBand, LearnLevel } from "@/lib/learn/types";
import { moduleCurricula } from "@/lib/learn/curriculum/modules";
import type { CurriculumUnit, ResolvedModule } from "@/lib/learn/curriculum/types";

function nextLevelForAdultExtension(level: LearnLevel): LearnLevel {
  if (level === "beginner") return "intermediate";
  if (level === "intermediate") return "advanced";
  return "intermediate";
}

function unitsForBand(
  mod: (typeof moduleCurricula)[number],
  level: LearnLevel,
  ageBand: AgeBand
): CurriculumUnit[] {
  const track = mod.tracks[level] ?? mod.tracks.beginner;

  if (ageBand === "kids") {
    return track.units.slice(0, Math.min(9, track.units.length));
  }
  if (ageBand === "youth") {
    return track.units.slice(0, Math.min(12, track.units.length));
  }

  const primary = track.units.slice(0, Math.min(12, track.units.length));
  const extensionLevel = nextLevelForAdultExtension(level);
  const extensionTrack = mod.tracks[extensionLevel] ?? mod.tracks.intermediate;
  const extension = extensionTrack.units.slice(0, 6);
  return [...primary, ...extension];
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
