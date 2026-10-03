"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { LessonPlayer } from "@/components/learn/lesson-player";
import { KiboAssistant } from "@/components/learn/kibo-assistant";
import { getCurriculumModule } from "@/lib/learn/curriculum/resolve";
import { modulesForProfile } from "@/lib/learn/modules";
import { getModuleProgress, isModuleUnlocked, loadProgress } from "@/lib/learn/progress";
import { loadProfile } from "@/lib/learn/storage";
import type { LearnProfile } from "@/lib/learn/types";

import type { CardContext } from "@/lib/learn/card-context";

export function LearnLessonShell({
  locale,
  moduleId,
}: {
  locale: "en" | "sw";
  moduleId: string;
}) {
  const router = useRouter();
  const [struggle, setStruggle] = useState(false);
  const [cardContext, setCardContext] = useState<CardContext | null>(null);
  const [profile, setProfile] = useState<LearnProfile | null>(null);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const module = useMemo(() => {
    if (!profile) return undefined;
    return getCurriculumModule(moduleId, profile.ageBand, profile.level);
  }, [moduleId, profile]);

  const order = useMemo(() => {
    if (!profile) return ["s1", "s2", "s3", "s4", "s5"];
    return modulesForProfile(profile.career, profile.level).map((m) => m.id);
  }, [profile]);

  useEffect(() => {
    const savedProfile = loadProfile();
    setProfile(savedProfile);
    setProfileLoaded(true);
  }, []);

  useEffect(() => {
    if (!profileLoaded) return;
    if (!profile?.onboardingComplete || !profile.placementCompleted) {
      router.replace(`/${locale}/learn/studio?hub=1`);
      return;
    }
    const progress = loadProgress();
    if (!isModuleUnlocked(moduleId, order, progress)) {
      router.replace(`/${locale}/learn/studio?hub=1`);
    }
  }, [locale, moduleId, order, profile, profileLoaded, router]);

  const onStruggle = useCallback(() => setStruggle(true), []);

  const resume = useMemo(() => {
    const p = getModuleProgress(loadProgress(), moduleId);
    if (p.completed) return { unit: 0, card: 0 };
    return { unit: p.unitIndex, card: p.cardIndex };
  }, [moduleId]);

  if (!profileLoaded || !module || !profile) {
    return (
      <div className="learn-studio min-h-[100dvh] flex items-center justify-center text-learn-muted">
        {locale === "sw" ? "Subira huvuta heri…" : "Loading…"}
      </div>
    );
  }

  return (
    <div className="learn-studio learn-studio-active min-h-screen">
      <LessonPlayer
        module={module}
        locale={locale}
        moduleOrder={order}
        profile={profile}
        initialUnitIndex={resume.unit}
        initialCardIndex={resume.card}
        onStruggle={onStruggle}
        onCardContext={setCardContext}
        kiboColumn={
          <KiboAssistant
            locale={locale}
            profile={profile}
            struggleNudge={struggle}
            moduleId={moduleId}
            cardContext={cardContext}
          />
        }
      />
    </div>
  );
}
