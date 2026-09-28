"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function OnboardingLocaleSwitch({ locale }: { locale: "en" | "sw" }) {
  const pathname = usePathname();
  const base = pathname.replace(/^\/(en|sw)/, "") || "/learn/studio";

  return (
    <div
      className="inline-flex rounded-pill border border-learn-teal/25 bg-white p-1 text-sm font-semibold shadow-sm"
      role="group"
      aria-label="Language"
    >
      <Link
        href={`/en${base}`}
        className={cn(
          "px-4 py-1.5 rounded-pill transition-colors",
          locale === "en"
            ? "bg-learn-teal text-white"
            : "text-learn-muted hover:text-learn-night"
        )}
      >
        EN
      </Link>
      <Link
        href={`/sw${base}`}
        className={cn(
          "px-4 py-1.5 rounded-pill transition-colors",
          locale === "sw"
            ? "bg-learn-teal text-white"
            : "text-learn-muted hover:text-learn-night"
        )}
      >
        SW
      </Link>
    </div>
  );
}
