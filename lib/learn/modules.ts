import type { CareerId, LearnLevel } from "./types";
import { SHORT_SLOTS, type ShortSlot } from "@/lib/learn/curriculum/short/build";
import { shortModuleSpec } from "@/lib/learn/curriculum/modules";

export type ModuleCard = {
  id: string;
  /** Used for ordering / analytics only — not shown in UI */
  sdg: number;
  titleEn: string;
  titleSw: string;
  descEn: string;
  descSw: string;
  image: string;
  accent: string;
  pinColor: string;
};

const SLOT_STYLE: Record<ShortSlot, { image: string; accent: string; pinColor: string }> = {
  s1: {
    image: "/learn/learn-module-placeholder-education.png",
    accent: "#26A9AB",
    pinColor: "#F5A962",
  },
  s2: {
    image: "/learn/learn-module-placeholder-agri.png",
    accent: "#FAAB36",
    pinColor: "#8BA4D9",
  },
  s3: {
    image: "/learn/learn-module-placeholder-health.png",
    accent: "#0B5F62",
    pinColor: "#B8A9E8",
  },
  s4: {
    image: "/learn/learn-module-placeholder-enterprise.png",
    accent: "#0284C7",
    pinColor: "#8BA4D9",
  },
  s5: {
    image: "/learn/hero-section.png",
    accent: "#FAAB36",
    pinColor: "#B8A9E8",
  },
};

export const SHORT_MODULE_ORDER = [...SHORT_SLOTS];

export function modulesForLevel(level: LearnLevel): ModuleCard[] {
  return SHORT_SLOTS.map((id) => {
    const spec = shortModuleSpec(id, level);
    const style = SLOT_STYLE[id];
    return {
      id,
      sdg: 4,
      titleEn: spec?.titleEn ?? id,
      titleSw: spec?.titleSw ?? id,
      descEn: spec?.descEn ?? "",
      descSw: spec?.descSw ?? "",
      image: style.image,
      accent: style.accent,
      pinColor: style.pinColor,
    };
  });
}

/** Beginner titles. Lesson chrome that does not know the level yet can fall back here. */
export const previewModules: ModuleCard[] = modulesForLevel("beginner");

export function modulesForProfile(_career: CareerId, level: LearnLevel) {
  return modulesForLevel(level);
}

export function moduleCard(moduleId: string, level: LearnLevel): ModuleCard | undefined {
  return modulesForLevel(level).find((card) => card.id === moduleId);
}
