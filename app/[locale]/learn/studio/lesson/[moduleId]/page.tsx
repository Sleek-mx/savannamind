import { notFound } from "next/navigation";
import { LearnLessonShell } from "@/components/learn/learn-lesson-shell";
import { moduleCurricula } from "@/lib/learn/curriculum/modules";
import { isLocale, type Locale } from "@/components/site-header";
import { routing } from "@/i18n/routing";

const moduleIds = ["m0", "agr", "hlt", "edu", "biz", "cap"];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    moduleIds.map((moduleId) => ({ locale, moduleId }))
  );
}

export default function LearnLessonPage({
  params,
}: {
  params: { locale: string; moduleId: string };
}) {
  if (!isLocale(params.locale)) notFound();
  if (!moduleCurricula.some((m) => m.id === params.moduleId)) notFound();
  const locale = params.locale as Locale;
  return <LearnLessonShell locale={locale} moduleId={params.moduleId} />;
}
