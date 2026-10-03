"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { RotateCcw } from "lucide-react";
import type { ExtractCard, ResolvedModule } from "@/lib/learn/curriculum/types";
import {
  awardFlashcardReachXp,
  awardUnitQuizXp,
  getModuleProgress,
  loadProgress,
  markModuleComplete,
  saveLessonPosition,
  setModuleFailedUnits,
} from "@/lib/learn/progress";
import {
  assignModuleRemediation,
  clearModuleRemediation,
  clearUnitFromRemediation,
  isVideoNotesMode,
  loadRemediation,
  maybeEnableVideoNotesAfterQuizFail,
} from "@/lib/learn/remediation";
import {
  bumpUnitFail,
  loadQuizProgress,
  markFlashXpAwarded,
  recordModuleVariantUsed,
  recordUnitVariantUsed,
} from "@/lib/learn/quiz-progress";
import {
  ensureTimedQuizzesLoaded,
  getModuleExamBank,
  getUnitQuizBank,
  moduleExamKey,
  pickModuleVariantWithHistory,
  pickUnitVariantWithHistory,
  timedQuizzesReady,
  type ModuleVariantId,
  type QuizVariantId,
} from "@/lib/learn/timed-quizzes-data";
import { LearnBandVideo } from "@/components/learn/learn-band-video";
import { GatedYouTube } from "@/components/learn/gated-youtube";
import { ModuleGateQuiz } from "@/components/learn/module-gate-quiz";
import { getModuleGate } from "@/lib/learn/curriculum/modules";
import type { LearnProfile } from "@/lib/learn/types";
import { moduleCard } from "@/lib/learn/modules";
import { Button } from "@/components/ui/button";
import { DefinitionFlipCards } from "@/components/learn/definition-flip-cards";
import { FlashcardBullets, extractBulletLines } from "@/components/learn/flashcard-bullets";
import { PromptBuilderCard } from "@/components/learn/prompt-builder-card";
import { VoicePlayer } from "@/components/learn/voice-player";
import { MatchTapCard } from "@/components/learn/match-tap-card";
import { DiscussionPromptCard } from "@/components/learn/discussion-prompt-card";
import { TimedQuizRunner } from "@/components/learn/timed-quiz-runner";
import { LearnLessonLayout } from "@/components/learn/learn-lesson-layout";
import type { CardContext } from "@/lib/learn/card-context";
import { ConfettiButton, confetti } from "@/registry/magicui/confetti";

type Gate = "cards" | "unit-quiz" | "module-exam" | "module-gate" | "unit-pass" | "unit-fail";

type Props = {
  module: ResolvedModule;
  locale: "en" | "sw";
  moduleOrder: string[];
  profile: LearnProfile;
  initialUnitIndex?: number;
  initialCardIndex?: number;
  onStruggle?: () => void;
  onCardContext?: (ctx: CardContext | null) => void;
  kiboColumn?: React.ReactNode;
};

type QuizCard = ExtractCard<"quiz">;

