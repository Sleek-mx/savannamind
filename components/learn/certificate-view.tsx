"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { loadProgress, type LearnProgress } from "@/lib/learn/progress";
import { loadProfile } from "@/lib/learn/storage";
import { deriveLearnerName } from "@/lib/learn/learner-name";
import { courseCertificateReady } from "@/lib/learn/certificate-eligibility";
import { hydrateLearnStateFromCloud } from "@/lib/learn/cloud-sync";
import { useAuth } from "@/lib/supabase/auth-context";
import type { LearnProfile } from "@/lib/learn/types";
import { Button } from "@/components/ui/button";

export function CertificateView({ locale }: { locale: "en" | "sw" }) {
  const { user } = useAuth();
  const isSw = locale === "sw";
  const [profile, setProfile] = useState<LearnProfile | null>(null);
  const [progress, setProgress] = useState<LearnProgress>({ modules: {}, totalXp: 0 });
  const [ready, setReady] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    hydrateLearnStateFromCloud()
      .catch(() => {
        /* local cache still decides the offer; the download route rechecks */
      })
      .finally(() => {
        if (cancelled) return;
        setProfile(loadProfile());
        setProgress(loadProgress());
        setReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const name = deriveLearnerName(user, profile?.nickname ?? (isSw ? "Mwanafunzi" : "Learner"));
  const eligible = courseCertificateReady({
    modules: progress.modules,
    outcomeBestScore: profile?.outcomeBestScore,
    outcomeCompletedAt: profile?.outcomeCompletedAt,
  });
  const issued = profile?.outcomeCompletedAt
    ? new Date(profile.outcomeCompletedAt).toLocaleDateString(isSw ? "sw-KE" : "en-KE", {
        timeZone: "UTC",
      })
    : null;

  async function downloadCertificate() {
    setDownloading(true);
    setError(null);
    try {
      const res = await fetch("/api/learn/certificate", { credentials: "include" });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: unknown };
        setError(
          typeof data.error === "string"
            ? data.error
            : isSw
              ? "Cheti hakipatikani bado."
              : "Certificate is not available yet."
        );
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "savanna-mind-certificate.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } catch {
      setError(isSw ? "Upakuaji umeshindwa. Jaribu tena." : "Download failed. Please try again.");
    } finally {
      setDownloading(false);
    }
  }

  if (!ready) {
    return (
      <div className="learn-studio min-h-screen px-6 py-16 text-center text-learn-muted">
        {isSw ? "Inapakia cheti…" : "Loading certificate…"}
      </div>
    );
  }

  if (!eligible) {
    return (
      <div className="learn-studio min-h-screen px-6 py-16 max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold">
          {isSw ? "Cheti bado hakijafunguliwa" : "Certificate not ready yet"}
        </h1>
        <p className="text-learn-muted mt-3">
          {isSw
            ? "Maliza moduli zote tano na ukaguzi wa mwisho unaolinganisha na pre-check, kisha urudi hapa."
            : "Finish all five modules and the end-of-course check that compares against your pre-check, then return here."}
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
        <Image src="/logo-full.png" alt="Savanna Mind" width={168} height={94} className="mx-auto h-auto w-40" />
        <p className="certificate-label">{isSw ? "Cheti cha ukamilishaji" : "Certificate of completion"}</p>
        <h1 className="certificate-title">
          {isSw ? "Misingi ya AI yenye uwajibikaji" : "Foundations of Responsible AI"}
        </h1>
        <p className="certificate-name">{name}</p>
        <p className="certificate-body">
          {isSw
            ? "Amekamilisha kozi ya Savanna Mind na ukaguzi wa mwisho."
            : "Has completed the Savanna Mind course and the end-of-course check."}
        </p>
        {issued && (
          <p className="certificate-date">
            {isSw ? "Tarehe:" : "Date:"} {issued}
          </p>
        )}
        <p className="certificate-body">
          {isSw ? "Waliotia saini: Savanna Mind na Dr. Tawfiq Bashir." : "Signed by Savanna Mind and Dr. Tawfiq Bashir."}
        </p>
      </article>
      <Button className="mt-8" variant="gold" onClick={() => void downloadCertificate()} disabled={downloading}>
        {downloading
          ? isSw
            ? "Inapakua…"
            : "Downloading…"
          : isSw
            ? "Pakua PDF"
            : "Download PDF"}
      </Button>
      {error && <p className="mt-4 max-w-md text-center text-sm text-red-700">{error}</p>}
      <Button variant="outline" className="mt-4" href={`/${locale}/learn/studio`}>
        {isSw ? "Dashibodi" : "Dashboard"}
      </Button>
    </div>
  );
}
