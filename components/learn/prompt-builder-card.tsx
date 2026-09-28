"use client";

import { useMemo, useState } from "react";
import { Check, RotateCcw, Sparkles } from "lucide-react";
import type { ExtractCard } from "@/lib/learn/curriculum/types";
import { cn } from "@/lib/utils";

type PromptBuilderCard = ExtractCard<"prompt-builder">;

export function PromptBuilderCard({
  card,
  locale,
  onSolved,
}: {
  card: PromptBuilderCard;
  locale: "en" | "sw";
  onSolved?: () => void;
}) {
  const [picked, setPicked] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const isSw = locale === "sw";

  const blocks = isSw ? card.blocksSw : card.blocksEn;
  const required = card.required;

  const missing = useMemo(
    () => required.filter((i) => !picked.includes(i)),
    [picked, required]
  );
  const solved = submitted && missing.length === 0;

  const toggle = (i: number) => {
    if (solved) return;
    setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
    setSubmitted(false);
  };

  const assembled = picked.map((i) => blocks[i]).join(" ");

  const submit = () => {
    setSubmitted(true);
    if (required.every((i) => picked.includes(i))) onSolved?.();
  };

  const reset = () => {
    setPicked([]);
    setSubmitted(false);
  };

  return (
    <div className="prompt-builder">
      <p className="prompt-builder-intro">{isSw ? card.introSw : card.introEn}</p>
      <p className="prompt-builder-goal">
        <Sparkles size={14} aria-hidden />
        <span>
          <strong>{isSw ? "Lengo" : "Goal"}:</strong> {isSw ? card.goalSw : card.goalEn}
        </span>
      </p>

      <p className="prompt-builder-label">
        {isSw ? "Gusa vipande kujenga prompt yako:" : "Tap blocks to assemble your prompt:"}
      </p>
      <ul className="prompt-builder-blocks">
        {blocks.map((b, i) => {
          const active = picked.includes(i);
          return (
            <li key={i}>
              <button
                type="button"
                className={cn("prompt-builder-block", active && "prompt-builder-block-active")}
                onClick={() => toggle(i)}
                aria-pressed={active}
                disabled={solved}
              >
                <span className="prompt-builder-block-num" aria-hidden>
                  {i + 1}
                </span>
                {b}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="prompt-builder-preview" aria-live="polite">
        <p className="prompt-builder-preview-label">
          {isSw ? "Prompt yako:" : "Your prompt:"}
        </p>
        <p className={cn("prompt-builder-preview-text", !assembled && "prompt-builder-preview-empty")}>
          {assembled ||
            (isSw ? "Bado hakuna vipande — gusa vipande hapo juu." : "Nothing yet — tap blocks above.")}
        </p>
      </div>

      {!solved && (
        <div className="prompt-builder-actions">
          <button
            type="button"
            className="prompt-builder-check"
            onClick={submit}
            disabled={picked.length === 0}
          >
            <Check size={16} aria-hidden />
            {isSw ? "Kagua prompt" : "Check prompt"}
          </button>
          {picked.length > 0 && (
            <button type="button" className="prompt-builder-reset" onClick={reset}>
              <RotateCcw size={14} aria-hidden />
              {isSw ? "Anza upya" : "Reset"}
            </button>
          )}
        </div>
      )}

      {submitted && !solved && (
        <div className="prompt-builder-feedback prompt-builder-feedback-miss" role="status">
          <p className="prompt-builder-feedback-title">
            {isSw ? "Karibu — bado hukukamilika:" : "Close — not complete yet:"}
          </p>
          <ul>
            {missing.map((i) => (
              <li key={i}>{blocks[i]}</li>
            ))}
          </ul>
          <p>
            {isSw
              ? "Ongeza vipande vilivyokosekana kisha ukaague tena."
              : "Add the missing blocks, then check again."}
          </p>
        </div>
      )}

      {solved && (
        <div className="prompt-builder-feedback prompt-builder-feedback-hit" role="status">
          <p className="prompt-builder-feedback-title">
            {isSw ? "Imekamilika! Prompt yako ina vipengele vyote." : "Complete! Your prompt has all the parts."}
          </p>
          <p className="prompt-builder-sample-label">{isSw ? "Mfano wa marejeleo:" : "Reference sample:"}</p>
          <p className="prompt-builder-sample">{isSw ? card.sampleSw : card.sampleEn}</p>
        </div>
      )}
    </div>
  );
}
