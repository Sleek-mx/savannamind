"use client";

import { cn } from "@/lib/utils";
import { loopStepTitles, type OnboardingStep } from "@/lib/learn/copy";
import { motion } from "motion/react";

const stepOrder: OnboardingStep[] = [
  "language",
  "age",
  "career",
  "level",
  "guardian",
  "nickname",
];

export function OnboardingStepLoop({
  current,
  locale,
}: {
  current: OnboardingStep;
  locale: "en" | "sw";
}) {
  const titles = loopStepTitles(locale);
  const idx = stepOrder.indexOf(current);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mb-8">
      <div className="hidden lg:grid lg:grid-cols-6 gap-2">
        {stepOrder.map((step, i) => {
          const active = i === idx;
          const done = i < idx;
          return (
            <div key={step} className="flex flex-col items-center text-center">
              <motion.div
                className={cn("learn-onboarding-medallion", active && "is-active", done && "is-done")}
                animate={{ scale: active ? 1.06 : 1, opacity: done || active ? 1 : .62 }}
                transition={{ duration: .3 }}
                aria-current={active ? "step" : undefined}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
              </motion.div>
              <span className="mt-2 text-xs font-semibold text-learn-muted uppercase tracking-wide">
                {titles[i]}
              </span>
            </div>
          );
        })}
      </div>
      <div className="lg:hidden flex items-center gap-2 justify-center">
            <span className="text-sm font-semibold text-learn-muted">
              {titles[idx]} · {idx + 1}/{stepOrder.length}
            </span>
        <div className="flex gap-1">
          {stepOrder.map((_, i) => (
              <motion.span
                key={i}
                className={cn("h-1.5 rounded-full", i <= idx ? "w-6 bg-learn-teal" : "w-3 bg-learn-teal/20")}
                layout
              />
          ))}
        </div>
      </div>
    </div>
  );
}
