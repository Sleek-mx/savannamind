"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { OnboardingLocaleSwitch } from "@/components/learn/onboarding-locale-switch";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { LearnHub } from "@/components/learn/learn-hub";
import { Button } from "@/components/ui/button";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { ContinueButton } from "@/components/ui/continue-button";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { SectorCardDropdown } from "@/components/ui/card-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ChevronDownIcon } from "lucide-react";
import { GENERAL_CAREERS } from "@/lib/learn/general-careers";
import {
  ageOptions,
  careerOptions,
  careerQuestion,
  cookingCopy,
  levelOptions,
  stepLabels,
  type OnboardingStep,
} from "@/lib/learn/copy";
import { hydrateLearnStateFromCloud } from "@/lib/learn/cloud-sync";
import { loadProfile, saveProfile, loadOnboardingDraft, saveOnboardingDraft, clearOnboardingDraft } from "@/lib/learn/storage";
import type { AgeBand, CareerId, LearnLevel, LearnProfile } from "@/lib/learn/types";

type Phase = "splash" | "onboarding" | "cooking" | "home";

function needsGuardian(age: AgeBand | null) {
  return age === "kids";
}

export function LearnStudioApp({ locale }: { locale: "en" | "sw" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [phase, setPhase] = useState<Phase>("splash");
  const [step, setStep] = useState<OnboardingStep>("language");
  const [ageBand, setAgeBand] = useState<AgeBand | null>(null);
  const [career, setCareer] = useState<CareerId | null>(null);
  const [level, setLevel] = useState<LearnLevel | null>(null);
  const [guardianConfirmed, setGuardianConfirmed] = useState(false);
  const [nickname, setNickname] = useState("");
  const [profile, setProfile] = useState<LearnProfile | null>(null);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [introStage, setIntroStage] = useState(0);
  const [introExiting, setIntroExiting] = useState(false);
  const reduceMotion = useReducedMotion();
  const startStudio = useCallback(() => {
    if (!profileLoaded) return;
    setIntroExiting(true);
    window.setTimeout(() => setPhase(profile?.onboardingComplete ? "home" : "onboarding"), reduceMotion ? 0 : 420);
  }, [profile, profileLoaded, reduceMotion]);

  const startNewOnboarding = useCallback(() => {
    clearOnboardingDraft();
    setStep("language");
    setAgeBand(null);
    setCareer(null);
    setLevel(null);
    setGuardianConfirmed(false);
    setNickname("");
    setIntroExiting(true);
    window.setTimeout(() => setPhase("onboarding"), reduceMotion ? 0 : 420);
  }, [reduceMotion]);

  const continueTraining = useCallback(() => {
    setIntroExiting(true);
    window.setTimeout(() => setPhase("home"), reduceMotion ? 0 : 420);
  }, [reduceMotion]);

  useEffect(() => {
    if (phase !== "splash") return;
    if (reduceMotion) { setIntroStage(4); return; }
    const logoVisible = window.setTimeout(() => setIntroStage(1), 350);
    const moveLogo = window.setTimeout(() => setIntroStage(2), 1050);
    const headline = window.setTimeout(() => setIntroStage(3), 1650);
    const cta = window.setTimeout(() => setIntroStage(4), 2250);
    return () => { window.clearTimeout(logoVisible); window.clearTimeout(moveLogo); window.clearTimeout(headline); window.clearTimeout(cta); };
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

      if (searchParams.get("onboarding") === "1") {
        clearOnboardingDraft();
        setStep("language");
        setAgeBand(null);
        setCareer(null);
        setLevel(null);
        setGuardianConfirmed(false);
        setNickname("");
        setPhase("onboarding");
        setIntroStage(4);
        setProfileLoaded(true);
        return;
      }
      const existing = loadProfile();
      if (existing?.onboardingComplete) {
        setProfile(existing);
        if (searchParams.get("hub") === "1") setPhase("home");
      } else {
        const draft = loadOnboardingDraft();
        if (draft?.step) {
          setStep(draft.step as OnboardingStep);
          if (draft.ageBand) setAgeBand(draft.ageBand as AgeBand);
          if (draft.career) setCareer(draft.career as CareerId);
          if (draft.level) setLevel(draft.level as LearnLevel);
          if (draft.nickname) setNickname(draft.nickname);
          if (draft.guardianConfirmed) setGuardianConfirmed(true);
        }
      }
      setProfileLoaded(true);
    }

    void bootstrap();
    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  const labels = stepLabels(locale);

  const advanceAfterCooking = useCallback(() => {
    const p: LearnProfile = {
      nickname: nickname.trim() || (locale === "sw" ? "Mwanafunzi" : "Learner"),
      ageBand: ageBand!,
      career: career!,
      level: level!,
      guardianConfirmed: needsGuardian(ageBand) ? guardianConfirmed : true,
      locale,
      onboardingComplete: true,
      tutorialSeen: true,
      createdAt: new Date().toISOString(),
    };
    saveProfile(p);
    clearOnboardingDraft();
    setProfile(p);
    setPhase("home");
  }, [ageBand, career, guardianConfirmed, level, locale, nickname]);

  useEffect(() => {
    if (phase !== "cooking") return;
    const t = setTimeout(advanceAfterCooking, 2800);
    return () => clearTimeout(t);
  }, [phase, advanceAfterCooking]);

  const onSelect = (id: string) => {
    if (step === "language") {
      // Persist progress so the resumed onboarding on the new locale continues here.
      saveOnboardingDraft({ step: "age" });
      router.push(`/${id}/learn/studio`);
      setStep("age");
      return;
    }
    if (step === "age") {
      setAgeBand(id as AgeBand);
      saveOnboardingDraft({ step: "career", ageBand: id });
      setStep("career");
      return;
    }
    if (step === "career") {
      setCareer(id as CareerId);
      saveOnboardingDraft({ step: "level", ageBand: ageBand ?? undefined, career: id });
      setStep("level");
      return;
    }
    if (step === "level") {
      setLevel(id as LearnLevel);
      const nextStep = needsGuardian(ageBand) ? "guardian" : "nickname";
      saveOnboardingDraft({
        step: nextStep,
        ageBand: ageBand ?? undefined,
        career: career ?? undefined,
        level: id,
      });
      setStep(nextStep);
      return;
    }
  };

  const finishNickname = () => {
    if (!nickname.trim()) return;
    setPhase("cooking");
  };

  const cooking = cookingCopy(locale, nickname);

  const question = useMemo(() => {
    if (step === "language") return labels.language;
    if (step === "age") return labels.age;
    if (step === "career") return careerQuestion(locale, ageBand);
    if (step === "level") return labels.level;
    return labels.nickname;
  }, [labels, step]);

  const options = useMemo(() => {
    if (step === "language")
      return [
        { id: "en", label: "English" },
        { id: "sw", label: "Kiswahili" },
      ];
    if (step === "age") return ageOptions(locale);
    if (step === "career") return careerOptions(locale, ageBand);
    if (step === "level") return levelOptions(locale);
    return [];
  }, [locale, step]);

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

      {phase !== "splash" && <header className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Image src="/logo-full.png" alt="savannamind" width={160} height={44} priority />
        <div className="flex items-center gap-2">
          {phase !== "cooking" && (
            <OnboardingLocaleSwitch locale={locale} />
          )}
          <SignOutButton locale={locale} />
        </div>
      </header>}

      {phase === "splash" && (
        <main className={`learn-studio-intro${introExiting ? " is-exiting" : ""}`} aria-label={locale === "sw" ? "Utangulizi wa Learn Studio" : "Learn Studio intro"}>
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
            {locale === "sw" ? "Jifunze AI kutatua matatizo halisi" : "Learn AI to solve real problems"}
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
            {profile?.onboardingComplete ? (
              <>
                <GetStartedButton onClick={startNewOnboarding} disabled={!profileLoaded}>
                  {locale === "sw" ? "Anza Upya" : "Get Started"}
                </GetStartedButton>
                <ContinueButton onClick={continueTraining}>
                  {locale === "sw" ? "Endelea na Mafunzo" : "Continue"}
                </ContinueButton>
              </>
            ) : (
              <GetStartedButton onClick={startStudio} disabled={!profileLoaded}>
                {locale === "sw" ? "Anza" : "Get Started"}
              </GetStartedButton>
            )}
          </motion.div>
        </main>
      )}

      {phase === "onboarding" && (
        <main
          key={step}
          className={`relative z-10 w-full ${step === "career" ? "max-w-3xl" : "max-w-xl"} transition-all duration-300 mx-auto px-4 py-8 sm:py-12 learn-onboarding-widget${introExiting ? " is-entering" : ""}`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-learn-teal/15 p-6 sm:p-10 shadow-learn-lg">
            <Questionnaire
              onSubmit={(e) => {
                e.preventDefault();
                if (step === "nickname") finishNickname();
              }}
            >
              <QuestionnaireProgress
                className="mb-4 self-start"
                current={
                  step === "language"
                    ? 1
                    : step === "age"
                    ? 2
                    : step === "career"
                    ? 3
                    : step === "level"
                    ? 4
                    : step === "guardian"
                    ? 5
                    : needsGuardian(ageBand)
                    ? 6
                    : 5
                }
                total={needsGuardian(ageBand) ? 6 : 5}
                render={(props, state) => (
                  <div {...props} className="flex flex-col gap-2 w-full mb-4">
                    <div className="flex items-center gap-1.5 w-full">
                      {Array.from({ length: state.total }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                            i < state.current ? "bg-learn-teal" : "bg-learn-teal/15"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-learn-muted">
                      {locale === "sw"
                        ? `Hatua ${state.current} ya ${state.total}`
                        : `Checkpoint ${state.current} of ${state.total}`}
                    </span>
                  </div>
                )}
              />

              {step === "language" && (
                <QuestionnaireItem name="language">
                  <QuestionnaireTitle>{labels.language}</QuestionnaireTitle>
                  <QuestionnaireChoices>
                    <QuestionnaireChoice
                      value="en"
                      selected={locale === "en"}
                      onClick={() => onSelect("en")}
                    >
                      English
                    </QuestionnaireChoice>
                    <QuestionnaireChoice
                      value="sw"
                      selected={locale === "sw"}
                      onClick={() => onSelect("sw")}
                    >
                      Kiswahili
                    </QuestionnaireChoice>
                  </QuestionnaireChoices>
                  <QuestionnaireActions>
                    <QuestionnairePrevious
                      label={locale === "sw" ? "Rudi" : "Back"}
                      onClick={() => {
                        const previous: Record<OnboardingStep, OnboardingStep | null> = {
                          language: null,
                          age: "language",
                          career: "age",
                          level: "career",
                          guardian: "level",
                          nickname: needsGuardian(ageBand) ? "guardian" : "level",
                        };
                        const target = previous[step];
                        if (target) {
                          setStep(target);
                          saveOnboardingDraft({
                            step: target,
                            ageBand: ageBand ?? undefined,
                            career: career ?? undefined,
                            level: level ?? undefined,
                            nickname,
                          });
                        } else setPhase("splash");
                      }}
                    />
                  </QuestionnaireActions>
                </QuestionnaireItem>
              )}

              {step === "age" && (
                <QuestionnaireItem name="age">
                  <QuestionnaireTitle>{labels.age}</QuestionnaireTitle>
                  <QuestionnaireChoices>
                    {ageOptions(locale).map((o) => (
                      <QuestionnaireChoice
                        key={o.id}
                        value={o.id}
                        selected={ageBand === o.id}
                        onClick={() => onSelect(o.id)}
                      >
                        {o.label}
                      </QuestionnaireChoice>
                    ))}
                  </QuestionnaireChoices>
                  <QuestionnaireActions>
                    <QuestionnairePrevious
                      label={locale === "sw" ? "Rudi" : "Back"}
                      onClick={() => {
                        const previous: Record<OnboardingStep, OnboardingStep | null> = {
                          language: null,
                          age: "language",
                          career: "age",
                          level: "career",
                          guardian: "level",
                          nickname: needsGuardian(ageBand) ? "guardian" : "level",
                        };
                        const target = previous[step];
                        if (target) {
                          setStep(target);
                          saveOnboardingDraft({
                            step: target,
                            ageBand: ageBand ?? undefined,
                            career: career ?? undefined,
                            level: level ?? undefined,
                            nickname,
                          });
                        } else setPhase("splash");
                      }}
                    />
                  </QuestionnaireActions>
                </QuestionnaireItem>
              )}

              {step === "career" && (
                <QuestionnaireItem name="career">
                  <QuestionnaireTitle>
                    {careerQuestion(locale, ageBand)}
                  </QuestionnaireTitle>
                  <div className="w-full my-3">
                    <label className="block text-sm font-medium text-learn-muted mb-2">
                      {locale === "sw"
                        ? "Chagua sekta yako"
                        : "Select your sector"}
                    </label>
                    <SectorCardDropdown
                      selectedId={career}
                      onSelect={(id) => {
                        setCareer(id);
                        saveOnboardingDraft({
                          step: "level",
                          ageBand: ageBand ?? undefined,
                          career: id,
                        });
                      }}
                      locale={locale}
                    />
                  </div>
                  <QuestionnaireActions>
                    <QuestionnairePrevious
                      label={locale === "sw" ? "Rudi" : "Back"}
                      onClick={() => {
                        const previous: Record<OnboardingStep, OnboardingStep | null> = {
                          language: null,
                          age: "language",
                          career: "age",
                          level: "career",
                          guardian: "level",
                          nickname: needsGuardian(ageBand) ? "guardian" : "level",
                        };
                        const target = previous[step];
                        if (target) {
                          setStep(target);
                          saveOnboardingDraft({
                            step: target,
                            ageBand: ageBand ?? undefined,
                            career: career ?? undefined,
                            level: level ?? undefined,
                            nickname,
                          });
                        } else setPhase("splash");
                      }}
                    />
                    <QuestionnaireNext
                      label={locale === "sw" ? "Endelea" : "Next"}
                      disabled={!career}
                      onClick={() => {
                        if (!career) return;
                        saveOnboardingDraft({
                          step: "level",
                          ageBand: ageBand ?? undefined,
                          career,
                        });
                        setStep("level");
                      }}
                    />
                  </QuestionnaireActions>
                </QuestionnaireItem>
              )}

              {step === "level" && (
                <QuestionnaireItem name="level">
                  <QuestionnaireTitle>{labels.level}</QuestionnaireTitle>
                  <QuestionnaireChoices>
                    {levelOptions(locale).map((o) => (
                      <QuestionnaireChoice
                        key={o.id}
                        value={o.id}
                        selected={level === o.id}
                        onClick={() => onSelect(o.id)}
                      >
                        {o.label}
                      </QuestionnaireChoice>
                    ))}
                  </QuestionnaireChoices>
                  <QuestionnaireActions>
                    <QuestionnairePrevious
                      label={locale === "sw" ? "Rudi" : "Back"}
                      onClick={() => {
                        const previous: Record<OnboardingStep, OnboardingStep | null> = {
                          language: null,
                          age: "language",
                          career: "age",
                          level: "career",
                          guardian: "level",
                          nickname: needsGuardian(ageBand) ? "guardian" : "level",
                        };
                        const target = previous[step];
                        if (target) {
                          setStep(target);
                          saveOnboardingDraft({
                            step: target,
                            ageBand: ageBand ?? undefined,
                            career: career ?? undefined,
                            level: level ?? undefined,
                            nickname,
                          });
                        } else setPhase("splash");
                      }}
                    />
                  </QuestionnaireActions>
                </QuestionnaireItem>
              )}

              {step === "guardian" && (
                <QuestionnaireItem name="guardian">
                  <QuestionnaireTitle>{labels.guardian}</QuestionnaireTitle>
                  <p className="text-learn-muted text-sm sm:text-base leading-relaxed my-2">
                    {locale === "sw"
                      ? "Mimi ni mlezi na naruhusu mtoto wangu kutumia jukwaa hili kwa kujifunza. Hatutaweka jina kamili wala shule bila idhini."
                      : "I am a guardian and I allow this learner to use the platform for education. We will not store full legal names or school names without consent."}
                  </p>
                  <label className="flex items-start gap-3 p-4 rounded-xl border border-learn-teal/20 bg-white cursor-pointer my-3">
                    <input
                      type="checkbox"
                      checked={guardianConfirmed}
                      onChange={(e) => setGuardianConfirmed(e.target.checked)}
                      className="mt-1 h-5 w-5 rounded accent-learn-teal cursor-pointer"
                    />
                    <span className="text-sm font-medium text-learn-ink">
                      {locale === "sw" ? "Nakubali" : "I agree"}
                    </span>
                  </label>
                  <QuestionnaireActions>
                    <QuestionnairePrevious
                      label={locale === "sw" ? "Rudi" : "Back"}
                      onClick={() => {
                        const previous: Record<OnboardingStep, OnboardingStep | null> = {
                          language: null,
                          age: "language",
                          career: "age",
                          level: "career",
                          guardian: "level",
                          nickname: needsGuardian(ageBand) ? "guardian" : "level",
                        };
                        const target = previous[step];
                        if (target) {
                          setStep(target);
                          saveOnboardingDraft({
                            step: target,
                            ageBand: ageBand ?? undefined,
                            career: career ?? undefined,
                            level: level ?? undefined,
                            nickname,
                          });
                        } else setPhase("splash");
                      }}
                    />
                    <QuestionnaireNext
                      label={locale === "sw" ? "Endelea" : "Next"}
                      disabled={!guardianConfirmed}
                      onClick={() => {
                        saveOnboardingDraft({
                          step: "nickname",
                          ageBand: ageBand ?? undefined,
                          career: career ?? undefined,
                          level: level ?? undefined,
                          guardianConfirmed: true,
                        });
                        setStep("nickname");
                      }}
                    />
                  </QuestionnaireActions>
                </QuestionnaireItem>
              )}

              {step === "nickname" && (
                <QuestionnaireItem name="nickname">
                  <QuestionnaireTitle>{labels.nickname}</QuestionnaireTitle>
                  <div className="w-full my-3">
                    <input
                      type="text"
                      maxLength={24}
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && nickname.trim()) {
                          e.preventDefault();
                          finishNickname();
                        }
                      }}
                      placeholder={locale === "sw" ? "mf. Amina" : "e.g. Amina"}
                      className="w-full rounded-xl border border-learn-teal/20 bg-white text-learn-ink px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-learn-teal shadow-sm"
                      autoFocus
                    />
                  </div>
                  <QuestionnaireActions>
                    <QuestionnairePrevious
                      label={locale === "sw" ? "Rudi" : "Back"}
                      onClick={() => {
                        const previous: Record<OnboardingStep, OnboardingStep | null> = {
                          language: null,
                          age: "language",
                          career: "age",
                          level: "career",
                          guardian: "level",
                          nickname: needsGuardian(ageBand) ? "guardian" : "level",
                        };
                        const target = previous[step];
                        if (target) {
                          setStep(target);
                          saveOnboardingDraft({
                            step: target,
                            ageBand: ageBand ?? undefined,
                            career: career ?? undefined,
                            level: level ?? undefined,
                            nickname,
                          });
                        } else setPhase("splash");
                      }}
                    />
                    <QuestionnaireSubmit
                      label={locale === "sw" ? "Endelea" : "Continue"}
                      disabled={!nickname.trim()}
                      onClick={finishNickname}
                    />
                  </QuestionnaireActions>
                </QuestionnaireItem>
              )}
            </Questionnaire>
          </div>
        </main>
      )}

      {phase === "cooking" && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
          <Image
            src="/learn/kibo-2d.png"
            alt=""
            width={110}
            height={110}
            className="mb-4 rounded-full border-2 border-learn-gold/60 shadow-learn animate-pulse"
            priority
          />
          <h2 className="text-2xl font-bold text-learn-night">{cooking.title}</h2>
          <p className="mt-3 text-learn-muted max-w-md">{cooking.body}</p>
        </div>
      )}
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

