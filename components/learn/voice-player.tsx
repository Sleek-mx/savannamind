"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX, Play, Pause, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoicePlayerProps {
  text: string;
  locale: "en" | "sw";
  title?: string;
}

export function VoicePlayer({ text, locale, title }: VoicePlayerProps) {
  const [supported, setSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState<number>(1.0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [voiceName, setVoiceName] = useState<string>("");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const cleanText = text
    .replace(/[#*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // Pick best available voice (preferring Google voices)
  const selectVoice = useCallback((): SpeechSynthesisVoice | null => {
    if (typeof window === "undefined" || !window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;

    const targetLang = locale === "sw" ? "sw" : "en";

    // 1. Google voice matching language
    const googleVoice = voices.find(
      (v) =>
        v.lang.toLowerCase().startsWith(targetLang) &&
        v.name.toLowerCase().includes("google")
    );
    if (googleVoice) return googleVoice;

    // 2. Any voice matching language
    const langVoice = voices.find((v) =>
      v.lang.toLowerCase().startsWith(targetLang)
    );
    if (langVoice) return langVoice;

    // 3. Fallback to default
    return voices[0] || null;
  }, [locale]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }
    setSupported(true);

    const updateVoice = () => {
      const v = selectVoice();
      if (v) setVoiceName(v.name);
    };

    updateVoice();
    window.speechSynthesis.onvoiceschanged = updateVoice;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectVoice]);

  const handlePlay = () => {
    if (!supported || typeof window === "undefined") return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = rate;
    utterance.lang = locale === "sw" ? "sw-KE" : "en-US";

    const voice = selectVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleRateChange = (newRate: number) => {
    setRate(newRate);
    if (isPlaying || isPaused) {
      handleStop();
      // small timeout to restart with new rate
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = newRate;
        utterance.lang = locale === "sw" ? "sw-KE" : "en-US";
        const voice = selectVoice();
        if (voice) utterance.voice = voice;
        utterance.onstart = () => {
          setIsPlaying(true);
          setIsPaused(false);
        };
        utterance.onend = () => {
          setIsPlaying(false);
          setIsPaused(false);
        };
        utterance.onerror = () => {
          setIsPlaying(false);
          setIsPaused(false);
        };
        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }, 50);
    }
  };

  if (!supported) return null;

  return (
    <div className="w-full bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3 sm:p-4 my-3 text-slate-800 transition-all">
      <div className="flex items-center justify-between gap-3">
        {/* Left: Play/Pause button + Voice label */}
        <div className="flex items-center gap-3">
          <Button
            type="button"
            size="sm"
            onClick={isPlaying ? handlePause : handlePlay}
            className={`w-10 h-10 rounded-full transition-all shrink-0 ${
              isPlaying
                ? "bg-amber-600 hover:bg-amber-700 text-white shadow-md ring-2 ring-amber-400/40"
                : "bg-teal-700 hover:bg-teal-800 text-white shadow-sm"
            }`}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white ml-0.5" />
            )}
          </Button>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950 uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{locale === "sw" ? "Sauti ya Somo (Bure)" : "Voice Lesson (Free Google TTS)"}</span>
            </div>
            <p className="text-[11px] text-amber-800/80 line-clamp-1">
              {title || (locale === "sw" ? "Sikiliza maelezo ya kadi hii" : "Listen to this unit explanation")}
              {voiceName ? ` · ${voiceName}` : ""}
            </p>
          </div>
        </div>

        {/* Right: Speed pills & Transcript toggle */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="flex items-center bg-white/80 rounded-lg p-0.5 border border-amber-200 text-[11px] font-semibold">
            {[0.8, 1.0, 1.2].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => handleRateChange(r)}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  rate === r
                    ? "bg-amber-600 text-white shadow-xs"
                    : "text-amber-900/70 hover:text-amber-950"
                }`}
              >
                {r}x
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowTranscript((prev) => !prev)}
            className="p-1.5 rounded-lg text-amber-900/70 hover:text-amber-950 hover:bg-amber-200/40 transition-colors"
            title={locale === "sw" ? "Onyesha Maandishi" : "Toggle Transcript"}
          >
            {showTranscript ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Transcript Drawer */}
      {showTranscript && (
        <div className="mt-3 pt-3 border-t border-amber-200/60 text-xs text-slate-700 leading-relaxed max-h-40 overflow-y-auto">
          <span className="font-semibold text-amber-900 block mb-1">
            {locale === "sw" ? "Nakala ya Sauti:" : "Transcript:"}
          </span>
          <p className="bg-white/60 p-2.5 rounded-lg border border-amber-100">
            {cleanText}
          </p>
        </div>
      )}
    </div>
  );
}
