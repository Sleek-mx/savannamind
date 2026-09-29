import { NextResponse } from "next/server";
import { escapeHtml, sendResendEmail } from "@/lib/email/resend";
import { createAdminClient } from "@/lib/supabase/admin";
import { createHash } from "node:crypto";

const INBOX = process.env.CONTACT_INBOX_EMAIL?.trim() || "info@savannamind.com";

export async function POST(request: Request) {
  let email: string;
  try {
    const text = await request.text();
    if (text.length > 1024) return NextResponse.json({ error: "Request too large" }, { status: 413 });
    const body = JSON.parse(text) as { email?: unknown };
    if (!body || typeof body.email !== "string") throw new Error("Invalid payload");
    email = body.email.trim();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const admin = createAdminClient();
    const id = createHash("sha256").update(email.toLowerCase()).digest("hex");
    const { error } = await admin.storage.from("learner-data").upload(
      `waitlist/${id}.json`,
      JSON.stringify({ email, at: new Date().toISOString() }),
      { contentType: "application/json", upsert: true }
    );
    if (error) throw error;
  } catch {
    return NextResponse.json({ error: "Could not save waitlist signup" }, { status: 503 });
  }

  await sendResendEmail({
    to: INBOX,
    subject: `Learn cohort waitlist — ${email}`,
    html: `<p>New Learn Studio waitlist signup: <strong>${escapeHtml(email)}</strong></p>`,
    replyTo: email,
  });

  return NextResponse.json({ ok: true });
}
