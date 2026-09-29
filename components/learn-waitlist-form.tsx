"use client";

import { useState, type FormEvent } from "react";
import { Bell } from "lucide-react";

type LearnWaitlistFormProps = {
  emailLabel: string;
  submitLabel: string;
  previewNotice: string;
  blockedNotice: string;
  successNotice?: string;
};

export function LearnWaitlistForm({
  emailLabel,
  submitLabel,
  previewNotice,
  blockedNotice,
  successNotice = "You're on the list. We'll email you when the next cohort opens.",
}: LearnWaitlistFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: String(data.get("email") ?? "") }),
      });
      if (!res.ok) throw new Error("waitlist failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      {status === "idle" ? (
        <p className="form-note" style={{ flexBasis: "100%", textAlign: "center" }}>
          {previewNotice}
        </p>
      ) : null}
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
      <button type="submit" className="btn btn--gold" disabled={status === "sending"}>
        <Bell size={16} aria-hidden="true" />
        <span>{status === "sending" ? "…" : submitLabel}</span>
      </button>
      {status === "sent" ? (
        <p className="form-status form-status--ok" role="status" aria-live="polite" style={{ flexBasis: "100%" }}>
          {successNotice}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="form-status" role="status" aria-live="polite" style={{ flexBasis: "100%" }}>
          {blockedNotice}
        </p>
      ) : null}
    </form>
  );
}
