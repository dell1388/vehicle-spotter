/* Aliases scraped from Wikipedia redirects are generous: "Fighter China"
 * redirects to the JF-17, "Infantry carrier" to the Universal Carrier. Some of
 * them answer better for a different entry. This drops exactly those, and only
 * from the scraped entries — hand-written aliases are left alone.
 */
const fs = require("fs");
const VSMatch = require("../js/match.js");
const { VEHICLES } = require("../js/vehicles.js");

const scraped = new Set(Object.keys(JSON.parse(fs.readFileSync("records_web.json", "utf8"))));
const drop = {};
let checked = 0;

VEHICLES.forEach((v) => {
  if (!scraped.has(v.id)) return;
  (v.aliases || []).forEach((alias) => {
    checked++;
    const clash = VEHICLES.find((other) =>
      other.id !== v.id && VSMatch.check(alias, other).verdict === "correct");
    if (clash) {
      (drop[v.id] = drop[v.id] || []).push(alias);
      console.log(`  drop "${alias}" from ${v.id} (answers for ${clash.id})`);
    }
  });
});

/* Accumulate: a later pass must not forget what an earlier one found. */
let acc = {};
try { acc = JSON.parse(fs.readFileSync("alias_drops_acc.json", "utf8")); } catch (e) { acc = {}; }
Object.keys(drop).forEach((id) => {
  acc[id] = Array.from(new Set((acc[id] || []).concat(drop[id])));
});
fs.writeFileSync("alias_drops_acc.json", JSON.stringify(acc, null, 1));
console.log(`checked ${checked} scraped aliases, dropping ` +
            Object.values(drop).reduce((n, a) => n + a.length, 0));
