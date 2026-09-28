"use client";

import { useId, useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export type ContactFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  area: string;
  message: string;
  consent: string;
  submit: string;
};

type ContactInquiryFormProps = {
  fields: ContactFormFields;
  areas: string[];
  previewNotice: string;
  blockedNotice: string;
  messagePlaceholder: string;
};

export function ContactInquiryForm({
  fields,
  areas,
  previewNotice,
  blockedNotice,
  messagePlaceholder,
}: ContactInquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "blocked">("idle");
  const consentId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("blocked");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <p className="form-note">{previewNotice}</p>

      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-first-name">{fields.firstName} *</label>
          <input id="contact-first-name" name="firstName" type="text" required autoComplete="given-name" />
        </div>
        <div className="field">
          <label htmlFor="contact-last-name">{fields.lastName} *</label>
          <input id="contact-last-name" name="lastName" type="text" required autoComplete="family-name" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-email">{fields.email} *</label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="contact-phone">{fields.phone}</label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-country">{fields.country} *</label>
          <input id="contact-country" name="country" type="text" required autoComplete="country-name" />
        </div>
        <div className="field">
          <label htmlFor="contact-company">{fields.company} *</label>
          <input id="contact-company" name="company" type="text" required autoComplete="organization" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-area">{fields.area}</label>
        <select id="contact-area" name="area" defaultValue={areas[0]}>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="contact-message">{fields.message} *</label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder={messagePlaceholder}
        />
      </div>

      <div className="checkbox-field">
        <input type="checkbox" required id={consentId} name="consent" />
        <label htmlFor={consentId}>{fields.consent}</label>
      </div>

      {status === "blocked" ? (
        <p className="form-status" role="status" aria-live="polite">
          {blockedNotice}
        </p>
      ) : null}

      <button type="submit" className="btn btn--gold">
        <Send size={16} aria-hidden="true" />
        <span>{fields.submit}</span>
      </button>
    </form>
  );
}
