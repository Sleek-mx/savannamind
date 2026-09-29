#!/usr/bin/env node
/**
 * Push env vars from .env.local to Vercel (production).
 * Requires: vercel login, project linked (.vercel/project.json)
 *
 *   node scripts/sync-vercel-env.mjs
 */

import { readFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const ENV_FILE = resolve(ROOT, ".env.local");

const KEYS = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
  "RESEND_FROM",
  "CONTACT_INBOX_EMAIL",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
  "BAI_API_KEY",
  "BAI_BASE_URL",
  "BAI_MODEL",
];

function parseEnv(text) {
  const out = {};
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

const whoami = spawnSync("vercel", ["whoami"], { encoding: "utf8" });
if (whoami.status !== 0) {
  console.error("Vercel CLI not logged in. Run: vercel login");
  process.exit(1);
}

if (!existsSync(ENV_FILE)) {
  console.error("Missing .env.local");
  process.exit(1);
}

const env = parseEnv(readFileSync(ENV_FILE, "utf8"));

for (const key of KEYS) {
  const value = env[key];
  if (!value) {
    console.warn(`skip ${key} (empty in .env.local)`);
    continue;
  }
  console.log(`sync ${key} → production`);
  const r = spawnSync("vercel", ["env", "add", key, "production", "--force", "--yes"], {
    input: `${value}\n`,
    encoding: "utf8",
    cwd: ROOT,
    stdio: ["pipe", "pipe", "pipe"],
  });
  if (r.status !== 0) {
    console.error(r.stderr || r.stdout);
    process.exit(1);
  }
}

console.log("Done. Redeploy: vercel --prod");
