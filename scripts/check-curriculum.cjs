#!/usr/bin/env node
// Validates Learn Studio curriculum content.
//   node scripts/check-curriculum.cjs                -> full check (all tracks via modules/index.ts + progress rules)
//   node scripts/check-curriculum.cjs <file.ts> ...  -> check every exported unit array in the given files
const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const ts = require(path.join(root, "node_modules/typescript"));

const cache = {};
function load(file) {
  file = file.startsWith("@/") ? path.join(root, file.slice(2)) : path.resolve(root, file);
  if (!path.extname(file)) file = fs.existsSync(file + ".ts") ? file + ".ts" : path.join(file, "index.ts");
  if (cache[file]) return cache[file].exports;
  const mod = { exports: {} };
  cache[file] = mod;
  const src = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  new Function("require", "module", "exports", src)(
    (s) => (s.startsWith(".") ? load(path.resolve(path.dirname(file), s)) : s.startsWith("@/") ? load(s) : require(s)),
    mod,
    mod.exports
  );
  return mod.exports;
}

const UNIT_ID = /^(m0|agr|hlt|edu|biz|cap)-(b|i|a)-u\d+$/;
const EMOJI = /\p{Extended_Pictographic}/u;
const BANNED = [
  [/afisa wa ugavi/i, "use 'afisa wa ugani' for agricultural extension officer"],
  [/Savannah/, "brand is 'Savanna'"],
  [/\b(OpenAI|ChatGPT|DeepSeek|Qwen|B\.AI|Gemini|Claude|Copilot)\b/, "no AI vendor names in lesson copy"],
];

const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);

function words(s) {
  return (s || "").split(/\s+/).filter(Boolean).length;
}

