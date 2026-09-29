/** Auth-shaped object used to derive a display name without importing the SDK. */
export type LearnerNameSource = {
  email?: string | null;
  user_metadata?: {
    full_name?: unknown;
    name?: unknown;
    [key: string]: unknown;
  } | null;
};

function metaString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Prefer auth metadata, then the email local-part, then `fallback`.
 * Capped at 100 chars to match cloud profile validation.
 */
export function deriveLearnerName(
  user: LearnerNameSource | null | undefined,
  fallback = "Learner"
): string {
  const meta = user?.user_metadata;
  const fullName = metaString(meta?.full_name);
  if (fullName) return fullName.slice(0, 100);
  const name = metaString(meta?.name);
  if (name) return name.slice(0, 100);
  const prefix = user?.email?.split("@")[0]?.trim() ?? "";
  if (prefix) return prefix.slice(0, 100);
  return fallback.slice(0, 100);
}
