"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Pause, Play } from "lucide-react";
import type { TimedQuestion } from "@/lib/learn/timed-quizzes-data";
import { Button } from "@/components/ui/button";

type AnswerState =
  | { kind: "yes_no"; value: "yes" | "no" | null }
  | { kind: "select_all"; value: number[] }
  | { kind: "arrange"; value: string[] };

function initAnswer(q: TimedQuestion): AnswerState {
  if (q.type === "yes_no") return { kind: "yes_no", value: null };
  if (q.type === "select_all_that_apply") return { kind: "select_all", value: [] };
  return { kind: "arrange", value: [...q.items] };
}

function scoreQuestion(q: TimedQuestion, a: AnswerState): boolean {
  if (q.type === "yes_no" && a.kind === "yes_no") {
    return a.value === q.correctAnswer;
  }
  if (q.type === "select_all_that_apply" && a.kind === "select_all") {
    const want = [...q.correctIndices].sort((x, y) => x - y);
    const got = [...a.value].sort((x, y) => x - y);
    return want.length === got.length && want.every((v, i) => v === got[i]);
  }
  if (q.type === "arrange_ascending" && a.kind === "arrange") {
    return a.value.length === q.correctSequence.length && a.value.every((v, i) => v === q.correctSequence[i]);
  }
  return false;
}

