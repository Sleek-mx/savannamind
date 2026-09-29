"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ResolvedModule } from "@/lib/learn/curriculum/types";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { previewModules, type ModuleCard } from "@/lib/learn/modules";
import { isModuleUnlocked, loadProgress, type LearnProgress } from "@/lib/learn/progress";

export function LearnLessonLayout({
  module,
  locale,
  unitIndex,
  maxUnitReached,
  onUnitSelect,
  kiboColumn,
  failedUnitIds,
  moduleOrder = ["m0", "agr", "hlt", "edu", "biz", "cap"],
  children,
}: {
  module: ResolvedModule;
  locale: "en" | "sw";
  unitIndex: number;
  maxUnitReached?: number;
  onUnitSelect?: (i: number) => void;
  kiboColumn?: React.ReactNode;
  failedUnitIds?: string[];
  moduleOrder?: string[];
  children: React.ReactNode;
}) {
  const isSw = locale === "sw";
  const frontier = maxUnitReached ?? unitIndex;
  const currentUnit = module.units[unitIndex];
  const [progress, setProgress] = useState<LearnProgress>(() => loadProgress());

  useEffect(() => {
    setProgress(loadProgress());
  }, [module.id, unitIndex]);

  const orderedModules = useMemo(() => {
    const list: ModuleCard[] = [];
    for (const id of moduleOrder) {
      const found = previewModules.find((m) => m.id === id);
      if (found) list.push(found);
    }
    return list.length > 0 ? list : previewModules;
  }, [moduleOrder]);

  return (
    <div className="learn-lesson-layout">
      <header className="learn-lesson-topbar">
        <div className="learn-lesson-topbar-brand">
          <Link href={`/${locale}/learn/studio`} className="inline-flex items-center">
            <Image
              src="/logo-full.png"
              alt="savannamind"
              width={116}
              height={30}
              priority
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-1.5 leading-none">
            <span className="learn-lesson-topbar-back">{isSw ? "Somo" : "Lesson"}</span>
            {currentUnit && (
              <>
                <span className="text-learn-muted/40 text-[11px]" aria-hidden="true">•</span>
                <span className="text-learn-muted text-xs font-medium truncate max-w-[140px] sm:max-w-xs md:max-w-md">
                  {isSw ? currentUnit.titleSw : currentUnit.titleEn}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="learn-lesson-topbar-actions">
          <span className="learn-lesson-topbar-level hidden sm:inline">{isSw ? "Kiwango" : "Level"}: {module.level}</span>
          <Button href={`/${locale}/learn/studio`} variant="outline" size="sm">
            <span className="hidden sm:inline">{isSw ? "Rudi kwenye dashibodi" : "Back to dashboard"}</span>
            <span className="sm:hidden">{isSw ? "Dashibodi" : "Dashboard"}</span>
          </Button>
          <SignOutButton locale={locale} />
        </div>
      </header>

      {/* Mobile unit navigation — horizontally scrollable, jump within reached frontier */}
      <nav className="learn-unit-nav" aria-label={isSw ? "Vitengo vya somo" : "Lesson units"}>
        <ol className="learn-unit-nav-list">
          {module.units.map((u, i) => {
            const active = i === unitIndex;
            const done = i < unitIndex;
            const locked = i > frontier;
            const failed = failedUnitIds?.includes(u.id);
            return (
              <li key={u.id}>
                <button
                  type="button"
                  className={cn(
                    "learn-unit-nav-pill",
                    active && "learn-unit-nav-pill-active",
                    done && "learn-unit-nav-pill-done",
                    locked && "learn-unit-nav-pill-locked",
                    failed && "learn-unit-nav-pill-failed"
                  )}
                  onClick={() => onUnitSelect?.(i)}
                  disabled={locked}
                  aria-current={active ? "step" : undefined}
                >
                  <span className="learn-unit-nav-num">{i + 1}</span>
                  <span className="learn-unit-nav-title">{isSw ? u.titleSw : u.titleEn}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="learn-lesson-grid">
        <aside className="learn-lesson-sidebar" aria-label={isSw ? "Moduli na Vitengo" : "Modules & Units"}>
          {/* Module Selector & Header */}
          <div className="learn-lesson-sidebar-header">
            <div className="flex items-center justify-between mb-2">
              <span className="learn-lesson-sidebar-eyebrow">
                {isSw ? "Moduli" : "Modules"}
              </span>
              <Link
                href={`/${locale}/learn/studio`}
                className="learn-lesson-sidebar-hublink"
              >
                {isSw ? "Dashibodi →" : "Dashboard →"}
              </Link>
            </div>
            <div className="learn-lesson-modules-nav">
              {orderedModules.map((m) => {
                const isCurrent = m.id === module.id;
                const locked = !isModuleUnlocked(m.id, moduleOrder, progress);
                const isCompleted = progress.modules[m.id]?.completed;
                if (locked) {
                  return (
                    <div
                      key={m.id}
                      className="learn-lesson-module-pill is-locked"
                      title={isSw ? "Moduli imefungwa" : "Module locked"}
                    >
                      <Lock size={12} className="shrink-0" />
                      <span className="truncate">{isSw ? m.titleSw : m.titleEn}</span>
                    </div>
                  );
                }
                if (isCurrent) {
                  return (
                    <div key={m.id} className="learn-lesson-module-pill is-active">
                      <span
                        className="learn-lesson-module-dot"
                        style={{ background: m.accent }}
                      />
                      <span className="truncate font-semibold">
                        {isSw ? m.titleSw : m.titleEn}
                      </span>
                      <span className="learn-lesson-module-badge">
                        {isSw ? "Sasa" : "Current"}
                      </span>
                    </div>
                  );
                }
                return (
                  <Link
                    key={m.id}
                    href={`/${locale}/learn/studio/lesson/${m.id}`}
                    className={cn(
                      "learn-lesson-module-pill",
                      isCompleted && "is-completed"
                    )}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={13} className="shrink-0 text-emerald-600" />
                    ) : (
                      <span
                        className="learn-lesson-module-dot"
                        style={{ background: m.accent }}
                      />
                    )}
                    <span className="truncate">{isSw ? m.titleSw : m.titleEn}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Active Module Units */}
          <div className="learn-lesson-units-section">
            <div className="learn-lesson-units-header">
              <span className="learn-lesson-sidebar-eyebrow">
                {isSw ? "Vitengo vya somo" : "Units"} ({unitIndex + 1}/{module.units.length})
              </span>
            </div>
            <ol className="learn-lesson-unit-list">
              {module.units.map((u, i) => {
                const active = i === unitIndex;
                const done = i < unitIndex;
                const locked = i > frontier;
                const failed = failedUnitIds?.includes(u.id);
                const content = (
                  <>
                    <span className="learn-lesson-unit-num">{i + 1}</span>
                    <span className="learn-lesson-unit-label">
                      {isSw ? u.titleSw : u.titleEn}
                    </span>
                  </>
                );
                return (
                  <li key={u.id}>
                    {onUnitSelect && !locked ? (
                      <button
                        type="button"
                        className={cn(
                          "learn-lesson-unit-pill learn-lesson-unit-pill-btn",
                          active && "learn-lesson-unit-pill-active",
                          done && "learn-lesson-unit-pill-done",
                          failed && "learn-lesson-unit-pill-failed"
                        )}
                        onClick={() => onUnitSelect(i)}
                        aria-current={active ? "step" : undefined}
                      >
                        {content}
                      </button>
                    ) : (
                      <span
                        className={cn(
                          "learn-lesson-unit-pill",
                          active && "learn-lesson-unit-pill-active",
                          done && "learn-lesson-unit-pill-done",
                          locked && "learn-lesson-unit-pill-locked",
                          failed && "learn-lesson-unit-pill-failed"
                        )}
                      >
                        {content}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </aside>
        <main className="learn-lesson-main">{children}</main>
      </div>

      {/* Floating Kibo Assistant (docked bottom-right like Sleekie) */}
      {kiboColumn ? (
        <aside className="kibo-floating-dock" aria-label={isSw ? "Msaidizi Kibo" : "Kibo assistant"}>
          {kiboColumn}
        </aside>
      ) : null}
    </div>
  );
}
