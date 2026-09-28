import type { AgeBand } from "./types";

export function heroImageForBand(band: AgeBand): string {
  switch (band) {
    case "kids":
      return "/learn/learn-module-placeholder-education.png";
    case "youth":
      return "/learn/hero-section.png";
    case "adult":
      return "/learn/learn-module-placeholder-enterprise.png";
    default:
      return "/learn/hero-section.png";
  }
}
