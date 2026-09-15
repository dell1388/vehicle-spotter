# Vehicle Spotter

A browser quiz: name the vehicle in the photo. 171 vehicles — tanks, armoured
fighting vehicles, aircraft and helicopters, plus a few cars and ships — across
five eras.

No build step, no dependencies. Open `index.html` in a browser and play.

```
index.html          markup for the three screens (setup, game, results)
css/style.css       styles
js/vehicles.js      the dataset — 171 vehicles
js/match.js         answer matching
js/corrections.js   player-supplied fixes to the dataset
js/game.js          game loop, scoring, filters, persistence
tests/match.test.js matcher test suite — node tests/match.test.js
```

## The matching problem

Strict string comparison is useless here, because vehicle names are genuinely
unstable. An M4 Sherman is a "Sherman". A T-34 is a "T34". A Bf 109 is also a
"Me 109". A Beetle is a "Käfer" or a "Bug", an A-10 is a "Warthog", a Mi-24 is a
"Hind". On top of that, people mistype.

So an answer is accepted if it clears **any** of four bars, checked against the
canonical name, every listed alias, and some variants generated from the name:

| Bar | What it catches | Example |
|---|---|---|
| **exact** | the name or a known alias, once normalised | `t-34` = `T34` = `T 34` |
| **typo** | within a length-scaled edit distance | `shermna` → M4 Sherman |
| **words** | enough of the meaningful words line up | `sherman m4` → M4 Sherman |
| **gist** | every *distinctive* word is present | `the sherman tank` → M4 Sherman |

Normalisation folds case, strips accents (`Käfer` → `kafer`), drops punctuation,
splits letter/digit runs so `T-34`, `T34` and `t 34` collapse to the same thing,
converts roman numerals in designations (`Panzer IV` → `panzer 4`, including the
glued `PanzerIV`), and removes words that identify nothing — `the`, `tank`,
`aircraft`, `class`, `USS` and so on. That last step is what lets
`the sherman tank` and `Sherman` reduce to the same answer.

### Where it deliberately stays strict

Leniency has a floor. Three rules stop "forgiving" from becoming "wrong answers
count":

- **Designations must match exactly.** An F-16 is not an F-15, and 47 alone is
  not an answer — it belongs to a CH-47 Chinook, an M47 Patton, a P-47
  Thunderbolt and a C-47 Skytrain alike, so the letters count as much as the
  number. If the player commits to a designation it has to be the right one.
  Omitting it entirely is still fine — `Sherman` passes for `M4 Sherman`.
- **Short words get no typo budget.** At four letters, one edit turns `fork`
  into `ford`; that is a different word, not a slip.
- **The first letter must agree.** Typos land in the middle of words. Without
  this rule `fighting` and `lightning` are two edits apart, and an F-16 answer
  scores as a P-38.

### The "so close" tier

An answer that lands just under the accept bar comes back as `close` instead of
wrong: no points lost, one free retry, and a specific nudge — a wrong
designation says *"right family, wrong number"* rather than just failing. That
is where `F-15` for an F-16 and `Panzer VI` for a Panzer IV end up.

### Showing its work

When a loose answer is accepted, the game says what it matched — *Matched on
"Warthog"*, *Read as "Spitfire" — spelling forgiven*. Fuzzy matching is only
trustworthy if the player can see why it let something through.

### Tests

`node tests/match.test.js` runs ~128,000 assertions. Alongside the hand-written
cases it sweeps every alias of every vehicle against every *other* vehicle and
fails on any cross-match. That sweep is what found every strictness rule above:
`fork`/`ford` and `M4A1`/`M1A1` at 32 vehicles, then `CH-47`/`M47`/`P-47`,
`AH-64`/`T-64` and `blackjack`/`blackhawk` when the set grew to 171. It also
caught a subtler one — `A-10` and `IS-2` lose their designation entirely if "a"
and "is" are stripped as English filler, which made `Type 10` match the A-10.

Some ambiguity is allowed through on purpose, because it is real: "Mustang" is
honestly both a P-51 and a Ford, "Tiger" is both marks of Tiger, "Hellcat" is
an F6F and an M18, and a Firefly *is* a Sherman. Each is accepted for whichever
vehicle the round is asking about; anything longer still separates them. The
list is spelled out in the test file.

## Game

- **Filters** — pick any mix of categories, eras and difficulty; the pool count
  updates live.
- **Difficulty scaling** — the first rounds stay on well-known vehicles, then the
  ceiling lifts and later rounds favour the harder end of what is open.
- **Timer mode** — 30 seconds a round, with a speed bonus for answering fast.
- **Hints** — reveal one letter at a time, 25 points each.
- **Scoring** — 100 × difficulty, plus 10 per streak step (capped at 10), plus up
  to 50 for speed, minus hints. A correct answer never scores less than 10.
- **Endless mode** — keep going until you stop; otherwise a game is 10 rounds.
- **High score and best streak** persist in `localStorage`, guarded so the game
  still works where site data is blocked.

The game screen is pinned to the viewport height: the photo shrinks to make room
for the answer panel rather than pushing it down the page, so nothing scrolls
between questions and the vehicle stays visible while you read what it was.

The photo credit is deliberately held back until after you answer — photographer
names and filenames give the answer away more often than you would think.

## Correcting the data

The dataset is hand-written, so some of it is wrong. Rather than leave you
arguing with the screen, both kinds of error can be fixed from inside the game:

- **"I was right"** on a wrong answer accepts what you typed as an alias for
  that vehicle from then on, and re-scores the round. If the spelling also
  matches something else in the set, the dialog says so before you commit.
- **"Report entry"** flags a bad entry — wrong photo, wrong name, duplicate —
  and drops it from the rotation.

Corrections live in `localStorage`, are merged over the dataset at runtime, and
are listed on the setup screen where each one can be undone. **Export** gives you
the JSON, so a correction can be folded back into `js/vehicles.js` and shared
rather than living in one browser.

## Adding a vehicle

Append to `VEHICLES` in `js/vehicles.js`:

```js
{
  id: "centurion", name: "Centurion", category: "tank", era: "Cold War",
  difficulty: 2, aliases: ["Centurion tank", "FV4007"],
  fact: "…", imageUrl: "…", credit: "…"
}
```

Aliases only need the forms a person would actually type — the matcher derives
the obvious variations itself. Then re-run the tests: the cross-match sweep will
tell you if a new alias collides with something already in the set. Avoid
aliases that reduce to a single generic word once filler is stripped ("Flying
tank" becomes just "flying"), since those collide with everything.

## Images

Photos come from Wikimedia Commons via `Special:FilePath`, which resizes on
demand, so no images are stored in this repo. Each entry carries a `credit`
string (author and licence) shown in the footer while that vehicle is on screen.
Licences vary by file — public domain, CC0, CC BY and CC BY-SA — and each file's
Commons page carries the authoritative terms.

Images were sourced by taking each vehicle's Wikipedia lead image and verifying
every URL returns an image before it went into the dataset.
