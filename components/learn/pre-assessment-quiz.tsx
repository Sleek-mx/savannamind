"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import confetti from "canvas-confetti";
import {
  UNIFIED_15_QUESTIONS,
  computePlacementLevel,
  type PlacementQuestion,
} from "@/lib/learn/placement-questions";
import type { AgeBand, CareerId, LearnLevel } from "@/lib/learn/types";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { GENERAL_CAREERS } from "@/lib/learn/general-careers";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  BookmarkCheck,
  Award,
  Layers,
  Compass,
} from "lucide-react";

const QUESTION_ART: Record<
  string,
  { src: string; alt: { en: string; sw: string } }
> = {
  "pq-9-computer-vision": {
    src: "/learn/hero-section.png",
    alt: {
      en: "A person looking at a photo on a tablet",
      sw: "Mtu akiangalia picha kwenye kompyuta kibao",
    },
  },
  "pq-14-agriculture": {
    src: "/learn/careers/agriculture.jpg",
    alt: {
      en: "A farmer working among crops",
      sw: "Mkulima akifanya kazi shambani",
    },
  },
  "pq-15-hitl": {
    src: "/learn/learn-module-placeholder-health.png",
    alt: {
      en: "A clinician reviewing notes with a patient",
      sw: "Daktari akipitia maelezo na mgonjwa",
    },
  },
};

function careerImage(id: string) {
  const match = GENERAL_CAREERS.find((career) => career.id === id);
  if (!match) return "/learn/learn-module-placeholder-enterprise.png";
  return match.avatar.replace("w=100", "w=800");
}

export const PLACEMENT_DRAFT_KEY = "savannamind-placement-draft-v2";

export type PlacementResult = {
  score: number;
  level: LearnLevel;
  ageBand: AgeBand;
  career: CareerId;
  locale: "en" | "sw";
  answers: Record<string, string>;
};

interface PreAssessmentQuizProps {
  initialLocale?: "en" | "sw";
  nickname?: string;
  onComplete: (result: PlacementResult) => void;
}

type QuizStage = "questions" | "calibrating" | "level_revealed";

