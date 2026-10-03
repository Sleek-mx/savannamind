import type { LearnLevel } from "@/lib/learn/types";
import type { CurriculumUnit, ModuleCurriculum } from "@/lib/learn/curriculum/types";
import { advancedModules } from "@/lib/learn/curriculum/short/advanced";
import { advancedRest } from "@/lib/learn/curriculum/short/advanced-rest";
import { beginnerModules } from "@/lib/learn/curriculum/short/beginner";
import { intermediateModules } from "@/lib/learn/curriculum/short/intermediate";
import { intermediateRest } from "@/lib/learn/curriculum/short/intermediate-rest";
import { intermediateTail } from "@/lib/learn/curriculum/short/intermediate-tail";
import {
  MODULE_PASS_COUNT,
  SHORT_SLOTS,
  buildTrackUnits,
  gateItems,
  type ModuleGateItem,
  type ModuleSpec,
  type ShortSlot,
} from "@/lib/learn/curriculum/short/build";

const byLevel: Record<LearnLevel, ModuleSpec[]> = {
  beginner: beginnerModules,
  intermediate: [...intermediateModules, ...intermediateRest, ...intermediateTail],
  advanced: [...advancedModules, ...advancedRest],
};

function track(level: LearnLevel, slot: ShortSlot, spec: ModuleSpec) {
  return { level, units: buildTrackUnits(slot, level, spec) };
}

export const moduleCurricula: ModuleCurriculum[] = SHORT_SLOTS.map((slot, index) => ({
  id: slot,
  sdg: 4,
  xpReward: 80,
  tracks: {
    beginner: track("beginner", slot, byLevel.beginner[index]),
    intermediate: track("intermediate", slot, byLevel.intermediate[index]),
    advanced: track("advanced", slot, byLevel.advanced[index]),
  },
}));

export function shortModuleSpec(moduleId: string, level: LearnLevel): ModuleSpec | undefined {
  const index = SHORT_SLOTS.indexOf(moduleId as ShortSlot);
  if (index < 0) return undefined;
  return byLevel[level]?.[index];
}

export function getModuleGate(
  moduleId: string,
  level: LearnLevel
): { passCount: number; items: ModuleGateItem[]; titleEn: string; titleSw: string } | undefined {
  const spec = shortModuleSpec(moduleId, level);
  if (!spec) return undefined;
  return {
    passCount: MODULE_PASS_COUNT,
    items: gateItems(spec),
    titleEn: spec.titleEn,
    titleSw: spec.titleSw,
  };
}

export function unitIndexForRestudy(unit: ModuleGateItem["restudy"]["unit"]): number {
  if (unit === "basics") return 0;
  if (unit === "specific") return 1;
  if (unit === "application") return 2;
  return 3;
}

export type { CurriculumUnit };
