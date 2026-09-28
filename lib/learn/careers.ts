import careersData from "@/lib/learn/learn-careers.json";

export type AudienceBand = "kids" | "youth" | "adult";

export type CareerRecord = {
  id: string;
  modulePriority: string;
  labels: { kids: string; youth: string; adult: string };
};

export type CareersFile = {
  version: number;
  onboardingCopy: Record<AudienceBand, { careerPrompt: string }>;
  careers: CareerRecord[];
};

const data = careersData as CareersFile;

export const learnCareers = data.careers;

export type CareerId = (typeof learnCareers)[number]["id"];

const careerSet = new Set(learnCareers.map((c) => c.id));

export function isCareerId(id: string): id is CareerId {
  return careerSet.has(id);
}

export function careerById(id: CareerId): CareerRecord {
  const found = learnCareers.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown career: ${id}`);
  return found;
}

export function audienceBandForAge(ageBand: import("./types").AgeBand): AudienceBand {
  if (ageBand === "kids") return "kids";
  if (ageBand === "youth") return "youth";
  return "adult";
}

export function careerOptionsForBand(
  ageBand: import("./types").AgeBand,
  locale: "en" | "sw"
): { id: CareerId; label: string }[] {
  const band = audienceBandForAge(ageBand);
  return learnCareers.map((c) => ({
    id: c.id as CareerId,
    label: c.labels[band],
  }));
}

export function careerPromptForBand(ageBand: import("./types").AgeBand, locale: "en" | "sw"): string {
  const band = audienceBandForAge(ageBand);
  const prompt = data.onboardingCopy[band]?.careerPrompt ?? data.onboardingCopy.adult.careerPrompt;
  if (locale === "sw") {
    if (band === "kids") return "Kazi unayoitamani baadaye ni ipi?";
    if (band === "youth") return "Njia ya kazi unayopendelea ni ipi?";
    return "Njia yako ya kazi sasa ni ipi?";
  }
  return prompt;
}

/** Map legacy v1 career IDs to the 22-ID dropdown. */
export function migrateLegacyCareer(id: string): CareerId {
  const map: Record<string, CareerId> = {
    farmer: "farmer",
    health: "health_chp",
    teacher: "teacher_primary",
    business: "shop_owner",
    transport: "transport",
    tech: "tech",
    government: "government",
    student: "student_secondary",
    exploring: "exploring",
  };
  if (isCareerId(id)) return id;
  const next = map[id];
  return next ?? "exploring";
}
