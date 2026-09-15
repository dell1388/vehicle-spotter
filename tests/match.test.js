/* Test suite for the answer matcher. Run: node tests/match.test.js */
const VSMatch = require("../js/match.js");
const { VEHICLES } = require("../js/vehicles.js");

const byId = {};
VEHICLES.forEach(v => { byId[v.id] = v; });

let pass = 0;
const failures = [];

function expect(id, answer, want) {
  const v = byId[id];
  if (!v) throw new Error("no such vehicle: " + id);
  const r = VSMatch.check(answer, v);
  if (r.verdict === want) pass++;
  else failures.push(
    `${id} <- ${JSON.stringify(answer)}  want ${want}, got ${r.verdict}` +
    ` (score ${r.score.toFixed(2)}, via ${r.how}${r.matched ? ' "' + r.matched + '"' : ""})`
  );
}

const correct = (id, ...answers) => answers.forEach(a => expect(id, a, "correct"));
const wrong   = (id, ...answers) => answers.forEach(a => expect(id, a, "wrong"));
const close   = (id, ...answers) => answers.forEach(a => expect(id, a, "close"));

/* --- exact names and aliases ------------------------------------------- */
correct("m4_sherman", "M4 Sherman", "Sherman", "M4", "m4 sherman", "MEDIUM TANK M4");
correct("t34", "T-34", "T34", "t 34", "T-34-85", "t34/85");
correct("tiger_i", "Tiger I", "Tiger", "Tiger 1", "Panzer VI", "panzerkampfwagen vi", "pzkpfw vi");
correct("bf109", "Bf 109", "bf109", "Me 109", "me-109", "Messerschmitt 109");

/* --- punctuation, spacing, case ---------------------------------------- */
correct("a10", "A-10", "a10", "A 10", "a.10", "A–10");
correct("2cv", "2CV", "2 cv", "Citroen 2CV", "Citroën 2CV", "citroen2cv");
correct("sr71", "SR-71", "sr71", "SR 71", "  Sr-71  ");

/* --- accents and foreign names ----------------------------------------- */
correct("beetle", "Käfer", "kafer", "KÄFER", "VW Beetle", "Bug", "Volkswagen Type 1");
correct("hind", "Mi-24", "Mi24", "Hind", "Mil Mi-24", "Krokodil");
correct("concorde", "Concorde", "Concord", "concorde");

/* --- typos --------------------------------------------------------------*/
correct("m4_sherman", "shermn", "shermann", "sherrman", "Shermna");
correct("chinook", "chinnook", "chinok", "Chinnok");
correct("spitfire", "spitfyre", "Spitfre", "Supermarine Spitfire");
correct("countach", "Countach", "Contach", "Lamborghini Countach", "Lambo Countach", "countache");
correct("apache", "Apache", "Apachi", "AH-64", "ah64", "Apache Longbow");

/* --- extra or missing words -------------------------------------------- */
correct("m4_sherman", "the sherman tank", "sherman tank", "a M4 Sherman tank");
correct("uss_missouri", "USS Missouri", "Missouri", "the USS Missouri", "Mighty Mo");
correct("huey", "Huey", "UH-1", "uh1", "Bell UH-1 Iroquois", "the huey helicopter");
correct("b17", "B-17", "Flying Fortress", "B-17 Flying Fortress", "flyingfortress", "Boeing B17");
correct("willys_jeep", "Jeep", "Willys Jeep", "Willys MB", "army jeep");
correct("model_t", "Ford Model T", "Model T", "model-t", "Tin Lizzie");
correct("nimitz", "USS Nimitz", "Nimitz", "nimitz class carrier");
correct("hms_victory", "HMS Victory", "Victory", "hms victory");
correct("titanic", "Titanic", "RMS Titanic", "the titanic");

/* --- nicknames ---------------------------------------------------------- */
correct("a10", "Warthog", "warthog", "Hog", "Thunderbolt II");
correct("f16", "Viper", "F-16", "Fighting Falcon");
correct("f14", "Tomcat", "F-14", "f14");
correct("p51", "Mustang", "P-51", "p51", "P-51 Mustang");
correct("mini", "Mini", "Mini Cooper", "Morris Mini-Minor", "classic mini");

/* --- numbers stay strict ------------------------------------------------
 * A wrong number is never accepted. Where the rest of the answer is right it
 * comes back "close", which costs no points and buys one retry — the player is
 * in the right family and has mistyped or misremembered the designation. */
close("t34", "T-35");
close("f16", "F-15", "F-18");
close("bf109", "Bf 110");
close("hind", "Mi-8", "Mi-26");
wrong("f16", "F-22");
wrong("bf109", "Fw 190");
wrong("m1_abrams", "M2 Bradley");
correct("panzer_iv", "PanzerIV", "panzer iv", "Mk IV panzer");
close("panzer_iv", "Panzer VI", "Panzer 6");
close("tiger_i", "Panzer IV", "PanzerIV");   // right family, wrong mark

/* Two letters out of six in a short word is past a typo and into a guess. */
close("chinook", "chinuk");

/* --- answers that identify nothing -------------------------------------- */
wrong("m4_sherman", "tank", "a tank", "the", "", "   ", "?", "idk", "no idea");
wrong("model_t", "T");                   // single letter must not ride the fuzz
wrong("huey", "helicopter");

/* --- plain wrong answers ------------------------------------------------ */
wrong("m4_sherman", "Tiger I", "T-34", "Panzer IV", "Spitfire");
wrong("apache", "Chinook", "Huey", "Mi-24");
wrong("titanic", "USS Missouri", "HMS Victory");
wrong("beetle", "Ford Mustang", "Mini");

/* --- every alias in the dataset must match its own vehicle -------------- */
VEHICLES.forEach(v => {
  [v.name].concat(v.aliases || []).forEach(a => expect(v.id, a, "correct"));
});

/* --- and must not match anything else -----------------------------------
 * Except where the ambiguity is real: "Mustang" is honestly both a P-51 and a
 * Ford, so it is accepted for whichever vehicle the round is actually asking
 * about. Anything longer ("Ford Mustang", "P-51 Mustang") must still separate. */
const AMBIGUOUS = new Set(["mustang"]);
const crossHits = [];
VEHICLES.forEach(v => {
  [v.name].concat(v.aliases || []).forEach(alias => {
    VEHICLES.forEach(other => {
      if (other.id === v.id) return;
      if (AMBIGUOUS.has(alias.toLowerCase())) return;
      const r = VSMatch.check(alias, other);
      if (r.verdict === "correct") {
        crossHits.push(`"${alias}" (${v.id}) wrongly accepted as ${other.id} via "${r.matched}" [${r.how}]`);
      } else pass++;
    });
  });
});

/* ------------------------------------------------------------------------ */
console.log(`\n${pass} assertions passed`);
if (failures.length) {
  console.log(`\n${failures.length} FAILED:`);
  failures.forEach(f => console.log("  - " + f));
}
if (crossHits.length) {
  console.log(`\n${crossHits.length} CROSS-MATCH FALSE POSITIVES:`);
  crossHits.forEach(f => console.log("  - " + f));
}
if (failures.length || crossHits.length) process.exit(1);
console.log("all good\n");
