/* Test suite for the daily challenge. Run: node tests/daily.test.js
 *
 * The property that matters is that the day decides everything: two people on
 * the same date, with the same dataset, must get the same ten vehicles in the
 * same order, without either of them talking to a server.
 */
const Daily = require("../js/daily.js");
const { VEHICLES } = require("../js/vehicles.js");

let pass = 0;
const failures = [];
function ok(label, cond) { if (cond) pass++; else failures.push(label); }
function eq(label, got, want) {
  if (JSON.stringify(got) === JSON.stringify(want)) pass++;
  else failures.push(`${label}: expected ${JSON.stringify(want)}, got ${JSON.stringify(got)}`);
}

/* --- the date key is local, and the shape the rest relies on ------------- */
{
  eq("a date becomes its own key", Daily.todayKey(new Date(2026, 0, 5)), "2026-01-05");
  eq("months and days are padded", Daily.todayKey(new Date(2026, 10, 9)), "2026-11-09");
  ok("today is a key too", /^\d{4}-\d{2}-\d{2}$/.test(Daily.todayKey()));
}

/* --- the same day gives the same game ------------------------------------ */
{
  const a = Daily.pick(VEHICLES, "2026-03-14", 10).map((v) => v.id);
  const b = Daily.pick(VEHICLES, "2026-03-14", 10).map((v) => v.id);
  eq("the day picks the same ten, in the same order", a, b);
  eq("ten of them", a.length, 10);
  eq("and no vehicle twice", a.length, new Set(a).size);

  // The dataset's own order must not leak into the choice.
  const shuffled = VEHICLES.slice().reverse();
  eq("the order of the dataset does not matter",
     Daily.pick(shuffled, "2026-03-14", 10).map((v) => v.id), a);
}

/* --- different days give different games --------------------------------- */
{
  const days = ["2026-03-14", "2026-03-15", "2026-03-16", "2026-07-01", "2027-01-01"];
  const sets = days.map((d) => Daily.pick(VEHICLES, d, 10).map((v) => v.id).join(","));
  eq("five days, five different games", new Set(sets).size, 5);

  // Over a year of days, no day should repeat another day's exact game.
  const year = [];
  for (let i = 0; i < 365; i++) {
    const d = new Date(2026, 0, 1 + i);
    year.push(Daily.pick(VEHICLES, Daily.todayKey(d), 10).map((v) => v.id).join(","));
  }
  eq("and no two days in a year match", new Set(year).size, 365);
}

/* --- a pool smaller than the game ---------------------------------------- */
{
  const three = VEHICLES.slice(0, 3);
  const picked = Daily.pick(three, "2026-03-14", 10);
  eq("a short pool gives what it has", picked.length, 3);
  eq("without repeating", new Set(picked.map((v) => v.id)).size, 3);
  eq("an empty pool gives nothing", Daily.pick([], "2026-03-14", 10), []);
}

/* --- the shareable line --------------------------------------------------- */
{
  const history = [
    { correct: true }, { correct: false, outcome: "wrong" },
    { correct: false, outcome: "timeout" }, { correct: true }
  ];
  eq("one square per round", Daily.marks(history), "🟩🟥🟨🟩");

  const text = Daily.shareText("2026-03-14", history, 820);
  ok("the share line names the day", text.indexOf("2026-03-14") !== -1);
  ok("and the score", text.indexOf("820") !== -1);
  ok("and the tally", text.indexOf("2/4") !== -1);
  ok("but never the vehicles", !VEHICLES.some((v) => text.indexOf(v.name) !== -1));
}

/* --- the generator itself ------------------------------------------------- */
{
  const r = Daily.rng(Daily.seedFrom("2026-03-14"));
  const run = [r(), r(), r(), r()];
  ok("values land in [0, 1)", run.every((n) => n >= 0 && n < 1));
  const again = Daily.rng(Daily.seedFrom("2026-03-14"));
  eq("and the sequence repeats from the same seed", [again(), again(), again(), again()], run);
  ok("a different day seeds differently",
     Daily.seedFrom("2026-03-14") !== Daily.seedFrom("2026-03-15"));
}

/* ------------------------------------------------------------------------ */
console.log(`\n${pass} assertions passed`);
if (failures.length) {
  console.log(`\n${failures.length} FAILED:`);
  failures.forEach((f) => console.log("  - " + f));
  process.exit(1);
}
console.log("all good\n");
