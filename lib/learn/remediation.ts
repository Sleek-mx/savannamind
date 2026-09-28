import { loadQuizProgress } from "./quiz-progress";

const REMEDIATION_KEY = "savannamind-learn-remediation-v1";

export type RemediationState = {
  /** Units that must be redone in video+notes mode after module exam fail */
  assignedUnitIds: string[];
  /** Active module id for remediation loop */
  moduleId: string | null;
  /** Force video+notes for specific units (quiz fail 2+, module remediation) */
  videoNotesUnitIds: string[];
};

function empty(): RemediationState {
  return { assignedUnitIds: [], moduleId: null, videoNotesUnitIds: [] };
}

export function loadRemediation(): RemediationState {
  if (typeof window === "undefined") return empty();
  try {
    const raw = localStorage.getItem(REMEDIATION_KEY);
    return raw ? (JSON.parse(raw) as RemediationState) : empty();
  } catch {
    return empty();
  }
}

export function saveRemediation(state: RemediationState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(REMEDIATION_KEY, JSON.stringify(state));
}

export function clearRemediation() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(REMEDIATION_KEY);
}

export function isVideoNotesMode(moduleId: string, unitId: string): boolean {
  const r = loadRemediation();
  if (r.moduleId && r.moduleId !== moduleId) return false;
  return r.videoNotesUnitIds.includes(unitId) || r.assignedUnitIds.includes(unitId);
}

export function assignModuleRemediation(moduleId: string, unitIds: string[]) {
  const r = loadRemediation();
  saveRemediation({
    moduleId,
    assignedUnitIds: [...new Set(unitIds)],
    videoNotesUnitIds: [...new Set([...r.videoNotesUnitIds, ...unitIds])],
  });
}

export function clearUnitFromRemediation(unitId: string) {
  const r = loadRemediation();
  saveRemediation({
    ...r,
    assignedUnitIds: r.assignedUnitIds.filter((id) => id !== unitId),
    videoNotesUnitIds: r.videoNotesUnitIds.filter((id) => id !== unitId),
  });
}

export function clearModuleRemediation(moduleId: string) {
  const r = loadRemediation();
  if (r.moduleId !== moduleId) return;
  saveRemediation(empty());
}

/** Unit quiz fail: 2nd fail → video+notes per spec §7.5 */
export function maybeEnableVideoNotesAfterQuizFail(unitId: string, moduleId: string) {
  const fails = loadQuizProgress().unitFailCount[unitId] ?? 0;
  if (fails < 2) return;
  const r = loadRemediation();
  if (!r.videoNotesUnitIds.includes(unitId)) {
    saveRemediation({
      ...r,
      moduleId: r.moduleId ?? moduleId,
      videoNotesUnitIds: [...r.videoNotesUnitIds, unitId],
    });
  }
}
