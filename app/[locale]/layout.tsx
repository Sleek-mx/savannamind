import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  SiteFooter,
  SiteHeader,
  isLocale,
  type Locale,
} from "@/components/site-header";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const seo = {
  en: {
    title: "Advancing AI for Africa’s Future",
    description:
      "savanna mind advances AI for Africa’s future across healthcare, climate, and food security through learning, research, and an innovation lab.",
  },
  sw: {
    title: "Kuendeleza Akili Bandia kwa Mustakabali wa Afrika",
    description:
      "savanna mind inaendeleza Akili Bandia kwa mustakabali wa Afrika katika afya, tabianchi, na usalama wa chakula kupitia ujifunzaji, utafiti, na maabara ya ubunifu.",
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
  const locale = params.locale as Locale;

  return (
    <>
      <SiteHeader locale={locale} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
      <script dangerouslySetInnerHTML={{ __html: langSync }} />
    </>
  );
}
