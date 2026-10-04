/* Vehicle Spotter — when a vehicle should come round again, and what the
 * player keeps getting wrong.
 *
 * The old rule was blunt: name a vehicle once and it never came back. That
 * makes the game a checklist rather than something you learn from, because the
 * one repetition that matters — the one a week later, when you have half
 * forgotten — never happens.
 *
 * So each vehicle carries a review streak and a due date measured in games
 * played, not wall-clock time: a player who plays three games on Sunday and
 * nothing until Friday should still get the same sequence, and games played is
 * the only clock that behaves that way. A correct answer pushes the next
 * showing further out along EVERY_N_GAMES; a wrong one resets the streak and
 * puts the vehicle back in the very next game, which is the whole point.
 */
const SRS = (function () {
  "use strict";

  /* Games to wait after 1, 2, 3 … consecutive correct answers. The last value
   * repeats once the streak runs past the end. */
  const EVERY_N_GAMES = [1, 3, 7, 16, 35];

  function interval(streak) {
    if (streak < 1) return 1;
    return EVERY_N_GAMES[Math.min(streak, EVERY_N_GAMES.length) - 1];
  }

  /* The record for a vehicle after an answer.
   *   n       times named correctly, ever (kept for the progress bar)
   *   right   same thing, but alongside wrong for accuracy
   *   wrong   times missed
   *   streak  consecutive correct answers; a miss sends it back to 0
   *   due     the game number this should next be asked in
   *   at      when it was last asked, for display only
   */
  function schedule(record, wasCorrect, gameNumber) {
    const prev = record || {};
    const games = Number(gameNumber) || 0;
    const streak = wasCorrect ? (Number(prev.streak) || 0) + 1 : 0;
    return {
      n: (Number(prev.n) || 0) + (wasCorrect ? 1 : 0),
      right: (Number(prev.right) || 0) + (wasCorrect ? 1 : 0),
      wrong: (Number(prev.wrong) || 0) + (wasCorrect ? 0 : 1),
      streak: streak,
      due: games + interval(streak),
      at: Date.now()
    };
  }

  /* A vehicle with no record at all is new, not due: new material is the
   * picker's job to introduce, and conflating the two would mean a player who
   * has never seen a vehicle gets it offered as a "review". */
  function isDue(record, gameNumber) {
    if (!record) return false;
    const due = Number(record.due);
    if (!due) return true;          // learned before this was recorded
    return due <= (Number(gameNumber) || 0);
  }

  function dueMap(learned, gameNumber) {
    const out = {};
    Object.keys(learned || {}).forEach(function (id) {
      if (isDue(learned[id], gameNumber)) out[id] = true;
    });
    return out;
  }

  /* How many of a set of vehicles are waiting to be reviewed. */
  function dueCount(learned, gameNumber, vehicles) {
    const due = dueMap(learned, gameNumber);
    return (vehicles || []).filter(function (v) { return due[v.id]; }).length;
  }

  /* ------------------------------------------------------------- stats -- */

  function blankStats() { return { seen: {}, confused: {} }; }

  /* One answered round. `guessedId` is the vehicle the player's answer would
   * have been right for, when it was right for something — that is the
   * interesting part, because "I called the MiG-27 a MiG-23" says far more
   * than "wrong". */
  function record(stats, vehicleId, wasCorrect, guessedId) {
    const s = stats && stats.seen ? stats : blankStats();
    const row = s.seen[vehicleId] || { asked: 0, right: 0 };
    row.asked += 1;
    if (wasCorrect) row.right += 1;
    s.seen[vehicleId] = row;

    if (!wasCorrect && guessedId && guessedId !== vehicleId) {
      const key = vehicleId + ">" + guessedId;
      s.confused[key] = (s.confused[key] || 0) + 1;
    }
    return s;
  }

  function accuracy(stats, vehicleId) {
    const row = stats && stats.seen && stats.seen[vehicleId];
    if (!row || !row.asked) return null;
    return row.right / row.asked;
  }

  /* Pairs the player mixes up, commonest first. */
  function confusions(stats, limit) {
    const src = (stats && stats.confused) || {};
    return Object.keys(src).map(function (key) {
      const parts = key.split(">");
      return { was: parts[0], said: parts[1], times: src[key] };
    }).sort(function (a, b) {
      return b.times - a.times || (a.was < b.was ? -1 : 1);
    }).slice(0, limit || 5);
  }

  /* Vehicles asked at least `minAsked` times and missed most often. */
  function weakest(stats, limit, minAsked) {
    const seen = (stats && stats.seen) || {};
    const floor = minAsked || 2;
    return Object.keys(seen).filter(function (id) {
      return seen[id].asked >= floor && seen[id].right < seen[id].asked;
    }).map(function (id) {
      return { id: id, asked: seen[id].asked, right: seen[id].right,
               rate: seen[id].right / seen[id].asked };
    }).sort(function (a, b) {
      return a.rate - b.rate || b.asked - a.asked;
    }).slice(0, limit || 5);
  }

  /* Accuracy per category, over vehicles the player has actually been asked. */
  function byCategory(stats, vehicles) {
    const seen = (stats && stats.seen) || {};
    const out = {};
    (vehicles || []).forEach(function (v) {
      const row = seen[v.id];
      if (!row || !row.asked) return;
      const cat = out[v.category] || { asked: 0, right: 0 };
      cat.asked += row.asked;
      cat.right += row.right;
      out[v.category] = cat;
    });
    return out;
  }

  function totals(stats) {
    const seen = (stats && stats.seen) || {};
    let asked = 0, right = 0;
    Object.keys(seen).forEach(function (id) {
      asked += seen[id].asked;
      right += seen[id].right;
    });
    return { asked: asked, right: right };
  }

  return {
    EVERY_N_GAMES: EVERY_N_GAMES,
    interval: interval,
    schedule: schedule,
    isDue: isDue,
    dueMap: dueMap,
    dueCount: dueCount,
    blankStats: blankStats,
    record: record,
    accuracy: accuracy,
    confusions: confusions,
    weakest: weakest,
    byCategory: byCategory,
    totals: totals
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = SRS;
