import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

export type { Locale };
export { routing };

/** Narrow an arbitrary route segment to a supported locale. */
export function isLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}
