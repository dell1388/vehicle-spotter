/* Vehicle Spotter — forgiving answer matching.
 *
 * Real vehicle names are a mess: "M4 Sherman" is "Sherman", "T-34" is "T34",
 * "Bf 109" is "Me 109", a Beetle is a Käfer and a Warthog is an A-10. On top of
 * that people mistype. So an answer is accepted if it clears ANY of four bars:
 *
 *   1. exact  — after normalisation it equals the name or a known alias
 *   2. typo   — it is within a length-scaled edit distance of one of those
 *   3. tokens — its meaningful words overlap enough with a name's
 *   4. gist   — it contains every *distinctive* word of a name ("sherman tank")
 *
 * One thing stays strict on purpose: numbers. An F-16 is not an F-15 and a
 * Bf 109 is not a Bf 110, so numeric tokens must match digit-for-digit. Being
 * loose there would accept genuinely wrong answers, not just messy ones.
 *
 * Answers that land just under the bar come back as `close`, which the game
 * uses to give a free retry instead of a wrong mark.
 */
const VSMatch = (function () {
  "use strict";

  const ACCEPT = 0.82;   // at or above this: correct
  const CLOSE  = 0.60;   // between CLOSE and ACCEPT: "not quite — try again"

  /* Words that carry no identifying information. Dropped before comparing, so
   * "the sherman tank" and "Sherman" reduce to the same thing. */
  /* English filler that is only filler in prose. "A" and "IS" are also the
   * designations of the A-4 Skyhawk and the IS-2, so these are dropped only
   * when they are not sitting against a number. */
  const STOPWORDS = new Set(["the", "a", "an", "of", "and", "is", "it"]);

  const FILLER = new Set([
    "tank", "tanks", "panzerkampfwagen",
    "plane", "planes", "aircraft", "jet", "fighter", "bomber", "airplane",
    "aeroplane", "warplane", "interceptor",
    "car", "auto", "automobile", "motorcar", "vehicle",
    "ship", "boat", "vessel", "battleship", "carrier", "liner", "destroyer",
    "helicopter", "helo", "heli", "chopper", "gunship", "rotorcraft",
    "class", "mark", "mk", "type", "model", "variant", "version", "series",
    "uss", "hms", "rms", "sms", "hmas", "ss",
    "soviet", "russian", "german", "american", "british", "french", "us",
    "usa", "usaf", "raf", "navy", "army",
    "main", "battle", "mbt", "heavy", "medium", "light"
  ]);

  /* Spelling and abbreviation folding applied per word, both sides. */
  const SYNONYM = {
    messerschmidt: "messerschmitt", messerschmit: "messerschmitt",
    vw: "volkswagen", volkswagon: "volkswagen",
    lambo: "lamborghini", lamborgini: "lamborghini", lamborghina: "lamborghini",
    chevy: "chevrolet", merc: "mercedes",
    citroen: "citroen", supermarine: "supermarine",
    spit: "spitfire", warthog: "warthog", hog: "warthog",
    kafer: "beetle", kaefer: "beetle", bug: "beetle",
    me: "bf",              // Me 109 / Bf 109
    fortress: "fortress",
    aerospatiale: "aerospatiale", concord: "concorde",
    grumman: "grumman", lockheed: "lockheed"
  };

  const ROMAN = { i: 1, ii: 2, iii: 3, iv: 4, v: 5, vi: 6, vii: 7, viii: 8, ix: 9, x: 10 };
  /* Words after which a roman numeral is certainly a designation. */
  const ROMAN_CUE = new Set(["mk", "mark", "type", "panzer", "pzkpfw", "class", "ausf"]);

  /* ------------------------------------------------------------ normalise */

  function deburr(s) {
    // Käfer -> Kafer, Citroën -> Citroen, Aérospatiale -> Aerospatiale
    return s.normalize ? s.normalize("NFD").replace(/[̀-ͯ]/g, "") : s;
  }

  /* Lowercase, strip accents and punctuation, split letter/digit runs so that
   * "T-34", "T34" and "t 34" all become "t 34". */
  function normalize(raw) {
    let s = deburr(String(raw == null ? "" : raw)).toLowerCase();
    s = s.replace(/&/g, " and ");
    // "PanzerIV" / "MkIV" — split a roman numeral off a designation word.
    s = s.replace(/(panzerkampfwagen|panzer|pzkpfw|mark|mk|type|ausf)\s*(i{1,3}|iv|vi{1,3}|ix|xi{0,2})(?![a-z])/g, "$1 $2");
    s = s.replace(/[^a-z0-9]+/g, " ").trim();
    if (!s) return "";
    s = s.replace(/([a-z])(\d)/g, "$1 $2").replace(/(\d)([a-z])/g, "$1 $2");
    return s.replace(/\s+/g, " ").trim();
  }

  function isNumeric(tok) { return /^\d+$/.test(tok); }

  /* Roman numerals only where they can't be an ordinary word: after a cue word
   * ("Mk IV"), or as the final word of a multi-word name ("Tiger I").
   * Deliberately NOT applied to "Mi" in "Mil Mi-24", which is a valid numeral. */
  function foldRomans(tokens) {
    return tokens.map(function (tok, i) {
      if (!Object.prototype.hasOwnProperty.call(ROMAN, tok)) return tok;
      const afterCue = i > 0 && ROMAN_CUE.has(tokens[i - 1]);
      const trailing = i === tokens.length - 1 && tokens.length > 1;
      return (afterCue || trailing) ? String(ROMAN[tok]) : tok;
    });
  }

  function tokenize(raw) {
    const n = normalize(raw);
    if (!n) return [];
    let toks = n.split(" ");
    toks = foldRomans(toks);
    return toks.map(function (t) {
      return Object.prototype.hasOwnProperty.call(SYNONYM, t) ? SYNONYM[t] : t;
    });
  }

  /* Tokens minus filler. Falls back to the full set if filler was all there was,
   * so a lone "Jeep"-style answer still has something to compare. */
  function coreTokens(raw) {
    const toks = tokenize(raw);
    const core = toks.filter(function (t, i) {
      if (FILLER.has(t)) return false;
      if (!STOPWORDS.has(t)) return true;
      // Keep a stopword that is really a designation: the "A" of "A-10".
      return (i > 0 && isNumeric(toks[i - 1])) ||
             (i + 1 < toks.length && isNumeric(toks[i + 1]));
    });
    return core.length ? core : toks;
  }

  function canonicalForm(raw) { return tokenize(raw).join(" "); }

  /* --------------------------------------------------------- edit distance */

  /* Damerau-Levenshtein: counts adjacent transpositions as one edit, so
   * "shermna" costs 1 rather than 2. */
  function editDistance(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;

    const prev2 = new Array(b.length + 1);
    let prev = new Array(b.length + 1);
    let cur = new Array(b.length + 1);
    let prevPrev = prev2;

    for (let j = 0; j <= b.length; j++) prev[j] = j;

    for (let i = 1; i <= a.length; i++) {
      cur[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        let v = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          v = Math.min(v, prevPrev[j - 2] + cost);
        }
        cur[j] = v;
      }
      prevPrev = prev;
      prev = cur;
      cur = new Array(b.length + 1);
    }
    return prev[b.length];
  }

  function similarity(a, b) {
    if (!a.length && !b.length) return 1;
    const longest = Math.max(a.length, b.length);
    if (!longest) return 0;
    return 1 - editDistance(a, b) / longest;
  }

  /* How many typos to forgive in one word — longer words earn more slack.
   * Short words get none: at four letters, one edit turns "fork" into "ford"
   * and that is a different word, not a slip. */
  function typoBudget(len) {
    if (len <= 4) return 0;
    if (len <= 9) return 1;
    if (len <= 14) return 2;
    return 3;
  }

  /* Two words count as the same word.
   * Numbers are exempt — they must be equal, digit for digit.
   * The first letter must also agree: people mistype the middle of a word, not
   * its start, and without this "fighting" and "lightning" are two edits apart. */
  function tokensEqual(a, b) {
    if (a === b) return true;
    if (isNumeric(a) || isNumeric(b)) return false;
    const shorter = Math.min(a.length, b.length);
    // "chinook" vs "chinooks", "abram" vs "abrams"
    if (shorter >= 4 && (a.indexOf(b) === 0 || b.indexOf(a) === 0)) {
      return Math.abs(a.length - b.length) <= 1;
    }
    if (a[0] !== b[0]) return false;
    return editDistance(a, b) <= typoBudget(shorter);
  }

  /* The designation codes in a phrase: the numbers, plus the short letter groups
   * sitting next to them. In "CH-47" the "CH" is not noise — it is the whole
   * difference between a Chinook, an M47 Patton and a P-47 Thunderbolt. */
  function codesIn(tokens) {
    const out = [];
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      if (isNumeric(t)) { out.push(t); continue; }
      if (t.length > 3) continue;
      const nextNum = i + 1 < tokens.length && isNumeric(tokens[i + 1]);
      const prevNum = i > 0 && isNumeric(tokens[i - 1]);
      if (nextNum || prevNum) out.push(t);
    }
    return out.sort();
  }

  /* An answer that states numbers must state the right ones: an M4A1 is not an
   * M1A1 and a Panzer IV is not a Panzer VI, however close the spelling runs.
   * Omitting numbers entirely is fine — "Sherman" is a fair answer for "M4
   * Sherman" — so this only bites when the player actually commits to a number. */
  function numbersContradict(answerToks, formToks) {
    const a = codesIn(answerToks);
    if (!a.length) return false;
    const f = codesIn(formToks);
    return a.length !== f.length || a.some(function (n, i) { return n !== f[i]; });
  }

  /* --------------------------------------------------------------- scoring */

  /* Words that actually identify the vehicle: real words, or numbers of two or
   * more digits. "m" and "4" from "M4 Sherman" are not distinctive; "sherman"
   * is. This is what lets "sherman tank" pass for "M4 Sherman". */
  function distinctiveTokens(tokens) {
    return tokens.filter(function (t) {
      return isNumeric(t) ? t.length >= 2 : t.length >= 4;
    });
  }

  /* Fraction of two word-sets that pair up, each word used at most once. */
  function tokenSetScore(answerToks, targetToks) {
    if (!answerToks.length || !targetToks.length) return 0;
    const used = new Array(targetToks.length).fill(false);
    let paired = 0;
    for (let i = 0; i < answerToks.length; i++) {
      for (let j = 0; j < targetToks.length; j++) {
        if (!used[j] && tokensEqual(answerToks[i], targetToks[j])) {
          used[j] = true;
          paired++;
          break;
        }
      }
    }
    return paired / Math.max(answerToks.length, targetToks.length);
  }

  /* True when the answer names every distinctive word of the target and adds no
   * word of its own that the target does not answer for. The second half
   * matters twice over: "Ford Mustang" names the "Ford" in "Ford Model T", but
   * "Mustang" is a live disagreement rather than spare padding; and "CH-47"
   * shares its 47 with "M47" while the "CH" says they are different machines.
   * Filler is already gone by this point, so "the sherman tank" still passes. */
  function coversDistinctive(answerToks, targetToks) {
    const key = distinctiveTokens(targetToks);
    if (!key.length) return false;

    const covered = key.every(function (k) {
      return answerToks.some(function (a) { return tokensEqual(a, k); });
    });
    if (!covered) return false;

    return answerToks.every(function (a) {
      return targetToks.some(function (t) { return tokensEqual(a, t); });
    });
  }

  /* Score one answer against one accepted spelling. */
  function scoreForm(answer, form) {
    const aFull = canonicalForm(answer);
    const fFull = canonicalForm(form);
    if (!aFull || !fFull) return { score: 0, how: "none" };

    if (aFull === fFull) return { score: 1, how: "exact" };

    // Compare with spaces removed too: "flyingfortress" vs "flying fortress".
    const strSim = Math.max(
      similarity(aFull, fFull),
      similarity(aFull.replace(/ /g, ""), fFull.replace(/ /g, ""))
    );

    const aCore = coreTokens(answer);
    const fCore = coreTokens(form);

    /* Wrong numbers cap the result below the accept bar, so a near miss on a
     * designation comes back as "close" (a free retry) rather than correct. */
    if (numbersContradict(aCore, fCore)) {
      return { score: Math.min(strSim, ACCEPT - 0.03), how: "number-mismatch" };
    }

    let best = strSim;
    let how = "typo";

    const setSim = tokenSetScore(aCore, fCore) * 0.95;
    if (setSim > best) { best = setSim; how = "words"; }

    if (coversDistinctive(aCore, fCore)) {
      if (0.98 > best) { best = 0.98; how = "gist"; }
    }
    return { score: best, how: how };
  }

  /* Extra spellings derived from the canonical name, so the dataset doesn't
   * have to spell out every obvious variation.
   *   "M4 Sherman" -> "sherman"         (drop the designation)
   *   "Mil Mi-24"  -> "mi 24"           (drop the manufacturer)
   */
  function derivedForms(name) {
    const toks = coreTokens(name);
    const out = [];
    const words = toks.filter(function (t) { return !isNumeric(t) && t.length >= 4; });
    if (words.length && words.length < toks.length) out.push(words.join(" "));
    if (toks.length > 2) out.push(toks.slice(1).join(" "));
    return out;
  }

  function acceptedForms(vehicle) {
    const forms = [vehicle.name].concat(vehicle.aliases || [], derivedForms(vehicle.name));
    const seen = Object.create(null);
    const out = [];
    for (let i = 0; i < forms.length; i++) {
      const key = canonicalForm(forms[i]);
      if (!key || seen[key]) continue;
      seen[key] = true;
      out.push(forms[i]);
    }
    return out;
  }

  /* --------------------------------------------------------------- public */

  /* Spellings the player has explicitly struck off this entry. Removing an alias
   * has to veto the answer outright rather than just delete a list item: the
   * matcher derives "Sherman" from the name "M4 Sherman" all on its own, and
   * folds "Spit" into "Spitfire", so deleting the alias alone changes nothing.
   * Compared on core words, so "the sherman tank" is struck off too. */
  function isRejected(vehicle, answer) {
    const list = vehicle && vehicle.rejected;
    if (!list || !list.length) return false;
    const aFull = canonicalForm(answer);
    const aCore = coreTokens(answer).join(" ");
    return list.some(function (r) {
      return canonicalForm(r) === aFull || coreTokens(r).join(" ") === aCore;
    });
  }

  /* Returns { verdict: "correct"|"close"|"wrong", score, matched, how }.
   * `matched` is the spelling the answer was judged against, so the UI can
   * show *why* something loose was accepted. */
  function check(answer, vehicle) {
    const result = { verdict: "wrong", score: 0, matched: null, how: "none" };
    const aFull = canonicalForm(answer);
    if (!aFull) return result;

    if (isRejected(vehicle, answer)) {
      result.how = "rejected";
      return result;
    }

    const forms = acceptedForms(vehicle);

    /* Guard: very short answers ("t", "m4") only pass on an exact hit, so a
     * single letter can't ride the fuzzy rules into a correct mark. */
    const thin = aFull.replace(/ /g, "").length < 3;

    for (let i = 0; i < forms.length; i++) {
      const s = scoreForm(answer, forms[i]);
      if (thin && s.how !== "exact") continue;
      if (s.score > result.score) {
        result.score = s.score;
        result.matched = forms[i];
        result.how = s.how;
      }
      if (result.score === 1) break;
    }

    if (result.score >= ACCEPT) result.verdict = "correct";
    else if (result.score >= CLOSE) result.verdict = "close";
    return result;
  }

  return {
    check: check,
    ACCEPT: ACCEPT,
    CLOSE: CLOSE,
    // exposed for the test suite
    _internal: {
      normalize: normalize, tokenize: tokenize, coreTokens: coreTokens,
      editDistance: editDistance, tokensEqual: tokensEqual,
      acceptedForms: acceptedForms, scoreForm: scoreForm, isRejected: isRejected
    }
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = VSMatch;
