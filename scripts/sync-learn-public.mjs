#!/usr/bin/env node
/**
 * Copy machine-readable Learn assets from lib/learn to public/learn for runtime fetch.
 * Run after updating learn-timed-quizzes.json in lib/.
 */
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pairs = [
  ["lib/learn/timed-quizzes.json", "public/learn/timed-quizzes.json"],
  ["lib/learn/learn-careers.json", "public/learn/learn-careers.json"],
  ["lib/learn/learn-videos-by-band.json", "public/learn/learn-videos-by-band.json"],
];

mkdirSync(join(root, "public/learn"), { recursive: true });

for (const [src, dest] of pairs) {
  copyFileSync(join(root, src), join(root, dest));
  console.log(`synced ${src} → ${dest}`);
}
