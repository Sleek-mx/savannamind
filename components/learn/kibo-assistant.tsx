"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MessageCircle, RotateCcw, Send, Trash2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LearnProfile } from "@/lib/learn/types";
import {
  clearTutorHistory,
  loadTutorHistory,
  saveTutorMessages,
  type TutorMessage,
} from "@/lib/learn/storage";

const suggestions = (locale: "en" | "sw", band: LearnProfile["ageBand"]) => {
  if (locale === "sw") {
    if (band === "kids") {
      return ["AI ni nini?", "Nifundishe kwa maneno rahisi", "Ninaweza kushiriki nini?"];
    }
    return ["Fafanua neno “model”", "Mfano kwa kazi yangu", "Ninathibitishaje jibu la AI?"];
  }
  if (band === "kids") {
    return ["What is AI?", "Explain in simple words", "What should I never share?"];
  }
  return ["Define “model” for me", "Example for my work", "How do I verify AI answers?"];
};

import type { CardContext } from "@/lib/learn/card-context";

export function KiboAssistant({
  locale,
  profile,
  struggleNudge,
  moduleId,
  layout = "fab",
  cardContext,
}: {
  locale: "en" | "sw";
  profile: LearnProfile;
  struggleNudge?: boolean;
  moduleId?: string;
  layout?: "fab" | "embedded";
  cardContext?: CardContext | null;
}) {
  const embedded = layout === "embedded";
  const kidsBand = profile.ageBand === "kids";
  const [open, setOpen] = useState(embedded);
  const [messages, setMessages] = useState<TutorMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<"unknown" | "ready" | "offline">("unknown");
  const [idleNudge, setIdleNudge] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const isSw = locale === "sw";

  // Load persisted local history once.
  useEffect(() => {
    setMessages(loadTutorHistory());
  }, []);

  // Light health probe: only checks server configuration, never claims a live model reply.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/learn/tutor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "ping", locale }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled) setStatus(d.configured === false ? "offline" : "unknown");
      })
      .catch(() => {
        if (!cancelled) setStatus("offline");
      });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  useEffect(() => {
    const reset = () => {
      setIdleNudge(false);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIdleNudge(true), 90_000);
    };
    reset();
    window.addEventListener("pointerdown", reset);
    window.addEventListener("keydown", reset);
    return () => {
      window.removeEventListener("pointerdown", reset);
      window.removeEventListener("keydown", reset);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  useEffect(() => {
    if (struggleNudge) {
      setIdleNudge(true);
    }
  }, [struggleNudge]);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const persist = useCallback((next: TutorMessage[]) => {
    setMessages(next);
    saveTutorMessages(next);
  }, []);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;
      setOpen(true);
      setDraft("");

      const userMsg: TutorMessage = { role: "user", text: trimmed, at: new Date().toISOString() };
      const history = [...messages, userMsg];
      persist(history);
      setLoading(true);
      try {
        const res = await fetch("/api/learn/tutor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: trimmed,
            locale,
            ageBand: profile.ageBand,
            career: profile.career,
            moduleId,
            history: history
              .slice(-8, -1)
              .map((m) => ({ role: m.role, text: m.text })),
          }),
        });
        const data = await res.json();
        if (data.configured === false) {
          setStatus("offline");
        } else if (res.ok && data.reply) {
          setStatus("ready");
        }
        persist([
          ...history,
          {
            role: "assistant",
            text:
              data.reply ??
              (isSw ? "Samahani, jaribu tena." : "Sorry, try again."),
            at: new Date().toISOString(),
          },
        ]);
      } catch {
        setStatus("offline");
        persist([
          ...history,
          {
            role: "assistant",
            text: isSw
              ? "Mtandao haupatikani. Gusa “Jaribu tena” ukiwa mtandaoni."
              : "Network error. Tap “Retry” when you are back online.",
            at: new Date().toISOString(),
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [isSw, loading, messages, moduleId, persist, profile.ageBand, profile.career, locale]
  );

  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const statusLabel =
    status === "ready"
      ? isSw ? "AI tayari" : "AI ready"
      : status === "offline"
        ? isSw ? "AI haipatikani" : "AI offline"
        : isSw ? "Tayari kusaidia" : "Here to help";

  const panel = open ? (
        <div
          className={cn("kibo-panel", embedded && "kibo-panel-embedded")}
          role="dialog"
          aria-label={isSw ? "Msaidizi Kibo" : "Kibo assistant"}
        >
          <div className="kibo-panel-head">
            <div className="flex items-center gap-2">
              <Image src="/learn/kibo-2d.png" alt="" width={36} height={36} className="kibo-panel-avatar" />
              <div>
                <p className="font-bold text-sm">Kibo</p>
                <p className="text-xs text-learn-muted">{statusLabel}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {!embedded && messages.length > 0 && (
                <button
                  type="button"
                  className="kibo-icon-btn"
                  aria-label={isSw ? "Futa historia" : "Clear history"}
                  title={isSw ? "Futa historia" : "Clear history"}
                  onClick={() => {
                    clearTutorHistory();
                    setMessages([]);
                  }}
                >
                  <Trash2 size={16} />
                </button>
              )}
              {!embedded && (
                <button type="button" onClick={() => setOpen(false)} aria-label={isSw ? "Funga" : "Close"}>
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {embedded && (
            <p className="kibo-embedded-prompt text-xs text-learn-muted px-3 pt-2">
              {isSw ? "Uliza chochote kuhusu kadi hii." : "Ask anything about this card."}
            </p>
          )}
          {embedded && cardContext?.title && (
            <p className="kibo-card-context text-xs px-3 pb-1 text-[#1e2a2e] font-medium">
              {cardContext.title}
            </p>
          )}

          <div ref={listRef} className="kibo-panel-body" aria-live="polite">
            {(idleNudge || struggleNudge) && messages.length === 0 && (
              <p className="kibo-note kibo-note-nudge">
                {isSw
                  ? "Uliza swali lako hapa chini — nitaeleza kwa maneno rahisi."
                  : "Type your question below — I will explain in plain language."}
              </p>
            )}
            {messages.length === 0 && (
              <p className="kibo-note">
                {isSw
                  ? "Andika swali lako. Usiweke siri, vitambulisho, wala taarifa za mgonjwa."
                  : "Type your question. Do not share secrets, IDs, or patient details."}
              </p>
            )}
            {messages.map((msg, i) => (
              <p
                key={i}
                className={cn(
                  "rounded-xl px-3 py-2 whitespace-pre-wrap",
                  msg.role === "user"
                    ? "bg-learn-teal/10 ml-8"
                    : "bg-learn-cream mr-4 border border-learn-teal/10"
                )}
              >
                {msg.text}
              </p>
            ))}
            {loading && (
              <p className="kibo-thinking" role="status">
                {isSw ? "Kibo anafikiria" : "Kibo is thinking"}
                <span className="kibo-thinking-dots" aria-hidden>
                  <i>.</i>
                  <i>.</i>
                  <i>.</i>
                </span>
              </p>
            )}
          </div>

          <form
            className="kibo-panel-form"
            onSubmit={(e) => {
              e.preventDefault();
              send(draft);
            }}
          >
            {!loading && status === "offline" && lastUser && (
              <button
                type="button"
                className="kibo-retry"
                onClick={() => send(lastUser.text)}
              >
                <RotateCcw size={14} aria-hidden />
                {isSw ? "Jaribu tena" : "Retry last question"}
              </button>
            )}
            {!kidsBand ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  maxLength={500}
                  placeholder={isSw ? "Uliza Kibo…" : "Ask Kibo…"}
                  className="flex-1 rounded-xl border border-learn-teal/20 bg-white text-black placeholder:text-black/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-learn-teal-bright"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || loading}
                  className="rounded-xl bg-learn-teal text-white p-2 disabled:opacity-40"
                  aria-label={isSw ? "Tuma" : "Send"}
                >
                  <Send size={18} />
                </button>
              </div>
            ) : null}
            <div className="flex flex-wrap gap-2">
              {suggestions(locale, profile.ageBand).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="text-xs px-3 py-1.5 rounded-pill bg-learn-cream border border-learn-teal/15 hover:border-learn-teal"
                >
                  {s}
                </button>
              ))}
            </div>
          </form>
        </div>
  ) : null;

  if (embedded) {
    return <div className="kibo-embedded">{panel}</div>;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "kibo-fab",
          "hover:scale-105 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-learn-gold"
        )}
        aria-expanded={open}
        aria-label={isSw ? "Fungua msaidizi Kibo" : "Open Kibo assistant"}
      >
        <Image src="/learn/kibo-2d.png" alt="" width={32} height={32} className="kibo-fab-avatar" />
        <span className="font-semibold text-sm hidden sm:inline">Kibo</span>
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            status === "ready"
              ? "bg-emerald-400"
              : status === "offline"
                ? "bg-amber-400"
                : "bg-gray-400"
          )}
          title={isSw ? "Hali ya AI" : "AI status"}
        />
        <MessageCircle size={18} className="sm:hidden" />
      </button>
      {panel}
    </>
  );
}
