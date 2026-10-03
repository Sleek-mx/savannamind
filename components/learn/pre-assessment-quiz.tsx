"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import {
  UNIFIED_15_QUESTIONS,
  computePlacementLevel,
  type PlacementQuestion,
} from "@/lib/learn/placement-questions";
import type { AgeBand, CareerId, LearnLevel } from "@/lib/learn/types";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  BookmarkCheck,
  Award,
  Layers,
  Compass,
} from "lucide-react";

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

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      {/* Top Header Card */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 font-semibold text-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>
            {currentLocale === "sw"
              ? "Tathmini ya Kujiunga ya Maswali 15"
              : "15-Question Onboarding & Placement"}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          {currentLocale === "sw"
            ? `Karibu${nickname ? `, ${nickname}` : ""}! Wacha Tupate Njia Yako`
            : `Welcome${nickname ? `, ${nickname}` : ""}! Find Your Path`}
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
          {currentLocale === "sw"
            ? "Tathmini hii ya maswali 15 inafanywa mara moja tu ili kubaini kiwango chako cha AI na njia ya kazi. Maendeleo yako yanahifadhiwa kiotomatiki ukiondoka au kufunga ukurasa."
            : "This 15-question pre-assessment is completed only once to calibrate your custom AI track and career modules. Progress is auto-saved after each question."}
        </p>

        {/* Progress Bar & Saved indicator */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-1.5">
            <span className="flex items-center gap-1.5">
              <span>
                {currentLocale === "sw"
                  ? `Swali la ${currentIndex + 1} kati ya ${totalQuestions}`
                  : `Question ${currentIndex + 1} of ${totalQuestions}`}
              </span>
              {Object.keys(answers).length > 0 && (
                <span className="text-[10px] text-teal-700 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded flex items-center gap-1">
                  <BookmarkCheck className="w-3 h-3" />
                  {currentLocale === "sw" ? "Imehifadhiwa" : "Auto-saved"}
                </span>
              )}
            </span>
            <span className="font-bold text-teal-800">{progressPercent}%</span>
          </div>
          <div className="w-full h-2.5 bg-slate-200/80 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 via-teal-600 to-teal-700 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {question.isProfileMeta
                ? currentLocale === "sw"
                  ? "Wasifu na Lugha"
                  : "Profile & Focus"
                : currentLocale === "sw"
                ? "Dhana za AI"
                : "AI Fundamentals"}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 leading-snug">
            {question.question[currentLocale]}
          </h3>

          <div className="space-y-3">
            {question.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? "border-teal-600 bg-teal-50/70 shadow-sm ring-2 ring-teal-600/30 text-slate-900"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 text-slate-700"
                  }`}
                >
                  <div
                    className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "border-teal-600 bg-teal-600 text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {isSelected ? (
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <span className="text-[11px] font-bold text-slate-400 uppercase">
                        {opt.id.length <= 2 ? opt.id : "•"}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-semibold block leading-tight">
                      {opt.text[currentLocale]}
                    </span>
                    {opt.description && (
                      <span className="text-xs text-slate-500 mt-1 block leading-normal">
                        {opt.description[currentLocale]}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-between items-center pt-4 border-t border-slate-100">
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={currentIndex === 0}
              onClick={handlePrevious}
              className="text-xs text-slate-600 flex items-center gap-1.5 disabled:opacity-30"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{currentLocale === "sw" ? "Swali Lililopita" : "Previous"}</span>
            </Button>

            <Button
              type="button"
              onClick={handleNext}
              disabled={!selectedOptionId}
              className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 shadow-sm disabled:opacity-50"
            >
              <span>
                {isLastQuestion
                  ? currentLocale === "sw"
                    ? "Kamilisha na Ufungue Moduli"
                    : "Complete & Unlock Modules"
                  : currentLocale === "sw"
                  ? "Swali Linalofuata"
                  : "Next Question"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
