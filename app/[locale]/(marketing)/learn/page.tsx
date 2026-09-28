import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Sparkles,
  Clock,
  CheckCircle,
} from "lucide-react";
import { LearnWaitlistForm } from "@/components/learn-waitlist-form";
import {
  isLocale,
  type Locale,
  CONTACT_EMAIL,
} from "@/components/site-header";
import { routing } from "@/i18n/routing";
import { previewModules } from "@/lib/learn/modules";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const copy = {
  en: {
    eyebrow: "SavannaMind Learn",
    title: "AI Literacy for Every African",
    lead: "Learn Studio teaches AI the way school does — definitions first, then worked examples, then practice with feedback — grounded in Kenyan and African contexts. English and Kiswahili, side by side.",
    previewBadge: "Preview",
    previewNote:
      "Learn Studio is a preview: your profile and progress are stored only on your own device. There is no account server and no credential is issued yet.",
    kiboTitle: "Meet Kibo — Your AI Study Companion",
    kiboDesc:
      "Kibo, our African lion companion, is with you through every lesson. Ask questions in English or Kiswahili, get plain-language explanations, and keep your chat history on your own device.",
    tracksHeading: "The Six Learning Modules",
    tracksIntro:
      "One foundation module plus five domain tracks. Each module adapts to your level — beginner, intermediate, or advanced — with real practice, not click-through slides.",
    tracks: previewModules.map((m) => ({
      title: m.titleEn,
      level: "Beginner to advanced",
      duration: "Self-paced",
      desc: m.descEn,
    })),
    waitlistHeading: "Be First in the Next Cohort",
    waitlistDesc: "Guided cohorts are not open yet. Waitlist sign-up is not live.",
    waitlistPreview: `This waitlist does not store emails yet. Write to ${CONTACT_EMAIL} to register interest.`,
    waitlistBlocked: `Your email was not stored. Email ${CONTACT_EMAIL} to register interest.`,
    waitlistEmailLabel: "Email address",
    waitlistBtn: "Join Cohort Waitlist",
    studioCta: "Start learning in the Studio",
    studioNote: "Free preview — local profile only, no account needed.",
  },
  sw: {
    eyebrow: "SavannaMind Learn",
    title: "Elimu ya AI kwa Kila Mwafrika",
    lead: "Learn Studio hufundisha AI kama shule — ufafanuzi kwanza, kisha mifano, kisha mazoezi yenye marejesho — kwa muktadha wa Kenya na Afrika. Kiingereza na Kiswahili, kila wakati.",
    previewBadge: "Onyesho",
    previewNote:
      "Learn Studio ni onyesho: wasifu na maendeleo yako vinahifadhiwa kwenye kifaa chako tu. Hakuna akaunti ya seva na hakuna cheti kinachotolewa bado.",
    kiboTitle: "Kutana na Kibo — Rafiki Yako wa Masomo",
    kiboDesc:
      "Kibo, simba wetu wa Kiafrika, yuko nawe kila somo. Uliza kwa Kiingereza au Kiswahili, pata maelezo ya lugha rahisi, na historia yako inabaki kwenye kifaa chako.",
    tracksHeading: "Moduli Sita za Kujifunza",
    tracksIntro:
      "Moduli moja ya misingi na njia tano za sekta. Kila moduli inabadilika kulingana na kiwango chako — mwanzo, kati, au juu — na mazoezi halisi, si kubonyeza bila kusoma.",
    tracks: previewModules.map((m) => ({
      title: m.titleSw,
      level: "Mwanzo hadi juu",
      duration: "Kasi yako",
      desc: m.descSw,
    })),
    waitlistHeading: "Kuwa wa Kwanza Kwenye Kundi Lijalo",
    waitlistDesc: "Makundi ya mwongozo hayajafunguka. Usajili wa orodha ya awali haujaanza.",
    waitlistPreview: `Orodha hii haihifadhi barua pepe bado. Andika ${CONTACT_EMAIL} kuonyesha nia.`,
    waitlistBlocked: `Barua pepe yako haikuhifadhiwa. Tuma ${CONTACT_EMAIL} kuonyesha nia.`,
    waitlistEmailLabel: "Barua pepe",
    waitlistBtn: "Jiunge na Orodha ya Awali",
    studioCta: "Anza kujifunza kwenye Studio",
    studioNote: "Onyesho huru — wasifu wa kifaa tu, hakuna akaunti.",
  },
};

