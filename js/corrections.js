/* Vehicle Spotter — player corrections.
 *
 * The dataset is hand-written, so some of it is wrong: a name spelled the way
 * only one country spells it, a missing nickname, an alias that belongs to a
 * different mark, occasionally a photo that does not show what the entry
 * claims. Rather than leave the player arguing with the screen, an entry can be
 * fixed from inside the game:
 *
 *   - rename it, when the canonical name itself is wrong
 *   - drop an alias that should not be accepted
 *   - accept the answer they gave, which adds it as an alias from then on
 *   - flag the entry as broken, which takes it out of the rotation
 *
 * Corrections live in localStorage, are merged over the dataset at runtime, and
 * can be exported as JSON so they can be folded back into js/vehicles.js.
 */
const Corrections = (function () {
  "use strict";

  const KEY = "vehicleSpotter.corrections.v1";
  const MAX_NAME_LENGTH = 80;
  const MAX_ALIAS_LENGTH = 60;

  const REASONS = {
    photo: "Photo does not match",
    name: "Name is wrong",
    duplicate: "Duplicate of another entry",
    other: "Something else"
  };

  let state = load();
  let merged = Object.create(null);   // id -> vehicle with corrections applied

  function blank() { return { names: {}, aliases: {}, dropped: {}, hidden: {} }; }

  function strings(value, cap) {
    if (!Array.isArray(value)) return null;
    const out = value.filter(function (a) { return typeof a === "string" && a.trim(); });
    return out.length ? out.slice(0, cap) : null;
  }

  function load() {
    const out = blank();
    let parsed;
    try {
      const raw = window.localStorage.getItem(KEY);
      if (!raw) return out;
      parsed = JSON.parse(raw);
    } catch (e) {
      return out;
    }
    if (!parsed || typeof parsed !== "object") return out;

    if (parsed.names && typeof parsed.names === "object") {
      Object.keys(parsed.names).forEach(function (id) {
        const rec = parsed.names[id];
        if (rec && typeof rec.to === "string" && rec.to.trim()) {
          out.names[id] = { to: rec.to.trim().slice(0, MAX_NAME_LENGTH), keepOld: !!rec.keepOld };
        }
      });
    }
    ["aliases", "dropped"].forEach(function (field) {
      const src = parsed[field];
      if (!src || typeof src !== "object") return;
      Object.keys(src).forEach(function (id) {
        const list = strings(src[id], 50);
        if (list) out[field][id] = list;
      });
    });
    if (parsed.hidden && typeof parsed.hidden === "object") out.hidden = parsed.hidden;
    return out;
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

  function sameText(a, b) {
    return String(a).trim().toLowerCase() === String(b).trim().toLowerCase();
  }

  /* ---------------------------------------------------------- the merge -- */

  /* The vehicle as the game should see it. Cached, because the matcher asks for
   * this on every answer and every cross-check. */
  function apply(vehicle) {
    if (!vehicle) return vehicle;

    const rename = state.names[vehicle.id];
    const extra = state.aliases[vehicle.id];
    const dropped = state.dropped[vehicle.id];
    if (!rename && !extra && !dropped) return vehicle;
    if (merged[vehicle.id]) return merged[vehicle.id];

    const copy = {};
    Object.keys(vehicle).forEach(function (k) { copy[k] = vehicle[k]; });

    let aliases = (vehicle.aliases || []).slice();
    if (dropped) {
      aliases = aliases.filter(function (a) {
        return !dropped.some(function (d) { return sameText(a, d); });
      });
    }
    if (rename) {
      copy.name = rename.to;
      // The old name is only still an answer if the player said to keep it —
      // they have just told us it was wrong.
      if (rename.keepOld) aliases.push(vehicle.name);
      else aliases = aliases.filter(function (a) { return !sameText(a, vehicle.name); });
    }
    if (extra) aliases = aliases.concat(extra);

    /* Struck-off spellings. The matcher invents variants from the canonical
     * name, so these have to be vetoed by name rather than merely left out of
     * the alias list. */
    let rejected = (dropped || []).slice();
    if (rename && !rename.keepOld) rejected.push(vehicle.name);
    if (extra) {
      rejected = rejected.filter(function (r) {
        return !extra.some(function (a) { return sameText(a, r); });
      });
    }
    if (rejected.length) copy.rejected = rejected;

    copy.aliases = aliases;
    merged[vehicle.id] = copy;
    return copy;
  }

  /* ------------------------------------------------------------- naming -- */

  function nameFor(vehicle) {
    const rename = state.names[vehicle.id];
    return rename ? rename.to : vehicle.name;
  }

  function isRenamed(id) {
    return Object.prototype.hasOwnProperty.call(state.names, id);
  }

  /* Rename an entry. Returns a refusal message, or null on success. */
  function rename(vehicle, newName, keepOld) {
    const clean = String(newName || "").trim().replace(/\s+/g, " ");
    if (!clean) return "A name cannot be empty.";
    if (clean.length > MAX_NAME_LENGTH) return "That is too long to be a name.";

    if (sameText(clean, vehicle.name)) {
      delete state.names[vehicle.id];     // back to the dataset's own name
      save();
      return null;
    }
    state.names[vehicle.id] = { to: clean, keepOld: !!keepOld };
    save();
    return null;
  }

  function clearName(id) { delete state.names[id]; save(); }

  /* ------------------------------------------------------------ aliases -- */

  function aliasesFor(id) { return (state.aliases[id] || []).slice(); }

  /* Adds an accepted spelling. Returns a refusal message, or null on success. */
  function addAlias(id, text) {
    const clean = String(text || "").trim().replace(/\s+/g, " ");
    if (!clean) return "Type an answer first.";
    if (clean.length > MAX_ALIAS_LENGTH) return "That is too long to be a name.";

    const existing = state.aliases[id] || [];
    if (existing.some(function (a) { return sameText(a, clean); })) return "Already added.";

    existing.push(clean);
    state.aliases[id] = existing;
    // Adding back something previously dropped should un-drop it.
    if (state.dropped[id]) {
      state.dropped[id] = state.dropped[id].filter(function (d) { return !sameText(d, clean); });
      if (!state.dropped[id].length) delete state.dropped[id];
    }
    save();
    return null;
  }

  function removeAlias(id, text) {
    const list = state.aliases[id];
    if (!list) return;
    state.aliases[id] = list.filter(function (a) { return !sameText(a, text); });
    if (!state.aliases[id].length) delete state.aliases[id];
    save();
  }

  /* Suppress an alias that came with the dataset. */
  function dropAlias(id, text) {
    const clean = String(text || "").trim();
    if (!clean) return;
    const list = state.dropped[id] || [];
    if (!list.some(function (d) { return sameText(d, clean); })) list.push(clean);
    state.dropped[id] = list;
    save();
  }

  function restoreAlias(id, text) {
    const list = state.dropped[id];
    if (!list) return;
    state.dropped[id] = list.filter(function (d) { return !sameText(d, text); });
    if (!state.dropped[id].length) delete state.dropped[id];
    save();
  }

  function isDropped(id, text) {
    return (state.dropped[id] || []).some(function (d) { return sameText(d, text); });
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
    let n = Object.keys(state.hidden).length + Object.keys(state.names).length;
    ["aliases", "dropped"].forEach(function (field) {
      Object.keys(state[field]).forEach(function (id) { n += state[field][id].length; });
    });
    return n;
  }

  /* Flat list for the setup screen, each one individually undoable. */
  function entries() {
    const out = [];
    Object.keys(state.names).forEach(function (id) {
      out.push({ kind: "name", id: id, value: state.names[id].to,
                 keepOld: state.names[id].keepOld });
    });
    Object.keys(state.aliases).forEach(function (id) {
      state.aliases[id].forEach(function (alias) {
        out.push({ kind: "alias", id: id, value: alias });
      });
    });
    Object.keys(state.dropped).forEach(function (id) {
      state.dropped[id].forEach(function (alias) {
        out.push({ kind: "dropped", id: id, value: alias });
      });
    });
    Object.keys(state.hidden).forEach(function (id) {
      out.push({ kind: "hidden", id: id, value: REASONS[state.hidden[id].reason] || "Flagged",
                 note: state.hidden[id].note });
    });
    return out;
  }

  function undo(item) {
    if (item.kind === "name") clearName(item.id);
    else if (item.kind === "alias") removeAlias(item.id, item.value);
    else if (item.kind === "dropped") restoreAlias(item.id, item.value);
    else if (item.kind === "hidden") unflag(item.id);
  }

  function exportJSON() { return JSON.stringify(state, null, 2); }

  function clearAll() { state = blank(); save(); }

  return {
    apply: apply,
    nameFor: nameFor, isRenamed: isRenamed, rename: rename, clearName: clearName,
    aliasesFor: aliasesFor, addAlias: addAlias, removeAlias: removeAlias,
    dropAlias: dropAlias, restoreAlias: restoreAlias, isDropped: isDropped,
    flag: flag, unflag: unflag, isHidden: isHidden, hiddenIds: hiddenIds,
    count: count, entries: entries, undo: undo,
    exportJSON: exportJSON, clearAll: clearAll,
    REASONS: REASONS
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = Corrections;
