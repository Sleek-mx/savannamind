import type { AgeBand } from "./types";
import videosFile from "./learn-videos-by-band.json";

type VideoEntry = { id: string; title: string; youtube: string };

const file = videosFile as {
  bands: Record<
    AgeBand,
    { pool: VideoEntry[] }
  >;
};

/** Spec §10 — slot index from 1-based unit number within module. */
export function videoSlotIndex(unitNumber1Based: number, poolLength: number): number {
  if (poolLength <= 0) return 0;
  return Math.floor((unitNumber1Based - 1) / 2) % poolLength;
}

export function bandVideoForUnit(
  ageBand: AgeBand,
  unitNumber1Based: number
): VideoEntry | undefined {
  const band = file.bands[ageBand];
  if (!band?.pool?.length) return undefined;
  const idx = videoSlotIndex(unitNumber1Based, band.pool.length);
  return band.pool[idx];
}

/** Show scheduled band video on odd unit indices (pairs 1–2, 3–4) at start of unit. */
export function shouldShowScheduledBandVideo(unitNumber1Based: number): boolean {
  return unitNumber1Based % 2 === 1;
}