export default function LearnPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = copy[locale];

  return (
    <article className="learn-page">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                background: "rgba(250, 171, 54, 0.15)",
                color: "var(--color-gold)",
                borderRadius: "var(--radius-sm)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "var(--space-3)",
              }}
            >
              {t.previewBadge}
            </span>
            <h1 className="hero__title">{t.title}</h1>
            <span className="hero__rule" aria-hidden="true" />
            <p className="prose hero__lead">{t.lead}</p>
            <p
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-muted)",
                marginTop: "var(--space-3)",
                borderLeft: "2px solid var(--color-gold)",
                paddingLeft: "var(--space-3)",
              }}
            >
              {t.previewNote}
            </p>
            <p style={{ marginTop: "var(--space-4)" }}>
              <Link
                href={`/${locale}/learn/studio`}
                className="btn btn--primary"
                style={{ display: "inline-flex" }}
              >
                {t.studioCta}
              </Link>
            </p>
            <p
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-muted)",
                marginTop: "var(--space-2)",
              }}
            >
              {t.studioNote}
            </p>
          </div>
          <div className="hero__media" style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                aspectRatio: "16/10",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <img
                src="/hero-section.png"
                alt="African students engaged in digital AI learning"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mascot Section — 2D Kibo artwork */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div
            className="surface"
            style={{
              padding: "var(--space-6)",
              borderRadius: "var(--radius-md)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-6)",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center", marginBottom: "var(--space-2)" }}>
                <Sparkles size={18} style={{ color: "var(--color-gold)" }} />
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-gold)", fontWeight: 700, textTransform: "uppercase" }}>
                  AI Guided Learning
                </span>
              </div>
              <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>{t.kiboTitle}</h2>
              <p className="prose" style={{ fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                {t.kiboDesc}
              </p>
              <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", fontSize: "var(--text-xs)", color: "var(--color-muted)" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <CheckCircle size={14} style={{ color: "var(--color-teal-bright)" }} /> EN / SW
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <CheckCircle size={14} style={{ color: "var(--color-teal-bright)" }} /> Local-only progress
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <CheckCircle size={14} style={{ color: "var(--color-teal-bright)" }} /> Clearable chat history
                </span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "220px",
                  height: "220px",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "2px solid var(--color-gold)",
                  boxShadow: "0 12px 36px rgba(4, 12, 16, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255, 253, 248, 0.04)",
                }}
              >
                <img
                  src="/learn/kibo-2d.png"
                  alt="Kibo the lion, study companion mascot artwork"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module tracks */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.tracksHeading}</h2>
            <p className="prose section-lead">{t.tracksIntro}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-5)" }}>
            {t.tracks.map((track, i) => (
              <div key={i} className="surface" style={{ padding: "var(--space-5)", borderRadius: "var(--radius-md)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-xs)", color: "var(--color-muted)", marginBottom: "var(--space-2)" }}>
                  <span>{track.level}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Clock size={12} /> {track.duration}
                  </span>
                </div>
                <h3 style={{ fontSize: "var(--text-base)", margin: "var(--space-2) 0 var(--space-3)", color: "var(--color-text)" }}>
                  {track.title}
                </h3>
                <p className="prose" style={{ fontSize: "var(--text-sm)" }}>{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Box */}
      <section className="section join">
        <div className="container">
          <div className="surface join__panel">
            <h2 className="join__title">{t.waitlistHeading}</h2>
            <p className="prose join__body">{t.waitlistDesc}</p>
            <LearnWaitlistForm
              emailLabel={t.waitlistEmailLabel}
              submitLabel={t.waitlistBtn}
              previewNotice={t.waitlistPreview}
              blockedNotice={t.waitlistBlocked}
            />
          </div>
        </div>
      </section>
    </article>
  );
}
