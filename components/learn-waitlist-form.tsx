"use client";

import { useState, type FormEvent } from "react";
import { Bell } from "lucide-react";

type LearnWaitlistFormProps = {
  emailLabel: string;
  submitLabel: string;
  previewNotice: string;
  blockedNotice: string;
};

export function LearnWaitlistForm({
  emailLabel,
  submitLabel,
  previewNotice,
  blockedNotice,
}: LearnWaitlistFormProps) {
  const [status, setStatus] = useState<"idle" | "blocked">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("blocked");
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <p className="form-note" style={{ flexBasis: "100%", textAlign: "center" }}>
        {previewNotice}
      </p>
      <div className="field">
        <label className="visually-hidden" htmlFor="learn-waitlist-email">
          {emailLabel}
        </label>
        <input
          id="learn-waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your.email@organization.ac.ke"
        />
      </div>
      <button type="submit" className="btn btn--gold">
        <Bell size={16} aria-hidden="true" />
        <span>{submitLabel}</span>
      </button>
      {status === "blocked" ? (
        <p className="form-status" role="status" aria-live="polite" style={{ flexBasis: "100%" }}>
          {blockedNotice}
        </p>
      ) : null}
    </form>
  );
}
