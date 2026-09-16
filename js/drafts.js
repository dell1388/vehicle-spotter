/* Vehicle Spotter — entries the player creates.
 *
 * Two ways in, both handled here:
 *   - identify a picture the dataset could not place (js/candidates.js)
 *   - supply a picture and a name directly
 *
 * Drafts live in localStorage, join the playable pool immediately, and export
 * as JSON so they can be folded into js/vehicles.js permanently.
 */
const Drafts = (function () {
  "use strict";

  const KEY = "vehicleSpotter.drafts.v1";
  const MAX_NAME = 80;
  const MAX_IMAGE_BYTES = 900 * 1024;   // a data URL this big is already pushing it

  let items = load();

  function load() {
    let parsed;
    try {
      const raw = window.localStorage.getItem(KEY);
      if (!raw) return [];
      parsed = JSON.parse(raw);
    } catch (e) {
      return [];
    }
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(valid).map(normalise);
  }

  function valid(d) {
    return d && typeof d === "object" &&
           typeof d.name === "string" && d.name.trim() &&
           Array.isArray(d.images) && d.images.length &&
           d.images.every(function (i) { return i && typeof i.url === "string"; });
  }

  function normalise(d) {
    return {
      id: String(d.id || ("draft_" + Math.random().toString(36).slice(2, 9))),
      name: String(d.name).trim().slice(0, MAX_NAME),
      category: d.category || "tank",
      era: d.era || "Modern",
      difficulty: [1, 2, 3].indexOf(Number(d.difficulty)) !== -1 ? Number(d.difficulty) : 2,
      aliases: Array.isArray(d.aliases)
        ? d.aliases.filter(function (a) { return typeof a === "string" && a.trim(); })
                   .map(function (a) { return a.trim(); }).slice(0, 12)
        : [],
      fact: typeof d.fact === "string" && d.fact.trim() ? d.fact.trim().slice(0, 240) : undefined,
      images: d.images.slice(0, 3).map(function (i) {
        return { url: i.url, credit: (i.credit && String(i.credit).trim()) || "Added by hand" };
      }),
      source: "draft",
      from: d.from || undefined          // which candidate it came from, if any
    };
  }

  function save() {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(items));
      return null;
    } catch (e) {
      // Almost always the 5MB quota, and almost always an uploaded picture.
      return "Could not save — browser storage is full. Try an image URL instead " +
             "of an uploaded file, or export and clear some drafts.";
    }
  }

  /* --------------------------------------------------------------- api -- */

  function all() { return items.slice(); }
  function count() { return items.length; }

  function get(id) {
    return items.filter(function (d) { return d.id === id; })[0] || null;
  }

  /* Returns a refusal message, or null on success. */
  function add(draft) {
    if (!draft || !String(draft.name || "").trim()) return "Give it a name.";
    if (!draft.images || !draft.images.length) return "Give it at least one picture.";

    const big = draft.images.some(function (i) {
      return i.url.indexOf("data:") === 0 && i.url.length > MAX_IMAGE_BYTES;
    });
    if (big) return "That picture is too large to store. Use a smaller file, or a URL.";

    const record = normalise(draft);
    const clash = items.some(function (d) {
      return d.id !== record.id && d.name.toLowerCase() === record.name.toLowerCase();
    });
    if (clash) return "You already have a draft with that name.";

    const at = items.map(function (d) { return d.id; }).indexOf(record.id);
    if (at === -1) items.push(record); else items[at] = record;
    return save();
  }

  function remove(id) {
    items = items.filter(function (d) { return d.id !== id; });
    save();
  }

  function clearAll() { items = []; save(); }

  /* Candidate ids already dealt with, so the queue can skip them. */
  function usedCandidates() {
    const used = {};
    items.forEach(function (d) { if (d.from) used[d.from] = true; });
    return used;
  }

  /* Shaped the way js/vehicles.js is written, ready to paste in. */
  function exportJSON() {
    return JSON.stringify(items.map(function (d) {
      const out = {
        id: d.id, name: d.name, category: d.category, era: d.era,
        difficulty: d.difficulty, aliases: d.aliases
      };
      if (d.fact) out.fact = d.fact;
      out.images = d.images;
      if (d.from) out.from = d.from;
      return out;
    }), null, 2);
  }

  function importJSON(text) {
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      return "That is not valid JSON.";
    }
    if (!Array.isArray(parsed)) return "Expected a list of entries.";
    const good = parsed.filter(valid);
    if (!good.length) return "No usable entries in there.";
    good.forEach(function (d) {
      const record = normalise(d);
      if (!items.some(function (x) { return x.name.toLowerCase() === record.name.toLowerCase(); })) {
        items.push(record);
      }
    });
    return save();
  }

  return {
    all: all, count: count, get: get, add: add, remove: remove, clearAll: clearAll,
    usedCandidates: usedCandidates, exportJSON: exportJSON, importJSON: importJSON,
    MAX_IMAGE_BYTES: MAX_IMAGE_BYTES
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = Drafts;
