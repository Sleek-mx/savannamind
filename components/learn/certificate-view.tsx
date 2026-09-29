"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { loadProgress } from "@/lib/learn/progress";
import { loadProfile } from "@/lib/learn/storage";
import { deriveLearnerName } from "@/lib/learn/learner-name";
import { useAuth } from "@/lib/supabase/auth-context";
import { Button } from "@/components/ui/button";

const REQUIRED = ["m0", "agr", "hlt", "edu", "biz", "cap"];

export function CertificateView({ locale }: { locale: "en" | "sw" }) {
  const { user } = useAuth();
  const profile = useMemo(() => loadProfile(), []);
  const progress = useMemo(() => loadProgress(), []);

  const allDone = REQUIRED.every((id) => progress.modules[id]?.completed);
  const isSw = locale === "sw";
  const name = deriveLearnerName(user, profile?.nickname ?? (isSw ? "Mwanafunzi" : "Learner"));
  const issued = progress.certificateIssuedAt
    ? new Date(progress.certificateIssuedAt).toLocaleDateString(isSw ? "sw-KE" : "en-KE")
    : null;

  if (!allDone) {
    return (
      <div className="learn-studio min-h-screen px-6 py-16 max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold">
          {isSw ? "Cheti bado hakijafunguliwa" : "Certificate not ready yet"}
        </h1>
        <p className="text-learn-muted mt-3">
          {isSw
            ? "Maliza moduli zote sita kisha urudi hapa."
            : "Complete all six modules, then return here."}
        </p>
        <Button className="mt-8" href={`/${locale}/learn/studio`}>
          {isSw ? "Rudi dashibodi" : "Back to dashboard"}
        </Button>
      </div>
    );
  }

  return (
    <div className="learn-home learn-studio min-h-screen w-full px-4 py-10 flex flex-col items-center">
      <article className="certificate-card">
        <Image src="/logo-full.png" alt="savannamind" width={160} height={44} className="mx-auto" />
        <p className="certificate-label">{isSw ? "Cheti cha majaribio" : "Preview certificate"}</p>
        <h1 className="certificate-title">
          {isSw ? "Misingi ya AI yenye uwajibikaji" : "Foundations of Responsible AI"}
        </h1>
        <p className="certificate-name">{name}</p>
        <p className="certificate-body">
          {isSw
            ? "Amekamilisha mstari wa kwanza wa Savanna Mind Learn — AI kwa jamii za Kenya."
            : "Has completed the Savanna Mind Learn pilot track — AI for Kenya’s communities."}
        </p>
        {issued && (
          <p className="certificate-date">
            {isSw ? "Tarehe:" : "Date:"} {issued}
          </p>
        )}
        <p className="certificate-xp">
          {isSw ? "Jumla ya XP:" : "Total XP:"} {progress.totalXp}
        </p>
        <p className="certificate-disclaimer">
          {isSw
            ? "Onyesho la muundo — si cheti rasmi cha kitaifa bado."
            : "Layout preview — not an official national credential yet."}
        </p>
      </article>
      <Button variant="outline" className="mt-8" href={`/${locale}/learn/studio`}>
        {isSw ? "Dashibodi" : "Dashboard"}
      </Button>
    </div>
  );
}
