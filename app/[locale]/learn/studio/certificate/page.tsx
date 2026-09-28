import { notFound } from "next/navigation";
import { CertificateView } from "@/components/learn/certificate-view";
import { isLocale, type Locale } from "@/components/site-header";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LearnCertificatePage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  return <CertificateView locale={locale} />;
}
