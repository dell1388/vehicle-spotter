# Vehicle Spotter

A browser quiz: name what is in the photo. Tanks, armoured fighting vehicles,
aircraft, helicopters, missiles and artillery, plus a few cars and ships, across
six eras from the Age of Sail to the present.

621 entries. Many carry two or three different photographs and a round shows one
of them at random, so a vehicle cannot be answered by memorising one picture.

No build step, no dependencies. Open `index.html` in a browser and play.

```
index.html          markup for the three screens (setup, game, results)
css/style.css       styles
js/vehicles.js      the dataset
js/candidates.js    pictures with no name yet, for the entry builder
js/match.js         answer matching
js/picker.js        which vehicle to ask about next
js/corrections.js   player-supplied fixes to the dataset
js/drafts.js        entries the player creates
js/builder.js       the entry builder screen
js/game.js          game loop, scoring, filters, persistence
tests/data.test.js         dataset integrity — node tests/data.test.js
tests/match.test.js        matcher — node tests/match.test.js
tests/selection.test.js    round selection — node tests/selection.test.js
tests/corrections.test.js  corrections overlay — node tests/corrections.test.js
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

`node tests/selection.test.js` drives `js/picker.js` directly over 300 seeded
games, with randomness injected so any failure is reproducible from its seed. It
pins the precise invariant — a named vehicle returns only once everything else
has been named too — rather than a blanket "never repeats", because with a pool
smaller than the number of rounds, something has to repeat eventually. The first
version of that test asserted the blanket rule and failed, which is how the real
boundary got written down.

`node tests/data.test.js` checks the shape of every record: unique ids, a known
category and era, between one and three images, every image with a credit, and
no credit leaking a filename. It also checks the builder's candidate queue.

`node tests/corrections.test.js` covers the corrections overlay separately:
that renaming leaves the dataset row untouched, that a struck-off spelling
really stops being accepted, that corrections survive a reload, that every kind
can be undone, and that corrupt or hostile stored JSON is ignored rather than
trusted.

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
- **No repeats of what you know** — a vehicle you name correctly does not come
  round again (see below).
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

## What you already know

Being asked the same vehicle twice in one sitting, after getting it right the
first time, is the annoying case. So a vehicle named correctly is not asked
again, and the record persists: **Hold back ones you know** (on by default)
keeps vehicles you have already named waiting until the rest have been seen.

Rounds are chosen one at a time rather than as a queue up front, because the
choice has to react to what you actually get right. Each round takes the first
tier that has anything in it:

1. not seen this game, and never named correctly before
2. not seen this game — known ones, once the unknown run out
3. seen this game but *not* named correctly — the ones you are still missing
4. anything, when the filters leave too small a pool to do better

Tier 3 is the one that does the work: a vehicle you named correctly can only
reappear via tier 4, which needs every other tier to be empty — meaning you have
named everything the filters allow. Tier 3 also means the ones you *missed* come
back around, which is the half of the behaviour worth having.

The setup screen shows how many you have named, and **Reset progress** clears
that record without touching your high score or corrections.

## Creating entries

**Create entries** on the setup screen opens a builder with three tabs. Anything
made there is playable immediately, saved in `localStorage`, and exports as JSON
so it can be folded into `js/vehicles.js` permanently.

- **Identify these** — a queue of photographs the harvester could not place.
  They come from a vehicle's own Wikipedia article but their filename does not
  name that vehicle, so they are usually a variant, a relative, a rival shown
  for comparison, or something else entirely. The page shows one at a time, says
  which article it came from, and asks what it is. Skip, or mark "not a vehicle",
  and it leaves the queue.

  Often, though, the picture really is of the vehicle whose article it sat on —
  the filename just does not say so. **Add to <em>that vehicle</em>** does it in
  one click: the photograph joins that entry rather than starting a new one, and
  the entry then has another picture to show. It is undoable from the toast.
- **Add your own** — a picture (a link, or a file from the device) and a name.
  Aliases, category, era, difficulty, a fact and a credit are all optional.
- **Your entries** — what you have made, with export and import.

Uploaded files are stored as data URLs, which browser storage puts a firm limit
on, so the builder warns on a large file and suggests a URL instead.

## Correcting the data

The dataset is hand-written, so some of it is wrong. Rather than leave you
arguing with the screen, an entry can be fixed from inside the game. Every
answer panel has a **Fix entry** button:

- **Rename it.** The name field is the entry's canonical name — correct it and
  the game uses the new one everywhere: the answer panel, the hint mask, the
  end-of-game review, and what the matcher accepts. By default the old name
  stops being accepted, since you have just said it was wrong; a checkbox keeps
  it as an alias if it was merely incomplete rather than incorrect.
- **Remove an alias.** Every accepted spelling is listed as a chip; click one to
  strike it off. Struck-off spellings can be restored from the same dialog.
- **Remove a photo.** Entries with more than one photo show them as thumbnails;
  click one to drop it. A photograph attached from the builder is removed
  outright; one the dataset shipped is struck off and can be restored. A picture showing the wrong thing is a smaller problem
  than a wrong entry, so it can go on its own — though the last photo always
  stays, since an entry with no picture is unplayable.

There is also a **Bad picture** button, on the round itself and in the answer
panel, which strikes off the photo currently on screen in one click and offers
an undo. It is safe to press mid-round: it swaps in another picture of the same
vehicle, so it never gives the answer away. An entry down to its last photo
cannot lose it, so there the button offers to hide the entry instead, with
"photo does not match" already chosen.
- **Hide the entry** — wrong photo, duplicate, beyond saving — which drops it
  from the rotation.

And on a wrong answer, **"I was right"** accepts what you typed as an alias from
then on and re-scores the round. If that spelling also matches something else in
the set, the dialog says so before you commit, and renaming warns the same way.

Removing an alias is a veto, not a list deletion, and it has to be: the matcher
invents variants from the canonical name by itself, so deleting "Sherman" from
the alias list would not stop `Sherman` being derived from "M4 Sherman", and
"Spit" folds into "Spitfire" before any list is consulted. A struck-off spelling
is therefore rejected outright, compared on its meaningful words — striking off
"Sherman" also strikes off "the sherman tank".

Corrections live in `localStorage`, are merged over the dataset at runtime, and
never touch the dataset rows themselves. Each one is listed on the setup screen
and individually undoable. **Export** gives you the JSON, so a correction can be
folded back into `js/vehicles.js` and shared rather than living in one browser.

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
demand, so no images are stored in this repo. Each photo carries its own credit
(author and licence), shown after you answer. Licences vary by file — public
domain, CC0, CC BY and CC BY-SA — and each file's Commons page carries the
authoritative terms.

They were harvested from each vehicle's Wikipedia article: the lead image, plus
up to two more taken from the body of the article. Names, aliases and facts come
from the same place — aliases from the article's redirects, which are exactly the
alternative names people use, so "Warthog" and "Stringbag" arrive on their own.

That harvest reads Wikipedia's *pages*, not its API. The API rate-limits this
hard — down to one request a minute, and eventually a 429 to a single request —
while ordinary article pages are served from the CDN and are not limited at all.
Three pages carry everything needed: the article (name, opening sentence, lead
photograph), `Special:WhatLinksHere` (the redirects) and the Commons file page
(photographer and licence).

Redirects are generous, so scraped aliases are pruned: `tools/prune.js` runs the
matcher across the whole set and drops any scraped alias that answers better for
a different entry — "Fighter China" pointed at the JF-17 but matched the Chi-Ha,
"Infantry carrier" pointed at the Universal Carrier but matched three different
infantry tanks. Fourteen of 1,383 were dropped that way. Generic type words
("Jagdpanzer", "howitzer") and bare manufacturer names ("Vickers", "Robinson")
are never taken as aliases at all. Article images
are not all usable, so candidates are filtered hard — raster photos only, big
enough to be worth showing, and rejected if the filename looks like a diagram,
a map, an insignia or a component shot, because a photograph of an engine is not
a photograph of the tank it came out of. PNGs are skipped for the extra slots,
since on these articles the PNGs are nearly always maps and charts while the
photographs are JPEGs. What survives must also name the vehicle in its filename,
which is the cheapest relevance signal available, and return a real image when
fetched.

That still lets the occasional oddity through, which is part of why removing a
single photo is one of the corrections a player can make. The photographs the
filter turns down are not thrown away: they become the entry builder's queue of
pictures to identify.

Wikimedia rate-limits heavily, so the harvester keeps to one request every few
seconds, backs off for 30 seconds or more on a 429, and resumes from whatever it
has already written rather than starting again.
