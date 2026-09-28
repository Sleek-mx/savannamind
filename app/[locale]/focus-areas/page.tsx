import Link from "next/link";
import { notFound } from "next/navigation";
import { HeartPulse, CloudSun, Sprout, ArrowRight, ShieldCheck } from "lucide-react";
import {
  focusAreas,
  isLocale,
  p,
  shellCopy,
  type Locale,
} from "@/components/site-header";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const copy = {
  en: {
    eyebrow: "Our Focus Areas",
    title: "Where Algorithms Serve Communities",
    lead: "We direct AI capabilities toward Africa's most pressing developmental challenges—targeting healthcare access, climate vulnerability, and food security with context-first solutions.",
    ctaLead: "Partner With Us on Focus Initiatives",
    ctaBody: "We collaborate with local healthcare clinics, agricultural cooperatives, and research institutions across Africa.",
  },
  sw: {
    eyebrow: "Maeneo Yetu ya Msisitizo",
    title: "Ambapo Algoritemu Hutumikia Jamii",
    lead: "Tunaelekeza uwezo wa Akili Bandia kuelekea changamoto kubwa zaidi za kimaendeleo za Afrika—tukilenga ufikiaji wa afya, udhaifu wa tabianchi, na usalama wa chakula kwa suluhisho zinazozingatia mazingira halisi.",
    ctaLead: "Shirikiana Nasi katika Mipango ya Kipaumbele",
    ctaBody: "Tunashirikiana na vituo vya afya vya mitaani, vyama vya ushirika vya wakulima, na taasisi za utafiti kote barani Afrika.",
  },
};

const sectorIcons = {
  health: HeartPulse,
  climate: CloudSun,
  food: Sprout,
} as const;

export default function FocusAreasPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = copy[locale];
  const shell = shellCopy(locale);
  const sectors = focusAreas(locale);

  return (
    <article className="focus-areas-page">
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="hero__title">{t.title}</h1>
            <span className="hero__rule" aria-hidden="true" />
            <p className="prose hero__lead">{t.lead}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="focus__list">
            {sectors.map((sector, index) => {
              const Icon = sectorIcons[sector.icon];
              return (
                <article
                  key={sector.id}
                  id={sector.id}
                  className="focus-item"
                  style={{ scrollMarginTop: "100px" }}
                >
                  <span className="focus-item__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="focus-item__body">
                    <h2 className="focus-item__title">
                      <Icon size={28} strokeWidth={1.75} aria-hidden="true" />
                      {sector.title}
                    </h2>
                    <p className="prose" style={{ fontSize: "var(--text-lg)" }}>
                      {sector.body}
                    </p>
                    <div
                      style={{
                        marginTop: "var(--space-4)",
                        padding: "var(--space-4)",
                        background: "var(--surface)",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "var(--text-xs)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--color-gold)",
                          marginBottom: "var(--space-2)",
                        }}
                      >
                        {locale === "en" ? "Key Capabilities & Deployments" : "Uwezo Muhimu na Utekelezaji"}
                      </h3>
                      <p className="focus-item__support">{sector.support}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section join">
        <div className="container">
          <div className="surface join__panel">
            <h2 className="join__title">{t.ctaLead}</h2>
            <p className="prose join__body">{t.ctaBody}</p>
            <div className="cluster">
              <Link href={p(locale, "/contact")} className="btn btn--gold">
                {shell.contactCta}
              </Link>
              <Link href={p(locale, "/projects")} className="btn btn--ghost">
                {shell.nav.projects}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
