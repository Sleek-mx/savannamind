import { expect, test } from "vitest";
import { safeAuthNextPath } from "../lib/auth/redirect";

const fallback = "/en/login";

test("keeps in-app English and Kiswahili paths", () => {
  expect(safeAuthNextPath("/en", fallback)).toBe("/en");
  expect(safeAuthNextPath("/en/", fallback)).toBe("/en/");
  expect(safeAuthNextPath("/sw/learn/studio", fallback)).toBe("/sw/learn/studio");
  expect(safeAuthNextPath("/en/login?next=1#card", fallback)).toBe("/en/login?next=1#card");
  expect(safeAuthNextPath("/sw#top", fallback)).toBe("/sw#top");
});

test("rejects off-site and malformed return paths", () => {
  expect(safeAuthNextPath(null, fallback)).toBe(fallback);
  expect(safeAuthNextPath("", fallback)).toBe(fallback);
  expect(safeAuthNextPath("https://evil.example/en", fallback)).toBe(fallback);
  expect(safeAuthNextPath("//evil.example", fallback)).toBe(fallback);
  expect(safeAuthNextPath("/\\evil.example", fallback)).toBe(fallback);
  expect(safeAuthNextPath("/en/login\n", fallback)).toBe(fallback);
  expect(safeAuthNextPath("/fr/login", fallback)).toBe(fallback);
  expect(safeAuthNextPath("/english", fallback)).toBe(fallback);
  expect(safeAuthNextPath("/EN/login", fallback)).toBe(fallback);
  expect(safeAuthNextPath("/en/login/../admin", fallback)).toBe("/en/admin");
  expect(safeAuthNextPath("/en/../../evil", fallback)).toBe(fallback);
});
