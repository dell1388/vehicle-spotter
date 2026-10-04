/* Vehicle Spotter — the daily challenge.
 *
 * Ten vehicles, the same ten for everyone, chosen from the date alone. No
 * filters, no holding back what you already know: the point is that two people
 * can compare the same round. Playable once; after that the day's result is
 * shown instead, with a line you can paste somewhere.
 */
const Daily = (function () {
  "use strict";

  const ROUNDS = 10;

  /* Local date, not UTC: the day should turn over at the player's midnight. */
  function todayKey(date) {
    const d = date || new Date();
    const pad = function (n) { return n < 10 ? "0" + n : String(n); };
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }

  function seedFrom(key) {
    let h = 2166136261;
    for (let i = 0; i < key.length; i++) {
      h ^= key.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  /* mulberry32 — small, fast, and the same everywhere, which is the only
   * property that matters here. */
  function rng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* The day's vehicles. Sorted by id first so the choice depends on the date
   * and the set, never on the order the dataset happens to be written in.
   * Adding vehicles does change an unplayed day's picks — there is no way
   * around that without freezing a list, and a growing set is worth more. */
  function pick(vehicles, key, count) {
    const pool = (vehicles || []).slice().sort(function (a, b) {
      return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
    });
    const want = Math.min(count || ROUNDS, pool.length);
    const random = rng(seedFrom(key));
    const out = [];
    const taken = {};
    let guard = 0;
    while (out.length < want && guard++ < want * 200) {
      const i = Math.floor(random() * pool.length);
      if (taken[i]) continue;
      taken[i] = true;
      out.push(pool[i]);
    }
    return out;
  }

  /* Each round as a square, in the order they were played. */
  function marks(history) {
    return (history || []).map(function (h) {
      return h.correct ? "🟩" : (h.outcome === "timeout" ? "🟨" : "🟥");
    }).join("");
  }

  function shareText(key, history, score) {
    const right = (history || []).filter(function (h) { return h.correct; }).length;
    return "Vehicle Spotter " + key + "  " + right + "/" + (history || []).length +
           "\n" + marks(history) + "\n" + score + " points";
  }

  return {
    ROUNDS: ROUNDS,
    todayKey: todayKey,
    seedFrom: seedFrom,
    rng: rng,
    pick: pick,
    marks: marks,
    shareText: shareText
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = Daily;
