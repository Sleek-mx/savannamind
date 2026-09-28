import type { CurriculumUnit, ModuleCurriculum } from "@/lib/learn/curriculum/types";
import { agrAdvancedUnits } from "./agr-advanced";
import { agrBeginnerUnits } from "./agr-beginner";
import { agrIntermediateUnits } from "./agr-intermediate";
import { bizAdvancedUnits } from "./biz-advanced";
import { bizBeginnerUnits } from "./biz-beginner";
import { bizIntermediateUnits } from "./biz-intermediate";
import { capAdvancedUnits } from "./cap-advanced";
import { capBeginnerUnits } from "./cap-beginner";
import { capIntermediateUnits } from "./cap-intermediate";
import { eduAdvancedUnits } from "./edu-advanced";
import { eduBeginnerUnits } from "./edu-beginner";
import { eduIntermediateUnits } from "./edu-intermediate";
import { hltAdvancedUnits } from "./hlt-advanced";
import { hltBeginnerUnits } from "./hlt-beginner";
import { hltIntermediateUnits } from "./hlt-intermediate";
import { m0AdvancedUnits } from "./m0-advanced";
import { m0BeginnerUnits } from "./m0-beginner";
import { m0IntermediateUnits } from "./m0-intermediate";

function track(level: "beginner" | "intermediate" | "advanced", units: CurriculumUnit[]) {
  return { level, units };
}

export const moduleCurricula: ModuleCurriculum[] = [
  {
    id: "m0",
    sdg: 17,
    xpReward: 80,
    tracks: {
      beginner: track("beginner", m0BeginnerUnits),
      intermediate: track("intermediate", m0IntermediateUnits),
      advanced: track("advanced", m0AdvancedUnits),
    },
  },
  {
    id: "agr",
    sdg: 2,
    xpReward: 90,
    tracks: {
      beginner: track("beginner", agrBeginnerUnits),
      intermediate: track("intermediate", agrIntermediateUnits),
      advanced: track("advanced", agrAdvancedUnits),
    },
  },
  {
    id: "hlt",
    sdg: 3,
    xpReward: 90,
    tracks: {
      beginner: track("beginner", hltBeginnerUnits),
      intermediate: track("intermediate", hltIntermediateUnits),
      advanced: track("advanced", hltAdvancedUnits),
    },
  },
  {
    id: "edu",
    sdg: 4,
    xpReward: 90,
    tracks: {
      beginner: track("beginner", eduBeginnerUnits),
      intermediate: track("intermediate", eduIntermediateUnits),
      advanced: track("advanced", eduAdvancedUnits),
    },
  },
  {
    id: "biz",
    sdg: 8,
    xpReward: 90,
    tracks: {
      beginner: track("beginner", bizBeginnerUnits),
      intermediate: track("intermediate", bizIntermediateUnits),
      advanced: track("advanced", bizAdvancedUnits),
    },
  },
  {
    id: "cap",
    sdg: 17,
    xpReward: 120,
    tracks: {
      beginner: track("beginner", capBeginnerUnits),
      intermediate: track("intermediate", capIntermediateUnits),
      advanced: track("advanced", capAdvancedUnits),
    },
  },
];
