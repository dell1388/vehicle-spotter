/* Test suite for round selection. Run: node tests/selection.test.js
 *
 * Exercises js/picker.js directly, so these assertions hold the real picker to
 * its stated rules rather than a copy of them. Randomness is injected, so a
 * failure can be reproduced from its seed.
 */
const Picker = require("../js/picker.js");
const { VEHICLES } = require("../js/vehicles.js");

let pass = 0;
const failures = [];
function ok(label, cond) { if (cond) pass++; else failures.push(label); }
function eq(label, got, want) {
  if (JSON.stringify(got) === JSON.stringify(want)) pass++;
  else failures.push(`${label}: expected ${JSON.stringify(want)}, got ${JSON.stringify(got)}`);
}

/* Plays a game against the real picker, answering as `getRight` decides. */
function play(pool, rounds, opts) {
  const o = opts || {};
  let seed = o.seed || 1;
  const random = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };

  const state = {
    used: Object.create(null),
    correctIds: Object.create(null),
    learned: o.learned || Object.create(null),
    skipLearned: o.skipLearned !== false
  };
  const shown = [];
  for (let i = 0; i < rounds; i++) {
    const v = Picker.chooseNext({
      available: pool, used: state.used, correctIds: state.correctIds,
      learned: state.learned, skipLearned: state.skipLearned,
      roundIndex: i, random: random
    });
    if (!v) break;
    state.used[v.id] = true;
    shown.push(v.id);
    if (o.getRight ? o.getRight(v, i) : true) {
      state.correctIds[v.id] = true;
      state.learned[v.id] = { n: 1 };
    }
  }
  return { shown, state };
}

const all = VEHICLES.slice();
const tanks = VEHICLES.filter((v) => v.category === "tank");

/* --- the core rule: a vehicle named correctly does not come back --------- */
{
  const { shown } = play(all, 60);           // every answer correct
  eq("no repeats at all when every answer is right", shown.length, new Set(shown).size);
}
{
  // Answer everything wrong: repeats are allowed, since nothing was learned.
  const { shown } = play(all, 60, { getRight: () => false });
  ok("wrong answers may be asked again later", shown.length === 60);
}

/* --- a small pool still cannot repeat something you got right ------------ */
{
  const five = tanks.slice(0, 5);
  // Get the first two right, the rest wrong, over more rounds than the pool.
  const rightIds = new Set([five[0].id, five[1].id]);
  const { shown } = play(five, 20, { getRight: (v) => rightIds.has(v.id) });
  const repeatedCorrect = shown.filter((id, i) => rightIds.has(id) && shown.indexOf(id) !== i);
  eq("correct ones never reappear while others remain", repeatedCorrect, []);
  ok("the rounds still get filled", shown.length === 20);
}

/* --- known vehicles are held back, then reused once the new ones run out - */
{
  const ten = tanks.slice(0, 10);
  const learned = Object.create(null);
  ten.slice(0, 6).forEach((v) => { learned[v.id] = { n: 1 }; });   // six already known

  const { shown } = play(ten, 4, { learned: Object.assign({}, learned) });
  const anyKnown = shown.filter((id) => learned[id]);
  eq("the four unknown ones come first", anyKnown, []);

  const longer = play(ten, 10, { learned: Object.assign({}, learned) });
  eq("all ten are used before anything repeats", new Set(longer.shown).size, 10);
}

/* --- the toggle actually turns the hold-back off ------------------------- */
{
  const ten = tanks.slice(0, 10);
  const learned = Object.create(null);
  ten.slice(0, 9).forEach((v) => { learned[v.id] = { n: 1 }; });   // only one is new

  let sawKnownEarly = false;
  for (let seed = 1; seed <= 40; seed += 1) {
    const { shown } = play(ten, 3, {
      learned: Object.assign({}, learned), skipLearned: false, seed
    });
    if (shown.some((id) => learned[id])) { sawKnownEarly = true; break; }
  }
  ok("with the toggle off, known vehicles are offered normally", sawKnownEarly);

  const on = play(ten, 1, { learned: Object.assign({}, learned), skipLearned: true });
  eq("with it on, the one unknown vehicle is chosen", on.shown.length, 1);
  ok("and it is the unknown one", !learned[on.shown[0]]);
}

/* --- difficulty scaling survives the tiering ----------------------------- */
{
  const { shown } = play(all, 3, { seed: 7 });
  const diffs = shown.map((id) => VEHICLES.find((v) => v.id === id).difficulty);
  ok("the first three rounds stay on difficulty 1", diffs.every((d) => d === 1));
}

/* --- the ceiling is the module's, not a copy ----------------------------- */
{
  eq("rounds 0-2 cap at difficulty 1",
     [0, 1, 2].map(Picker.difficultyCeiling), [1, 1, 1]);
  eq("rounds 3-5 cap at 2", [3, 4, 5].map(Picker.difficultyCeiling), [2, 2, 2]);
  eq("round 6 onwards is open", [6, 20].map(Picker.difficultyCeiling), [3, 3]);
}

/* --- the no-repeat rule, stated precisely, holds across random games -----
 * A vehicle already named correctly may only come round again once there is
 * genuinely nothing else to ask: every vehicle the filters allow has been named
 * correctly too. With a pool smaller than the number of rounds that has to
 * happen eventually — the rule is that it happens last, not never. */
{
  let broke = null;
  for (let seed = 1; seed <= 200 && !broke; seed += 1) {
    const size = 3 + (seed % 12);                 // deliberately cramped pools
    const pool = VEHICLES.slice(seed % 50, (seed % 50) + size);

    let s2 = seed;
    const random = () => { s2 = (s2 * 1103515245 + 12345) % 2147483648; return s2 / 2147483648; };
    const used = Object.create(null);
    const correctIds = Object.create(null);
    const learned = Object.create(null);

    for (let i = 0; i < 25 && !broke; i += 1) {
      const v = Picker.chooseNext({
        available: pool, used: used, correctIds: correctIds, learned: learned,
        skipLearned: true, roundIndex: i, random: random
      });
      if (!v) break;

      if (correctIds[v.id]) {
        const othersLeft = pool.filter(function (p) { return !correctIds[p.id]; });
        if (othersLeft.length) {
          broke = { seed, round: i, id: v.id, left: othersLeft.map((p) => p.id) };
        }
      }
      used[v.id] = true;
      if (i % 2 === 0) { correctIds[v.id] = true; learned[v.id] = { n: 1 }; }
    }
  }
  ok("a named vehicle only returns once everything else has been named too" +
     (broke ? ` (seed ${broke.seed} round ${broke.round}: ${broke.id} while ${broke.left} were unnamed)` : ""),
     !broke);
}

/* --- and with a pool big enough, it simply never happens ----------------- */
{
  let repeated = null;
  for (let seed = 1; seed <= 100 && !repeated; seed += 1) {
    const { shown } = play(VEHICLES.slice(), 40, { seed });
    if (shown.length !== new Set(shown).size) repeated = seed;
  }
  ok("40 rounds over the full set repeat nothing" + (repeated ? ` (seed ${repeated})` : ""),
     !repeated);
}

/* --- an empty pool ends the game rather than looping --------------------- */
{
  const { shown } = play([], 5);
  eq("no pool means no rounds", shown, []);
}

/* ------------------------------------------------------------------------ */
console.log(`\n${pass} assertions passed`);
if (failures.length) {
  console.log(`\n${failures.length} FAILED:`);
  failures.forEach((f) => console.log("  - " + f));
  process.exit(1);
}
console.log("all good\n");
