/**
 * Server-side Cloudflare Turnstile gate.
 * A signed httpOnly cookie is issued only after siteverify succeeds.
 * Production rejects test secrets and tokens that start with XXXX, and fails
 * closed when TURNSTILE_SECRET_KEY is missing. The secret is never returned.
 */

import {
  isTestTurnstileSiteKey,
  missingProductionSecretMessage,
  testSecretInProductionMessage,
  testTokenRejectedMessage,
  TURNSTILE_SECRET_ENV,
} from "./turnstile-public";

export {
  isTestTurnstileSiteKey,
  missingProductionSecretMessage,
  missingProductionSiteKeyMessage,
  testSecretInProductionMessage,
  testSiteKeyInProductionMessage,
  testTokenRejectedMessage,
  TURNSTILE_SECRET_ENV,
  TURNSTILE_SITE_KEY_ENV,
} from "./turnstile-public";

export const TURNSTILE_COOKIE = "sm_turnstile_pass";
export const TURNSTILE_MAX_AGE_SEC = 60 * 60 * 24;

const DEV_HMAC_KEY = "dev-local-turnstile";
const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const TEST_SECRET_PREFIXES = [
  "1x0000000000000000000000000000000AA",
  "2x0000000000000000000000000000000AA",
  "3x0000000000000000000000000000000AA",
];

/** Live Vercel production. Preview and local dev stay on the dummy-token path. */
export function isProductionDeployment(): boolean {
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv === "preview" || vercelEnv === "development") return false;
  return vercelEnv === "production" || process.env.NODE_ENV === "production";
}

export function configuredTurnstileSecret(): string {
  return process.env.TURNSTILE_SECRET_KEY?.trim() ?? "";
}

export function isTestTurnstileSecret(secret: string): boolean {
  const value = secret.trim();
  if (!value) return false;
  return TEST_SECRET_PREFIXES.some((prefix) => value.startsWith(prefix)) || isTestTurnstileSiteKey(value);
}

/** Dummy widget tokens and the local bypass token. */
export function isDummyTurnstileToken(token: string): boolean {
  return token === "dev-mock-pass" || token.startsWith("XXXX");
}

/** Key used to sign the pass cookie. Null in production when the secret is unusable. */
export function turnstileSigningSecret(): string | null {
  const secret = configuredTurnstileSecret();
  if (isProductionDeployment()) {
    if (!secret || isTestTurnstileSecret(secret)) return null;
    return secret;
  }
  if (secret && !isTestTurnstileSecret(secret)) return secret;
  return DEV_HMAC_KEY;
}

export type TurnstileDecision =
  | { ok: true }
  | {
      ok: false;
      status: 403 | 503;
      code: "turnstile_required" | "turnstile_misconfigured";
      error: string;
    };

export type TurnstileVerifyResult =
  | { ok: true; cookie: string }
  | {
      ok: false;
      status: 400 | 403 | 500 | 503;
      code: "turnstile_required" | "turnstile_misconfigured" | "turnstile_rejected" | "turnstile_error";
      error: string;
    };

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
}

async function hmac(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return bytesToBase64Url(new Uint8Array(signature));
}

export async function signTurnstileCookie(secret: string, nowMs = Date.now()): Promise<string> {
  const exp = Math.floor(nowMs / 1000) + TURNSTILE_MAX_AGE_SEC;
  const payload = `v1.${exp}`;
  const signature = await hmac(secret, payload);
  return `${payload}.${signature}`;
}

export async function turnstileCookieValid(
  value: string | undefined,
  secret: string,
  nowMs = Date.now()
): Promise<boolean> {
  if (!value || !secret) return false;
  const parts = value.split(".");
  if (parts.length !== 3) return false;
  const [version, expText, signature] = parts;
  if (version !== "v1" || !expText || !signature) return false;
  const exp = Number(expText);
  if (!Number.isFinite(exp) || exp * 1000 <= nowMs) return false;
  const expected = await hmac(secret, `v1.${expText}`);
  return timingSafeEqual(expected, signature);
}

