import { note } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

const HOOKS: Record<
  string,
  { titleEn: string; titleSw: string; bodyEn: string; bodySw: string }
> = {
  agr: {
    titleEn: "On the farm",
    titleSw: "Shambani",
    bodyEn: "You will meet the same AI ideas as in Foundations—now every example is about crops, weather, and markets.",
    bodySw: "Utakutana na mawazo yale yale ya AI kama Misingi—sasa kila mfano ni kuhusu mazao, hali ya hewa, na masoko.",
  },
  hlt: {
    titleEn: "In health",
    titleSw: "Katika afya",
    bodyEn: "Same concepts, health context: triage, images, notes, and privacy—always with a clinician in charge.",
    bodySw: "Dhana zile zile, muktadha wa afya: triage, picha, maandishi, na faragha—daima mtaalamu anaongoza.",
  },
  edu: {
    titleEn: "In the classroom",
    titleSw: "Darasani",
    bodyEn: "Same concepts, school context: study help, integrity, and grounded lessons from approved material.",
    bodySw: "Dhana zile zile, muktadha wa shule: msaada wa kusoma, uadilifu, na masomo yaliyowekwa msingi.",
  },
  biz: {
    titleEn: "At work",
    titleSw: "Kazini",
    bodyEn: "Same concepts, livelihood context: forecasts, customers, and automation—with a human checkout.",
    bodySw: "Dhana zile zile, muktadha wa riziki: utabiri, wateja, na kiotomatiki—na ukaguzi wa mwanadamu.",
  },
  cap: {
    titleEn: "For your project",
    titleSw: "Kwa mradi wako",
    bodyEn: "Same concepts, project context: design something small that helps your community and can be evaluated.",
    bodySw: "Dhana zile zile, muktadha wa mradi: tengeneza kitu kidogo kinachosaidia jamii yako na kinaweza kutathminiwa.",
  },
};

export function wrapUnitsForDomain(moduleId: string, units: CurriculumUnit[]): CurriculumUnit[] {
  const hook = HOOKS[moduleId];
  if (!hook) return units;
  return units.map((u, i) => ({
    ...u,
    id: `${moduleId}-wrap-${u.id}`,
    titleEn: i === 0 ? `${hook.titleEn}: ${u.titleEn}` : u.titleEn,
    titleSw: i === 0 ? `${hook.titleSw}: ${u.titleSw}` : u.titleSw,
    cards:
      i === 0
        ? [
            note(hook.titleEn, hook.titleSw, hook.bodyEn, hook.bodySw),
            ...u.cards,
          ]
        : u.cards,
  }));
}
