"use client";

import type { AgeBand } from "@/lib/learn/types";
import { bandVideoForUnit } from "@/lib/learn/band-videos";

export function LearnBandVideo({
  ageBand,
  unitNumber1Based,
  locale,
}: {
  ageBand: AgeBand;
  unitNumber1Based: number;
  locale: "en" | "sw";
}) {
  const entry = bandVideoForUnit(ageBand, unitNumber1Based);
  if (!entry) return null;
  const isSw = locale === "sw";

  return (
    <div className="learn-band-video">
      <p className="learn-band-video-label">
        {isSw ? "Video ya kuimarisha" : "Watch & learn"}
      </p>
      <p className="learn-band-video-title">{entry.title}</p>
      <div className="lesson-video">
        <iframe
          title={entry.title}
          src={`https://www.youtube-nocookie.com/embed/${entry.youtube}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <a
        className="learn-band-video-fallback"
        href={`https://www.youtube.com/watch?v=${entry.youtube}`}
        target="_blank"
        rel="noreferrer"
      >
        {isSw ? "Video isipofunguka, ifungue YouTube" : "If the video does not load, open it on YouTube"}
      </a>
    </div>
  );
}
