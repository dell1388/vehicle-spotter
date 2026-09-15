/* Test suite for the corrections overlay. Run: node tests/corrections.test.js
 *
 * corrections.js talks to localStorage and defines a global, so both are stubbed
 * here the same way a browser would supply them. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const { VEHICLES } = require("../js/vehicles.js");
const VSMatch = require("../js/match.js");

let pass = 0;
const failures = [];

function check(label, got, want) {
  if (JSON.stringify(got) === JSON.stringify(want)) pass++;
  else failures.push(`${label}: expected ${JSON.stringify(want)}, got ${JSON.stringify(got)}`);
}
function ok(label, value) { check(label, !!value, true); }

/* A fresh module instance with an empty localStorage. */
function freshCorrections(seed) {
  const store = Object.create(null);
  if (seed !== undefined) store["vehicleSpotter.corrections.v1"] = seed;
  const sandbox = {
    window: {
      localStorage: {
        getItem: (k) => (k in store ? store[k] : null),
        setItem: (k, v) => { store[k] = String(v); },
        removeItem: (k) => { delete store[k]; }
      }
    },
    module: { exports: {} }
  };
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(__dirname, "../js/corrections.js"), "utf8"), sandbox);
  // `const Corrections` is a lexical binding inside the script, so pick the
  // module up the same way the file exports it.
  return { C: sandbox.module.exports, raw: () => store["vehicleSpotter.corrections.v1"] };
}

const sherman = VEHICLES.find((v) => v.id === "m4_sherman");
const spitfire = VEHICLES.find((v) => v.id === "spitfire");

/* --- untouched entries pass straight through ----------------------------- */
{
  const { C } = freshCorrections();
  check("no corrections returns the same object", C.apply(sherman) === sherman, true);
  check("count starts at zero", C.count(), 0);
  check("name falls back to the dataset", C.nameFor(sherman), "M4 Sherman");
}

/* --- renaming ------------------------------------------------------------ */
{
  const { C } = freshCorrections();
  check("rename accepted", C.rename(sherman, "M4A3E8 Sherman", false), null);
  check("name is the new one", C.apply(sherman).name, "M4A3E8 Sherman");
  check("dataset row is untouched", sherman.name, "M4 Sherman");
  ok("new name answers", VSMatch.check("M4A3E8 Sherman", C.apply(sherman)).verdict === "correct");
  check("rename is counted", C.count(), 1);

  // The old name was declared wrong, so by default it stops being an answer.
  check("old name dropped", VSMatch.check("M4 Sherman", C.apply(sherman)).verdict !== "correct", true);

  C.clearName(sherman.id);
  check("undo restores the dataset name", C.apply(sherman).name, "M4 Sherman");
  ok("old name answers again", VSMatch.check("M4 Sherman", C.apply(sherman)).verdict === "correct");
}

/* --- renaming while keeping the old name --------------------------------- */
{
  const { C } = freshCorrections();
  C.rename(sherman, "Sherman Medium Tank", true);
  check("renamed", C.apply(sherman).name, "Sherman Medium Tank");
  ok("old name still answers", VSMatch.check("M4 Sherman", C.apply(sherman)).verdict === "correct");
}

/* --- renaming back to the original clears the correction ----------------- */
{
  const { C } = freshCorrections();
  C.rename(sherman, "Something Else", false);
  check("one correction", C.count(), 1);
  C.rename(sherman, "  m4   sherman  ", false);      // same name, messy spacing
  check("renaming back clears it", C.count(), 0);
  check("name is the dataset's", C.apply(sherman).name, "M4 Sherman");
}

/* --- refusals ------------------------------------------------------------ */
{
  const { C } = freshCorrections();
  ok("empty name refused", C.rename(sherman, "   ", false));
  ok("overlong name refused", C.rename(sherman, "x".repeat(200), false));
  check("nothing was stored", C.count(), 0);
}

