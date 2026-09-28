"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";

export function extractBulletLines(body: string): string[] {
  const paragraphs = body.split(/\n\n+/);
  const bullets: string[] = [];
  for (const para of paragraphs) {
    const lines = para.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.length > 1 && lines.every((l) => /^[-•*]\s/.test(l) || /^\d+\.\s/.test(l))) {
      for (const l of lines) {
        bullets.push(l.replace(/^[-•*]\s*/, "").replace(/^\d+\.\s*/, ""));
      }
      continue;
    }
    if (lines.length === 1 && /^[-•*]\s/.test(lines[0])) {
      bullets.push(lines[0].replace(/^[-•*]\s*/, ""));
      continue;
    }
    bullets.push(para.trim());
  }
  return bullets.filter(Boolean);
}

function condenseForReword(lines: string[]): string[] {
  if (lines.length <= 4) return lines;
  const picked: string[] = [];
  for (let i = 0; i < lines.length && picked.length < 5; i += 2) {
    picked.push(lines[i]);
  }
  if (picked.length < 3) return lines.slice(0, 5);
  return picked;
}

/**
 * Splits lines into page chunks so a single flashcard never exceeds one page / screen height.
 * Guarantees 2 or 3 bullet points per card (max 3 items per card), eliminating single-bullet orphans.
 */
export function chunkLinesForPages(
  lines: string[],
  maxCharsPerPage = 750,
  maxItemsPerPage = 3
): string[][] {
  const n = lines.length;
  if (n <= 1) return [lines];

  const totalChars = lines.reduce((acc, l) => acc + l.length, 0);
  if (n <= maxItemsPerPage && totalChars <= maxCharsPerPage) {
    return [lines];
  }

  // Pure 2-to-3 item partitioning
  const numPages = Math.ceil(n / maxItemsPerPage);
  const base = Math.floor(n / numPages);
  const rem = n % numPages;

  const candidatePages: string[][] = [];
  let cursor = 0;
  for (let i = 0; i < numPages; i++) {
    const size = base + (i < rem ? 1 : 0);
    candidatePages.push(lines.slice(cursor, cursor + size));
    cursor += size;
  }

  const allFit = candidatePages.every(
    (p) => p.reduce((acc, l) => acc + l.length, 0) <= maxCharsPerPage
  );

  if (allFit) {
    return candidatePages;
  }

  // Character-budgeted fallback with anti-orphan protection
  const pages: string[][] = [];
  let current: string[] = [];
  let currentChars = 0;

  for (const line of lines) {
    const wouldOverflow =
      current.length > 0 &&
      (current.length >= maxItemsPerPage || currentChars + line.length > maxCharsPerPage);

    if (wouldOverflow) {
      pages.push(current);
      current = [line];
      currentChars = line.length;
    } else {
      current.push(line);
      currentChars += line.length;
    }
  }

  if (current.length > 0) {
    pages.push(current);
  }

  // Anti-orphan rebalancing: if a page has 1 item and previous has > 2 items, rebalance
  for (let i = pages.length - 1; i > 0; i--) {
    if (pages[i].length === 1 && pages[i - 1].length > 2) {
      const donated = pages[i - 1].pop()!;
      pages[i].unshift(donated);
    }
  }

  return pages;
}

export function FlashcardBullets({
  title,
  body,
  image,
  locale,
  onComplete,
  rewordMode = false,
}: {
  title: string;
  body: string;
  image?: string;
  locale: "en" | "sw";
  onComplete: () => void;
  /** Spec §7.5 — shorter reworded path after a failed unit quiz */
  rewordMode?: boolean;
}) {
  const isSw = locale === "sw";
  const reduce = useReducedMotion();

  const pages = useMemo(() => {
    const all = extractBulletLines(body);
    const lines = rewordMode ? condenseForReword(all) : all;
    return chunkLinesForPages(lines, 750, 3);
  }, [body, rewordMode]);

  const [pageIndex, setPageIndex] = useState(0);
  const [revealed, setRevealed] = useState(0);

  // Reset page when card body changes
  useEffect(() => {
    setPageIndex(0);
    setRevealed(0);
  }, [body]);

  const totalPages = pages.length;
  const currentPageLines = pages[pageIndex] ?? [];
  const isLastPage = pageIndex >= totalPages - 1;

  // Reveal bullets for the current page
  useEffect(() => {
    setRevealed(0);
  }, [pageIndex]);

  useEffect(() => {
    if (revealed >= currentPageLines.length) return;
    const t = setTimeout(() => setRevealed((r) => r + 1), reduce ? 0 : 380);
    return () => clearTimeout(t);
  }, [revealed, currentPageLines.length, reduce]);

  const handleNextPage = () => {
    if (!isLastPage) {
      setPageIndex((p) => p + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex((p) => p - 1);
    }
  };

  return (
    <div className="flashcard-bullets flex flex-col justify-between min-h-[22rem]">
      <div>
        {totalPages > 1 && (
          <div className="flashcard-page-header flex items-center justify-between mb-3">
            <span className="flashcard-page-chip">
              {isSw ? `Sehemu ${pageIndex + 1} ya ${totalPages}` : `Part ${pageIndex + 1} of ${totalPages}`}
            </span>
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === pageIndex
                      ? "w-6 bg-learn-teal"
                      : idx < pageIndex
                      ? "w-2 bg-learn-teal/40"
                      : "w-2 bg-learn-teal/15"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {rewordMode && (
          <p className="flashcard-bullets-reword-banner" role="status">
            {isSw
              ? "Jaribu tena — hizi ni pointi muhimu kwa maneno rahisi."
              : "Try again — here are the same ideas in simpler steps."}
          </p>
        )}

        {pageIndex === 0 && image && (
          <div className="relative w-full h-36 mb-4 rounded-xl overflow-hidden border border-learn-teal/15 shadow-sm">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        )}

        <h1 className="flashcard-bullets-title text-xl sm:text-2xl font-bold text-learn-ink mb-4">
          {title}
        </h1>

        <ul className="flashcard-bullets-list" aria-live="polite">
          {currentPageLines.slice(0, revealed).map((line, i) => (
            <motion.li
              key={`${pageIndex}-${i}-${line.slice(0, 24)}`}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="text-[#1e2a2e] text-base leading-relaxed"
            >
              {line}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="flashcard-bullets-actions flex items-center justify-between gap-3 mt-6 pt-4 border-t border-learn-teal/10">
        {pageIndex > 0 ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handlePrevPage}
          >
            {isSw ? "Rudi nyuma" : "Previous"}
          </Button>
        ) : (
          <div />
        )}

        {isLastPage ? (
          <Button
            type="button"
            variant="gold"
            disabled={revealed < currentPageLines.length}
            onClick={onComplete}
          >
            {isSw ? "Kadi inayofuata" : "Next card"}
          </Button>
        ) : (
          <Button
            type="button"
            variant="gold"
            disabled={revealed < currentPageLines.length}
            onClick={handleNextPage}
          >
            {isSw ? "Kadi inayofuata" : "Next card"}
          </Button>
        )}
      </div>
    </div>
  );
}
