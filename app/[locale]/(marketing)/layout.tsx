import {
  SiteFooter,
  SiteHeader,
  isLocale,
  type Locale,
} from "@/components/site-header";
import { routing } from "@/i18n/routing";

export default function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = (isLocale(params.locale) ? params.locale : routing.defaultLocale) as Locale;

  return (
    <div className="site-body">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader locale={locale} />
      <div id="main-content" className="site-shell">
        <main>{children}</main>
      </div>
      <SiteFooter locale={locale} />
    </div>
  );
}
