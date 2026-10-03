import { notFound } from "next/navigation";
import { LearnLessonShell } from "@/components/learn/learn-lesson-shell";
import { moduleCurricula } from "@/lib/learn/curriculum/modules";
import { isLocale, type Locale } from "@/lib/i18n/locale";
import { routing } from "@/i18n/routing";

const moduleIds = ["s1", "s2", "s3", "s4", "s5"];

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
