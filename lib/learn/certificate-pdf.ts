import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const PAGE_WIDTH = 842;
const PAGE_HEIGHT = 595;

/** Standard fonts are WinAnsi. Drop anything that cannot be drawn. */
export function certificateDisplayName(name: string): string {
  const cleaned = name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
  return cleaned || "Learner";
}

export function certificateDateLabel(issuedOn: Date): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = issuedOn.getUTCDate();
  const month = months[issuedOn.getUTCMonth()] ?? "January";
  return `${day} ${month} ${issuedOn.getUTCFullYear()}`;
}

export async function buildCertificatePdf(input: {
  learnerName: string;
  issuedOn: Date;
  logoPng: Uint8Array;
}): Promise<Uint8Array> {
  const name = certificateDisplayName(input.learnerName);
  const dateLabel = certificateDateLabel(input.issuedOn);
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  const serif = await pdf.embedFont(StandardFonts.TimesRoman);
  const serifBold = await pdf.embedFont(StandardFonts.TimesRomanBold);
  const logo = await pdf.embedPng(input.logoPng);

  const ink = rgb(0.09, 0.16, 0.18);
  const teal = rgb(0.05, 0.42, 0.4);
  const gold = rgb(0.72, 0.54, 0.18);
  const muted = rgb(0.33, 0.38, 0.4);

  page.drawRectangle({
    x: 18,
    y: 18,
    width: PAGE_WIDTH - 36,
    height: PAGE_HEIGHT - 36,
    borderColor: teal,
    borderWidth: 2,
  });
  page.drawRectangle({
    x: 26,
    y: 26,
    width: PAGE_WIDTH - 52,
    height: PAGE_HEIGHT - 52,
    borderColor: gold,
    borderWidth: 1,
  });

  const logoWidth = 168;
  const logoHeight = (logo.height / logo.width) * logoWidth;
  page.drawImage(logo, {
    x: (PAGE_WIDTH - logoWidth) / 2,
    y: PAGE_HEIGHT - 48 - logoHeight,
    width: logoWidth,
    height: logoHeight,
  });

  const title = "Certificate of Completion";
  const titleSize = 28;
  page.drawText(title, {
    x: (PAGE_WIDTH - serifBold.widthOfTextAtSize(title, titleSize)) / 2,
    y: 400,
    size: titleSize,
    font: serifBold,
    color: teal,
  });

  const course = "Foundations of Responsible AI";
  page.drawText(course, {
    x: (PAGE_WIDTH - serif.widthOfTextAtSize(course, 14)) / 2,
    y: 376,
    size: 14,
    font: serif,
    color: muted,
  });

  const presented = "This certifies that";
  page.drawText(presented, {
    x: (PAGE_WIDTH - serif.widthOfTextAtSize(presented, 13)) / 2,
    y: 338,
    size: 13,
    font: serif,
    color: muted,
  });

  let nameSize = 32;
  while (nameSize > 16 && serifBold.widthOfTextAtSize(name, nameSize) > PAGE_WIDTH - 140) {
    nameSize -= 1;
  }
  page.drawText(name, {
    x: (PAGE_WIDTH - serifBold.widthOfTextAtSize(name, nameSize)) / 2,
    y: 292,
    size: nameSize,
    font: serifBold,
    color: ink,
  });

  const line = "has completed the Savanna Mind course and the end-of-course check.";
  page.drawText(line, {
    x: (PAGE_WIDTH - serif.widthOfTextAtSize(line, 13)) / 2,
    y: 258,
    size: 13,
    font: serif,
    color: ink,
  });

  const dated = `Date: ${dateLabel}`;
  page.drawText(dated, {
    x: (PAGE_WIDTH - serif.widthOfTextAtSize(dated, 13)) / 2,
    y: 228,
    size: 13,
    font: serif,
    color: ink,
  });

  const signY = 118;
  const leftX = 150;
  const rightX = 500;
  page.drawLine({
    start: { x: leftX, y: signY },
    end: { x: leftX + 180, y: signY },
    thickness: 0.8,
    color: gold,
  });
  page.drawLine({
    start: { x: rightX, y: signY },
    end: { x: rightX + 180, y: signY },
    thickness: 0.8,
    color: gold,
  });

  const leftName = "Savanna Mind";
  const rightName = "Dr. Tawfiq Bashir";
  page.drawText(leftName, {
    x: leftX + (180 - serifBold.widthOfTextAtSize(leftName, 13)) / 2,
    y: signY - 20,
    size: 13,
    font: serifBold,
    color: ink,
  });
  page.drawText(rightName, {
    x: rightX + (180 - serifBold.widthOfTextAtSize(rightName, 13)) / 2,
    y: signY - 20,
    size: 13,
    font: serifBold,
    color: ink,
  });

  const role = "Signatory";
  page.drawText(role, {
    x: leftX + (180 - serif.widthOfTextAtSize(role, 10)) / 2,
    y: signY - 36,
    size: 10,
    font: serif,
    color: muted,
  });
  page.drawText(role, {
    x: rightX + (180 - serif.widthOfTextAtSize(role, 10)) / 2,
    y: signY - 36,
    size: 10,
    font: serif,
    color: muted,
  });

  return pdf.save();
}
