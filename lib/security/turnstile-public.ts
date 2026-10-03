export const TURNSTILE_SECRET_ENV = "TURNSTILE_SECRET_KEY";
export const TURNSTILE_SITE_KEY_ENV = "NEXT_PUBLIC_TURNSTILE_SITE_KEY";

export function missingProductionSecretMessage(): string {
  return `${TURNSTILE_SECRET_ENV} is missing from the Vercel Production environment.`;
}

export function testSecretInProductionMessage(): string {
  return `${TURNSTILE_SECRET_ENV} in the Vercel Production environment is a Cloudflare test key. Set ${TURNSTILE_SECRET_ENV} to the real secret.`;
}

export function missingProductionSiteKeyMessage(): string {
  return `${TURNSTILE_SITE_KEY_ENV} is missing from the Vercel Production environment.`;
}

export function testSiteKeyInProductionMessage(): string {
  return `${TURNSTILE_SITE_KEY_ENV} in the Vercel Production environment is a Cloudflare test site key. Set ${TURNSTILE_SITE_KEY_ENV} to the real site key.`;
}

export function testTokenRejectedMessage(): string {
  return "Test Turnstile tokens are not accepted in production.";
}

export function isTestTurnstileSiteKey(key: string): boolean {
  const value = key.trim();
  return (
    value.startsWith("1x00000000000000000000") ||
    value.startsWith("2x00000000000000000000") ||
    value.startsWith("3x00000000000000000000")
  );
}
