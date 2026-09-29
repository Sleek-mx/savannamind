import { NextResponse } from "next/server";
import { escapeHtml, sendResendEmail } from "@/lib/email/resend";
import { createAdminClient } from "@/lib/supabase/admin";

const INBOX = process.env.CONTACT_INBOX_EMAIL?.trim() || "info@savannamind.com";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  country: string;
  company: string;
  area?: string;
  message: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    const text = await request.text();
    if (text.length > 16_000) {
      return NextResponse.json({ error: "Message too long" }, { status: 413 });
    }
    const input = JSON.parse(text) as Record<string, unknown>;
    if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("Invalid payload");
    const limits = { firstName: 100, lastName: 100, email: 254, phone: 50, country: 100, company: 150, area: 100, message: 5000 } as const;
    const fields = {} as Record<keyof typeof limits, string>;
    for (const [key, max] of Object.entries(limits) as [keyof typeof limits, number][]) {
      const value = input[key];
      if (value !== undefined && typeof value !== "string") throw new Error("Invalid field");
      const trimmed = (value ?? "").toString().trim();
      if (trimmed.length > max) throw new Error("Field too long");
      fields[key] = trimmed;
    }
    payload = fields;
  } catch {
    return NextResponse.json({ error: "Invalid contact details" }, { status: 400 });
  }

  const required = [
    "firstName",
    "lastName",
    "email",
    "country",
    "company",
    "message",
  ] as const;
  for (const key of required) {
    if (!payload[key]?.trim()) {
      return NextResponse.json({ error: `Missing ${key}` }, { status: 400 });
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const subject = `Savanna Mind inquiry — ${payload.company.replace(/[\r\n]/g, " ")}`;
  const html = `
    <p><strong>From:</strong> ${escapeHtml(payload.firstName)} ${escapeHtml(payload.lastName)} &lt;${escapeHtml(payload.email)}&gt;</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone || "—")}</p>
    <p><strong>Country:</strong> ${escapeHtml(payload.country)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(payload.company)}</p>
    <p><strong>Focus:</strong> ${escapeHtml(payload.area || "—")}</p>
    <hr />
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
  `;

  await sendResendEmail({
    to: INBOX,
    subject,
    html,
    replyTo: payload.email,
  });

  try {
    const admin = createAdminClient();
    await admin.storage.from("learner-data").upload(
      `contact/${Date.now()}-${payload.email.replace(/[^a-z0-9@._-]/gi, "_")}.json`,
      JSON.stringify({ ...payload, at: new Date().toISOString() }),
      { contentType: "application/json" }
    );
  } catch {
    /* email is the source of truth if storage write fails */
  }

  return NextResponse.json({ ok: true });
}
