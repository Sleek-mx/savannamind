"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/routing";

function hrefFor(locale: Locale, pathname: string): string {
  const rest = pathname.replace(/^\/(en|sw)(?=\/|$)/, "") || "/";
  return rest === "/" ? `/${locale}` : `/${locale}${rest}`;
}

export function LangSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() || "/";
  const enHref = hrefFor("en", pathname);
  const swHref = hrefFor("sw", pathname);

  function preserveHash(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    const hash = window.location.hash;
    if (!hash) return;
    event.preventDefault();
    window.location.assign(href + hash);
  }

  return (
    <span className="lang-switch" role="group" aria-label={label}>
      <Link
        href={enHref}
        aria-current={locale === "en" ? "page" : undefined}
        className={locale === "en" ? "is-active" : undefined}
        onClick={(event) => preserveHash(event, enHref)}
      >
        EN
      </Link>
      <Link
        href={swHref}
        aria-current={locale === "sw" ? "page" : undefined}
        className={locale === "sw" ? "is-active" : undefined}
        onClick={(event) => preserveHash(event, swHref)}
      >
        SW
      </Link>
    </span>
  );
}
