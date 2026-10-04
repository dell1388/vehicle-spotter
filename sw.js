/* Vehicle Spotter — offline cache.
 *
 * Two caches with different rules, because the two kinds of request want
 * opposite things:
 *
 *   the app itself   network first, so a new build is picked up straight away,
 *                    falling back to the cache when there is no connection
 *   the photographs  cache first, and kept. A Commons photo at a given URL
 *                    never changes, and Commons rate-limits hard enough that a
 *                    re-fetch can come back 429 mid-game. Once a photo has been
 *                    seen it should stay seen.
 */
const SHELL = "vs-shell-v1";
const PHOTOS = "vs-photos-v1";
const PHOTO_LIMIT = 400;

const SHELL_FILES = [
  "./", "index.html", "css/style.css",
  "js/vehicles.js", "js/match.js", "js/picker.js", "js/srs.js", "js/daily.js",
  "js/candidates.js", "js/drafts.js", "js/corrections.js", "js/builder.js",
  "js/game.js"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(SHELL).then(function (c) {
      // One bad entry must not fail the whole install.
      return Promise.all(SHELL_FILES.map(function (f) {
        return c.add(f).catch(function () { /* skip it */ });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.map(function (n) {
        return (n === SHELL || n === PHOTOS) ? null : caches.delete(n);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isPhoto(url) {
  return /(^|\.)wikimedia\.org$/.test(url.hostname) ||
         /(^|\.)wikipedia\.org$/.test(url.hostname);
}

/* Keep the photo cache from growing without limit: oldest entries first, which
 * for this cache is the order they were added. */
function trim(cache) {
  return cache.keys().then(function (keys) {
    if (keys.length <= PHOTO_LIMIT) return null;
    return Promise.all(keys.slice(0, keys.length - PHOTO_LIMIT).map(function (k) {
      return cache.delete(k);
    }));
  });
}

self.addEventListener("fetch", function (e) {
  const req = e.request;
  if (req.method !== "GET") return;

  let url;
  try { url = new URL(req.url); } catch (err) { return; }

  if (isPhoto(url)) {
    e.respondWith(
      caches.open(PHOTOS).then(function (cache) {
        return cache.match(req).then(function (hit) {
          if (hit) return hit;
          return fetch(req).then(function (res) {
            // Opaque responses are cacheable and are what a cross-origin image
            // fetch returns; a 429 is not worth keeping.
            if (res && (res.type === "opaque" || res.ok)) {
              cache.put(req, res.clone()).then(function () { return trim(cache); })
                   .catch(function () { /* quota */ });
            }
            return res;
          });
        });
      })
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(SHELL).then(function (c) { c.put(req, copy); })
              .catch(function () { /* quota */ });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        return hit || caches.match("index.html");
      });
    })
  );
});
