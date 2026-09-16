# Harvest tools

Not part of the game — these built `js/vehicles.js` and `js/candidates.js`.

- **`scrape.py`** builds records from Wikipedia *pages* rather than its API,
  which rate-limits this network to about one request a minute. Three pages give
  everything: the article (name, opening sentence, lead photograph),
  `Special:WhatLinksHere` (redirects, used as aliases) and the Commons file page
  (photographer and licence). Photographs on an article whose filename does not
  name the vehicle are set aside as candidates for the entry builder.
- **`prune.js`** runs the matcher across the whole set and reports scraped
  aliases that answer better for some other entry, so they can be dropped.

Both resume from what they have already written.

`identified-photos.json` and `identified-entries.json` hold pictures identified
by hand in the entry builder and folded back in: the first maps an entry id to
extra photographs for it, the second is whole entries for pictures that turned
out to be something the set did not have.