export function PreAssessmentQuiz({
  initialLocale = "en",
  nickname,
  onComplete,
}: PreAssessmentQuizProps) {
  const [currentLocale, setCurrentLocale] = useState<"en" | "sw">(initialLocale);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [stage, setStage] = useState<QuizStage>("questions");
  const [hasLoadedDraft, setHasLoadedDraft] = useState(false);
  const [finalResult, setFinalResult] = useState<PlacementResult | null>(null);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  // Restore progress from local storage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(PLACEMENT_DRAFT_KEY);
      if (raw) {
        const draft = JSON.parse(raw) as {
          currentIndex?: number;
          answers?: Record<string, string>;
          locale?: "en" | "sw";
        };
        if (draft && typeof draft === "object") {
          if (draft.answers) setAnswers(draft.answers);
          if (
            typeof draft.currentIndex === "number" &&
            draft.currentIndex >= 0 &&
            draft.currentIndex < UNIFIED_15_QUESTIONS.length
          ) {
            setCurrentIndex(draft.currentIndex);
            const currentQ = UNIFIED_15_QUESTIONS[draft.currentIndex];
            if (currentQ && draft.answers?.[currentQ.id]) {
              setSelectedOptionId(draft.answers[currentQ.id]);
            }
          }
          if (draft.locale === "en" || draft.locale === "sw") {
            setCurrentLocale(draft.locale);
          }
        }
      }
    } catch {
      // storage unavailable
    } finally {
      setHasLoadedDraft(true);
    }
  }, []);

  const totalQuestions = UNIFIED_15_QUESTIONS.length;
  const question: PlacementQuestion =
    UNIFIED_15_QUESTIONS[currentIndex] || UNIFIED_15_QUESTIONS[0];
  const isLastQuestion = currentIndex === totalQuestions - 1;

  // Sync selectedOptionId when currentIndex changes
  useEffect(() => {
    if (question && answers[question.id]) {
      setSelectedOptionId(answers[question.id]);
    } else {
      setSelectedOptionId(null);
    }
  }, [currentIndex, question, answers]);

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId);

    // If user changes language in Q1, switch active locale immediately
    if (question.id === "pq-1-lang" && (optionId === "en" || optionId === "sw")) {
      setCurrentLocale(optionId);
    }

    // Auto-persist draft immediately on selection
    try {
      const draft = {
        currentIndex,
        answers: { ...answers, [question.id]: optionId },
        locale:
          question.id === "pq-1-lang" && (optionId === "en" || optionId === "sw")
            ? optionId
            : currentLocale,
      };
      localStorage.setItem(PLACEMENT_DRAFT_KEY, JSON.stringify(draft));
    } catch {
      // ignore
    }
  };

  const handleNext = () => {
    if (!selectedOptionId) return;
    setDirection(1);

    const updatedAnswers = {
      ...answers,
      [question.id]: selectedOptionId,
    };
    setAnswers(updatedAnswers);

    const nextLocale =
      updatedAnswers["pq-1-lang"] === "sw" || updatedAnswers["pq-1-lang"] === "en"
        ? (updatedAnswers["pq-1-lang"] as "en" | "sw")
        : currentLocale;

    if (isLastQuestion) {
      // Score the 12 AI questions (pq-4 through pq-15)
      let computedScore = 0;
      for (const q of UNIFIED_15_QUESTIONS) {
        if (!q.isProfileMeta && q.correctOptionId) {
          if (updatedAnswers[q.id] === q.correctOptionId) {
            computedScore += 1;
          }
        }
      }

      const assignedLevel = computePlacementLevel(computedScore);
      const chosenAge = (updatedAnswers["pq-2-age"] as AgeBand) || "youth";
      const chosenCareer = (updatedAnswers["pq-3-career"] as CareerId) || "tech";

      const result: PlacementResult = {
        score: computedScore,
        level: assignedLevel,
        ageBand: chosenAge,
        career: chosenCareer,
        locale: nextLocale,
        answers: updatedAnswers,
      };

      setFinalResult(result);

      // Clear draft on completion
      try {
        localStorage.removeItem(PLACEMENT_DRAFT_KEY);
      } catch {
        // ignore
      }

      // Transition to calibrating loader animation
      setStage("calibrating");

      // Wait 2.8 seconds while computer determines the level
      setTimeout(() => {
        setStage("level_revealed");

        // Fire confetti celebration!
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#0f766e", "#f59e0b", "#14b8a6", "#38bdf8", "#ec4899"],
          });
        } catch {
          // ignore
        }
      }, 2800);
    } else {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);

      // Save draft with next index
      try {
        localStorage.setItem(
          PLACEMENT_DRAFT_KEY,
          JSON.stringify({
            currentIndex: nextIdx,
            answers: updatedAnswers,
            locale: nextLocale,
          })
        );
      } catch {
        // ignore
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex <= 0) return;
    setDirection(-1);
    const prevIdx = currentIndex - 1;
    setCurrentIndex(prevIdx);
  };

  if (!hasLoadedDraft) return null;

  // —— Stage 2: Calibrating Animation with provided Loader component
  if (stage === "calibrating") {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <Loader
          title={
            currentLocale === "sw"
              ? "Inachanganua kiwango chako cha AI..."
              : "Determining your AI learning level..."
          }
          subtitle={
            currentLocale === "sw"
              ? "Tafadhali subiri wakati tunapanga moduli na mtiririko unaokufaa zaidi."
              : "Analyzing your responses to calibrate your personalized curriculum track."
          }
          size="lg"
        />
      </div>
    );
  }

  // —— Stage 3: Confetti Level Reveal & "Get Started"
  if (stage === "level_revealed" && finalResult) {
    const isSw = currentLocale === "sw";

    const levelTitles: Record<LearnLevel, { en: string; sw: string }> = {
      beginner: {
        en: "Beginner Track",
        sw: "Kiwango cha Kwanza (Beginner)",
      },
      intermediate: {
        en: "Intermediate Track",
        sw: "Kiwango cha Kati (Intermediate)",
      },
      advanced: {
        en: "Advanced Track",
        sw: "Kiwango cha Juu (Advanced)",
      },
    };

    const levelDescriptions: Record<LearnLevel, { en: string; sw: string }> = {
      beginner: {
        en: "Great foundation! You will master core AI literacy, essential prompt writing, real-world tools, and critical safety habits.",
        sw: "Msingi mzuri sana! Utajifunza misingi ya AI, kuandika maelekezo (prompts), zana za kila siku, na maadili ya usalama.",
      },
      intermediate: {
        en: "Strong grasp! You are ready for applied workflow automation, scenario practice, domain prompts, and real job integration.",
        sw: "Uelewa mzuri sana! Uko tayari kwa mazoezi ya vitendo, kuendesha mifumo, na kutumia AI kwenye kazi na miradi halisi.",
      },
      advanced: {
        en: "Exceptional mastery! You will jump into high-level prompt engineering, few-shot patterns, system design, and AI strategy.",
        sw: "Uwezo wa juu sana! Utaanza na usanifu wa hali ya juu wa prompts, mifumo tata ya AI, na mikakati ya kidijitali.",
      },
    };

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl mx-auto px-4 py-8"
      >
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/90 text-center relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* Level Badge Icon */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mb-5 shadow-xs">
            <Award className="w-8 h-8 stroke-[2.2]" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>{isSw ? "Tathmini Imekamilika" : "Assessment Calibrated"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {isSw
              ? `Hongera${nickname ? `, ${nickname}` : ""}!`
              : `Congratulations${nickname ? `, ${nickname}` : ""}!`}
          </h2>

          <div className="mt-5 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
              {isSw ? "Kiwango Chako Kilichopangwa" : "Your Assigned Level"}
            </span>
            <div className="text-xl sm:text-2xl font-black text-teal-800 flex items-center justify-center gap-2">
              <Layers className="w-5 h-5 text-teal-600" />
              <span>{levelTitles[finalResult.level][currentLocale]}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed max-w-md mx-auto">
              {levelDescriptions[finalResult.level][currentLocale]}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <Compass className="w-4 h-4 text-amber-600" />
            <span>
              {isSw
                ? "Njia zote za moduli zimeandaliwa kwa ajili yako."
                : "All tailored curriculum tracks are unlocked and ready."}
            </span>
          </div>

          {/* Big "Get Started" CTA */}
          <div className="mt-8">
            <Button
              type="button"
              onClick={() => onComplete(finalResult)}
              className="w-full py-4 text-base font-bold bg-teal-700 hover:bg-teal-800 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{isSw ? "Anza Masomo Yako Sasa" : "Get Started"}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  // —— Stage 1: Questions Flow
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const isSw = currentLocale === "sw";
  const isCareer = question.id === "pq-3-career";
  const promptArt = QUESTION_ART[question.id];
  const slide = reduceMotion ? 0 : 42;

  return (
    <div className="precheck-screen">
      <div className="precheck-head">
        <div className="precheck-head-row">
          <p className="precheck-kicker">
            <Sparkles className="w-3.5 h-3.5" aria-hidden />
            <span>
              {isSw ? "Tathmini ya kujiunga" : "Onboarding pre-check"}
            </span>
          </p>
          <p className="precheck-count">
            <span>
              {isSw
                ? `Swali la ${currentIndex + 1} kati ya ${totalQuestions}`
                : `Question ${currentIndex + 1} of ${totalQuestions}`}
            </span>
            <span className="precheck-percent">{progressPercent}%</span>
          </p>
        </div>
        <div className="precheck-progress" aria-hidden>
          <motion.div
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
          />
        </div>
        {Object.keys(answers).length > 0 ? (
          <p className="precheck-saved">
            <BookmarkCheck className="w-3.5 h-3.5" aria-hidden />
            {isSw ? "Imehifadhiwa" : "Auto-saved"}
          </p>
        ) : null}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.section
          key={question.id}
          className="precheck-step"
          initial={{ opacity: 0, x: slide * direction }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: slide * direction * -1 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.32,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className={promptArt ? "precheck-prompt has-art" : "precheck-prompt"}>
            {promptArt ? (
              <img
                className="precheck-prompt-art"
                src={promptArt.src}
                alt={promptArt.alt[currentLocale]}
              />
            ) : null}
            <div>
              <p className="precheck-domain">
                {question.isProfileMeta
                  ? isSw
                    ? "Wasifu na Lugha"
                    : "Profile & Focus"
                  : isSw
                    ? "Dhana za AI"
                    : "AI Fundamentals"}
              </p>
              {currentIndex === 0 ? (
                <p className="precheck-lead">
                  {isSw
                    ? `Karibu${nickname ? `, ${nickname}` : ""}. Chagua lugha, umri, na kazi, kisha maswali ya AI yanapanga kiwango chako.`
                    : `Welcome${nickname ? `, ${nickname}` : ""}. Choose your language, age, and career, then the AI questions place your level.`}
                </p>
              ) : null}
              <h3>{question.question[currentLocale]}</h3>
            </div>
          </div>

          {isCareer ? (
            <div
              className="precheck-career-row"
              role="listbox"
              aria-label={isSw ? "Sekta za kazi" : "Career sectors"}
            >
              {question.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    data-precheck-option={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={
                      isSelected
                        ? "precheck-career-card is-selected"
                        : "precheck-career-card"
                    }
                  >
                    <span className="precheck-career-photo">
                      <img src={careerImage(opt.id)} alt="" />
                    </span>
                    <span className="precheck-career-copy">
                      <span className="precheck-career-label">
                        {opt.text[currentLocale]}
                      </span>
                      {opt.description ? (
                        <span className="precheck-career-desc">
                          {opt.description[currentLocale]}
                        </span>
                      ) : null}
                    </span>
                    <span className="precheck-check" aria-hidden>
                      {isSelected ? (
                        <motion.span
                          initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.18 }}
                        >
                          <Check size={14} strokeWidth={3} />
                        </motion.span>
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className={`precheck-options count-${question.options.length}`}>
              {question.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    data-precheck-option={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={
                      isSelected
                        ? "precheck-option w-full is-selected"
                        : "precheck-option w-full"
                    }
                  >
                    <span className="precheck-mark" aria-hidden>
                      {isSelected ? (
                        <motion.span
                          initial={reduceMotion ? false : { scale: 0.55, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.16 }}
                        >
                          <Check size={14} strokeWidth={3} />
                        </motion.span>
                      ) : (
                        <span>{opt.id.length <= 2 ? opt.id : "•"}</span>
                      )}
                    </span>
                    <span className="precheck-option-copy">
                      <span className="precheck-option-label">
                        {opt.text[currentLocale]}
                      </span>
                      {opt.description ? (
                        <span className="precheck-option-desc">
                          {opt.description[currentLocale]}
                        </span>
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </motion.section>
      </AnimatePresence>

      <div className="precheck-nav">
        <Button
          type="button"
          variant="outline"
          disabled={currentIndex === 0}
          onClick={handlePrevious}
          className="precheck-nav-btn"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isSw ? "Swali Lililopita" : "Previous"}</span>
        </Button>
        <Button
          type="button"
          data-precheck-next
          onClick={handleNext}
          disabled={!selectedOptionId}
          className="precheck-nav-btn precheck-nav-next"
        >
          <span>
            {isLastQuestion
              ? isSw
                ? "Kamilisha na Ufungue Moduli"
                : "Complete & Unlock Modules"
              : isSw
                ? "Swali Linalofuata"
                : "Next Question"}
          </span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
