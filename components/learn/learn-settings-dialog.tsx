"use client";

import { useState } from "react";
import type { AgeBand } from "@/lib/learn/types";
import { Button } from "@/components/ui/button";

export function LearnSettingsDialog({
  open,
  onOpenChange,
  locale,
  ageBand,
  onResetProgress,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locale: "en" | "sw";
  ageBand: AgeBand;
  onResetProgress: () => void;
}) {
  const isSw = locale === "sw";
  const [confirmText, setConfirmText] = useState("");
  const needsTypedReset = ageBand === "kids";
  const canReset = !needsTypedReset || confirmText.trim().toUpperCase() === "RESET";

  if (!open) return null;

  return (
    <div className="learn-settings-overlay" role="dialog" aria-modal="true" aria-labelledby="learn-settings-title">
      <button
        type="button"
        className="learn-settings-backdrop"
        aria-label={isSw ? "Funga" : "Close"}
        onClick={() => onOpenChange(false)}
      />
      <div className="learn-settings-panel">
        <h2 id="learn-settings-title" className="text-lg font-semibold text-[#1e2a2e]">
          {isSw ? "Mipangilio" : "Settings"}
        </h2>
        <p className="text-sm text-learn-muted mt-2 leading-relaxed">
          {isSw
            ? "Maendeleo yako yamehifadhiwa kwenye kifaa hiki pekee."
            : "Your progress is stored on this device only."}
        </p>

        <div className="mt-6 border-t border-learn-teal/10 pt-4">
          <p className="text-sm font-medium text-[#1e2a2e]">
            {isSw ? "Futa maendeleo" : "Reset progress"}
          </p>
          <p className="text-xs text-learn-muted mt-1 mb-3">
            {needsTypedReset
              ? isSw
                ? 'Andika RESET ili kuthibitisha.'
                : 'Type RESET to confirm.'
              : isSw
                ? "Hatua hii haiwezi kutenduliwa."
                : "This cannot be undone."}
          </p>
          {needsTypedReset && (
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="w-full rounded-xl border border-learn-teal/20 bg-white text-[#1e2a2e] px-3 py-2 text-sm mb-3"
              placeholder="RESET"
              autoComplete="off"
            />
          )}
          <div className="flex gap-2 justify-end">
            <Button variant="ghost" size="sm" type="button" onClick={() => onOpenChange(false)}>
              {isSw ? "Funga" : "Close"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              type="button"
              disabled={!canReset}
              onClick={() => {
                onResetProgress();
                setConfirmText("");
                onOpenChange(false);
              }}
            >
              {isSw ? "Futa maendeleo" : "Reset progress"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