/* --- dropping an alias the dataset shipped ------------------------------- */
{
  const { C } = freshCorrections();
  ok("alias answers to begin with", VSMatch.check("Sherman", C.apply(sherman)).verdict === "correct");
  C.dropAlias(sherman.id, "Sherman");
  check("dropped alias no longer answers",
        VSMatch.check("Sherman", C.apply(sherman)).verdict !== "correct", true);
  ok("the canonical name still answers", VSMatch.check("M4 Sherman", C.apply(sherman)).verdict === "correct");
  C.restoreAlias(sherman.id, "Sherman");
  ok("restored alias answers again", VSMatch.check("Sherman", C.apply(sherman)).verdict === "correct");
}

/* --- adding an alias ----------------------------------------------------- */
{
  const { C } = freshCorrections();
  check("added", C.addAlias(spitfire.id, "Supermarine Spit Mk IX"), null);
  ok("added alias answers", VSMatch.check("Supermarine Spit Mk IX", C.apply(spitfire)).verdict === "correct");
  ok("duplicate refused", C.addAlias(spitfire.id, "supermarine spit mk ix"));
  check("still one alias", C.aliasesFor(spitfire.id).length, 1);

  // Re-adding something previously dropped should simply un-drop it.
  C.dropAlias(spitfire.id, "Spitfire");
  check("dropped", VSMatch.check("Spitfire", C.apply(spitfire)).verdict !== "correct", true);
  C.addAlias(spitfire.id, "Spitfire");
  ok("re-added alias answers", VSMatch.check("Spitfire", C.apply(spitfire)).verdict === "correct");
}

/* --- hiding -------------------------------------------------------------- */
{
  const { C } = freshCorrections();
  check("not hidden", C.isHidden(sherman.id), false);
  C.flag(sherman.id, "photo", "shows a Firefly");
  check("hidden", C.isHidden(sherman.id), true);
  check("listed", C.hiddenIds(), ["m4_sherman"]);
  C.unflag(sherman.id);
  check("un-hidden", C.isHidden(sherman.id), false);
}

/* --- persistence and undo ------------------------------------------------ */
{
  const first = freshCorrections();
  first.C.rename(sherman, "Sherman II", true);
  first.C.addAlias(spitfire.id, "Spitty");
  first.C.dropAlias(spitfire.id, "Spit");
  first.C.flag("t34", "name", "actually a T-34-85");
  check("four corrections", first.C.count(), 4);

  // Reload from what was written, exactly as a new page load would.
  const second = freshCorrections(first.raw());
  check("survives a reload", second.C.count(), 4);
  check("name survived", second.C.apply(sherman).name, "Sherman II");
  ok("added alias survived", VSMatch.check("Spitty", second.C.apply(spitfire)).verdict === "correct");
  check("dropped alias survived",
        VSMatch.check("Spit", second.C.apply(spitfire)).verdict !== "correct", true);
  check("flag survived", second.C.isHidden("t34"), true);

  const kinds = second.C.entries().map((e) => e.kind).sort();
  check("every kind is listed and undoable", kinds, ["alias", "dropped", "hidden", "name"]);

  second.C.entries().forEach((e) => second.C.undo(e));
  check("undoing everything empties it", second.C.count(), 0);
  check("back to the dataset name", second.C.apply(sherman).name, "M4 Sherman");
}

/* --- corrupt or hostile stored data -------------------------------------- */
{
  check("garbage JSON ignored", freshCorrections("not json at all").C.count(), 0);
  check("wrong shape ignored", freshCorrections('{"names":42,"aliases":"nope"}').C.count(), 0);
  const odd = freshCorrections('{"names":{"m4_sherman":{"to":"   "}},"aliases":{"spitfire":[1,2,null]}}');
  check("blank name rejected on load", odd.C.count(), 0);
  check("non-string aliases rejected on load", odd.C.apply(spitfire) === spitfire, true);
}

/* ------------------------------------------------------------------------ */
console.log(`\n${pass} assertions passed`);
if (failures.length) {
  console.log(`\n${failures.length} FAILED:`);
  failures.forEach((f) => console.log("  - " + f));
  process.exit(1);
}
console.log("all good\n");
