import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  isLocale,
  type Locale,
} from "@/lib/i18n/locale";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const seo = {
  en: {
    title: "Savanna Mind — Learn Practical AI",
    description:
      "Sign in to Savanna Mind and build practical AI skills for Africa through guided lessons and hands-on practice.",
  },
  sw: {
    title: "Savanna Mind — Jifunze AI kwa Vitendo",
    description:
      "Ingia Savanna Mind na ujenge ujuzi wa AI kwa vitendo kwa Afrika kupitia masomo yanayoongozwa na mazoezi ya vitendo.",
  },
} as const;

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = isLocale(params.locale)
    ? (params.locale as Locale)
    : routing.defaultLocale;
  return {
    title: { absolute: seo[locale].title },
    description: seo[locale].description,
    alternates: {
      languages: {
        en: `/${"en"}`,
        sw: `/${"sw"}`,
      },
    },
  };
}

/** Keeps <html lang> in sync with the active locale segment. */
const langSync = `
(function () {
  var m = window.location.pathname.match(/^\\/(en|sw)(\\/|$)/);
  if (m) document.documentElement.setAttribute("lang", m[1]);
})();
`;

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return (
    <>
      {children}
      <script dangerouslySetInnerHTML={{ __html: langSync }} />
    </>
  );
}
