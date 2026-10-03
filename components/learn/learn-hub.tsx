"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { learnerHasProgress, resolveContinueLessonHref } from "@/components/learn/learn-minimal-home";
import { getCurriculumModule } from "@/lib/learn/curriculum/resolve";
import { modulesForProfile, SHORT_MODULE_ORDER, type ModuleCard } from "@/lib/learn/modules";
import { audienceBandForAge, careerById } from "@/lib/learn/careers";
import {
  completionPercent,
  firstIncompleteModule,
  isModuleUnlocked,
  loadProgress,
  moduleProgressPercent,
  type LearnProgress,
} from "@/lib/learn/progress";
import type { LearnLevel, LearnProfile } from "@/lib/learn/types";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { useAuth } from "@/lib/supabase/auth-context";
import { deriveLearnerName } from "@/lib/learn/learner-name";

const LOCKED_SLOTS = SHORT_MODULE_ORDER;

export function LearnHub({
  profile,
  locale,
  onStartPrecheck,
  onStartOutcome,
}: {
  profile: LearnProfile | null;
  locale: "en" | "sw";
  onStartPrecheck: () => void;
  onStartOutcome: () => void;
}) {
  const isSw = locale === "sw";
  const { user } = useAuth();
  const displayName = deriveLearnerName(user, profile?.nickname || (isSw ? "Mwanafunzi" : "Learner"));
  const placed = Boolean(profile?.placementCompleted && profile.level);
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState<LearnProgress>(() => loadProgress());
  const [blurContinue, setBlurContinue] = useState(true);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleUnlock = () => {
    if (isUnlocking) return;
    setIsUnlocking(true);
    setTimeout(() => {
      setBlurContinue(false);
      setIsUnlocking(false);
    }, 450);
  };

  const modules = useMemo(
    () => (placed && profile ? modulesForProfile(profile.career, profile.level) : []),
    [placed, profile]
  );
  const order = useMemo(() => (modules.length ? modules.map((m) => m.id) : [...LOCKED_SLOTS]), [modules]);
  const returning = placed && learnerHasProgress(progress, order);
  const continueId = firstIncompleteModule(order, progress);
  const continueHref =
    placed && profile ? resolveContinueLessonHref(profile, locale, progress) : `/${locale}/learn/studio`;
  const activeModule = modules.find((m) => m.id === continueId) ?? modules[0];
  const doneCount = order.filter((id) => progress.modules[id]?.completed).length;
  const courseDone = placed && order.every((id) => progress.modules[id]?.completed);
  const outcome = profile?.outcomeBestScore;
  const modulePct = completionPercent(order, progress);
  const courseXp = 5 * 80;
  const xpPct = Math.max(0, Math.min(100, Math.round((progress.totalXp / courseXp) * 100)));

  useEffect(() => {
    if (!returning) setBlurContinue(false);
  }, [returning]);

  useEffect(() => {
    const refresh = () => setProgress(loadProgress());
    window.addEventListener("focus", refresh);
    return () => window.removeEventListener("focus", refresh);
  }, []);

  const lockedIds = useMemo(() => {
    const s = new Set<string>();
    if (!placed) {
      for (const id of LOCKED_SLOTS) s.add(id);
      return s;
    }
    for (const m of modules) {
      if (!isModuleUnlocked(m.id, order, progress)) s.add(m.id);
    }
    return s;
  }, [modules, order, placed, progress]);

  const resolvedMap = useMemo(() => {
    const map: Record<string, ReturnType<typeof getCurriculumModule>> = {};
    if (!profile || !placed) return map;
    for (const m of modules) {
      map[m.id] = getCurriculumModule(m.id, profile.ageBand, profile.level);
    }
    return map;
  }, [modules, placed, profile]);

  const unitProgress = useMemo(() => {
    const map: Record<string, number> = {};
    for (const m of modules) {
      const total = resolvedMap[m.id]?.units.length ?? 1;
      map[m.id] = moduleProgressPercent(m.id, total, progress);
    }
    return map;
  }, [modules, resolvedMap, progress]);

  const careerLabel =
    placed && profile
      ? careerById(profile.career).labels[audienceBandForAge(profile.ageBand)]
      : null;

  return (
    <motion.div
      className="learn-hub w-full min-h-screen"
      initial={reduce ? false : { x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={reduce ? undefined : { x: "100%", opacity: 0 }}
      transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="learn-topbar learn-hub-topbar">
        <Image
          src="/logo-full.png"
          alt="savannamind"
          width={168}
          height={94}
          priority
          className="learn-hub-logo"
          style={{ height: "4.25rem", width: "auto" }}
        />
        <div className="learn-hub-actions">
          <span className="learn-hub-learner-name">{displayName}</span>
          <span className="learn-topbar-chip">{progress.totalXp} XP</span>
          <SignOutButton locale={locale} />
        </div>
      </header>

      <div className="learn-hub-grid">
        <aside className="learn-hub-sidebar" aria-label={isSw ? "Moduli" : "Modules"}>
          <p className="learn-hub-sidebar-title">{isSw ? "Moduli" : "Modules"}</p>
          <ol className="learn-hub-module-list">
            {placed
              ? modules.map((m) => {
                  const locked = lockedIds.has(m.id);
                  const active = m.id === continueId && !locked;
                  const done = progress.modules[m.id]?.completed;
                  const pct = unitProgress[m.id] ?? 0;
                  return (
                    <li key={m.id}>
                      <Link
                        href={locked ? "#" : `/${locale}/learn/studio/lesson/${m.id}`}
                        className={[
                          "learn-hub-module-item",
                          active && "learn-hub-module-item-active",
                          locked && "learn-hub-module-item-locked",
                          done && "learn-hub-module-item-done",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        aria-disabled={locked}
                        onClick={(e) => locked && e.preventDefault()}
                      >
                        {locked ? <Lock size={14} aria-hidden /> : null}
                        <span>{isSw ? m.titleSw : m.titleEn}</span>
                        {!locked && <span className="learn-hub-module-pct">{pct}%</span>}
                      </Link>
                    </li>
                  );
                })
              : LOCKED_SLOTS.map((id, index) => (
                  <li key={id}>
                    <span className="learn-hub-module-item learn-hub-module-item-locked" aria-disabled="true">
                      <Lock size={14} aria-hidden />
                      <span>
                        {isSw ? "Moduli" : "Module"} {index + 1}
                      </span>
                    </span>
                  </li>
                ))}
          </ol>
        </aside>

        <main className="learn-hub-main">
          {placed && profile && (
            <section className="learn-hub-stats" aria-label={isSw ? "Hali ya mwanafunzi" : "Learner status"}>
              <div className="learn-hub-pies">
                <StatPie
                  label={isSw ? "Maendeleo ya moduli" : "Module progress"}
                  value={`${doneCount}/5`}
                  percent={modulePct}
                  reduce={reduce}
                />
                <StatPie
                  label="XP"
                  value={String(progress.totalXp)}
                  percent={xpPct}
                  reduce={reduce}
                />
              </div>
              <div className="learn-hub-text-cards">
                <p className="learn-hub-text-card">
                  <span>{isSw ? "Kiwango" : "Level"}</span>
                  <strong>{levelLabel(profile.level, locale)}</strong>
                </p>
                <p className="learn-hub-text-card">
                  <span>{isSw ? "Umri" : "Age"}</span>
                  <strong>{ageLabel(profile.ageBand, locale)}</strong>
                </p>
                {careerLabel && (
                  <p className="learn-hub-text-card">
                    <span>{isSw ? "Kazi" : "Career"}</span>
                    <strong>{careerLabel}</strong>
                  </p>
                )}
              </div>
            </section>
          )}

          <div
            className={[
              "learn-hub-continue-wrap",
              returning && blurContinue && "learn-hub-continue-blurred",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {returning && blurContinue && !courseDone && (
              <div className="learn-hub-continue-overlay">
                <button
                  type="button"
                  className={cn("learn-hub-unlock-btn", isUnlocking && "is-unlocking")}
                  onClick={handleUnlock}
                  disabled={isUnlocking}
                  aria-label={isSw ? "Endelea ulikotoka" : "Continue where you left off"}
                >
                  <span className="learn-hub-unlock-icon-wrap">
                    <AnimatedLockKey isOpen={isUnlocking} />
                  </span>
                  <span className="learn-hub-unlock-label">
                    {isSw ? "Endelea ulikotoka" : "Continue where you left off"}
                  </span>
                </button>
              </div>
            )}

            <article className="learn-hub-card">
              {!placed && (
                <>
                  <h1 className="learn-hub-card-title">
                    {isSw ? "Moduli zimefungwa hadi pre-check" : "Modules stay locked until the pre-check"}
                  </h1>
                  <p className="learn-hub-card-lead">
                    {isSw
                      ? "Maliza pre-check ya maswali 15. Haisemi jibu sahihi wala baya. Alama ya ujuzi 12 inakuweka beginner, intermediate, au advanced, kisha moduli tano za kiwango hicho hufunguka."
                      : "Finish the 15-question pre-check. It does not show right or wrong. The 12 scored skills place you as beginner, intermediate, or advanced, then that level’s five modules unlock."}
                  </p>
                  <Button variant="gold" onClick={onStartPrecheck}>
                    {isSw ? "Anza pre-check" : "Start pre-check"}
                  </Button>
                </>
              )}

              {placed && activeModule && !courseDone && (
                <PlacedCard
                  locale={locale}
                  returning={returning}
                  module={activeModule}
                  href={continueHref}
                  locked={lockedIds.has(activeModule.id)}
                />
              )}

              {placed && courseDone && (
                <>
                  <h1 className="learn-hub-card-title">
                    {isSw ? "Moduli tano zimekamilika" : "All five modules are complete"}
                  </h1>
                  <p className="learn-hub-card-lead">
                    {isSw
                      ? "Ukaguzi wa mwisho unajaribu ujuzi uleule 12 kwa maswali mapya. Kupita moduli pekee si ongezeko."
                      : "The end-of-course check tests the same 12 skills with new questions. A module pass alone is not gain."}
                  </p>
                  <Button variant="gold" onClick={onStartOutcome}>
                    {typeof outcome === "number"
                      ? isSw
                        ? "Fanya ukaguzi tena"
                        : "Retake the end-of-course check"
                      : isSw
                        ? "Anza ukaguzi wa mwisho"
                        : "Start the end-of-course check"}
                  </Button>
                  {progress.certificateIssuedAt && (
                    <Button className="mt-3" variant="outline" href={`/${locale}/learn/studio/certificate`}>
                      {isSw ? "Angalia cheti" : "View certificate"}
                    </Button>
                  )}
                </>
              )}
            </article>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

function PlacedCard({
  locale,
  returning,
  module,
  href,
  locked,
}: {
  locale: "en" | "sw";
  returning: boolean;
  module: ModuleCard;
  href: string;
  locked: boolean;
}) {
  const isSw = locale === "sw";
  if (locked) {
    return (
      <>
        <h1 className="learn-hub-card-title">{isSw ? "Moduli inayofuata imefungwa" : "The next module is locked"}</h1>
        <p className="learn-hub-card-lead">
          {isSw
            ? "Pita mtihani wa moduli iliyotangulia (4 kati ya 5) ili ufungue inayofuata."
            : "Pass the previous module quiz (4 of 5) to open the next one."}
        </p>
      </>
    );
  }
  if (returning) {
    return (
      <>
        <h1 className="learn-hub-card-title">{isSw ? "Endelea ulikotoka" : "Continue where you left off"}</h1>
        <p className="learn-hub-card-module">{isSw ? module.titleSw : module.titleEn}</p>
        <Button variant="gold" href={href}>
          {isSw ? "Endelea somo" : "Continue lesson"}
        </Button>
      </>
    );
  }
  return (
    <>
      <h1 className="learn-hub-card-title">{isSw ? module.titleSw : module.titleEn}</h1>
      <p className="learn-hub-card-lead">{isSw ? module.descSw : module.descEn}</p>
      <Button variant="gold" href={href}>
        {isSw ? "Tuanze" : "Let's get started"}
      </Button>
    </>
  );
}

function StatPie({
  label,
  value,
  percent,
  reduce,
}: {
  label: string;
  value: string;
  percent: number;
  reduce: boolean | null;
}) {
  const radius = 42;
  const circ = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, percent));
  const drawn = (clamped / 100) * circ;
  return (
    <article className="learn-hub-pie-card">
      <div className="learn-hub-pie-visual">
        <svg viewBox="0 0 120 120" className="learn-hub-pie" role="img" aria-label={`${label}: ${value}`}>
          <circle cx="60" cy="60" r={radius} className="learn-hub-pie-track" />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            className="learn-hub-pie-fill"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: reduce ? circ - drawn : circ }}
            animate={{ strokeDashoffset: circ - drawn }}
            transition={{ duration: reduce ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <p className="learn-hub-pie-center">{value}</p>
      </div>
      <p className="learn-hub-pie-label">{label}</p>
    </article>
  );
}

function levelLabel(level: LearnLevel, locale: "en" | "sw") {
  if (locale === "sw") {
    if (level === "beginner") return "Mwanzo";
    if (level === "intermediate") return "Wastani";
    return "Juu";
  }
  if (level === "beginner") return "Beginner";
  if (level === "intermediate") return "Intermediate";
  return "Advanced";
}

function ageLabel(age: LearnProfile["ageBand"], locale: "en" | "sw") {
  if (locale === "sw") {
    if (age === "kids") return "Watoto";
    if (age === "youth") return "Vijana";
    return "Watu wazima";
  }
  if (age === "kids") return "Kids";
  if (age === "youth") return "Youth";
  return "Adult";
}

function AnimatedLockKey({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="overflow-visible shrink-0"
      aria-hidden="true"
    >
      <motion.path
        d="M7 11V7a5 5 0 0 1 10 0v4"
        style={{ transformOrigin: "7px 11px" }}
        initial={false}
        animate={
          isOpen
            ? {
                y: -5,
                rotate: -32,
                transition: { type: "spring", stiffness: 450, damping: 15 },
              }
            : {
                y: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              }
        }
      />
      <rect x="4" y="11" width="16" height="11" rx="3" fill="currentColor" fillOpacity="0.12" />
      <circle cx="12" cy="15.5" r="1.2" fill="currentColor" />
      <path d="M12 16.7v2" />
    </svg>
  );
}
