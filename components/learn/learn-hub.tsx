"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { learnerHasProgress, resolveContinueLessonHref } from "@/components/learn/learn-minimal-home";
import { getCurriculumModule } from "@/lib/learn/curriculum/resolve";
import { modulesForProfile, previewModules, type ModuleCard } from "@/lib/learn/modules";
import {
  firstIncompleteModule,
  isModuleUnlocked,
  loadProgress,
  moduleProgressPercent,
  type LearnProgress,
} from "@/lib/learn/progress";
import type { LearnProfile } from "@/lib/learn/types";
import { Button } from "@/components/ui/button";

export function LearnHub({
  profile,
  locale,
}: {
  profile: LearnProfile;
  locale: "en" | "sw";
}) {
  const isSw = locale === "sw";
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
    () => modulesForProfile(profile.career, profile.level),
    [profile.career, profile.level]
  );
  const order = useMemo(() => modules.map((m) => m.id), [modules]);
  const returning = learnerHasProgress(progress, order);
  const continueId = firstIncompleteModule(order, progress);
  const continueHref = resolveContinueLessonHref(profile, locale, progress);
  const activeModule = modules.find((m) => m.id === continueId) ?? modules[0];

  useEffect(() => {
    if (!returning) setBlurContinue(false);
  }, [returning]);

  const lockedIds = useMemo(() => {
    const s = new Set<string>();
    for (const m of modules) {
      if (!isModuleUnlocked(m.id, order, progress)) s.add(m.id);
    }
    return s;
  }, [modules, order, progress]);

  const resolvedMap = useMemo(() => {
    const map: Record<string, ReturnType<typeof getCurriculumModule>> = {};
    for (const m of modules) {
      map[m.id] = getCurriculumModule(m.id, profile.ageBand, profile.level);
    }
    return map;
  }, [modules, profile.ageBand, profile.level]);

  const unitProgress = useMemo(() => {
    const map: Record<string, number> = {};
    for (const m of modules) {
      const total = resolvedMap[m.id]?.units.length ?? 1;
      map[m.id] = moduleProgressPercent(m.id, total, progress);
    }
    return map;
  }, [modules, resolvedMap, progress]);

  const intro = moduleIntro(activeModule, locale);

  return (
    <motion.div
      className="learn-hub w-full min-h-screen"
      initial={reduce ? false : { x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={reduce ? undefined : { x: "100%", opacity: 0 }}
      transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="learn-topbar learn-hub-topbar">
        <span className="learn-hub-back text-sm font-medium">{isSw ? "Dashibodi" : "Dashboard"}</span>
        <Image src="/logo-full.png" alt="savannamind" width={120} height={32} />
        <div className="learn-hub-actions">
          <span className="learn-topbar-chip">{progress.totalXp} XP</span>
          <Button variant="outline" size="sm" href={`/${locale}/login`}>{isSw ? "Akaunti" : "Account"}</Button>
          <Button variant="outline" size="sm" href={`/${locale}/learn/studio?onboarding=1`}>{isSw ? "Anza Upya" : "New Learner"}</Button>
          <Button variant="outline" size="sm" href={`/${locale}`}>{isSw ? "Toka kwenye tovuti" : "Exit to website"}</Button>
        </div>
      </header>

      <div className="learn-hub-grid">
        <aside className="learn-hub-sidebar" aria-label={isSw ? "Moduli" : "Modules"}>
          <p className="learn-hub-sidebar-title">{isSw ? "Moduli" : "Modules"}</p>
          <ol className="learn-hub-module-list">
            {modules.map((m) => {
              const locked = lockedIds.has(m.id);
              const active = m.id === continueId;
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
            })}
          </ol>
        </aside>

        <main className="learn-hub-main">
          <div
            className={[
              "learn-hub-continue-wrap",
              returning && blurContinue && "learn-hub-continue-blurred",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {returning && blurContinue && (
              <div className="learn-hub-continue-overlay">
                <button
                  type="button"
                  className={cn(
                    "learn-hub-unlock-btn",
                    isUnlocking && "is-unlocking"
                  )}
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
              {returning ? (
                <>
                  <h1 className="learn-hub-card-title">
                    {isSw ? "Endelea ulikotoka" : "Continue where you left off"}
                  </h1>
                  <p className="learn-hub-card-module">
                    {isSw ? activeModule.titleSw : activeModule.titleEn}
                  </p>
                  <Button variant="gold" href={continueHref}>
                    {isSw ? "Endelea somo" : "Continue lesson"}
                  </Button>
                </>
              ) : (
                <>
                  <h1 className="learn-hub-card-title">{intro.title}</h1>
                  <p className="learn-hub-card-lead">{intro.body}</p>
                  <Button variant="gold" href={`/${locale}/learn/studio/lesson/${activeModule.id}`}>
                    {isSw ? "Tuanze" : "Let's get started"}
                  </Button>
                </>
              )}
            </article>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

function moduleIntro(m: ModuleCard, locale: "en" | "sw") {
  const isSw = locale === "sw";
  if (m.id === "m0") {
    return {
      title: isSw ? "Anza na misingi" : "Start with foundations",
      body: isSw ? m.descSw : m.descEn,
    };
  }
  const meta = previewModules.find((x) => x.id === m.id);
  return {
    title: isSw ? meta?.titleSw ?? m.titleSw : meta?.titleEn ?? m.titleEn,
    body: isSw ? meta?.descSw ?? m.descSw : meta?.descEn ?? m.descEn,
  };
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
      {/* Padlock loop/shackle animates upward and pivots open */}
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
      {/* Padlock Body */}
      <rect x="4" y="11" width="16" height="11" rx="3" fill="currentColor" fillOpacity="0.12" />
      {/* Keyhole */}
      <circle cx="12" cy="15.5" r="1.2" fill="currentColor" />
      <path d="M12 16.7v2" />
    </svg>
  );
}