function checkText(where, text) {
  if (typeof text !== "string") return;
  if (EMOJI.test(text)) fail(where, "contains emoji");
  for (const [re, why] of BANNED) if (re.test(text)) fail(where, `banned wording (${why})`);
  const fences = (text.match(/```/g) || []).length;
  if (fences % 2) fail(where, "unbalanced ``` code fence");
  for (const para of text.split("\n\n")) {
    if (para.startsWith("```") && !para.trimEnd().endsWith("```")) fail(where, "code block must not contain blank lines");
  }
}

function checkUnits(label, units, ids, stats) {
  if (!Array.isArray(units) || units.length === 0) return fail(label, "empty track");
  let enWords = 0;
  for (const u of units) {
    const w = `${label}/${u.id}`;
    if (!UNIT_ID.test(u.id)) fail(w, "unit id must look like agr-b-u1");
    if (ids.has(u.id)) fail(w, "duplicate unit id");
    ids.add(u.id);
    if (!u.titleEn?.trim() || !u.titleSw?.trim()) fail(w, "missing unit title EN/SW");
    const cards = u.cards || [];
    if (cards.length < 5) fail(w, `only ${cards.length} cards (min 5)`);
    if (!cards.some((c) => c.type === "note")) fail(w, "needs at least one note card");
    if (!cards.some((c) => c.type === "quiz")) fail(w, "needs at least one quiz/scenario card");
    cards.forEach((c, ci) => {
      const cw = `${w}#${ci + 1}(${c.type})`;
      stats.cards++;
      if (c.type === "video") fail(cw, "video cards disabled until YouTube IDs are verified");
      for (const k of Object.keys(c).filter((k) => k.endsWith("En"))) {
        const sw = k.slice(0, -2) + "Sw";
        if (c[k] === undefined) continue;
        if (c[sw] === undefined) { fail(cw, `missing ${sw}`); continue; }
        if (Array.isArray(c[k])) {
          if (!Array.isArray(c[sw]) || c[k].length !== c[sw].length) fail(cw, `${k}/${sw} length mismatch`);
          c[k].forEach((t, i) => { checkText(`${cw}.${k}[${i}]`, t); if (!String(t).trim()) fail(cw, `${k}[${i}] blank`); });
          (c[sw] || []).forEach((t, i) => { checkText(`${cw}.${sw}[${i}]`, t); if (!String(t).trim()) fail(cw, `${sw}[${i}] blank`); });
        } else {
          if (typeof c[sw] !== "string" || !c[sw].trim()) fail(cw, `blank ${sw}`);
          checkText(`${cw}.${k}`, c[k]);
          checkText(`${cw}.${sw}`, c[sw]);
          enWords += words(c[k]);
        }
      }
      if (c.type === "quiz") {
        stats.quizzes++;
        if (c.optionsEn.length < 3) fail(cw, "quiz needs at least 3 options");
        if (!Number.isInteger(c.correctIndex) || c.correctIndex < 0 || c.correctIndex >= c.optionsEn.length) fail(cw, "correctIndex out of range");
        if (c.hintsEn && c.hintsEn.length !== c.optionsEn.length) fail(cw, "hintsEn must align with optionsEn");
        if (!c.explainEn) fail(cw, "quiz needs explainEn/explainSw");
        enWords += c.optionsEn.reduce((s, o) => s + words(o), 0);
      }
      if (c.type === "prompt-builder") {
        stats.prompts++;
        if (!c.required?.length) fail(cw, "prompt-builder needs required blocks");
        for (const idx of c.required || []) if (idx < 0 || idx >= c.blocksEn.length) fail(cw, "required index out of range");
      }
      if (c.type === "reveal") {
        if (!c.items || c.items.length < 2) fail(cw, "reveal needs at least 2 terms");
        for (const it of c.items || []) {
          if (!(it.termEn && it.termSw && it.defEn && it.defSw)) fail(cw, "reveal term missing EN/SW field");
          for (const v of Object.values(it)) checkText(cw, v);
          enWords += words(it.termEn) + words(it.defEn);
        }
      }
    });
  }
  stats.tracks.push([label, units.length, enWords]);
}

const stats = { cards: 0, quizzes: 0, prompts: 0, tracks: [] };
const ids = new Set();
const files = process.argv.slice(2);

if (files.length) {
  for (const f of files) {
    const exp = load(f);
    const arrays = Object.entries(exp).filter(([, v]) => Array.isArray(v));
    if (!arrays.length) fail(f, "no exported unit arrays");
    for (const [name, units] of arrays) checkUnits(`${path.basename(f)}:${name}`, units, ids, stats);
  }
} else {
  const { moduleCurricula } = load("@/lib/learn/curriculum/modules");
  for (const m of moduleCurricula) {
    for (const level of ["beginner", "intermediate", "advanced"]) {
      const t = m.tracks[level];
      if (!t) { fail(m.id, `missing ${level} track`); continue; }
      checkUnits(`${m.id}/${level}`, t.units, ids, stats);
    }
  }
  const mem = new Map();
  global.window = {};
  global.localStorage = { getItem: (k) => mem.get(k) ?? null, setItem: (k, v) => mem.set(k, v), removeItem: (k) => mem.delete(k) };
  const p = load("@/lib/learn/progress");
  p.markModuleComplete("m0", 80);
  const first = p.loadProgress().totalXp;
  p.markModuleComplete("m0", 80);
  assert.equal(p.loadProgress().totalXp, first, "replay must not mint XP");
  assert(p.isModuleUnlocked("agr", ["m0", "agr"], p.loadProgress()));
  assert(!p.isModuleUnlocked("cap", ["m0", "agr", "cap"], p.loadProgress()));
  for (const id of ["agr", "hlt", "edu", "biz", "cap"]) p.markModuleComplete(id, 90);
  assert(p.loadProgress().certificateIssuedAt, "certificate after all six modules");
}

for (const [label, n, w] of stats.tracks) console.log(`${label.padEnd(40)} ${String(n).padStart(3)} units  ~${w} EN words`);
console.log(`\n${ids.size} units, ${stats.cards} cards, ${stats.quizzes} quizzes, ${stats.prompts} prompt exercises`);
if (errors.length) {
  console.error(`\nFAIL — ${errors.length} problem(s):`);
  for (const e of errors.slice(0, 200)) console.error("  " + e);
  process.exit(1);
}
console.log("PASS");
