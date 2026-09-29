#!/usr/bin/env node
/**
 * Configure Savanna Mind Supabase auth (Google OAuth + Resend SMTP).
 *
 * Requires SUPABASE_ACCESS_TOKEN from https://supabase.com/dashboard/account/tokens
 * and env vars GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, RESEND_API_KEY.
 *
 * Usage:
 *   SUPABASE_ACCESS_TOKEN=... GOOGLE_CLIENT_ID=... GOOGLE_CLIENT_SECRET=... RESEND_API_KEY=... \
 *     node scripts/configure-supabase-auth.mjs
 */

const PROJECT_REF = "epotmrwulmdpgqzuodwp";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://savannamind-ashy.vercel.app";
const fromAddress = process.env.RESEND_FROM?.match(/<([^>]+)>/)?.[1]
  || process.env.RESEND_FROM?.trim()
  || "onboarding@resend.dev";

const token = process.env.SUPABASE_ACCESS_TOKEN;
const googleId = process.env.GOOGLE_CLIENT_ID;
const googleSecret = process.env.GOOGLE_CLIENT_SECRET;
const resendKey = process.env.RESEND_API_KEY;

if (!token) {
  console.error("Missing SUPABASE_ACCESS_TOKEN");
  process.exit(1);
}

const body = {
  site_url: SITE_URL,
  uri_allow_list: [
    `${SITE_URL}/**`,
    "https://savannamind.com/**",
    "https://www.savannamind.com/**",
    "https://savannamind-ashy.vercel.app/**",
    "https://savannamind-macsinjobs-6649.vercel.app/**",
    "http://localhost:3000/**",
    "http://127.0.0.1:3000/**",
  ].join(","),
  external_google_enabled: Boolean(googleId && googleSecret),
  external_google_client_id: googleId || "",
  external_google_secret: googleSecret || "",
  ...(resendKey
    ? {
        smtp_host: "smtp.resend.com",
        smtp_port: "465",
        smtp_user: "resend",
        smtp_pass: resendKey,
        smtp_admin_email: fromAddress,
        smtp_sender_name: "Savanna Mind",
        mailer_autoconfirm: false,
      }
    : {}),
};

if (!googleId || !googleSecret) {
  console.warn("GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET not set — Google sign-in will stay disabled.");
}
if (!resendKey) {
  console.warn("RESEND_API_KEY not set — SMTP will not be updated.");
}

const res = await fetch(`https://api.supabase.com/v1/projects/${PROJECT_REF}/config/auth`, {
  method: "PATCH",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

const text = await res.text();
if (!res.ok) {
  console.error("Auth config failed:", res.status, text);
  if (res.status === 403 && text.includes("project_admin_write")) {
    console.error(`
Your access token needs Project → Read & write (project_admin_write), not only Auth Config.
Create a new token in Supabase → Access Tokens, add Project read-write for Savanna Mind, update SUPABASE_ACCESS_TOKEN in .env.local, and re-run this script.

Or configure manually in the dashboard:
  Authentication → Providers → Google (Client ID + Secret)
  Authentication → SMTP → Resend (host smtp.resend.com, port 465, user resend, password = RESEND_API_KEY)
  Authentication → URL Configuration → Site URL + redirect allow list
Google redirect URI: https://${PROJECT_REF}.supabase.co/auth/v1/callback
`);
  }
  process.exit(1);
}

console.log("Supabase auth config updated for", PROJECT_REF);
console.log(text);

console.log(`
Also add this Authorized redirect URI in Google Cloud Console:
  https://${PROJECT_REF}.supabase.co/auth/v1/callback
`);
