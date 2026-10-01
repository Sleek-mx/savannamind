"use client";

import { useState } from "react";
import { MessageSquareQuote, Sparkles, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DiscussionPromptCardProps {
  card: {
    type: "discussion-prompt";
    titleEn?: string;
    titleSw?: string;
    promptEn: string;
    promptSw: string;
    placeholderEn?: string;
    placeholderSw?: string;
    kiboHintEn?: string;
    kiboHintSw?: string;
  };
  locale: "en" | "sw";
  onSolved: () => void;
}

export function DiscussionPromptCard({
  card,
  locale,
  onSolved,
}: DiscussionPromptCardProps) {
  const isSw = locale === "sw";
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!response.trim()) return;
    setSubmitted(true);
    onSolved();
  };

  return (
    <div className="w-full bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-xs my-3">
      <div className="mb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold mb-2">
          <MessageSquareQuote className="w-3.5 h-3.5 text-amber-600" />
          <span>{isSw ? "Tafakari ya Mwanafunzi" : "Learner Reflection"}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          {isSw ? card.titleSw || "Tafakari na Kibo" : card.titleEn || "Reflect with Kibo"}
        </h3>
        <p className="text-sm sm:text-base text-slate-700 mt-2 font-medium leading-relaxed">
          {isSw ? card.promptSw : card.promptEn}
        </p>
      </div>

      {card.kiboHintEn && (
        <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl mb-4 text-xs text-amber-900 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            <strong>{isSw ? "Kidokezo cha Kibo: " : "Kibo's tip: "}</strong>
            {isSw ? card.kiboHintSw || card.kiboHintEn : card.kiboHintEn}
          </span>
        </div>
      )}

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            rows={3}
            placeholder={
              isSw
                ? card.placeholderSw || "Andika mawazo yako hapa kwa kifupi…"
                : card.placeholderEn || "Write your thoughts briefly here…"
            }
            className="w-full p-3.5 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-sm text-slate-800 placeholder:text-slate-400 outline-none resize-none transition-all"
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={response.trim().length < 3}
              className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm disabled:opacity-50"
            >
              <span>{isSw ? "Tuma Tafakari" : "Save Reflection"}</span>
              <Send className="w-3.5 h-3.5" />
            </Button>
          </div>
        </form>
      ) : (
        <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 font-bold text-sm mb-1 text-teal-800">
            <Check className="w-4 h-4 text-teal-600" />
            <span>{isSw ? "Kibo: Fikra nzuri sana!" : "Kibo: Wonderful insight!"}</span>
          </div>
          <p className="text-xs text-teal-700 italic border-l-2 border-teal-300 pl-2.5 my-2">
            &ldquo;{response}&rdquo;
          </p>
          <p className="text-xs text-slate-600 mt-1">
            {isSw
              ? "Kueleza dhana kwa maneno yako mwenyewe ndiyo njia bora ya kuikumbuka."
              : "Expressing concepts in your own words cements your learning. Keep going!"}
          </p>
        </div>
      )}
    </div>
  );
}
