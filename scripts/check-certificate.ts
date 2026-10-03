import { readFileSync } from "node:fs";
import { inflateSync } from "node:zlib";
import { buildCertificatePdf } from "../lib/learn/certificate-pdf";
import { courseCertificateReady } from "../lib/learn/certificate-eligibility";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    console.error(message);
    process.exit(1);
  }
}

async function main() {
  assert(
    !courseCertificateReady({
      modules: {
        s1: { completed: true },
        s2: { completed: true },
        s3: { completed: true },
        s4: { completed: true },
        s5: { completed: true },
      },
      outcomeBestScore: undefined,
      outcomeCompletedAt: undefined,
    }),
    "modules alone do not unlock the certificate"
  );
  assert(
    courseCertificateReady({
      modules: {
        s1: { completed: true },
        s2: { completed: true },
        s3: { completed: true },
        s4: { completed: true },
        s5: { completed: true },
      },
      outcomeBestScore: 9,
      outcomeCompletedAt: "2026-10-03T07:23:00.000Z",
    }),
    "certificate unlocks after the outcome check"
  );

  const logo = readFileSync(new URL("../public/logo-full.png", import.meta.url));
  const pdf = await buildCertificatePdf({
    learnerName: "Amina Wanjiku",
    issuedOn: new Date("2026-10-03T07:23:00.000Z"),
    logoPng: logo,
  });
  assert(Buffer.from(pdf.subarray(0, 5)).toString() === "%PDF-", "pdf header");
  const text = extractPdfText(Buffer.from(pdf));
  assert(text.includes("Amina Wanjiku"), "pdf includes learner name");
  assert(text.includes("3 October 2026"), "pdf includes the check date");
  assert(text.includes("Savanna Mind"), "pdf includes Savanna Mind");
  assert(text.includes("Dr. Tawfiq Bashir"), "pdf includes Dr. Tawfiq Bashir");
  assert(Buffer.from(pdf).toString("latin1").includes("/Subtype /Image"), "pdf embeds the logo");

  console.log("certificate checks ok");
}

function extractPdfText(bytes: Buffer): string {
  const chunks: Buffer[] = [];
  const latin = bytes.toString("latin1");
  const marker = /\/Length\s+(\d+)[^]*?stream\r?\n/g;
  let match: RegExpExecArray | null;
  while ((match = marker.exec(latin))) {
    const length = Number(match[1]);
    const start = match.index + match[0].length;
    const raw = bytes.subarray(start, start + length);
    try {
      chunks.push(inflateSync(raw));
    } catch {
      chunks.push(Buffer.from(raw));
    }
  }
  const operators = Buffer.concat(chunks).toString("latin1");
  return operators.replace(/<([0-9A-Fa-f\s]+)>/g, (_full, hex: string) => {
    const clean = hex.replace(/\s+/g, "");
    if (clean.length % 2 !== 0) return "";
    let text = "";
    for (let i = 0; i < clean.length; i += 2) {
      text += String.fromCharCode(Number.parseInt(clean.slice(i, i + 2), 16));
    }
    return text;
  });
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
