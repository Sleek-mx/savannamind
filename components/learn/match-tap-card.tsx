"use client";

import { useState, useEffect, useMemo } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MatchTapCardProps {
  card: {
    type: "match-tap";
    titleEn?: string;
    titleSw?: string;
    instructionEn?: string;
    instructionSw?: string;
    pairs: {
      id: string;
      termEn: string;
      termSw: string;
      matchEn: string;
      matchSw: string;
    }[];
  };
  locale: "en" | "sw";
  onSolved: () => void;
}

export function MatchTapCard({ card, locale, onSolved }: MatchTapCardProps) {
  const isSw = locale === "sw";
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [mismatch, setMismatch] = useState(false);
  const [kiboMessage, setKiboMessage] = useState<string | null>(null);

  // Shuffle definitions once on mount
  const shuffledMatches = useMemo(() => {
    return [...card.pairs].sort(() => Math.random() - 0.5);
  }, [card.pairs]);

  const handleSelectTerm = (id: string) => {
    if (matchedIds.includes(id)) return;
    setMismatch(false);
    setSelectedTermId(id);
    if (selectedMatchId) {
      checkPair(id, selectedMatchId);
    }
  };

  const handleSelectMatch = (id: string) => {
    if (matchedIds.includes(id)) return;
    setMismatch(false);
    setSelectedMatchId(id);
    if (selectedTermId) {
      checkPair(selectedTermId, id);
    }
  };

  const checkPair = (termId: string, matchId: string) => {
    if (termId === matchId) {
      // Correct match!
      const newMatched = [...matchedIds, termId];
      setMatchedIds(newMatched);
      setSelectedTermId(null);
      setSelectedMatchId(null);
      setKiboMessage(
        isSw ? "Safi sana! Ulinganifu sahihi! 🎯" : "Spot on! Perfect match! 🎯"
      );

      if (newMatched.length === card.pairs.length) {
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
          });
        } catch {
          // ignore
        }
        onSolved();
      }
    } else {
      // Mismatch
      setMismatch(true);
      setKiboMessage(
        isSw
          ? "Si huo, jaribu tena! Kibo yuko nawe 🐾"
          : "Not quite, try another! Kibo is cheering for you 🐾"
      );
      setTimeout(() => {
        setSelectedTermId(null);
        setSelectedMatchId(null);
        setMismatch(false);
      }, 700);
    }
  };

  const isCompleted = matchedIds.length === card.pairs.length;

  return (
    <div className="w-full bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-xs my-3">
      {/* Title & Instructions */}
      <div className="mb-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>{isSw ? "Zoezi la Kulinganisha" : "Interactive Match & Tap"}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          {isSw ? card.titleSw || "Linganisha Dhana na Maana Yake" : card.titleEn || "Match Concepts & Meanings"}
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          {isSw
            ? card.instructionSw || "Gusa dhana upande wa kushoto, kisha gusa maana yake upande wa kulia."
            : card.instructionEn || "Tap a concept on the left, then tap its matching meaning on the right."}
        </p>
      </div>

      {/* Kibo Tone Banner */}
      {kiboMessage && (
        <div
          className={`p-3 rounded-xl mb-4 text-xs sm:text-sm font-medium transition-all ${
            mismatch
              ? "bg-amber-50 border border-amber-200 text-amber-900 animate-shake"
              : "bg-teal-50 border border-teal-200 text-teal-900"
          }`}
        >
          {kiboMessage}
        </div>
      )}

      {/* Two columns: Terms & Matches */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left Column: Terms */}
        <div className="space-y-2.5">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            {isSw ? "Dhana (Terms)" : "Terms"}
          </p>
          {card.pairs.map((pair) => {
            const isMatched = matchedIds.includes(pair.id);
            const isSelected = selectedTermId === pair.id;
            return (
              <button
                key={`term-${pair.id}`}
                type="button"
                disabled={isMatched}
                onClick={() => handleSelectTerm(pair.id)}
                className={`w-full text-left p-3.5 rounded-xl border text-sm font-semibold transition-all ${
                  isMatched
                    ? "bg-teal-50/70 border-teal-300 text-teal-900 opacity-60 line-through"
                    : isSelected
                    ? "bg-amber-50 border-amber-500 ring-2 ring-amber-400/40 text-amber-950"
                    : "bg-white hover:bg-slate-50 border-slate-200 text-slate-800"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{isSw ? pair.termSw : pair.termEn}</span>
                  {isMatched && <CheckCircle2 className="w-4 h-4 text-teal-600" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Definitions */}
        <div className="space-y-2.5">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            {isSw ? "Ufafanuzi (Definitions)" : "Meanings"}
          </p>
          {shuffledMatches.map((pair) => {
            const isMatched = matchedIds.includes(pair.id);
            const isSelected = selectedMatchId === pair.id;
            return (
              <button
                key={`match-${pair.id}`}
                type="button"
                disabled={isMatched}
                onClick={() => handleSelectMatch(pair.id)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                  isMatched
                    ? "bg-teal-50/70 border-teal-300 text-teal-900 opacity-60 line-through"
                    : isSelected
                    ? "bg-amber-50 border-amber-500 ring-2 ring-amber-400/40 text-amber-950"
                    : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span>{isSw ? pair.matchSw : pair.matchEn}</span>
                  {isMatched && (
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {isCompleted && (
        <div className="mt-6 p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 text-center">
          <p className="text-sm font-bold text-teal-900">
            {isSw ? "🎉 Hongera! Umeunganisha jozi zote kikamilifu!" : "🎉 Brilliant! All concepts matched successfully!"}
          </p>
        </div>
      )}
    </div>
  );
}
