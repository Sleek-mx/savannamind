import { Suspense } from "react";
import { notFound } from "next/navigation";
import { LearnStudioApp } from "@/components/learn/learn-studio-app";
import { isLocale, type Locale } from "@/components/site-header";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LearnStudioPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  return (
    <Suspense
      fallback={
        <div className="learn-studio min-h-[50vh] flex items-center justify-center text-learn-muted">
          {locale === "sw" ? "Inapakia…" : "Loading…"}
        </div>
      }
    >
      <LearnStudioApp locale={locale} />
    </Suspense>
  );
}
