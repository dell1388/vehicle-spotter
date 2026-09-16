/* Dataset integrity. Run: node tests/data.test.js
 *
 * The dataset is generated from hand-written specs plus a harvest of Wikimedia
 * images, so this checks the shape of every record rather than its content: the
 * things that would break the game silently if one entry were malformed. */
const { VEHICLES, CATEGORIES, ERAS, CATEGORY_LABELS } = require("../js/vehicles.js");
const { CANDIDATES } = require("../js/candidates.js");

const ALL = VEHICLES;

let pass = 0;
const problems = [];
function check(cond, message) { if (cond) pass++; else problems.push(message); }

check(VEHICLES.length > 0, "the dataset is empty");

const ids = Object.create(null);
const categories = Object.create(null);
const eras = Object.create(null);
let imageCount = 0;
let multiImage = 0;

ALL.forEach(function (v, i) {
  const where = v.id || "#" + i;

  check(typeof v.id === "string" && /^[a-z0-9_]+$/.test(v.id),
        where + ": id must be lowercase letters, digits and underscores");
  check(!ids[v.id], where + ": duplicate id");
  ids[v.id] = true;

  check(typeof v.name === "string" && v.name.trim().length > 0, where + ": missing name");
  check(CATEGORIES.indexOf(v.category) !== -1, where + ": unknown category " + v.category);
  check(ERAS.indexOf(v.era) !== -1, where + ": unknown era " + v.era);
  check([1, 2, 3].indexOf(v.difficulty) !== -1, where + ": difficulty must be 1, 2 or 3");
  categories[v.category] = true;
  eras[v.era] = true;

  check(Array.isArray(v.aliases), where + ": aliases must be an array");
  (v.aliases || []).forEach(function (a) {
    check(typeof a === "string" && a.trim().length > 0, where + ": blank alias");
  });
  const lowered = (v.aliases || []).map(function (a) { return a.toLowerCase().trim(); });
  check(lowered.length === new Set(lowered).size, where + ": duplicate aliases");
  check(lowered.indexOf(v.name.toLowerCase().trim()) === -1,
        where + ": the canonical name is repeated in aliases");

  /* Photos: at least one, never more than four, each with a credit. Three come
   * from the harvest; a fourth can arrive when someone identifies a picture in
   * the builder and attaches it to an entry that was already full. */
  check(Array.isArray(v.images) && v.images.length >= 1 && v.images.length <= 4,
        where + ": needs between one and four images");
  const urls = [];
  (v.images || []).forEach(function (img) {
    check(img && typeof img.url === "string" && img.url.indexOf("https://") === 0,
          where + ": image url must be https");
    check(img && typeof img.credit === "string" && img.credit.trim().length > 0,
          where + ": image is missing a credit");
    check(!/\.(jpe?g|png|gif)\s*:/i.test(img.credit || ""),
          where + ": credit still carries a filename, which can give the answer away");
    urls.push(img && img.url);
    imageCount += 1;
  });
  check(urls.length === new Set(urls).size, where + ": the same photo is listed twice");
  if (urls.length > 1) multiImage += 1;

  if (v.fact !== undefined) {
    check(typeof v.fact === "string" && v.fact.trim().length > 0, where + ": blank fact");
  }

});

/* The builder's candidate queue: pictures with no name yet, so only their
 * shape can be checked. */
CANDIDATES.forEach(function (c, i) {
  const where = "candidate " + (c.id || "#" + i);
  check(typeof c.id === "string" && c.id.length > 0, where + ": needs an id");
  check(typeof c.url === "string" && c.url.indexOf("https://") === 0, where + ": url must be https");
  check(typeof c.credit === "string" && c.credit.length > 0, where + ": needs a credit");
});
const candidateIds = CANDIDATES.map(function (c) { return c.id; });
check(candidateIds.length === new Set(candidateIds).size, "duplicate candidate ids");

/* Every declared category and era should actually be used, or the filter chip
 * offers an empty selection. */
CATEGORIES.forEach(function (c) {
  check(categories[c], "category '" + c + "' is declared but has no vehicles");
  check(typeof CATEGORY_LABELS[c] === "string" && CATEGORY_LABELS[c].length > 0,
        "category '" + c + "' has no display label");
});
ERAS.forEach(function (e) { check(eras[e], "era '" + e + "' is declared but has no vehicles"); });

/* Difficulty 1 has to be populated: the first three rounds draw only from it. */
check(VEHICLES.filter(function (v) { return v.difficulty === 1; }).length >= 10,
      "too few difficulty-1 vehicles for the opening rounds");

console.log(`\n${VEHICLES.length} entries, ${imageCount} photos ` +
            `(${multiImage} with more than one), ${CANDIDATES.length} candidates ` +
            `awaiting a name; ${pass} checks passed`);
if (problems.length) {
  console.log(`\n${problems.length} PROBLEMS:`);
  problems.slice(0, 40).forEach(function (p) { console.log("  - " + p); });
  if (problems.length > 40) console.log(`  …and ${problems.length - 40} more`);
  process.exit(1);
}
console.log("all good\n");
