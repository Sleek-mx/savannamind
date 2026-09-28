import { careerById } from "./careers";
import type { CareerId, LearnLevel } from "./types";

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

export const previewModules: ModuleCard[] = [
  {
    id: "m0",
    sdg: 17,
    titleEn: "Foundations",
    titleSw: "Misingi",
    descEn:
      "Start with clear definitions—what AI is, what it is not, and how you stay in charge when tools suggest answers.",
    descSw:
      "Anza na ufafanuzi wazi—AI ni nini, si nini, na unavyobaki na uamuzi wakati zana zinapendekeza majibu.",
    image: "/learn/learn-module-placeholder-education.png",
    accent: "#26A9AB",
    pinColor: "#F5A962",
  },
  {
    id: "agr",
    sdg: 2,
    titleEn: "Food & farming",
    titleSw: "Chakula na kilimo",
    descEn:
      "Use AI to read patterns in crops, weather, and markets—then verify before you act on the farm.",
    descSw:
      "Tumia AI kusoma mifumo katika mazao, hali ya hewa, na masoko—kisha thibitisha kabla ya kutenda shambani.",
    image: "/learn/learn-module-placeholder-agri.png",
    accent: "#FAAB36",
    pinColor: "#8BA4D9",
  },
  {
    id: "hlt",
    sdg: 3,
    titleEn: "Health & care",
    titleSw: "Afya na utunzaji",
    descEn:
      "Learn how clinical and community tools use prediction—without replacing nurses, doctors, or your judgment.",
    descSw:
      "Jifunze jinsi zana za kliniki na jamii zinavyotumia kutabiri—bila kuchukua nafasi ya wauguzi, madaktari, au uamuzi wako.",
    image: "/learn/learn-module-placeholder-health.png",
    accent: "#0B5F62",
    pinColor: "#B8A9E8",
  },
  {
    id: "edu",
    sdg: 4,
    titleEn: "Schools & learning",
    titleSw: "Shule na kujifunza",
    descEn:
      "Study skills, integrity, and classroom uses of AI—the same conceptual ladder schools build, applied to real tools.",
    descSw:
      "Ujuzi wa kusoma, uadilifu, na matumizi ya AI darasani—ngazi ile ile ya dhana shule hujenga, kwenye zana halisi.",
    image: "/learn/learn-module-placeholder-education.png",
    accent: "#3F1486",
    pinColor: "#F5A962",
  },
  {
    id: "biz",
    sdg: 8,
    titleEn: "Work & livelihoods",
    titleSw: "Kazi na riziki",
    descEn:
      "Forecasts, customer help, and safer automation for shops and services—always with a human checkout.",
    descSw:
      "Utabiri, msaada wa wateja, na kiotomatiki salama kwa maduka na huduma—daima na ukaguzi wa mwanadamu.",
    image: "/learn/learn-module-placeholder-enterprise.png",
    accent: "#0284C7",
    pinColor: "#8BA4D9",
  },
  {
    id: "cap",
    sdg: 17,
    titleEn: "Your community project",
    titleSw: "Mradi wako wa jamii",
    descEn:
      "Design a small, responsible AI idea that solves a real problem where you live—data, limits, and proof included.",
    descSw:
      "Tengeneza wazo dogo la AI lenye uwajibikaji linalotatua tatizo halisi ulipo—data, vikomo, na uthibitisho.",
    image: "/learn/hero-section.png",
    accent: "#FAAB36",
    pinColor: "#B8A9E8",
  },
];

const STABLE_TAIL = ["agr", "hlt", "edu", "biz"] as const;

export function modulesForProfile(career: CareerId, _level: LearnLevel) {
  const priority = careerById(career).modulePriority;
  const byId = new Map(previewModules.map((m) => [m.id, m]));
  const m0 = byId.get("m0")!;
  const cap = byId.get("cap")!;

  const domains = STABLE_TAIL.map((id) => byId.get(id)!);
  const priorityDomain = priority === "m0" || priority === "cap" ? null : byId.get(priority);
  const rest = domains.filter((m) => m.id !== priority);

  const ordered: ModuleCard[] = [m0];
  if (priorityDomain) ordered.push(priorityDomain);
  ordered.push(...rest.filter((m) => !ordered.some((o) => o.id === m.id)));
  ordered.push(cap);

  return ordered;
}
