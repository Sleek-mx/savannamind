"use client";

import { useState } from "react";
import { OUTCOME_12_QUESTIONS, scoreOutcome } from "@/lib/learn/outcome-questions";
import { Button } from "@/components/ui/button";

export function OutcomeCheck({
  locale,
  onComplete,
  onCancel,
}: {
  locale: "en" | "sw";
  onComplete: (score: number) => void;
  onCancel: () => void;
}) {
  const isSw = locale === "sw";
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [picked, setPicked] = useState<string | null>(null);
  const [doneScore, setDoneScore] = useState<number | null>(null);
  const question = OUTCOME_12_QUESTIONS[index];

  const commit = () => {
    if (!picked || !question) return;
    const next = { ...answers, [question.id]: picked };
    setAnswers(next);
    if (index >= OUTCOME_12_QUESTIONS.length - 1) {
      setDoneScore(scoreOutcome(next));
      return;
    }
    setIndex(index + 1);
    setPicked(null);
  };

  if (doneScore !== null) {
    return (
      <div className="w-full max-w-xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900">
            {isSw ? "Ukaguzi wa mwisho" : "End-of-course check"}
          </h2>
          <p className="mt-3 text-slate-700">
            {isSw
              ? `Alama yako ni ${doneScore} kati ya 12. Hii ndiyo inayolinganishwa na msingi wa pre-check.`
              : `Your score is ${doneScore} of 12. This is the score compared with your pre-check baseline.`}
          </p>
          <Button className="mt-6" onClick={() => onComplete(doneScore)}>
            {isSw ? "Rudi kwenye dashibodi" : "Back to dashboard"}
          </Button>
        </div>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900">
          {isSw ? "Ukaguzi wa mwisho wa ujuzi 12" : "End-of-course check · 12 skills"}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          {isSw
            ? `Swali ${index + 1} kati ya 12. Maswali ni mapya. Hayasemi jibu sahihi unapojibu.`
            : `Question ${index + 1} of 12. These are new questions. This check does not mark right or wrong as you answer.`}
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-6">{question.question[locale]}</h3>
        <div className="space-y-3">
          {question.options.map((option) => {
            const selected = picked === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setPicked(option.id)}
                className={`w-full text-left p-4 rounded-xl border ${
                  selected ? "border-teal-600 bg-teal-50" : "border-slate-200"
                }`}
              >
                {option.text[locale]}
              </button>
            );
          })}
        </div>
        <div className="mt-8 flex justify-between gap-3">
          <Button type="button" variant="outline" onClick={onCancel}>
            {isSw ? "Ghairi" : "Cancel"}
          </Button>
          <Button type="button" onClick={commit} disabled={!picked}>
            {index === OUTCOME_12_QUESTIONS.length - 1
              ? isSw
                ? "Maliza"
                : "Finish"
              : isSw
                ? "Swali linalofuata"
                : "Next question"}
          </Button>
        </div>
      </div>
    </div>
  );
}
