import { notFound } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { ContactInquiryForm } from "@/components/contact-inquiry-form";
import {
  isLocale,
  type Locale,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  OFFICE_ADDRESS,
  DIRECTIONS_HREF,
} from "@/components/site-header";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const copy = {
  en: {
    eyebrow: "Contact SavannaMind",
    title: "We Are Open to Conversation",
    lead: "Get in touch with us. Our door is always open for a good cup of coffee at Delta Riverside Office Park, or connect with our research and enterprise team online.",
    formHeading: "How Can We Help You?",
    formIntro: "Send us a message and our team will respond by email.",
    previewNotice: `Submissions are delivered securely to our team. You can also email ${CONTACT_EMAIL} or call ${CONTACT_PHONE}.`,
    blockedNotice: `We could not send your message. Please email ${CONTACT_EMAIL} or call ${CONTACT_PHONE}.`,
    successNotice: "Thank you — your message was sent. We will reply to your email soon.",
    messagePlaceholder: "Tell us about your organization or inquiry...",
    fields: {
      firstName: "First name",
      lastName: "Last name",
      email: "Professional Email",
      phone: "Phone number",
      country: "Country / Region",
      company: "Organization / Company",
      area: "Focus Interest",
      message: "Message",
      consent: "I agree to allow SavannaMind to store and process my data in compliance with Kenya ODPC standards.",
      submit: "Send Message",
    },
    areas: [
      "Healthcare Access & Disease Prevention",
      "Climate Vulnerability & Early Warning",
      "Food Insecurity & Precision Agriculture",
      "School Connectivity & Adaptive EdTech",
      "Workforce Reskilling & Future of Work",
      "Research Partnership or Dataset Access",
    ],
    infoHeading: "Reach Us Directly",
    kenyaOffice: "Corporate Office",
    directions: "Get directions on Google Maps",
    privacyHeading: "ODPC Compliance Notice",
    privacyNotice: "SavannaMind protects your personal data under the Kenya Data Protection Act (ODPC).",
  },
  sw: {
    eyebrow: "Wasiliana na SavannaMind",
    title: "Mlango Wetu U Wazi kwa Mazungumzo",
    lead: "Wasiliana nasi. Mlango wetu uko wazi kila wakati kwa kikombe kizuri cha kahawa katika Delta Riverside Office Park, au wasiliana na timu yetu ya utafiti mtandaoni.",
    formHeading: "Tunawezaje Kukusaidia?",
    formIntro: "Tutumie ujumbe na timu yetu itakujibu kwa barua pepe.",
    previewNotice: `Ujumbe unafikishwa kwa timu yetu kwa usalama. Unaweza pia kutuma barua pepe ${CONTACT_EMAIL} au kupiga ${CONTACT_PHONE}.`,
    blockedNotice: `Hatukuweza kutuma ujumbe wako. Tafadhali tuma barua pepe ${CONTACT_EMAIL} au piga ${CONTACT_PHONE}.`,
    successNotice: "Asante — ujumbe wako umetumwa. Tutajibu barua pepe yako hivi karibuni.",
    messagePlaceholder: "Tuambie kuhusu shirika lako au ombi lako...",
    fields: {
      firstName: "Jina la kwanza",
      lastName: "Jina la ukoo",
      email: "Barua pepe ya kikazi",
      phone: "Nambari ya simu",
      country: "Nchi / Eneo",
      company: "Taasisi / Shirika",
      area: "Eneo la Nia",
      message: "Ujumbe",
      consent: "Ninakubali kuruhusu SavannaMind kuhifadhi na kuchakata data yangu kulingana na sheria ya ODPC ya Kenya.",
      submit: "Tuma Ujumbe",
    },
    areas: [
      "Ufikiaji wa Afya na Kuzuia Magonjwa",
      "Udhaifu wa Tabianchi na Tahadhari za Mapema",
      "Usalama wa Chakula na Kilimo cha Usahihi",
      "Mtandao wa Shule na Teknolojia ya Elimu",
      "Kukuza Ujuzi wa Kazi na Ajira za Baadaye",
      "Ushirikiano wa Utafiti au Upatikanaji wa Data",
    ],
    infoHeading: "Wasiliana Nasi Moja kwa Moja",
    kenyaOffice: "Ofisi Kuu",
    directions: "Pata maelekezo kupitia Google Maps",
    privacyHeading: "Taarifa ya Uzingatiaji wa ODPC",
    privacyNotice: "SavannaMind inalinda data yako ya kibinafsi chini ya Sheria ya Kulinda Data ya Kenya (ODPC).",
  },
};

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = copy[locale];

  return (
    <article className="contact-page">
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

      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="contact-grid">
            <div className="surface" style={{ padding: "var(--space-6)", borderRadius: "var(--radius-md)" }}>
              <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-2)" }}>{t.formHeading}</h2>
              <p className="prose" style={{ fontSize: "var(--text-sm)", marginBottom: "var(--space-6)" }}>
                {t.formIntro}
              </p>
              <ContactInquiryForm
                fields={t.fields}
                areas={t.areas}
                previewNotice={t.previewNotice}
                blockedNotice={t.blockedNotice}
                successNotice={t.successNotice}
                messagePlaceholder={t.messagePlaceholder}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <div className="surface" style={{ padding: "var(--space-6)", borderRadius: "var(--radius-md)" }}>
                <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-4)" }}>{t.infoHeading}</h3>

                <div style={{ display: "flex", gap: "var(--space-3)", marginBottom: "var(--space-4)", alignItems: "flex-start" }}>
                  <MapPin size={20} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 600 }}>{t.kenyaOffice}</h4>
                    <p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>{OFFICE_ADDRESS}</p>
                    <a
                      href={DIRECTIONS_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                      style={{ fontSize: "var(--text-xs)", marginTop: "var(--space-1)", display: "inline-flex", alignItems: "center", gap: "4px" }}
                    >
                      {t.directions}
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "var(--space-3)", marginBottom: "var(--space-4)", alignItems: "center" }}>
                  <Phone size={20} style={{ color: "var(--color-teal-bright)", flexShrink: 0 }} />
                  <div>
                    <a href={CONTACT_PHONE_HREF} style={{ color: "var(--color-text)", fontSize: "var(--text-sm)", textDecoration: "none" }}>
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                  <Mail size={20} style={{ color: "var(--color-teal-bright)", flexShrink: 0 }} />
                  <div>
                    <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--color-text)", fontSize: "var(--text-sm)", textDecoration: "none" }}>
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="surface"
                style={{
                  padding: "var(--space-5)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(38, 169, 171, 0.3)",
                }}
              >
                <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-2)" }}>
                  <ShieldCheck size={20} style={{ color: "var(--color-gold)" }} />
                  <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 600 }}>{t.privacyHeading}</h4>
                </div>
                <p style={{ color: "var(--color-muted)", fontSize: "var(--text-xs)" }}>
                  {t.privacyNotice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
