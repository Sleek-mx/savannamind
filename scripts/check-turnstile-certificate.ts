import { readFileSync } from "node:fs";
import { inflateSync } from "node:zlib";
import {
  assessTurnstile,
  isDummyTurnstileToken,
  missingProductionSecretMessage,
  testSecretInProductionMessage,
  testTokenRejectedMessage,
  verifyTurnstileToken,
  TURNSTILE_COOKIE,
  TURNSTILE_SECRET_ENV,
} from "../lib/security/turnstile";
import { buildCertificatePdf } from "../lib/learn/certificate-pdf";
import { courseCertificateReady } from "../lib/learn/certificate-eligibility";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    console.error(message);
    process.exit(1);
  }
}

const saved = {
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
};

function useEnv(next: { NODE_ENV?: string; VERCEL_ENV?: string; TURNSTILE_SECRET_KEY?: string }) {
  const env = process.env as Record<string, string | undefined>;
  env.NODE_ENV = next.NODE_ENV;
  if (next.VERCEL_ENV === undefined) delete env.VERCEL_ENV;
  else env.VERCEL_ENV = next.VERCEL_ENV;
  if (next.TURNSTILE_SECRET_KEY === undefined) delete env.TURNSTILE_SECRET_KEY;
  else env.TURNSTILE_SECRET_KEY = next.TURNSTILE_SECRET_KEY;
}

function restore() {
  const env = process.env as Record<string, string | undefined>;
  env.NODE_ENV = saved.NODE_ENV;
  if (saved.VERCEL_ENV === undefined) delete env.VERCEL_ENV;
  else env.VERCEL_ENV = saved.VERCEL_ENV;
  if (saved.TURNSTILE_SECRET_KEY === undefined) delete env.TURNSTILE_SECRET_KEY;
  else env.TURNSTILE_SECRET_KEY = saved.TURNSTILE_SECRET_KEY;
}

async function main() {
  assert(isDummyTurnstileToken("XXXX.dummy"), "XXXX. token detected");
  assert(isDummyTurnstileToken("XXXX"), "XXXX token detected");
  assert(!isDummyTurnstileToken("real-token"), "real token is not dummy");

  useEnv({ NODE_ENV: "production", VERCEL_ENV: "production" });
  const missing = await verifyTurnstileToken("anything");
  assert(!missing.ok && missing.status === 503, "missing secret must fail closed");
  assert(missing.ok === false && missing.error === missingProductionSecretMessage(), "missing secret message");
  assert(missing.ok === false && missing.error.includes(TURNSTILE_SECRET_ENV), "message names TURNSTILE_SECRET_KEY");
  assert(missing.ok === false && !missing.error.includes("1x000"), "message does not include a test secret");

  useEnv({
    NODE_ENV: "production",
    VERCEL_ENV: "production",
    TURNSTILE_SECRET_KEY: "1x0000000000000000000000000000000AA",
  });
  const testSecret = await verifyTurnstileToken("XXXX.dummy");
  assert(!testSecret.ok && testSecret.status === 503, "test secret must fail closed");
  assert(testSecret.ok === false && testSecret.error === testSecretInProductionMessage(), "test secret message");
  assert(testSecret.ok === false && !testSecret.error.includes("1x0000000000000000000000000000000AA"), "secret value not echoed");

  const realLooking = "production-secret-not-a-cloudflare-test-key";
  useEnv({ NODE_ENV: "production", VERCEL_ENV: "production", TURNSTILE_SECRET_KEY: realLooking });
  const dummy = await verifyTurnstileToken("XXXX.widget");
  assert(!dummy.ok && dummy.status === 403, "XXXX token rejected in production");
  assert(dummy.ok === false && dummy.error === testTokenRejectedMessage(), "XXXX rejection copy");
  assert(dummy.ok === false && !dummy.error.includes(realLooking), "production secret not printed");

  const bare = await verifyTurnstileToken("XXXX");
  assert(!bare.ok && bare.status === 403, "token XXXX rejected");

  const gated = await assessTurnstile({ headers: { get: () => null } });
  assert(!gated.ok && gated.status === 403, "lesson/state gate rejects a missing cookie in production");

  useEnv({ NODE_ENV: "development", VERCEL_ENV: "development" });
  const local = await verifyTurnstileToken("dev-mock-pass");
  assert(local.ok, "local dummy token still passes");
  if (!local.ok) return;
  const header = `${TURNSTILE_COOKIE}=${encodeURIComponent(local.cookie)}`;
  const allowed = await assessTurnstile({ headers: { get: (name) => (name === "cookie" ? header : null) } });
  assert(allowed.ok, "signed local cookie opens the gate");

  useEnv({ NODE_ENV: "production", VERCEL_ENV: "preview" });
  const preview = await verifyTurnstileToken("XXXX.preview");
  assert(preview.ok, "preview may still use dummy tokens");

  assert(
    !courseCertificateReady({
      modules: { s1: { completed: true }, s2: { completed: true }, s3: { completed: true }, s4: { completed: true }, s5: { completed: true } },
      outcomeBestScore: undefined,
      outcomeCompletedAt: undefined,
    }),
    "modules alone do not unlock the certificate"
  );
  assert(
    courseCertificateReady({
      modules: { s1: { completed: true }, s2: { completed: true }, s3: { completed: true }, s4: { completed: true }, s5: { completed: true } },
      outcomeBestScore: 9,
      outcomeCompletedAt: "2026-10-03T07:23:00.000Z",
    }),
    "certificate unlocks after the outcome check"
  );

  const logo = readFileSync(new URL("../public/logo-full.png", import.meta.url));
  const pdf = await buildCertificatePdf({
    learnerName: "Amina Wanjiku",
    issuedOn: new Date("2026-10-03T07:23:00.000Z"),
    logoPng: logo,
  });
  assert(Buffer.from(pdf.subarray(0, 5)).toString() === "%PDF-", "pdf header");
  const text = extractPdfText(Buffer.from(pdf));
  assert(text.includes("Amina Wanjiku"), "pdf includes learner name");
  assert(text.includes("3 October 2026"), "pdf includes the check date");
  assert(text.includes("Savanna Mind"), "pdf includes Savanna Mind");
  assert(text.includes("Dr. Tawfiq Bashir"), "pdf includes Dr. Tawfiq Bashir");
  assert(Buffer.from(pdf).toString("latin1").includes("/Subtype /Image"), "pdf embeds the logo");

  console.log("turnstile and certificate checks ok");
}

function extractPdfText(bytes: Buffer): string {
  const chunks: Buffer[] = [];
  const latin = bytes.toString("latin1");
  const marker = /\/Length\s+(\d+)[^]*?stream\r?\n/g;
  let match: RegExpExecArray | null;
  while ((match = marker.exec(latin))) {
    const length = Number(match[1]);
    const start = match.index + match[0].length;
    const raw = bytes.subarray(start, start + length);
    try {
      chunks.push(inflateSync(raw));
    } catch {
      chunks.push(Buffer.from(raw));
    }
  }
  const operators = Buffer.concat(chunks).toString("latin1");
  const decoded = operators.replace(/<([0-9A-Fa-f\s]+)>/g, (_full, hex: string) => {
    const clean = hex.replace(/\s+/g, "");
    if (clean.length % 2 !== 0) return "";
    let text = "";
    for (let i = 0; i < clean.length; i += 2) {
      text += String.fromCharCode(Number.parseInt(clean.slice(i, i + 2), 16));
    }
    return text;
  });
  return decoded;
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  })
  .finally(restore);
