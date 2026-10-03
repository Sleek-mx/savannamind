"use client";

import { useState } from "react";
import type { ModuleGateItem } from "@/lib/learn/curriculum/short/build";
import { unitIndexForRestudy } from "@/lib/learn/curriculum/modules";
import { Button } from "@/components/ui/button";

export function ModuleGateQuiz({
  title,
  items,
  passCount,
  locale,
  onPass,
  onBackToNotes,
}: {
  title: string;
  items: ModuleGateItem[];
  passCount: number;
  locale: "en" | "sw";
  onPass: (score: number) => void;
  onBackToNotes: (unitIndex: number) => void;
}) {
  const isSw = locale === "sw";
  const [picks, setPicks] = useState<(number | null)[]>(() => items.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const score = picks.reduce<number>((total, pick, index) => {
    return pick === items[index]?.correct ? total + 1 : total;
  }, 0);
  const passed = submitted && score >= passCount;
  const missed = items
    .map((item, index) => ({ item, index, pick: picks[index] }))
    .filter((row) => row.pick !== row.item.correct);

  const submit = () => {
    if (picks.some((pick) => pick === null)) return;
    setSubmitted(true);
    if (picks.filter((pick, index) => pick === items[index]?.correct).length >= passCount) {
      onPass(picks.filter((pick, index) => pick === items[index]?.correct).length);
    }
  };

  const retry = () => {
    setPicks(items.map(() => null));
    setSubmitted(false);
    setAttempt((value) => value + 1);
  };

  const firstMissUnit = missed[0] ? unitIndexForRestudy(missed[0].item.restudy.unit) : 0;

  return (
    <div className="module-gate" key={attempt}>
      <p className="lesson-kind-label">{isSw ? "Mtihani wa moduli" : "Module quiz"}</p>
      <h1>{title}</h1>
      <p className="module-gate-lead">
        {isSw
          ? `Pita ${passCount} kati ya ${items.length}. Majibu sahihi yanaonekana tu ukishindwa.`
          : `Pass mark ${passCount} of ${items.length}. Correct answers stay hidden unless you miss the pass mark.`}
      </p>

      <ol className="module-gate-list">
        {items.map((item, index) => {
          const options = isSw ? item.optionsSw : item.optionsEn;
          return (
            <li key={item.qEn}>
              <p className="gated-video-q">
                {index + 1}. {isSw ? item.qSw : item.qEn}
              </p>
              <ul className="lesson-quiz-options">
                {options.map((option, choice) => (
                  <li key={option}>
                    <button
                      type="button"
                      className={picks[index] === choice ? "lesson-quiz-opt is-picked" : "lesson-quiz-opt"}
                      onClick={() => {
                        if (submitted) return;
                        setPicks((current) => current.map((value, i) => (i === index ? choice : value)));
                      }}
                      disabled={submitted}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
              {submitted && !passed && (
                <p className="module-gate-answer">
                  {isSw ? "Jibu" : "Answer"}: {isSw ? item.answerSw : item.answerEn}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      {!submitted && (
        <Button onClick={submit} disabled={picks.some((pick) => pick === null)}>
          {isSw ? "Wasilisha" : "Submit"}
        </Button>
      )}

      {submitted && !passed && (
        <div className="module-gate-fail" role="status">
          <p>Whoops! you have not managed to pass this module. Please relook the notes, specifically:</p>
          <ul>
            {missed.map((row) => (
              <li key={row.item.qEn}>{isSw ? row.item.restudySw : row.item.restudyEn}</li>
            ))}
          </ul>
          <p>When ready, come back to this page.</p>
          <div className="module-gate-actions">
            <Button type="button" variant="outline" onClick={() => onBackToNotes(firstMissUnit)}>
              Go Back To Notes
            </Button>
            <Button type="button" onClick={retry}>
              Am ready TO retry
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
