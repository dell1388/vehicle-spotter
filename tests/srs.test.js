/* Test suite for the review schedule and the record of what gets missed.
 * Run: node tests/srs.test.js
 *
 * Both are pure functions over plain objects, so these drive js/srs.js
 * directly rather than through the game loop.
 */
const SRS = require("../js/srs.js");
const { VEHICLES } = require("../js/vehicles.js");

let pass = 0;
const failures = [];
function ok(label, cond) { if (cond) pass++; else failures.push(label); }
function eq(label, got, want) {
  if (JSON.stringify(got) === JSON.stringify(want)) pass++;
  else failures.push(`${label}: expected ${JSON.stringify(want)}, got ${JSON.stringify(got)}`);
}

/* --- the schedule itself -------------------------------------------------- */
{
  const first = SRS.schedule(null, true, 0);
  eq("a first correct answer counts once", [first.n, first.right, first.wrong], [1, 1, 0]);
  eq("and starts a streak", first.streak, 1);
  eq("and comes back one game later", first.due, 1);

  const second = SRS.schedule(first, true, 1);
  eq("a second correct answer waits longer", second.due, 1 + SRS.EVERY_N_GAMES[1]);

  let rec = null;
  for (let i = 0; i < 8; i++) rec = SRS.schedule(rec, true, i);
  eq("the interval stops widening at the last step",
     rec.due - 7, SRS.EVERY_N_GAMES[SRS.EVERY_N_GAMES.length - 1]);
}

/* --- a miss brings it straight back -------------------------------------- */
{
  let rec = null;
  for (let i = 0; i < 4; i++) rec = SRS.schedule(rec, true, i);
  ok("a long streak is well out in the future", rec.due > 4 + 1);

  const missed = SRS.schedule(rec, false, 4);
  eq("a miss resets the streak", missed.streak, 0);
  eq("and schedules it for the very next game", missed.due, 5);
  eq("the correct count is not lost", missed.n, 4);
  eq("and the miss is counted", missed.wrong, 1);

  ok("so it is due in the next game", SRS.isDue(missed, 5));
  ok("but not in the one it was missed in", !SRS.isDue(missed, 4));
}

/* --- never-seen is not the same as due ----------------------------------- */
{
  ok("a vehicle with no record is not a review", !SRS.isDue(undefined, 10));
  ok("a record from before the schedule existed is due",
     SRS.isDue({ n: 1, at: 123 }, 0));
}

/* --- due maps and counts -------------------------------------------------- */
{
  const learned = {
    a: { n: 1, streak: 1, due: 2 },
    b: { n: 1, streak: 3, due: 40 },
    c: { n: 2, streak: 0, due: 5 }
  };
  eq("only the ones whose turn has come", Object.keys(SRS.dueMap(learned, 5)).sort(),
     ["a", "c"]);
  eq("counted against a pool", SRS.dueCount(learned, 5,
     [{ id: "a" }, { id: "b" }, { id: "zzz" }]), 1);
}

/* --- what the player actually said --------------------------------------- */
{
  let stats = SRS.blankStats();
  stats = SRS.record(stats, "mig27", false, "mig23");
  stats = SRS.record(stats, "mig27", false, "mig23");
  stats = SRS.record(stats, "mig27", true, null);
  stats = SRS.record(stats, "t34", false, "kv1");

  eq("asked and right are counted", stats.seen.mig27, { asked: 3, right: 1 });
  eq("the pair is counted, commonest first",
     SRS.confusions(stats, 5).map((c) => [c.was, c.said, c.times]),
     [["mig27", "mig23", 2], ["t34", "kv1", 1]]);
  eq("accuracy comes back as a fraction", SRS.accuracy(stats, "mig27"), 1 / 3);
  eq("an unasked vehicle has no accuracy", SRS.accuracy(stats, "nothing"), null);

  // A correct answer is never a confusion, whatever is passed alongside it.
  const clean = SRS.record(SRS.blankStats(), "spitfire", true, "hurricane");
  eq("getting it right records no confusion", Object.keys(clean.confused), []);
  // Nor is naming the vehicle you were actually asked about.
  const self = SRS.record(SRS.blankStats(), "spitfire", false, "spitfire");
  eq("and neither does naming the same vehicle", Object.keys(self.confused), []);
}

/* --- the summaries the setup screen shows -------------------------------- */
{
  let stats = SRS.blankStats();
  ["a", "a", "a", "b", "b"].forEach((id) => { stats = SRS.record(stats, id, false, null); });
  stats = SRS.record(stats, "b", true, null);
  stats = SRS.record(stats, "c", true, null);

  eq("weakest first", SRS.weakest(stats, 5).map((w) => w.id), ["a", "b"]);
  ok("a vehicle asked once is not yet a verdict",
     !SRS.weakest(stats, 5).some((w) => w.id === "c"));
  eq("totals add up", SRS.totals(stats), { asked: 7, right: 2 });

  const vehicles = [{ id: "a", category: "tank" }, { id: "b", category: "tank" },
                    { id: "c", category: "plane" }];
  eq("accuracy by category", SRS.byCategory(stats, vehicles),
     { tank: { asked: 6, right: 1 }, plane: { asked: 1, right: 1 } });
}

/* --- over a real run of games --------------------------------------------
 * Play 30 games of 10 rounds against the real dataset, getting a fixed third
 * of the set wrong every time, and check the schedule does what it promises:
 * everything missed comes back immediately, and nothing is lost. */
{
  const pool = VEHICLES.slice(0, 60);
  const alwaysWrong = new Set(pool.filter((_, i) => i % 3 === 0).map((v) => v.id));
  const learned = {};
  let missedAndNotBack = 0;

  for (let g = 0; g < 30; g++) {
    const due = SRS.dueMap(learned, g);
    const wereDue = Object.keys(due);

    // every due vehicle is asked, plus a few new ones
    const asked = wereDue.slice(0, 10);
    for (let i = 0; asked.length < 10 && i < pool.length; i++) {
      if (!learned[pool[i].id]) asked.push(pool[i].id);
    }
    asked.forEach((id) => {
      learned[id] = SRS.schedule(learned[id], !alwaysWrong.has(id), g);
    });

    // anything missed in this game must be due in the next one
    asked.filter((id) => alwaysWrong.has(id)).forEach((id) => {
      if (!SRS.isDue(learned[id], g + 1)) missedAndNotBack += 1;
    });
  }

  eq("every miss is due again immediately", missedAndNotBack, 0);
  ok("the ones answered right drift out of the schedule",
     Object.keys(learned).filter((id) => !alwaysWrong.has(id) && learned[id].due > 30).length > 0);
}

/* ------------------------------------------------------------------------ */
console.log(`\n${pass} assertions passed`);
if (failures.length) {
  console.log(`\n${failures.length} FAILED:`);
  failures.forEach((f) => console.log("  - " + f));
  process.exit(1);
}
console.log("all good\n");
