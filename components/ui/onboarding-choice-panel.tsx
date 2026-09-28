"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type ChoiceOption = { id: string; label: string };

type OnboardingChoicePanelProps = {
  question: string;
  options: ChoiceOption[];
  onSelect: (id: string) => void;
  localeToggle?: React.ReactNode;
  disabled?: boolean;
};

export function OnboardingChoicePanel({
  question,
  options,
  onSelect,
  localeToggle,
  disabled,
}: OnboardingChoicePanelProps) {
  const [isActive, setIsActive] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsActive(true);
  }, [question]);

  const containerVariants = {
    collapsed: {
      height: 72,
      boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
    },
    expanded: {
      height: "auto",
      minHeight: 160,
      boxShadow: "0 8px 32px 0 rgba(11,31,38,0.14)",
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {localeToggle && (
        <div className="flex justify-end mb-4">{localeToggle}</div>
      )}
      <motion.div
        ref={wrapperRef}
        className="w-full bg-white rounded-[2rem] border border-learn-teal/10 overflow-hidden"
        variants={containerVariants}
        animate="expanded"
        initial="expanded"
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className="p-4 md:p-5">
          <p className="text-lg md:text-xl font-semibold text-learn-night leading-snug">
            {question}
          </p>
          <motion.div
            className="mt-4 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            {options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                disabled={disabled}
                onClick={() => onSelect(opt.id)}
                className={cn(
                  "px-4 py-2.5 rounded-pill text-sm md:text-base font-medium transition-all",
                  "bg-learn-cream text-learn-night border border-learn-teal/15",
                  "hover:border-learn-teal hover:bg-learn-teal/5",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-learn-teal-bright"
                )}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
          <div className="mt-4 flex justify-end">
            <Button
              type="button"
              variant="primary"
              size="sm"
              className="rounded-full gap-2 pointer-events-none opacity-40"
              aria-hidden
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
