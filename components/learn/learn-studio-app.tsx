"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { OnboardingLocaleSwitch } from "@/components/learn/onboarding-locale-switch";
import { motion, useReducedMotion } from "motion/react";
import { LearnHub } from "@/components/learn/learn-hub";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { ContinueButton } from "@/components/ui/continue-button";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { hydrateLearnStateFromCloud } from "@/lib/learn/cloud-sync";
import { deriveLearnerName } from "@/lib/learn/learner-name";
import { loadProfile, saveProfile } from "@/lib/learn/storage";
import { useAuth } from "@/lib/supabase/auth-context";
import type { LearnProfile } from "@/lib/learn/types";
import {
  PreAssessmentQuiz,
  type PlacementResult,
  PLACEMENT_DRAFT_KEY,
} from "@/components/learn/pre-assessment-quiz";
import { TurnstileGate } from "@/components/auth/turnstile-gate";
import { OutcomeCheck } from "@/components/learn/outcome-check";

type Phase = "splash" | "home" | "placement" | "outcome";

export function LearnStudioApp({ locale }: { locale: "en" | "sw" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isLoading: authLoading } = useAuth();
  const [phase, setPhase] = useState<Phase>("splash");
  const [profile, setProfile] = useState<LearnProfile | null>(null);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [showTurnstile, setShowTurnstile] = useState(false);
  const [pendingDestination, setPendingDestination] = useState<"home" | "placement" | "outcome" | null>(null);
  const [introStage, setIntroStage] = useState(0);
  const [introExiting, setIntroExiting] = useState(false);
  const reduceMotion = useReducedMotion();

  const learnerName = useMemo(
    () => deriveLearnerName(user, locale === "sw" ? "Mwanafunzi" : "Learner"),
    [user, locale]
  );

  const isReturningUser = useMemo(() => {
    return Boolean(profile?.onboardingComplete && profile?.placementCompleted);
  }, [profile]);

  const proceedWithCaptchaCheck = useCallback(
    (destination: "home" | "placement" | "outcome") => {
      const hasPassedTurnstile =
        typeof window !== "undefined" &&
        sessionStorage.getItem("sm_turnstile_passed") === "true";

      if (!hasPassedTurnstile) {
        setPendingDestination(destination);
        setShowTurnstile(true);
        return;
      }
      window.setTimeout(() => setPhase(destination), reduceMotion ? 0 : 420);
    },
    [reduceMotion]
  );

  const startStudio = useCallback(() => {
    if (!profileLoaded) return;
    setIntroExiting(true);
    proceedWithCaptchaCheck("home");
  }, [proceedWithCaptchaCheck, profileLoaded]);

  const continueTraining = useCallback(() => {
    setIntroExiting(true);
    proceedWithCaptchaCheck("home");
  }, [proceedWithCaptchaCheck]);

  const handleTurnstileVerified = useCallback(() => {
    setShowTurnstile(false);
    const dest = pendingDestination || "home";
    setPendingDestination(null);
    setPhase(dest);
  }, [pendingDestination]);

  const handlePlacementComplete = useCallback(
    (result: PlacementResult) => {
      const p: LearnProfile = {
        nickname: learnerName,
        ageBand: result.ageBand,
        career: result.career,
        level: result.level,
        guardianConfirmed: result.ageBand === "kids",
        locale: result.locale,
        onboardingComplete: true,
        placementCompleted: true,
        placementScore: result.score,
        placementAnswers: result.answers,
        outcomeBestScore: profile?.outcomeBestScore,
        outcomeCompletedAt: profile?.outcomeCompletedAt,
        tutorialSeen: true,
        createdAt: profile?.createdAt || new Date().toISOString(),
      };
      saveProfile(p);
      setProfile(p);

      // If locale changed during placement, route to matching locale URL
      if (result.locale !== locale) {
        router.push(`/${result.locale}/learn/studio?hub=1`);
        return;
      }

      proceedWithCaptchaCheck("home");
    },
    [learnerName, locale, proceedWithCaptchaCheck, profile?.createdAt, profile?.outcomeBestScore, profile?.outcomeCompletedAt, router]
  );

  const handleOutcomeComplete = useCallback(
    (score: number) => {
      if (!profile?.placementCompleted) {
        setPhase("home");
        return;
      }
      const previous = profile.outcomeBestScore;
      const best = previous === undefined ? score : Math.max(previous, score);
      const next: LearnProfile = {
        ...profile,
        outcomeBestScore: best,
        outcomeCompletedAt: new Date().toISOString(),
      };
      saveProfile(next);
      setProfile(next);
      setPhase("home");
    },
    [profile]
  );

  useEffect(() => {
    if (phase !== "splash") return;
    if (reduceMotion) {
      setIntroStage(4);
      return;
    }
    const logoVisible = window.setTimeout(() => setIntroStage(1), 350);
    const moveLogo = window.setTimeout(() => setIntroStage(2), 1050);
    const headline = window.setTimeout(() => setIntroStage(3), 1650);
    const cta = window.setTimeout(() => setIntroStage(4), 2250);
    return () => {
      window.clearTimeout(logoVisible);
      window.clearTimeout(moveLogo);
      window.clearTimeout(headline);
      window.clearTimeout(cta);
    };
  }, [phase, reduceMotion]);

  useEffect(() => {
    let cancelled = false;

    async function bootstrap() {
      try {
        await hydrateLearnStateFromCloud();
      } catch {
        /* offline — keep local cache */
      }
      if (cancelled) return;

      const existing = loadProfile();
      if (existing) setProfile(existing);
      // Signup and lesson redirects land on the dashboard. The pre-check starts from there.
      // A completed placement is never cleared by ?onboarding=1.
      if (searchParams.get("hub") === "1" && searchParams.get("onboarding") !== "1") {
        const hasPassedTurnstile =
          typeof window !== "undefined" &&
          sessionStorage.getItem("sm_turnstile_passed") === "true";
        if (hasPassedTurnstile) {
          setPhase("home");
        } else {
          setPendingDestination("home");
          setShowTurnstile(true);
        }
      } else if (searchParams.get("onboarding") === "1" && !existing?.placementCompleted) {
        try {
          localStorage.removeItem(PLACEMENT_DRAFT_KEY);
        } catch {
          // ignore
        }
        setPhase("home");
      }
      setProfileLoaded(true);
    }

    void bootstrap();
    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  useEffect(() => {
    if (authLoading || !user) return;
    if (!profile?.onboardingComplete) return;
    if (profile.nickname === learnerName) return;
    const next = { ...profile, nickname: learnerName };
    saveProfile(next);
    setProfile(next);
  }, [authLoading, learnerName, profile, user]);

  if (phase === "home") {
    return (
      <div className="learn-studio relative min-h-screen overflow-x-hidden">
        <LearnHub
          profile={profile}
          locale={locale}
          onStartPrecheck={() => proceedWithCaptchaCheck("placement")}
          onStartOutcome={() => setPhase("outcome")}
        />
        <TurnstileGate
          isOpen={showTurnstile}
          locale={locale}
          onVerified={handleTurnstileVerified}
          onCancel={() => setShowTurnstile(false)}
        />
      </div>
    );
  }

  if (phase === "outcome" && profile?.placementCompleted) {
    return (
      <div className="learn-studio relative min-h-screen overflow-x-hidden">
        <OutcomeCheck
          locale={locale}
          onComplete={handleOutcomeComplete}
          onCancel={() => setPhase("home")}
        />
      </div>
    );
  }

  return (
    <div className="learn-studio relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 hidden lg:block bg-cover bg-center"
        style={{
          backgroundImage: "url(/learn/learn-onboarding-bg-desktop.png)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30 lg:hidden bg-cover bg-center"
        style={{
          backgroundImage: "url(/learn/learn-onboarding-bg-mobile.png)",
        }}
        aria-hidden
      />

      {phase !== "splash" && (
        <header className="relative z-10 mx-auto flex w-full max-w-[92rem] items-center justify-between px-4 py-5 sm:px-6">
          <Image
            src="/logo-full.png"
            alt="savannamind"
            width={160}
            height={44}
            priority
          />
          <div className="flex items-center gap-2">
            <OnboardingLocaleSwitch locale={locale} />
            <SignOutButton locale={locale} />
          </div>
        </header>
      )}

      {phase === "splash" && (
        <main
          className={`learn-studio-intro${introExiting ? " is-exiting" : ""}`}
          aria-label={
            locale === "sw" ? "Utangulizi wa Learn Studio" : "Learn Studio intro"
          }
        >
          <motion.div
            className="learn-studio-intro-logo"
            initial={reduceMotion ? false : { opacity: 0, y: 0 }}
            animate={{
              opacity: introStage >= 1 ? 1 : 0,
              y: introStage > 1 ? -48 : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <SplashLogo />
          </motion.div>

          <motion.h1
            className="learn-studio-intro-title"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{
              opacity: introStage > 2 ? 1 : 0,
              y: introStage > 2 ? 0 : 18,
            }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              pointerEvents: introStage > 2 ? "auto" : "none",
            }}
            aria-hidden={introStage <= 2}
          >
            {locale === "sw"
              ? "Jifunze AI kutatua matatizo halisi"
              : "Learn AI to solve real problems"}
          </motion.h1>

          <motion.div
            className="learn-studio-intro-cta flex flex-col sm:flex-row items-center justify-center gap-3.5"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{
              opacity: introStage > 3 ? 1 : 0,
              y: introStage > 3 ? 0 : 16,
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              pointerEvents: introStage > 3 ? "auto" : "none",
            }}
            aria-hidden={introStage <= 3}
          >
            {isReturningUser ? (
              <ContinueButton onClick={continueTraining} disabled={!profileLoaded}>
                {locale === "sw" ? "Endelea na Moduli Zako" : "Continue to Modules"}
              </ContinueButton>
            ) : (
              <GetStartedButton onClick={startStudio} disabled={!profileLoaded}>
                {locale === "sw" ? "Anza" : "Get Started"}
              </GetStartedButton>
            )}
          </motion.div>
        </main>
      )}

      {phase === "placement" && (
        <main className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-1 flex-col px-4 pb-6 sm:px-6">
          <PreAssessmentQuiz
            initialLocale={locale}
            nickname={learnerName}
            onComplete={handlePlacementComplete}
          />
        </main>
      )}

      <TurnstileGate
        isOpen={showTurnstile}
        locale={locale}
        onVerified={handleTurnstileVerified}
        onCancel={() => setShowTurnstile(false)}
      />
    </div>
  );
}

function SplashLogo() {
  return (
    <div className="relative">
      <Image
        src="/logo-full.png"
        alt="savannamind"
        width={220}
        height={60}
        className="mx-auto select-none"
        priority
      />
    </div>
  );
}
