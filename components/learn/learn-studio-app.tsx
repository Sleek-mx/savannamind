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

type Phase = "splash" | "placement" | "home";

export function LearnStudioApp({ locale }: { locale: "en" | "sw" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isLoading: authLoading } = useAuth();
  const [phase, setPhase] = useState<Phase>("splash");
  const [profile, setProfile] = useState<LearnProfile | null>(null);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [showTurnstile, setShowTurnstile] = useState(false);
  const [pendingDestination, setPendingDestination] = useState<"home" | "placement" | null>(null);
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
    (destination: "home" | "placement") => {
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
    if (isReturningUser) {
      proceedWithCaptchaCheck("home");
    } else {
      window.setTimeout(() => setPhase("placement"), reduceMotion ? 0 : 420);
    }
  }, [isReturningUser, proceedWithCaptchaCheck, profileLoaded, reduceMotion]);

  const continueTraining = useCallback(() => {
    setIntroExiting(true);
    if (isReturningUser) {
      proceedWithCaptchaCheck("home");
    } else {
      window.setTimeout(() => setPhase("placement"), reduceMotion ? 0 : 420);
    }
  }, [isReturningUser, proceedWithCaptchaCheck, reduceMotion]);

  const handleTurnstileVerified = useCallback(() => {
    setShowTurnstile(false);
    const dest = pendingDestination || (isReturningUser ? "home" : "placement");
    setPendingDestination(null);
    setPhase(dest);
  }, [isReturningUser, pendingDestination]);

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
    [learnerName, locale, proceedWithCaptchaCheck, profile?.createdAt, router]
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
      if (existing?.onboardingComplete && existing?.placementCompleted) {
        setProfile(existing);
        // Returning user! Auto-open home if requested via hub=1 or signed in
        if (searchParams.get("hub") === "1") {
          const hasPassedTurnstile =
            typeof window !== "undefined" &&
            sessionStorage.getItem("sm_turnstile_passed") === "true";
          if (hasPassedTurnstile) {
            setPhase("home");
          }
        }
      } else {
        // If user already had a partial draft, check if they are restarting explicitly
        if (searchParams.get("onboarding") === "1") {
          try {
            localStorage.removeItem(PLACEMENT_DRAFT_KEY);
          } catch {
            // ignore
          }
          setPhase("placement");
        }
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

  if (phase === "home" && profile) {
    return (
      <div className="learn-studio relative min-h-screen overflow-x-hidden">
        <LearnHub profile={profile} locale={locale} />
      </div>
    );
  }

  return (
    <div className="learn-studio relative min-h-screen w-full overflow-hidden">
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
        <header className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
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
                {locale === "sw"
                  ? "Anza Tathmini (Maswali 15)"
                  : "Start Pre-Assessment (15 Qs)"}
              </GetStartedButton>
            )}
          </motion.div>
        </main>
      )}

      {phase === "placement" && (
        <main className="relative z-10 w-full max-w-3xl mx-auto px-4 py-6">
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
