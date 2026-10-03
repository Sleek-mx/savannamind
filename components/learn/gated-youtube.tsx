"use client";

import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";
import type { ExtractCard } from "@/lib/learn/curriculum/types";
import { Button } from "@/components/ui/button";

type VideoCard = Extract<ExtractCard<"video">, { checks?: unknown }>;
type Check = NonNullable<VideoCard["checks"]>[number];

type YtPlayer = {
  destroy: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  playVideo: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          playerVars?: Record<string, string | number>;
          events?: { onStateChange?: (event: { data: number }) => void };
        }
      ) => YtPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT?.Player) return Promise.resolve();
  if (!apiPromise) {
    apiPromise = new Promise((resolve) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        resolve();
      };
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    });
  }
  return apiPromise;
}

function timestampToSeconds(timestamp: string): number {
  const [minutes, seconds] = timestamp.split(":").map((part) => Number.parseInt(part, 10));
  if (!Number.isFinite(minutes) || !Number.isFinite(seconds)) return 0;
  return minutes * 60 + seconds;
}

export function GatedYouTube({
  card,
  locale,
  onContinue,
}: {
  card: ExtractCard<"video">;
  locale: "en" | "sw";
  onContinue: () => void;
}) {
  const isSw = locale === "sw";
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YtPlayer | null>(null);
  const [ended, setEnded] = useState(false);
  const [solved, setSolved] = useState<boolean[]>(() => (card.checks ?? []).map(() => false));
  const [miss, setMiss] = useState<string | null>(null);
  const checks = card.checks ?? [];
  const allSolved = checks.length > 0 && solved.every(Boolean);

  useEffect(() => {
    let cancelled = false;
    const host = hostRef.current;
    if (!host) return;

    const mount = () => {
      if (cancelled || !hostRef.current || !window.YT?.Player) return;
      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId: card.youtubeId,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onStateChange(event) {
            if (event.data === 0) setEnded(true);
          },
        },
      });
    };

    if (window.YT?.Player) mount();
    else void loadYouTubeApi().then(mount);

    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy();
      } catch {
        /* player may already be gone */
      }
      playerRef.current = null;
    };
  }, [card.youtubeId]);

  const answer = (check: Check, index: number, choice: number) => {
    if (!ended || solved[index]) return;
    if (choice === check.correctIndex) {
      setSolved((current) => current.map((item, i) => (i === index ? true : item)));
      setMiss(null);
      return;
    }
    const line = isSw
      ? `Tazama tena kuanzia ${check.timestamp}, pale video inapozungumzia hoja hii, kisha jaribu tena.`
      : `Rewatch from ${check.timestamp}, where this video talks about that point, then try again.`;
    setMiss(line);
    try {
      playerRef.current?.seekTo(timestampToSeconds(check.timestamp), true);
      playerRef.current?.playVideo();
    } catch {
      /* seeking is a help; the message is the requirement */
    }
  };

  return (
    <div className="gated-video">
      <h1>{isSw ? card.titleSw : card.titleEn}</h1>
      {(card.captionEn || card.captionSw) && (
        <p className="lesson-video-caption">{isSw ? card.captionSw : card.captionEn}</p>
      )}
      <div className="lesson-video">
        <div ref={hostRef} />
      </div>

      {!ended && (
        <div className="gated-video-lock" role="status">
          <Lock size={16} aria-hidden />
          <p>
            {isSw
              ? "Maswali matatu yanasalia yamefungwa hadi video iangaliwe hadi mwisho. Kitufe cha kuruka hakipo."
              : "The three questions stay locked until the video has been watched to the end. There is no skip."}
          </p>
        </div>
      )}

      {ended && (
        <ol className="gated-video-checks">
          {checks.map((check, index) => {
            const options = isSw ? check.optionsSw : check.optionsEn;
            return (
              <li key={`${check.timestamp}-${index}`} className={solved[index] ? "is-solved" : undefined}>
                <p className="gated-video-q">
                  <span>{check.timestamp}</span> {isSw ? check.questionSw : check.questionEn}
                </p>
                <ul className="lesson-quiz-options">
                  {options.map((option, choice) => (
                    <li key={option}>
                      <button
                        type="button"
                        className={solved[index] && choice === check.correctIndex ? "lesson-quiz-opt correct" : "lesson-quiz-opt"}
                        onClick={() => answer(check, index, choice)}
                        disabled={solved[index]}
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      )}

      {miss && (
        <p className="gated-video-rewatch" role="status">
          {miss}
        </p>
      )}

      {ended && checks.length === 0 && (
        <Button onClick={onContinue}>{isSw ? "Endelea" : "Continue"}</Button>
      )}

      {allSolved && (
        <Button onClick={onContinue}>{isSw ? "Endelea" : "Continue"}</Button>
      )}
    </div>
  );
}
