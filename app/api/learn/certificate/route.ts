import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { readCloudLearnState } from "@/lib/learn/server-state";
import { courseCertificateReady } from "@/lib/learn/certificate-eligibility";
import { buildCertificatePdf, certificateDisplayName } from "@/lib/learn/certificate-pdf";
import { deriveLearnerName } from "@/lib/learn/learner-name";

export async function GET() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let state;
  try {
    state = await readCloudLearnState(user.id);
  } catch (err) {
    console.error("[learn-certificate] read failed", err);
    return NextResponse.json({ error: "Failed to load learn state" }, { status: 500 });
  }

  const ready = courseCertificateReady({
    modules: state.progress.modules,
    outcomeBestScore: state.profile?.outcomeBestScore,
    outcomeCompletedAt: state.profile?.outcomeCompletedAt,
  });
  if (!ready || !state.profile?.outcomeCompletedAt) {
    return NextResponse.json(
      { error: "Certificate is available after the end-of-course check." },
      { status: 403 }
    );
  }

  const issuedOn = new Date(state.profile.outcomeCompletedAt);
  if (Number.isNaN(issuedOn.getTime())) {
    return NextResponse.json(
      { error: "Certificate is available after the end-of-course check." },
      { status: 403 }
    );
  }

  const learnerName = certificateDisplayName(
    deriveLearnerName(user, state.profile.nickname || "Learner")
  );
  const logoPng = await readFile(path.join(process.cwd(), "public/logo-full.png"));
  const pdf = await buildCertificatePdf({ learnerName, issuedOn, logoPng });

  return new NextResponse(Buffer.from(pdf), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="savanna-mind-certificate.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