export function TimedQuizRunner({
  title,
  questions,
  timeLimitMinutes,
  passMarkPercent,
  locale,
  kind,
  onPass,
  onFail,
  onTimeout,
}: {
  title: string;
  questions: TimedQuestion[];
  timeLimitMinutes: number;
  passMarkPercent: number;
  locale: "en" | "sw";
  kind: "unit" | "module";
  onPass: (score: number, total: number) => void;
  onFail: (score: number, total: number, failedUnitIds: string[]) => void;
  onTimeout: () => void;
}) {
  const isSw = locale === "sw";
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState[]>(() => questions.map(initAnswer));
  const [secondsLeft, setSecondsLeft] = useState(timeLimitMinutes * 60);
  const [submitted, setSubmitted] = useState(false);

  const q = questions[qIndex];
  const need = Math.ceil((passMarkPercent / 100) * questions.length);

  useEffect(() => {
    setAnswers(questions.map(initAnswer));
    setQIndex(0);
    setStarted(false);
    setPaused(false);
    setSubmitted(false);
    setSecondsLeft(timeLimitMinutes * 60);
  }, [questions, timeLimitMinutes]);

  useEffect(() => {
    if (!started || paused || submitted) return;
    if (secondsLeft <= 0) {
      onTimeout();
      return;
    }
    const t = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [started, paused, submitted, secondsLeft, onTimeout]);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  const setCurrentAnswer = useCallback(
    (next: AnswerState) => {
      setAnswers((prev) => {
        const copy = [...prev];
        copy[qIndex] = next;
        return copy;
      });
    },
    [qIndex]
  );

  const submit = () => {
    setSubmitted(true);
    let correct = 0;
    const failedUnits = new Set<string>();
    questions.forEach((question, i) => {
      if (scoreQuestion(question, answers[i])) correct += 1;
      else if (question.sourceUnitId) failedUnits.add(question.sourceUnitId);
    });
    if (correct >= need) onPass(correct, questions.length);
    else onFail(correct, questions.length, [...failedUnits]);
  };

  const moveArrange = (from: number, to: number) => {
    if (!q || q.type !== "arrange_ascending" || answers[qIndex].kind !== "arrange") return;
    const order = [...answers[qIndex].value];
    const [item] = order.splice(from, 1);
    order.splice(to, 0, item);
    setCurrentAnswer({ kind: "arrange", value: order });
  };

  const warning = useMemo(() => {
    if (kind === "unit") {
      return isSw
        ? "Kuna kikomo cha muda. Ukimaliza muda, utarudia kitengo chote kutoka mwanzo."
        : "This quiz is timed. If time runs out, you will redo the whole unit from the introduction.";
    }
    return isSw
      ? "Kuna kikomo cha muda. Ukimaliza muda, utarudia mtihani wa moduli (si moduli nzima)."
      : "This exam is timed. If time runs out, you will retake the module exam only.";
  }, [isSw, kind]);

  if (!started) {
    return (
      <div className="timed-quiz timed-quiz-intro">
        <h1 className="timed-quiz-title">{title}</h1>
        <p className="timed-quiz-meta">
          {questions.length} {isSw ? "maswali" : "questions"} · {timeLimitMinutes}{" "}
          {isSw ? "dakika" : "min"} · {passMarkPercent}% {isSw ? "kupita" : "to pass"} ({need}/
          {questions.length})
        </p>
        <p className="timed-quiz-warning">{warning}</p>
        <Button variant="gold" type="button" onClick={() => setStarted(true)}>
          {isSw ? "Anza" : "Start"}
        </Button>
      </div>
    );
  }

  return (
    <div className={`timed-quiz ${paused ? "timed-quiz-paused" : ""}`}>
      <header className="timed-quiz-head">
        <span className="timed-quiz-timer" aria-live="polite">
          {mm}:{ss}
        </span>
        <span className="timed-quiz-progress">
          {qIndex + 1} / {questions.length}
        </span>
        <button
          type="button"
          className="timed-quiz-pause-btn"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
        >
          {paused ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
          {paused ? (isSw ? "Endelea" : "Unpause") : isSw ? "Sitisha" : "Pause"}
        </button>
      </header>

      {paused && (
        <div className="timed-quiz-pause-overlay" role="status">
          {isSw ? "Mtihani umesitishwa" : "Quiz paused"}
        </div>
      )}

      <div className="timed-quiz-body" aria-hidden={paused}>
        <p className="timed-quiz-question">{q.question}</p>

        {q.type === "yes_no" && (
          <div className="timed-quiz-yesno">
            {(["yes", "no"] as const).map((v) => (
              <button
                key={v}
                type="button"
                className={
                  answers[qIndex].kind === "yes_no" && answers[qIndex].value === v
                    ? "timed-quiz-opt timed-quiz-opt-selected"
                    : "timed-quiz-opt"
                }
                onClick={() => setCurrentAnswer({ kind: "yes_no", value: v })}
              >
                {v === "yes" ? (isSw ? "Ndiyo" : "Yes") : isSw ? "Hapana" : "No"}
              </button>
            ))}
          </div>
        )}

        {q.type === "select_all_that_apply" && (
          <ul className="timed-quiz-checklist">
            {q.options.map((opt, i) => {
              const selected =
                answers[qIndex].kind === "select_all" && answers[qIndex].value.includes(i);
              return (
                <li key={i}>
                  <label className="timed-quiz-check">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => {
                        const cur = answers[qIndex];
                        if (cur.kind !== "select_all") return;
                        const next = cur.value.includes(i)
                          ? cur.value.filter((x) => x !== i)
                          : [...cur.value, i];
                        setCurrentAnswer({ kind: "select_all", value: next });
                      }}
                    />
                    <span>{opt}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        )}

        {q.type === "arrange_ascending" && answers[qIndex].kind === "arrange" && (
          <ol className="timed-quiz-arrange">
            {answers[qIndex].value.map((item, i) => {
              const order = answers[qIndex];
              const len = order.kind === "arrange" ? order.value.length : 0;
              return (
              <li key={`${i}-${item.slice(0, 20)}`}>
                <span className="timed-quiz-arrange-num">{i + 1}</span>
                <span className="timed-quiz-arrange-text">{item}</span>
                <div className="timed-quiz-arrange-move">
                  <button type="button" disabled={i === 0} onClick={() => moveArrange(i, i - 1)}>
                    ↑
                  </button>
                  <button
                    type="button"
                    disabled={i === len - 1}
                    onClick={() => moveArrange(i, i + 1)}
                  >
                    ↓
                  </button>
                </div>
              </li>
              );
            })}
          </ol>
        )}
      </div>

      <footer className="timed-quiz-foot">
        <Button
          variant="outline"
          type="button"
          disabled={qIndex === 0 || paused}
          onClick={() => setQIndex((i) => i - 1)}
        >
          {isSw ? "Rudi" : "Back"}
        </Button>
        {qIndex < questions.length - 1 ? (
          <Button
            variant="gold"
            type="button"
            disabled={paused}
            onClick={() => setQIndex((i) => i + 1)}
          >
            {isSw ? "Ifuatayo" : "Next"}
          </Button>
        ) : (
          <Button variant="gold" type="button" disabled={paused || submitted} onClick={submit}>
            {isSw ? "Wasilisha" : "Submit"}
          </Button>
        )}
      </footer>
    </div>
  );
}
