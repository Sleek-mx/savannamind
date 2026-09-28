"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function DefinitionFlipCards({
  items,
  locale,
}: {
  items: { termEn: string; termSw: string; defEn: string; defSw: string }[];
  locale: "en" | "sw";
}) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const isSw = locale === "sw";

  return (
    <ul className="definition-flip-grid">
      {items.map((item, i) => {
        const isRevealed = Boolean(revealed[i]);
        return (
          <li key={i}>
            <button
              type="button"
              className={cn("definition-flip-card", isRevealed && "definition-flip-card-revealed")}
              onClick={() => setRevealed((state) => ({ ...state, [i]: !state[i] }))}
              aria-expanded={isRevealed}
            >
              <span className="definition-flip-hint">
                {isRevealed
                  ? isSw ? "Gusa kuficha" : "Tap to hide"
                  : isSw ? "Gusa kuona maana" : "Tap to reveal"}
              </span>
              <p className="definition-flip-term">{isSw ? item.termSw : item.termEn}</p>
              {isRevealed && <p className="definition-flip-def">{isSw ? item.defSw : item.defEn}</p>}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