export function LessonPlayer({
  module,
  locale,
  moduleOrder,
  profile,
  initialUnitIndex = 0,
  initialCardIndex = 0,
  onStruggle,
  onCardContext,
  kiboColumn,
}: Props) {
  const [unitIndex, setUnitIndex] = useState(initialUnitIndex);
  const [cardIndex, setCardIndex] = useState(initialCardIndex);
  const [maxUnitReached, setMaxUnitReached] = useState(initialUnitIndex);
  const [wrongStreak, setWrongStreak] = useState(0);
  const [solvedCurrent, setSolvedCurrent] = useState(false);
  const [finished, setFinished] = useState(false);
  const [gate, setGate] = useState<Gate>("cards");
  const [unitVariant, setUnitVariant] = useState<QuizVariantId>("A");
  const [moduleVariant, setModuleVariant] = useState<ModuleVariantId>("M-A");
  const [quizReset, setQuizReset] = useState(0);
  const [failedUnitIds, setFailedUnitIds] = useState<string[]>([]);
  const [moduleXpNotice, setModuleXpNotice] = useState<string | null>(null);
  const [quizzesLoaded, setQuizzesLoaded] = useState(timedQuizzesReady());
  const [unitQuizRetryNotice, setUnitQuizRetryNotice] = useState<string | null>(null);
  const [unitPassState, setUnitPassState] = useState<{
    score: number;
    total: number;
    nextUnitTitle: string;
    isLastUnit: boolean;
  } | null>(null);
  const [unitFailState, setUnitFailState] = useState<{
    score: number;
    total: number;
    need: number;
    fails: number;
  } | null>(null);

  useEffect(() => {
    ensureTimedQuizzesLoaded()
      .then(() => setQuizzesLoaded(true))
      .catch(() => setQuizzesLoaded(false));
  }, []);

  useEffect(() => {
    setFailedUnitIds(getModuleProgress(loadProgress(), module.id).failedUnitIds ?? []);
  }, [module.id, gate, finished]);

  const reduce = useReducedMotion();
  const unit = module.units[unitIndex];
  const card = unit?.cards[cardIndex];
  const meta = moduleCard(module.id, module.level);
  const isSw = locale === "sw";

  const { flatIndex, totalCards } = useMemo(() => {
    let total = 0;
    let flat = 0;
    for (let u = 0; u < module.units.length; u++) {
      const cards = module.units[u].cards;
      if (u < unitIndex) flat += cards.length;
      else if (u === unitIndex) flat += cardIndex;
      total += cards.length;
    }
    return { flatIndex: flat + 1, totalCards: total };
  }, [module.units, unitIndex, cardIndex]);

  // Reset interaction state whenever the displayed card changes.
  useEffect(() => {
    setSolvedCurrent(false);
  }, [unitIndex, cardIndex]);

  useEffect(() => {
    if (wrongStreak >= 2) onStruggle?.();
  }, [wrongStreak, onStruggle]);

  const openModuleExam = useCallback(() => {
    if (getModuleGate(module.id, module.level)) {
      setGate("module-gate");
      return;
    }
    const key = moduleExamKey(module.id, module.level);
    const used = loadQuizProgress().moduleVariantsUsed[key] ?? [];
    const v = pickModuleVariantWithHistory(used);
    setModuleVariant(v);
    setGate("module-exam");
  }, [module.id, module.level]);

  const advancePastUnit = useCallback(() => {
    if (!unit) return;
    if (unitIndex < module.units.length - 1) {
      const nu = unitIndex + 1;
      setUnitIndex(nu);
      setCardIndex(0);
      setMaxUnitReached((m) => Math.max(m, nu));
      saveLessonPosition(module.id, nu, 0, 8);
      return;
    }
    openModuleExam();
  }, [module, openModuleExam, unit, unitIndex]);

  const openUnitQuiz = useCallback(() => {
    if (!unit) return;
    const bank = getUnitQuizBank(unit.id);
    if (!bank) {
      advancePastUnit();
      return;
    }
    const used = loadQuizProgress().unitVariantsUsed[unit.id] ?? [];
    const v = pickUnitVariantWithHistory(used);
    setUnitVariant(v);
    if (markFlashXpAwarded(unit.id)) {
      awardFlashcardReachXp(module.id, 10);
    }
    setUnitQuizRetryNotice(null);
    setGate("unit-quiz");
  }, [advancePastUnit, module.id, unit]);

  useEffect(() => {
    if (!onCardContext || gate !== "cards" || !card) {
      onCardContext?.(null);
      return;
    }
    if (card.type === "note") {
      const body = isSw ? card.bodySw : card.bodyEn;
      onCardContext({
        title: isSw ? card.titleSw : card.titleEn,
        bullets: extractBulletLines(body),
      });
      return;
    }
    let title = isSw ? "Kadi" : "Card";
    if (
      card.type === "video" ||
      card.type === "prompt-builder" ||
      card.type === "match-tap" ||
      card.type === "discussion-prompt"
    ) {
      title = (isSw ? card.titleSw : card.titleEn) ?? title;
    } else if (card.type === "quiz") {
      title = isSw ? card.titleSw ?? title : card.titleEn ?? title;
    }
    onCardContext({ title, bullets: [] });
  }, [card, gate, isSw, onCardContext]);

  const noteWrong = useCallback(() => setWrongStreak((w) => w + 1), []);

  const next = useCallback(() => {
    if (!unit) return;

    if (cardIndex < unit.cards.length - 1) {
      const ni = cardIndex + 1;
      setCardIndex(ni);
      saveLessonPosition(module.id, unitIndex, ni);
      return;
    }
    openUnitQuiz();
  }, [cardIndex, module.id, openUnitQuiz, unit, unitIndex]);

  const previousCard = useCallback(() => {
    if (cardIndex <= 0 || !unit) return;
    const prior = cardIndex - 1;
    setCardIndex(prior);
    saveLessonPosition(module.id, unitIndex, prior);
  }, [cardIndex, module.id, unit, unitIndex]);

  const afterUnitQuizPass = useCallback(
    (score: number, total: number) => {
      if (!unit) return;
      recordUnitVariantUsed(unit.id, unitVariant);
      awardUnitQuizXp(module.id, 15);
      clearUnitFromRemediation(unit.id);

      const nextUnit = module.units[unitIndex + 1];
      const nextUnitTitle = nextUnit
        ? (isSw ? nextUnit.titleSw : nextUnit.titleEn)
        : (isSw ? "Mtihani wa Moduli" : "Module Final Exam");
      const isLastUnit = !nextUnit;

      setUnitPassState({ score, total, nextUnitTitle, isLastUnit });
      setGate("unit-pass");
      try {
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.6 },
        });
      } catch {
        // safe fallback
      }
    },
    [isSw, module.id, module.units, unit, unitIndex, unitVariant]
  );

  const handleContinueAfterUnitPass = useCallback(() => {
    setUnitPassState(null);
    setGate("cards");
    if (!unit) return;
    const r = loadRemediation();
    if (r.moduleId === module.id && r.assignedUnitIds.length > 0) {
      const nextId = r.assignedUnitIds[0];
      const idx = module.units.findIndex((u) => u.id === nextId);
      if (idx >= 0) {
        setUnitIndex(idx);
        setCardIndex(0);
        saveLessonPosition(module.id, idx, 0);
        return;
      }
    }
    if (r.moduleId === module.id && r.assignedUnitIds.length === 0) {
      clearModuleRemediation(module.id);
      setFailedUnitIds([]);
      openModuleExam();
      return;
    }
    advancePastUnit();
  }, [advancePastUnit, module.id, module.units, openModuleExam, unit]);

  const onUnitQuizFail = useCallback(() => {
    if (!unit) return;
    bumpUnitFail(unit.id);
    recordUnitVariantUsed(unit.id, unitVariant);
    const used = loadQuizProgress().unitVariantsUsed[unit.id] ?? [];
    maybeEnableVideoNotesAfterQuizFail(unit.id, module.id);
    setUnitVariant(pickUnitVariantWithHistory(used));
  }, [module.id, unit, unitVariant]);

  const handleUnitQuizFail = useCallback(
    (score: number, total: number) => {
      if (!unit) return;
      onUnitQuizFail();
      const fails = loadQuizProgress().unitFailCount[unit.id] ?? 0;
      const bank = getUnitQuizBank(unit.id);
      const need = bank ? Math.ceil((bank.passMarkPercent / 100) * total) : Math.ceil(0.8 * total);
      setUnitFailState({ score, total, need, fails });
      setGate("unit-fail");
    },
    [onUnitQuizFail, unit]
  );

  const handleRedoUnitAfterFail = useCallback(() => {
    setUnitFailState(null);
    setCardIndex(0);
    setGate("cards");
    saveLessonPosition(module.id, unitIndex, 0);
  }, [module.id, unitIndex]);

  const onUnitQuizTimeout = useCallback(() => {
    setUnitIndex(unitIndex);
    setCardIndex(0);
    setGate("cards");
    saveLessonPosition(module.id, unitIndex, 0);
  }, [module.id, unitIndex]);

  const selectUnit = (i: number) => {
    // Forward jumps stay within reached frontier; back jumps always allowed.
    if (i > maxUnitReached) return;
    setUnitIndex(i);
    setCardIndex(0);
    saveLessonPosition(module.id, i, 0);
  };

  useEffect(() => {
    if (finished) {
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.5 },
        });
      } catch {
        // safe fallback
      }
    }
  }, [finished]);

  if (finished) {
    const nextId = moduleOrder[moduleOrder.indexOf(module.id) + 1];
    const nextMeta = nextId ? moduleCard(nextId, module.level) : null;
    return (
      <div className="lesson-complete">
        <motion.div
          initial={reduce ? false : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <h2>{isSw ? "Hongera!" : "Well done!"}</h2>
          <p>
            {isSw
              ? `Umekamilisha vitengo ${module.units.length} na +${module.xpReward} XP.`
              : `You completed ${module.units.length} units and earned +${module.xpReward} XP.`}
          </p>
          <div className="lesson-complete-actions">
            <div className="relative">
              <ConfettiButton variant="gold" href={`/${locale}/learn/studio?hub=1`}>
                {isSw ? "Rudi kituo 🎉" : "Back to hub 🎉"}
              </ConfettiButton>
            </div>
            {nextMeta && (
              <Button variant="outline" href={`/${locale}/learn/studio/lesson/${nextId}`}>
                {isSw ? `Endelea: ${nextMeta.titleSw}` : `Continue: ${nextMeta.titleEn}`}
              </Button>
            )}
            {module.id === "s5" && (
              <Button variant="outline" href={`/${locale}/learn/studio/certificate`}>
                {isSw ? "Angalia cheti (onyesho)" : "View certificate (preview)"}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  const unitQuizFails = unit ? loadQuizProgress().unitFailCount[unit.id] ?? 0 : 0;

  const unitBank = unit ? getUnitQuizBank(unit.id) : undefined;
  const examBank = getModuleExamBank(module.id, module.level);
  const unitQuestions = unitBank?.variants[unitVariant] ?? [];
  const moduleQuestions = examBank?.variants[moduleVariant] ?? [];

  if (!unit) return null;

  if (!quizzesLoaded && (gate === "unit-quiz" || gate === "module-exam")) {
    return (
      <div className="learn-studio min-h-[40vh] flex items-center justify-center text-learn-muted px-6 text-center">
        {isSw ? "Inapakia maswali ya mtihani…" : "Loading quiz questions…"}
      </div>
    );
  }

  if (gate === "unit-quiz" && unitBank && unitQuestions.length > 0) {
    return (
      <LearnLessonLayout
        module={module}
        locale={locale}
        unitIndex={unitIndex}
        maxUnitReached={maxUnitReached}
        onUnitSelect={selectUnit}
        kiboColumn={kiboColumn}
        failedUnitIds={failedUnitIds}
        moduleOrder={moduleOrder}
      >
        <TimedQuizRunner
          key={`${unit.id}-${unitVariant}-${quizReset}`}
          title={isSw ? unit.titleSw : unitBank.titleEn}
          questions={unitQuestions}
          timeLimitMinutes={unitBank.timeLimitMinutes}
          passMarkPercent={unitBank.passMarkPercent}
          locale={locale}
          kind="unit"
          onPass={(score, total) => afterUnitQuizPass(score, total)}
          onFail={(score, total) => handleUnitQuizFail(score, total)}
          onTimeout={onUnitQuizTimeout}
        />
      </LearnLessonLayout>
    );
  }

  if (gate === "unit-pass" && unitPassState) {
    return (
      <LearnLessonLayout
        module={module}
        locale={locale}
        unitIndex={unitIndex}
        maxUnitReached={maxUnitReached}
        onUnitSelect={selectUnit}
        kiboColumn={kiboColumn}
        failedUnitIds={failedUnitIds}
        moduleOrder={moduleOrder}
      >
        <div className="unit-pass-wrap">
          <motion.div
            className="unit-pass-card"
            initial={reduce ? false : { scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <div className="unit-pass-badge" aria-hidden="true">
              🎉
            </div>
            <h2 className="unit-pass-title">
              {isSw ? "Hongera!" : "Congrats!"}
            </h2>
            <p className="unit-pass-unit-name">
              {unitPassState.isLastUnit
                ? isSw
                  ? "Sasa unaingia mtihani wa mwisho wa moduli!"
                  : "Now you move to the Module Final Exam!"
                : isSw
                  ? `Sasa unaingia kitengo kinachofuata: ${unitPassState.nextUnitTitle}`
                  : `Now you move to next unit: ${unitPassState.nextUnitTitle}`}
            </p>
            <p className="unit-pass-stats">
              {isSw
                ? `Umekamilisha kitengo (${unit.titleSw}) na alama ${unitPassState.score} / ${unitPassState.total}.`
                : `Completed unit (${unit.titleEn}) with score ${unitPassState.score} / ${unitPassState.total}.`}
            </p>
            <div className="unit-pass-xp">
              +15 XP {isSw ? "Zawadi" : "Reward"}
            </div>
            <div className="unit-pass-action">
              <div className="relative">
                <ConfettiButton
                  variant="gold"
                  size="lg"
                  onClick={handleContinueAfterUnitPass}
                >
                  {unitPassState.isLastUnit
                    ? isSw
                      ? "Anza Mtihani wa Moduli 🎉"
                      : "Start Module Exam 🎉"
                    : isSw
                      ? `Ingia: ${unitPassState.nextUnitTitle} 🎉`
                      : `Move to: ${unitPassState.nextUnitTitle} 🎉`}
                </ConfettiButton>
              </div>
            </div>
          </motion.div>
        </div>
      </LearnLessonLayout>
    );
  }

  if (gate === "unit-fail" && unitFailState) {
    return (
      <LearnLessonLayout
        module={module}
        locale={locale}
        unitIndex={unitIndex}
        maxUnitReached={maxUnitReached}
        onUnitSelect={selectUnit}
        kiboColumn={kiboColumn}
        failedUnitIds={failedUnitIds}
        moduleOrder={moduleOrder}
      >
        <div className="unit-fail-wrap">
          <motion.div
            className="unit-fail-card"
            initial={reduce ? false : { scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <div className="unit-fail-badge" aria-hidden="true">
              ⚠️
            </div>
            <h2 className="unit-fail-title">
              {isSw
                ? "Pole, hujafikia kiwango cha kupita mtihani."
                : "Sorry, you did not meet the pass threshold."}
            </h2>
            <p className="unit-fail-msg">
              {isSw
                ? "Tafadhali bonyeza hapa chini kurudia kitengo na kupitia masomo tena."
                : "Kindly click below to redo the unit and review key flashcard concepts."}
            </p>
            <p className="unit-fail-stats">
              {isSw
                ? `Alama zako: ${unitFailState.score} / ${unitFailState.total} (inahitajika ${unitFailState.need})`
                : `Your score: ${unitFailState.score} / ${unitFailState.total} (needed ${unitFailState.need})`}
            </p>
            <div className="unit-fail-action">
              <Button
                variant="gold"
                size="lg"
                onClick={handleRedoUnitAfterFail}
              >
                {isSw ? "Bonyeza hapa kurudia kitengo" : "Click here to redo the unit"}
              </Button>
            </div>
          </motion.div>
        </div>
      </LearnLessonLayout>
    );
  }

  if (gate === "module-gate") {
    const gateQuiz = getModuleGate(module.id, module.level);
    if (gateQuiz) {
      return (
        <LearnLessonLayout
          module={module}
          locale={locale}
          unitIndex={unitIndex}
          maxUnitReached={maxUnitReached}
          onUnitSelect={selectUnit}
          kiboColumn={kiboColumn}
          failedUnitIds={failedUnitIds}
          moduleOrder={moduleOrder}
        >
          <ModuleGateQuiz
            title={isSw ? gateQuiz.titleSw : gateQuiz.titleEn}
            items={gateQuiz.items}
            passCount={gateQuiz.passCount}
            locale={locale}
            onPass={() => {
              const p = markModuleComplete(module.id, module.xpReward, module.units.length, {
                quizPassed: true,
              });
              const mp = getModuleProgress(p, module.id);
              if (mp.completed) {
                clearModuleRemediation(module.id);
                setFinished(true);
              }
            }}
            onBackToNotes={(nextUnit) => {
              setUnitIndex(nextUnit);
              setCardIndex(0);
              setMaxUnitReached((reached) => Math.max(reached, nextUnit));
              saveLessonPosition(module.id, nextUnit, 0);
              setGate("cards");
            }}
          />
        </LearnLessonLayout>
      );
    }
  }

  if (gate === "module-exam" && examBank && moduleQuestions.length > 0) {
    const examKey = moduleExamKey(module.id, module.level);
    return (
      <LearnLessonLayout
        module={module}
        locale={locale}
        unitIndex={unitIndex}
        maxUnitReached={maxUnitReached}
        kiboColumn={kiboColumn}
        failedUnitIds={failedUnitIds}
        moduleOrder={moduleOrder}
      >
        {moduleXpNotice && (
          <p className="learn-module-xp-notice" role="status">{moduleXpNotice}</p>
        )}
        <TimedQuizRunner
          key={`${module.id}-exam-${moduleVariant}-${quizReset}`}
          title={isSw ? "Mtihani wa moduli" : "Module final exam"}
          questions={moduleQuestions}
          timeLimitMinutes={examBank.timeLimitMinutes}
          passMarkPercent={examBank.passMarkPercent}
          locale={locale}
          kind="module"
          onPass={() => {
            recordModuleVariantUsed(examKey, moduleVariant);
            const p = markModuleComplete(module.id, 40, module.units.length);
            const mp = getModuleProgress(p, module.id);
            if (mp.completed) {
              clearModuleRemediation(module.id);
              setModuleXpNotice(null);
              setFinished(true);
              return;
            }
            setModuleXpNotice(
              isSw
                ? "Umepita mtihani, lakini unahitaji XP zaidi kutoka vitengo. Rudia vitengo vilivyobainishwa."
                : "You passed the exam, but you need more unit XP. Redo the highlighted units."
            );
            setGate("cards");
          }}
          onFail={(_s, _t, missedUnitIds) => {
            recordModuleVariantUsed(examKey, moduleVariant);
            const used = loadQuizProgress().moduleVariantsUsed[examKey] ?? [];
            setModuleVariant(pickModuleVariantWithHistory(used));
            setQuizReset((n) => n + 1);
            const unique = [...new Set(missedUnitIds)];
            const targets =
              unique.length > 0 ? unique : module.units.map((u) => u.id);
            setModuleFailedUnits(module.id, targets);
            assignModuleRemediation(module.id, targets);
            setFailedUnitIds(targets);
            const idx = module.units.findIndex((u) => u.id === targets[0]);
            if (idx >= 0) {
              setUnitIndex(idx);
              setCardIndex(0);
              setGate("cards");
            }
          }}
          onTimeout={() => {
            const used = loadQuizProgress().moduleVariantsUsed[examKey] ?? [];
            recordModuleVariantUsed(examKey, moduleVariant);
            setModuleVariant(pickModuleVariantWithHistory([...used, moduleVariant]));
            setQuizReset((n) => n + 1);
            setGate("module-exam");
          }}
        />
      </LearnLessonLayout>
    );
  }

  if (!card) return null;

  return (
    <LearnLessonLayout
      module={module}
      locale={locale}
      unitIndex={unitIndex}
      maxUnitReached={maxUnitReached}
      onUnitSelect={selectUnit}
      kiboColumn={kiboColumn}
      failedUnitIds={failedUnitIds}
      moduleOrder={moduleOrder}
    >
      {moduleXpNotice && (
        <p className="learn-module-xp-notice" role="status">{moduleXpNotice}</p>
      )}
      {unitQuizRetryNotice && (
        <p className="learn-module-xp-notice" role="status">{unitQuizRetryNotice}</p>
      )}
      <div
        className="lesson-player"
        style={{ "--module-accent": meta?.accent ?? "#26A9AB" } as React.CSSProperties}
      >
        <div className="lesson-player-meta">
          <span className="lesson-progress">
            {isSw ? "Kadi" : "Card"} {flatIndex} / {totalCards}
          </span>
          <div className="lesson-progress-bar">
            <div style={{ width: `${(flatIndex / totalCards) * 100}%` }} />
          </div>
        </div>

        <AnimatePresence mode="wait">
        <motion.article
          key={`${unitIndex}-${cardIndex}`}
          className="lesson-card"
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
        >
          {card.type === "note" && (
            <>
              <p className="lesson-kind-label">{isSw ? "Kadi" : "Flashcard"}</p>
              {cardIndex === 0 && isVideoNotesMode(module.id, unit.id) && (
                  <LearnBandVideo
                    ageBand={profile.ageBand}
                    unitNumber1Based={unitIndex + 1}
                    locale={locale}
                  />
              )}
              <VoicePlayer
                text={`${isSw ? card.titleSw : card.titleEn}. ${isSw ? card.bodySw : card.bodyEn}`}
                locale={locale}
                title={isSw ? card.titleSw : card.titleEn}
              />
              <FlashcardBullets
                title={isSw ? card.titleSw : card.titleEn}
                body={isSw ? card.bodySw : card.bodyEn}
                image={card.image}
                locale={locale}
                rewordMode={unitQuizFails >= 1}
                onComplete={next}
              />
            </>
          )}

          {card.type === "video" && (
            <GatedYouTube card={card} locale={locale} onContinue={next} />
          )}

          {card.type === "reveal" && (
            <>
              <p className="lesson-kind-label">{isSw ? "Fafanuzi" : "Key definitions"}</p>
              <h1>{isSw ? "Maneno muhimu" : "Key terms"}</h1>
              <p className="lesson-body">
                {isSw
                  ? "Gusa kila kadi kuona maana. Jaribu kukumbuka kwanza."
                  : "Tap each card to reveal its meaning. Try to recall first."}
              </p>
              <DefinitionFlipCards items={card.items} locale={locale} />
              <Button onClick={next} className="mt-4">
                {isSw ? "Nimejifunza — endelea" : "Got it — continue"}
              </Button>
            </>
          )}

          {card.type === "quiz" && (
            <>
              <p className="lesson-kind-label">
                {card.situationEn
                  ? isSw ? "Zoezi: hali halisi" : "Practice: scenario"
                  : isSw ? "Zoezi" : "Practice"}
              </p>
              <h1>{isSw ? card.titleSw ?? "Jaribio la kukagua" : card.titleEn ?? "Quick check"}</h1>
              <QuizView card={card} locale={locale} onWrong={noteWrong} onSolved={() => setSolvedCurrent(true)} />
              {solvedCurrent && (
                <Button onClick={next}>
                  {isSw ? "Nilielewa — endelea" : "Got it — continue"}
                </Button>
              )}
            </>
          )}

          {card.type === "prompt-builder" && (
            <>
              <p className="lesson-kind-label">
                {isSw ? "Zoezi: jenga prompt" : "Exercise: build a prompt"}
              </p>
              <h1>{isSw ? card.titleSw : card.titleEn}</h1>
              <PromptBuilderCard
                card={card}
                locale={locale}
                onSolved={() => setSolvedCurrent(true)}
              />
              {solvedCurrent && (
                <Button onClick={next} className="mt-4">
                  {isSw ? "Endelea" : "Continue"}
                </Button>
              )}
            </>
          )}

          {card.type === "match-tap" && (
            <>
              <MatchTapCard
                card={card}
                locale={locale}
                onSolved={() => setSolvedCurrent(true)}
              />
              {solvedCurrent && (
                <Button onClick={next} className="mt-4">
                  {isSw ? "Endelea" : "Continue"}
                </Button>
              )}
            </>
          )}

          {card.type === "discussion-prompt" && (
            <>
              <DiscussionPromptCard
                card={card}
                locale={locale}
                onSolved={() => setSolvedCurrent(true)}
              />
              {solvedCurrent && (
                <Button onClick={next} className="mt-4">
                  {isSw ? "Endelea" : "Continue"}
                </Button>
              )}
            </>
          )}
          <div className="learn-lesson-back-card">
            <Button type="button" variant="outline" disabled={cardIndex === 0} onClick={previousCard}>
              ← {isSw ? "Rudi kwenye kadi" : "Go back"}
            </Button>
          </div>
        </motion.article>
      </AnimatePresence>

      </div>
    </LearnLessonLayout>
  );
}

function NoteBlock({ text }: { text: string }) {
  if (text.startsWith("```")) {
    const code = text.replace(/^```[a-z]*\n?/, "").replace(/\n?```\s*$/, "");
    return (
      <pre className="lesson-code">
        <code>{code}</code>
      </pre>
    );
  }
  const lines = text.split("\n");
  if (lines.every((l) => l.startsWith("- "))) {
    return (
      <ul className="lesson-list">
        {lines.map((l, i) => (
          <li key={i}>{l.slice(2)}</li>
        ))}
      </ul>
    );
  }
  return <p>{text}</p>;
}

// —— Quiz with retry + per-option remediation; mastery requires the correct pick.
function QuizView({
  card,
  locale,
  onWrong,
  onSolved,
}: {
  card: QuizCard;
  locale: "en" | "sw";
  onWrong: () => void;
  onSolved: () => void;
}) {
  const [wrongPicks, setWrongPicks] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const isSw = locale === "sw";

  const options = isSw ? card.optionsSw : card.optionsEn;
  const hints = isSw ? card.hintsSw : card.hintsEn;

  useEffect(() => {
    setWrongPicks([]);
    setSelected(null);
  }, [card]);

  const pick = (i: number) => {
    if (i === card.correctIndex) {
      setSelected(i);
      onSolved();
      return;
    }
    if (wrongPicks.includes(i)) return;
    setWrongPicks((w) => [...w, i]);
    setSelected(i);
    onWrong();
  };

  const solved = selected === card.correctIndex;
  const hintFor = selected !== null && !solved ? hints?.[selected] : undefined;
  const fallbackHint = isSw ? card.explainSw : card.explainEn;

  return (
    <div>
      {card.situationEn && (
        <div className="lesson-quiz-situation">
          <p className="lesson-quiz-situation-title">
            {isSw ? "Hali" : "Situation"}
          </p>
          <p>{isSw ? card.situationSw : card.situationEn}</p>
        </div>
      )}
      <p className="lesson-quiz-q">{isSw ? card.questionSw : card.questionEn}</p>
      <ul className="lesson-quiz-options">
        {options.map((opt, i) => {
          const isCorrect = i === card.correctIndex;
          const isWrongPick = wrongPicks.includes(i);
          const showResult = selected !== null;
          let cls = "lesson-quiz-opt";
          if (isWrongPick) cls += " wrong";
          if (showResult && i === selected) {
            cls += solved ? " correct" : " wrong";
          } else if (solved && isCorrect) {
            cls += " correct";
          }
          return (
            <li key={i}>
              <button
                type="button"
                className={cls}
                onClick={() => pick(i)}
                disabled={isWrongPick || solved}
                aria-label={
                  isWrongPick
                    ? isSw ? "Jibu lisilo sahihi" : "Incorrect answer, disabled"
                    : undefined
                }
              >
                {opt}
              </button>
            </li>
          );
        })}
      </ul>

      {!solved && (hintFor || fallbackHint) && (
        <div className="lesson-quiz-remediate" role="status">
          <p className="lesson-quiz-remediate-title">
            {isSw ? "🐾 Kibo: Si sahihi bado, hebu tuchunguze tena:" : "🐾 Kibo: Not quite yet — let's check the clue:"}
          </p>
          <p>{hintFor || fallbackHint}</p>
        </div>
      )}

      {solved && (card.explainEn || card.explainSw) && (
        <div className="lesson-quiz-explain" role="status">
          <p className="lesson-quiz-remediate-title">
            {isSw ? "🐾 Kibo: Umepatia barabara! 🎉" : "🐾 Kibo: Spot on! 🎉"}
          </p>
          <p>{isSw ? card.explainSw : card.explainEn}</p>
        </div>
      )}

      {!solved && wrongPicks.length > 0 && (
        <button
          type="button"
          className="lesson-quiz-retry"
          onClick={() => setSelected(null)}
        >
          <RotateCcw size={14} aria-hidden />
          {isSw ? "Jaribu tena" : "Try again"}
        </button>
      )}
    </div>
  );
}
