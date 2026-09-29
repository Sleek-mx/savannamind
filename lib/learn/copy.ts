import { careerPromptForBand, careerOptionsForBand } from "./careers";
import type { AgeBand, LearnLevel } from "./types";

export type Locale = "en" | "sw";

export const onboardingSteps = [
  "language",
  "age",
  "career",
  "level",
  "guardian",
] as const;

export type OnboardingStep = (typeof onboardingSteps)[number];

export function isOnboardingStep(value: string): value is OnboardingStep {
  return (onboardingSteps as readonly string[]).includes(value);
}

export function stepLabels(locale: Locale): Record<OnboardingStep, string> {
  if (locale === "sw") {
    return {
      language: "Chagua lugha yako",
      age: "Umri wako au kundi lako la umri ni lipi?",
      career: "Chagua kazi kutoka orodha",
      level: "Uzoefu wako na teknolojia na AI ni kiasi gani?",
      guardian: "Idhini ya mlezi",
    };
  }
  return {
    language: "Choose your language",
    age: "What is your age band?",
    career: "Choose your career from the list",
    level: "How comfortable are you with technology and AI?",
    guardian: "Guardian consent",
  };
}

export function ageOptions(locale: Locale): { id: AgeBand; label: string }[] {
  if (locale === "sw") {
    return [
      { id: "kids", label: "Watoto — miaka 8–13" },
      { id: "youth", label: "Vijana — miaka 14–20" },
      { id: "adult", label: "Watu wazima — miaka 21+" },
    ];
  }
  return [
    { id: "kids", label: "Kids — ages 8–13" },
    { id: "youth", label: "Youths — ages 14–20" },
    { id: "adult", label: "Adults — ages 21+" },
  ];
}

export function careerOptions(locale: Locale, ageBand: AgeBand | null) {
  if (!ageBand) return [];
  return careerOptionsForBand(ageBand, locale);
}

export function careerQuestion(locale: Locale, ageBand: AgeBand | null): string {
  if (!ageBand) {
    return locale === "sw" ? "Chagua kazi kutoka orodha" : "Choose your career from the list";
  }
  return careerPromptForBand(ageBand, locale);
}

export function levelOptions(locale: Locale): { id: LearnLevel; label: string }[] {
  if (locale === "sw") {
    return [
      { id: "beginner", label: "Mwanzo — ninaanza kujifunza AI" },
      { id: "intermediate", label: "Kati — nimewahi kutumia zana za AI" },
      { id: "advanced", label: "Juu — ninajenga au nafundisha AI" },
    ];
  }
  return [
    { id: "beginner", label: "Beginner — new to AI" },
    { id: "intermediate", label: "Intermediate — used AI tools before" },
    { id: "advanced", label: "Advanced — build or teach with AI" },
  ];
}

export function cookingCopy(locale: Locale, nickname: string) {
  const name = nickname || (locale === "sw" ? "wewe" : "you");
  if (locale === "sw") {
    return {
      title: "Subira huvuta heri…",
      body: `Tunatengeneza njia yako, ${name} — kulingana na kazi na kiwango ulichochagua.`,
    };
  }
  return {
    title: "Good things take a moment…",
    body: `Shaping your path, ${name} — based on your career and level choices.`,
  };
}

export const loopStepTitles = (locale: Locale) =>
  locale === "sw"
    ? ["Lugha", "Umri", "Kazi", "Kiwango", "Idhini"]
    : ["Language", "Age", "Career", "Level", "Guardian"];
