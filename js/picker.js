/* Vehicle Spotter — which vehicle to ask about next.
 *
 * Kept apart from the game loop because the rules are fiddly enough to be worth
 * testing on their own, and because the interesting one is easy to get wrong:
 * a vehicle the player has just named correctly must not come round again.
 */
const Picker = (function () {
  "use strict";

  /* Early rounds stay on the easier end of whatever the player has enabled, and
   * the ceiling lifts as the game goes on. */
  function difficultyCeiling(roundIndex) {
    if (roundIndex < 3) return 1;
    if (roundIndex < 6) return 2;
    return 3;
  }

  function pickFrom(candidates, roundIndex, random) {
    const ceiling = difficultyCeiling(roundIndex);

    let eligible = candidates.filter(function (v) { return v.difficulty <= ceiling; });
    if (!eligible.length) eligible = candidates;

    // Prefer the hardest tier available once the game has warmed up.
    if (roundIndex >= 3) {
      const top = eligible.filter(function (v) { return v.difficulty === ceiling; });
      if (top.length && random() < 0.6) eligible = top;
    }
    return eligible[Math.floor(random() * eligible.length)];
  }

  /* Choose the next vehicle, in order of preference:
   *
   *   1. not seen this game, and never named correctly before
   *   2. not seen this game (so: known ones, once the unknown run out)
   *   3. seen this game but not named correctly — the ones still being missed
   *   4. anything left, when the filters leave too small a pool to do better
   *
   * Tier 3 is what stops a vehicle the player named correctly from reappearing:
   * it can only be reached from tier 4, which needs every other tier to be
   * empty. Being asked the same vehicle twice in one sitting after getting it
   * right is the case worth designing against.
   *
   * Takes { available, used, correctIds, learned, skipLearned, roundIndex,
   * random }, where the three lookups are objects keyed by vehicle id.
   * Returns null when there is nothing to ask.
   */
  function chooseNext(o) {
    const available = o.available || [];
    if (!available.length) return null;

    const used = o.used || {};
    const correctIds = o.correctIds || {};
    const learned = o.learned || {};
    const random = o.random || Math.random;
    const roundIndex = o.roundIndex || 0;

    const unseen = available.filter(function (v) { return !used[v.id]; });
    const tiers = [];

    if (o.skipLearned) tiers.push(unseen.filter(function (v) { return !learned[v.id]; }));
    tiers.push(unseen);
    tiers.push(available.filter(function (v) { return !correctIds[v.id]; }));
    tiers.push(available);

    for (let i = 0; i < tiers.length; i++) {
      if (tiers[i].length) return pickFrom(tiers[i], roundIndex, random);
    }
    return null;
  }

  return {
    chooseNext: chooseNext,
    difficultyCeiling: difficultyCeiling,
    _internal: { pickFrom: pickFrom }
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = Picker;
