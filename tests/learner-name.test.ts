import { expect, test } from "vitest";
import { deriveLearnerName } from "../lib/learn/learner-name";

test("prefers full name, then name, then email prefix", () => {
  expect(
    deriveLearnerName({
      email: "ada@example.com",
      user_metadata: { full_name: "  Ada Lovelace  ", name: "Ada" },
    })
  ).toBe("Ada Lovelace");

  expect(
    deriveLearnerName({
      email: "ada@example.com",
      user_metadata: { full_name: "   ", name: "Ada" },
    })
  ).toBe("Ada");

  expect(deriveLearnerName({ email: "  ada  @example.com", user_metadata: null })).toBe("ada");
});

test("ignores non-string metadata and uses the fallback", () => {
  expect(deriveLearnerName(null)).toBe("Learner");
  expect(deriveLearnerName(undefined)).toBe("Learner");
  expect(deriveLearnerName({ user_metadata: { full_name: 12, name: false } })).toBe("Learner");
  expect(deriveLearnerName({ email: "@example.com" }, "Student")).toBe("Student");
});

test("caps display names at 100 characters", () => {
  const long = "a".repeat(150);
  expect(deriveLearnerName({ user_metadata: { full_name: long } })).toHaveLength(100);
  expect(deriveLearnerName(null, "b".repeat(120))).toHaveLength(100);
});