export function readRequestCookie(request: { headers: { get(name: string): string | null } }, name: string): string | undefined {
  const header = request.headers.get("cookie");
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const trimmed = part.trim();
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq);
    if (key !== name) continue;
    const raw = trimmed.slice(eq + 1);
    try {
      return decodeURIComponent(raw);
    } catch {
      return raw;
    }
  }
  return undefined;
}

function productionSecretDecision(): Exclude<TurnstileDecision, { ok: true }> | null {
  if (!isProductionDeployment()) return null;
  const secret = configuredTurnstileSecret();
  if (!secret) {
    return {
      ok: false,
      status: 503,
      code: "turnstile_misconfigured",
      error: missingProductionSecretMessage(),
    };
  }
  if (isTestTurnstileSecret(secret)) {
    return {
      ok: false,
      status: 503,
      code: "turnstile_misconfigured",
      error: testSecretInProductionMessage(),
    };
  }
  return null;
}

export async function assessTurnstile(request: {
  headers: { get(name: string): string | null };
}): Promise<TurnstileDecision> {
  const misconfigured = productionSecretDecision();
  if (misconfigured) return misconfigured;
  const secret = turnstileSigningSecret();
  if (!secret) {
    return {
      ok: false,
      status: 503,
      code: "turnstile_misconfigured",
      error: missingProductionSecretMessage(),
    };
  }
  const cookie = readRequestCookie(request, TURNSTILE_COOKIE);
  const valid = await turnstileCookieValid(cookie, secret);
  if (!valid) {
    return {
      ok: false,
      status: 403,
      code: "turnstile_required",
      error: "Human verification is required before this request.",
    };
  }
  return { ok: true };
}

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string
): Promise<TurnstileVerifyResult> {
  const trimmed = token.trim();
  if (!trimmed) {
    return { ok: false, status: 400, code: "turnstile_rejected", error: "Missing verification token" };
  }

  const misconfigured = productionSecretDecision();
  if (misconfigured) return misconfigured;

  if (isProductionDeployment() && isDummyTurnstileToken(trimmed)) {
    return {
      ok: false,
      status: 403,
      code: "turnstile_rejected",
      error: testTokenRejectedMessage(),
    };
  }

  const signingSecret = turnstileSigningSecret();
  if (!signingSecret) {
    return {
      ok: false,
      status: 503,
      code: "turnstile_misconfigured",
      error: missingProductionSecretMessage(),
    };
  }

  if (!isProductionDeployment() && isDummyTurnstileToken(trimmed)) {
    return { ok: true, cookie: await signTurnstileCookie(signingSecret) };
  }

  const secret = configuredTurnstileSecret();
  if (!secret) {
    return {
      ok: false,
      status: 503,
      code: "turnstile_misconfigured",
      error: `${TURNSTILE_SECRET_ENV} is not set.`,
    };
  }

  try {
    const formData = new FormData();
    formData.append("secret", secret);
    formData.append("response", trimmed);
    if (remoteIp) formData.append("remoteip", remoteIp);

    const verifyRes = await fetch(SITEVERIFY_URL, { method: "POST", body: formData });
    const verifyData = (await verifyRes.json()) as {
      success?: boolean;
      "error-codes"?: string[];
    };

    if (verifyData.success) {
      return { ok: true, cookie: await signTurnstileCookie(signingSecret) };
    }

    const codes = Array.isArray(verifyData["error-codes"])
      ? verifyData["error-codes"].filter((code) => typeof code === "string")
      : [];
    return {
      ok: false,
      status: 403,
      code: "turnstile_rejected",
      error: codes.length
        ? `Verification failed. Please retry. (${codes.join(", ")})`
        : "Verification failed. Please retry.",
    };
  } catch {
    return {
      ok: false,
      status: 500,
      code: "turnstile_error",
      error: "Verification server error",
    };
  }
}

export function turnstileCookieOptions() {
  return {
    path: "/",
    httpOnly: true,
    sameSite: "lax" as const,
    secure: isProductionDeployment(),
    maxAge: TURNSTILE_MAX_AGE_SEC,
  };
}
