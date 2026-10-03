const COURSE_SLOTS = ["s1", "s2", "s3", "s4", "s5"] as const;

export function courseCertificateReady(input: {
  modules: Record<string, { completed?: boolean } | undefined>;
  outcomeBestScore?: number;
  outcomeCompletedAt?: string | null;
}): boolean {
  const modulesDone = COURSE_SLOTS.every((id) => input.modules[id]?.completed === true);
  return (
    modulesDone &&
    typeof input.outcomeBestScore === "number" &&
    typeof input.outcomeCompletedAt === "string" &&
    input.outcomeCompletedAt.length > 0
  );
}
