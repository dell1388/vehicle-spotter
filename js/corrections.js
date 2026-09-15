/* Vehicle Spotter — player corrections.
 *
 * The dataset is hand-written, so some of it is wrong: a missing nickname, a
 * name spelled the way only one country spells it, occasionally a photo that
 * does not show what the entry claims. Rather than leave the player arguing
 * with the screen, they can fix an entry from inside the game:
 *
 *   - accept the answer they gave, which adds it as an alias from then on
 *   - flag the entry as broken, which takes it out of the rotation
 *
 * Corrections live in localStorage, are merged over the dataset at runtime, and
 * can be exported as JSON so they can be folded back into js/vehicles.js.
 */
const Corrections = (function () {
  "use strict";

  const KEY = "vehicleSpotter.corrections.v1";
  const MAX_ALIAS_LENGTH = 60;

  const REASONS = {
    photo: "Photo does not match",
    name: "Name is wrong",
    duplicate: "Duplicate of another entry",
    other: "Something else"
  };

  let state = load();
  let merged = Object.create(null);   // id -> vehicle with aliases merged in

  function blank() { return { aliases: {}, hidden: {} }; }

  function load() {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (!raw) return blank();
      const parsed = JSON.parse(raw);
      const out = blank();
      if (parsed && typeof parsed === "object") {
        if (parsed.aliases && typeof parsed.aliases === "object") {
          Object.keys(parsed.aliases).forEach(function (id) {
            const list = parsed.aliases[id];
            if (Array.isArray(list)) {
              out.aliases[id] = list.filter(function (a) {
                return typeof a === "string" && a.trim();
              }).slice(0, 50);
            }
          });
        }
        if (parsed.hidden && typeof parsed.hidden === "object") out.hidden = parsed.hidden;
      }
      return out;
    } catch (e) {
      return blank();
    }
  }

  function save() {
    merged = Object.create(null);
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      return false;   // still applies for this session, just won't persist
    }
  }

  /* ------------------------------------------------------------ aliases -- */

  /* The vehicle as the game should see it: dataset aliases plus the player's.
   * Cached, because the matcher asks for this on every keystroke-worth of work. */
  function apply(vehicle) {
    if (!vehicle) return vehicle;
    const extra = state.aliases[vehicle.id];
    if (!extra || !extra.length) return vehicle;
    if (merged[vehicle.id]) return merged[vehicle.id];

    const copy = {};
    Object.keys(vehicle).forEach(function (k) { copy[k] = vehicle[k]; });
    copy.aliases = (vehicle.aliases || []).concat(extra);
    merged[vehicle.id] = copy;
    return copy;
  }

  function aliasesFor(id) { return (state.aliases[id] || []).slice(); }

  /* Adds an accepted spelling. Returns why it was refused, or null on success. */
  function addAlias(id, text) {
    const clean = String(text || "").trim().replace(/\s+/g, " ");
    if (!clean) return "Type an answer first.";
    if (clean.length > MAX_ALIAS_LENGTH) return "That is too long to be a name.";

    const existing = state.aliases[id] || [];
    const seen = existing.some(function (a) { return a.toLowerCase() === clean.toLowerCase(); });
    if (seen) return "Already added.";

    existing.push(clean);
    state.aliases[id] = existing;
    save();
    return null;
  }

  function removeAlias(id, text) {
    const list = state.aliases[id];
    if (!list) return;
    state.aliases[id] = list.filter(function (a) { return a !== text; });
    if (!state.aliases[id].length) delete state.aliases[id];
    save();
  }

  /* --------------------------------------------------------------- flags -- */

  function flag(id, reason, note) {
    state.hidden[id] = {
      reason: REASONS[reason] ? reason : "other",
      note: String(note || "").trim().slice(0, 200),
      at: new Date().toISOString().slice(0, 10)
    };
    save();
  }

  function unflag(id) { delete state.hidden[id]; save(); }
  function isHidden(id) { return Object.prototype.hasOwnProperty.call(state.hidden, id); }
  function hiddenIds() { return Object.keys(state.hidden); }

  /* ------------------------------------------------------------- summary -- */

  function count() {
    let n = Object.keys(state.hidden).length;
    Object.keys(state.aliases).forEach(function (id) { n += state.aliases[id].length; });
    return n;
  }

  function entries() {
    const out = [];
    Object.keys(state.aliases).forEach(function (id) {
      state.aliases[id].forEach(function (alias) {
        out.push({ kind: "alias", id: id, value: alias });
      });
    });
    Object.keys(state.hidden).forEach(function (id) {
      out.push({ kind: "hidden", id: id, value: REASONS[state.hidden[id].reason] || "Flagged",
                 note: state.hidden[id].note });
    });
    return out;
  }

  function exportJSON() { return JSON.stringify(state, null, 2); }

  function clearAll() { state = blank(); save(); }

  return {
    apply: apply, aliasesFor: aliasesFor, addAlias: addAlias, removeAlias: removeAlias,
    flag: flag, unflag: unflag, isHidden: isHidden, hiddenIds: hiddenIds,
    count: count, entries: entries, exportJSON: exportJSON, clearAll: clearAll,
    REASONS: REASONS
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = Corrections;
