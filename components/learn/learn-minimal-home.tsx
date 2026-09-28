"use client";

import Image from "next/image";
import Link from "next/link";
import { Settings } from "lucide-react";
import { useMemo, useState } from "react";
import { heroImageForBand } from "@/lib/learn/band-assets";
import { getCurriculumModule } from "@/lib/learn/curriculum/resolve";
import { modulesForProfile } from "@/lib/learn/modules";
import { firstIncompleteModule, loadProgress, type LearnProgress } from "@/lib/learn/progress";
import type { LearnProfile } from "@/lib/learn/types";
import { clearProfile, resetLearnProgress } from "@/lib/learn/storage";
import { Button } from "@/components/ui/button";
import { LearnSettingsDialog } from "@/components/learn/learn-settings-dialog";

export function LearnMinimalHome({
  profile,
  locale,
  onContinue,
}: {
  profile: LearnProfile;
  locale: "en" | "sw";
  onContinue: () => void;
}) {
  const isSw = locale === "sw";
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [progress, setProgress] = useState<LearnProgress>(() => loadProgress());

  const modules = useMemo(
    () => modulesForProfile(profile.career, profile.level),
    [profile.career, profile.level]
  );
  const order = useMemo(() => modules.map((m) => m.id), [modules]);

  const hasStarted = useMemo(() => {
    if (progress.totalXp > 0) return true;
    return order.some((id) => {
      const mp = progress.modules[id];
      return mp && (mp.unitIndex > 0 || mp.cardIndex > 0 || mp.xp > 0);
    });
  }, [order, progress]);

  const heroSrc = heroImageForBand(profile.ageBand);

  const signOut = () => {
    clearProfile();
    resetLearnProgress();
    window.location.href = `/${locale}/learn`;
  };

  const onResetProgress = () => {
    resetLearnProgress();
    setProgress(loadProgress());
  };

  return (
    <div className="learn-minimal-home w-full min-h-screen">
      <header className="learn-topbar">
        <Link href={`/${locale}/learn/studio`} className="learn-topbar-logo">
          <Image src="/logo-full.png" alt="savannamind" width={140} height={38} />
        </Link>
        <div className="learn-topbar-actions">
          <span className="learn-topbar-chip learn-topbar-xp">{progress.totalXp} XP</span>
          <Button
            variant="ghost"
            size="sm"
            type="button"
            className="learn-topbar-icon-btn"
            onClick={() => setSettingsOpen(true)}
            aria-label={isSw ? "Mipangilio" : "Settings"}
          >
            <Settings size={18} aria-hidden />
          </Button>
          <Button variant="ghost" size="sm" type="button" className="learn-topbar-reset" onClick={signOut}>
            {isSw ? "Toka" : "Sign out"}
          </Button>
        </div>
      </header>

      <section className="learn-hero-band" aria-labelledby="learn-hero-heading">
        <div className="learn-hero-band-media">
          <Image
            src={heroSrc}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="learn-hero-band-scrim" aria-hidden />
        </div>
        <div className="learn-hero-band-content">
          <p className="learn-hero-band-eyebrow">
            {profile.nickname} · {isSw ? "Savanna Mind Learn" : "Savanna Mind Learn"}
          </p>
          <h1 id="learn-hero-heading" className="learn-hero-band-title">
            {hasStarted
              ? isSw
                ? "Endelea kujifunza"
                : "Continue learning"
              : isSw
                ? "Uko tayari kuanza?"
                : "Ready to start?"}
          </h1>
          <p className="learn-hero-band-lead">
            {isSw
              ? "AI kwa muktadha wa Kenya — hatua kwa hatua, bila maneno magumu."
              : "AI in Kenya’s context — step by step, in plain language."}
          </p>
          <Button variant="gold" size="lg" type="button" onClick={onContinue}>
            {hasStarted
              ? isSw
                ? "Endelea"
                : "Continue learning"
              : isSw
                ? "Anza"
                : "Ready to start"}
          </Button>
        </div>
      </section>

      <LearnSettingsDialog
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        locale={locale}
        ageBand={profile.ageBand}
        onResetProgress={onResetProgress}
      />
    </div>
  );
}

/** Whether learner has any saved progress (for hub returning blur). */
export function learnerHasProgress(progress: LearnProgress, order: string[]): boolean {
  if (progress.totalXp > 0) return true;
  return order.some((id) => {
    const mp = progress.modules[id];
    return Boolean(mp && (mp.unitIndex > 0 || mp.cardIndex > 0 || mp.completed));
  });
}

export function resolveContinueLessonHref(
  profile: LearnProfile,
  locale: "en" | "sw",
  progress: LearnProgress
): string {
  const order = modulesForProfile(profile.career, profile.level).map((m) => m.id);
  const moduleId = firstIncompleteModule(order, progress);
  const mp = progress.modules[moduleId];
  const resolved = getCurriculumModule(moduleId, profile.ageBand, profile.level);
  const unit = mp?.unitIndex ?? 0;
  const card = mp?.cardIndex ?? 0;
  const q = new URLSearchParams();
  if (unit > 0) q.set("u", String(unit));
  if (card > 0) q.set("c", String(card));
  const qs = q.toString();
  return `/${locale}/learn/studio/lesson/${moduleId}${qs ? `?${qs}` : ""}`;
}
