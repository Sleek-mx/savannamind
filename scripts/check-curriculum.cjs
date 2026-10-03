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
  if (file.endsWith(".json")) {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    const exported = data && typeof data === "object" && !Array.isArray(data) ? { ...data, default: data } : { default: data };
    cache[file] = { exports: exported };
    return exported;
  }
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

const UNIT_ID = /^s[1-5]-(b|i|a)-u[1-4]$/;
const YOUTUBE_IDS = new Set([
  "b0KaGBOU4Ys", "0yCJMt9Mx9c", "x7iRWjV8Tuc", "9x7srNK_i1Q", "_uDxfVBMrxM",
  "uEPqf7fLgTM", "aohQ4QSKsTU", "Ok-xpKjKp2g", "DFBbSTvtpy4", "3BhkeY974Rg",
  "4qVRBYAdLAo", "oV3ZY6tJiA0", "LPZh9BOjkQs", "T-D1OfcDW1M", "i9tjzr1KME0",
  "PIAPzioNt9Y", "JnnaDNNb380", "lgKrup5oi_A", "T7Rv4tGRlfc", "aircAruvnKk",
  "IHZwWFHWa-w", "wjZofJX0v4M", "oVtlp72f9NQ", "gV0_raKR2UQ", "G2fqAlgmoPo",
]);
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
  if (!Array.isArray(units) || units.length !== 4) return fail(label, `expected 4 units, got ${units && units.length}`);
  let enWords = 0;
  units.forEach((u, ui) => {
    const w = `${label}/${u.id}`;
    if (!UNIT_ID.test(u.id)) fail(w, "unit id must look like s1-b-u1");
    if (ids.has(u.id)) fail(w, "duplicate unit id");
    ids.add(u.id);
    if (!u.titleEn?.trim() || !u.titleSw?.trim()) fail(w, "missing unit title EN/SW");
    const cards = u.cards || [];
    const videos = cards.filter((c) => c.type === "video");
    const notes = cards.filter((c) => c.type === "note");
    if (notes.length !== 1) fail(w, "each unit needs exactly one note card");
    if (ui === 0 || ui === 3) {
      if (videos.length) fail(w, "basics and conclusion are text only");
    } else if (videos.length !== 1) {
      fail(w, "specific notes and application need exactly one video");
    }
    cards.forEach((c, ci) => {
      const cw = `${w}#${ci + 1}(${c.type})`;
      stats.cards++;
      if (c.type === "video") {
        if (!YOUTUBE_IDS.has(c.youtubeId)) fail(cw, `youtube id not on the approved list: ${c.youtubeId}`);
        if (!Array.isArray(c.checks) || c.checks.length !== 3) fail(cw, "video needs three timestamped checks");
        for (const check of c.checks || []) {
          if (!/^\d{2}:\d{2}$/.test(check.timestamp)) fail(cw, `bad timestamp ${check.timestamp}`);
          if (!Number.isInteger(check.correctIndex) || check.correctIndex < 0 || check.correctIndex > 3) {
            fail(cw, "check correctIndex out of range");
          }
          if (!check.optionsEn || check.optionsEn.length !== 4 || !check.optionsSw || check.optionsSw.length !== 4) {
            fail(cw, "check needs 4 options in EN and SW");
          }
          checkText(`${cw}.q`, check.questionEn);
          checkText(`${cw}.qSw`, check.questionSw);
        }
      }
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
      if (c.type === "note" && words(c.bodyEn) > 220) fail(cw, `notes too long (${words(c.bodyEn)} words)`);
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
  });
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
  const { moduleCurricula, getModuleGate } = load("@/lib/learn/curriculum/modules");
  if (moduleCurricula.length !== 5) fail("modules", `expected 5 slots, got ${moduleCurricula.length}`);
  for (const m of moduleCurricula) {
    for (const level of ["beginner", "intermediate", "advanced"]) {
      const t = m.tracks[level];
      if (!t) { fail(m.id, `missing ${level} track`); continue; }
      checkUnits(`${m.id}/${level}`, t.units, ids, stats);
      const gate = getModuleGate(m.id, level);
      if (!gate || gate.passCount !== 4 || gate.items.length !== 5) fail(`${m.id}/${level}`, "module quiz must be 5 items, pass 4");
      for (const item of gate?.items || []) {
        checkText(`${m.id}/${level} quiz`, item.qEn);
        checkText(`${m.id}/${level} quiz`, item.answerEn);
        if (!item.restudyEn || !item.restudySw) fail(`${m.id}/${level}`, "quiz item missing restudy line");
      }
    }
  }
  const mem = new Map();
  global.window = {};
  global.localStorage = { getItem: (k) => mem.get(k) ?? null, setItem: (k, v) => mem.set(k, v), removeItem: (k) => mem.delete(k) };
  const p = load("@/lib/learn/progress");
  p.markModuleComplete("s1", 80, 4);
  assert.equal(p.loadProgress().modules.s1?.completed, false, "xp under the threshold is not a pass");
  p.markModuleComplete("s1", 80, 4, { quizPassed: true });
  const first = p.loadProgress().totalXp;
  p.markModuleComplete("s1", 80, 4, { quizPassed: true });
  assert.equal(p.loadProgress().totalXp, first, "replay must not mint XP");
  assert(p.isModuleUnlocked("s2", ["s1", "s2", "s3", "s4", "s5"], p.loadProgress()));
  assert(!p.isModuleUnlocked("s3", ["s1", "s2", "s3", "s4", "s5"], p.loadProgress()));
  for (const id of ["s2", "s3", "s4", "s5"]) p.markModuleComplete(id, 80, 4, { quizPassed: true });
  assert(p.loadProgress().certificateIssuedAt, "certificate after all five modules");
}

for (const [label, n, w] of stats.tracks) console.log(`${label.padEnd(40)} ${String(n).padStart(3)} units  ~${w} EN words`);
console.log(`\n${ids.size} units, ${stats.cards} cards, ${stats.quizzes} quizzes, ${stats.prompts} prompt exercises`);
if (errors.length) {
  console.error(`\nFAIL — ${errors.length} problem(s):`);
  for (const e of errors.slice(0, 200)) console.error("  " + e);
  process.exit(1);
}
console.log("PASS");
