"""Build records by reading Wikipedia's pages, not its API.

The API is rate-limited to roughly one request a minute from this network, but
ordinary article pages are served from the CDN and are not. Everything needed is
on three pages:

  the article            name, opening sentence, lead photograph
  Special:WhatLinksHere  the redirects, which are the names people actually use
  the Commons file page  the photographer and the licence
"""
import json, os, re, sys, time, html, urllib.parse, urllib.request, urllib.error

UA = ("VehicleSpotter/1.0 (educational quiz demo; "
      "https://github.com/dell1388/vehicle-spotter)")
PAUSE = 0.4

def fetch(url, tries=4):
    for i in range(tries):
        try:
            r = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(r, timeout=45) as f:
                return f.read().decode("utf-8", "replace")
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return ""
            if e.code == 429:
                wait = 15
                try:
                    wait = int(e.headers.get("retry-after") or 15)
                except (TypeError, ValueError):
                    pass
                time.sleep(min(wait, 60) + 1)
                continue
            if i == tries - 1:
                return ""
            time.sleep(2 * (i + 1))
        except Exception:
            if i == tries - 1:
                return ""
            time.sleep(2 * (i + 1))
    return ""

def text(frag):
    frag = re.sub(r"<(script|style|sup|table)[^>]*>.*?</\1>", " ", frag, flags=re.S | re.I)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", frag))).strip()

DISAMBIG = {"tank", "tanks", "vehicle", "aircraft", "missile", "rocket", "artillery",
            "car", "ship", "weapon", "gun", "howitzer", "helicopter", "marque",
            "company", "film", "video game", "ifv", "apc", "spg", "bomber", "fighter",
            "tank destroyer", "self-propelled gun", "armoured fighting vehicle"}

def clean_title(t):
    m = re.search(r"\s*\(([^)]*)\)\s*$", t)
    if not m:
        return t.strip()
    inner = m.group(1).strip().lower()
    return t[:m.start()].strip() if (inner in DISAMBIG or " " in inner) else t.strip()

def first_sentence(s):
    s = re.sub(r"\s+", " ", s).strip()
    # stripping tags leaves gaps before punctuation: "Motor Works ." -> "Works."
    s = re.sub(r"\s+([.,;:!?])", r"\1", s)
    s = re.sub(r"\(\s*\)", "", s)
    s = s.replace("U.S.", "US").replace("i.e.", "ie").replace("e.g.", "eg")
    m = re.match(r"(.{30,200}?[.!?])(\s|$)", s)
    out = (m.group(1) if m else s[:180]).strip()
    return out if 25 <= len(out) <= 200 else ""

def commons_images(h):
    """Every Commons photograph used on the page, largest sensible ones only."""
    out = []
    for src in re.findall(r'<img[^>]+src="([^"]+)"', h):
        if "/wikipedia/commons/" not in src:
            continue
        m = re.search(r"/commons/thumb/\w/\w\w/([^/]+)/", src) or \
            re.search(r"/commons/\w/\w\w/([^/?]+)$", src)
        if not m:
            continue
        fname = urllib.parse.unquote(m.group(1))
        if re.search(r"\.(svg|gif|png)$", fname, re.I):
            continue
        if re.search(r"(icon|logo|flag|commons|wiki|edit|ambox|question|arrow|symbol"
                     r"|roundel|insignia|seal|padlock|speaker|disambig|map|diagram"
                     r"|chart|drawing|cutaway|engine|interior|cockpit|detail|plaque"
                     r"|model|wreck|memorial|portrait|crash|poster|stamp|cabin"
                     r"|emblem|badge|medal|graph|silhouette)", fname, re.I):
            continue
        if fname not in out:
            out.append(fname)
    return out


def name_tokens(name):
    low = name.lower()
    out = [t for t in re.split(r"[^a-z0-9]+", low)
           if len(t) >= 3 and t not in ("the", "and", "mark", "type", "tank", "class")]
    compact = re.sub(r"[^a-z0-9]+", "", low)
    if 3 <= len(compact) <= 12:
        out.append(compact)
    m = re.match(r"^([a-z]{1,3})[\s\-]?(\d{1,3})", low)
    if m:
        out.extend([m.group(1) + "-" + m.group(2), m.group(1) + m.group(2)])
    return list(dict.fromkeys(out))


def article(title):
    h = fetch("https://en.wikipedia.org/wiki/" + urllib.parse.quote(title.replace(" ", "_")))
    if not h:
        return None
    m = re.search(r'<h1[^>]*id="firstHeading"[^>]*>(.*?)</h1>', h, re.S)
    name = clean_title(text(m.group(1))) if m else clean_title(title)

    body = h.split('class="mw-parser-output"', 1)[-1]
    fact = ""
    for para in re.findall(r"<p[^>]*>(.*?)</p>", body, re.S)[:6]:
        t = text(para)
        if len(t) > 60 and not t.lower().startswith(("for other", "this article")):
            fact = first_sentence(t)
            break

    # The infobox photograph, taken from the Commons thumbnail URL. Files under
    # /wikipedia/en/ are non-free local uploads, so they are skipped.
    lead = None
    for src in re.findall(r'<img[^>]+src="([^"]+)"', h):
        if "/wikipedia/commons/" not in src:
            continue
        m2 = re.search(r"/commons/thumb/\w/\w\w/([^/]+)/", src) or \
             re.search(r"/commons/\w/\w\w/([^/?]+)$", src)
        if not m2:
            continue
        fname = urllib.parse.unquote(m2.group(1))
        if re.search(r"\.(svg|gif)$", fname, re.I):
            continue
        if re.search(r"(icon|logo|flag|commons|wiki|edit|ambox|question|arrow|symbol"
                     r"|roundel|insignia|seal|padlock|speaker|disambig)", fname, re.I):
            continue
        lead = fname
        break
    if not lead:
        return None

    # Photographs on this page whose filename does not name the vehicle. The
    # harvester will not attach them to an entry, so they go to the builder's
    # queue for a person to identify. They cost nothing: the page is already here.
    toks = name_tokens(name)
    others = [f for f in commons_images(h)
              if f != lead and toks and not any(t in f.lower() for t in toks)]
    return {"name": name, "fact": fact, "file": lead, "others": others[:2]}

BAD_ALIAS = re.compile(r"(list of|\(|\)|/|#|template|category:|wikipedia|draft|talk:)", re.I)
GENERIC = {"jagdpanzer", "panzer", "kampfpanzer", "flakpanzer", "sturmgeschutz",
           "panzerjager", "tank destroyer", "self-propelled gun", "assault gun",
           "main battle tank", "light tank", "medium tank", "heavy tank", "howitzer",
           "fighter", "bomber", "interceptor", "helicopter", "armoured car",
           "armored car", "half-track", "gunship", "biplane", "airliner"}

def redirects(title, name):
    h = fetch("https://en.wikipedia.org/wiki/Special:WhatLinksHere/" +
              urllib.parse.quote(title.replace(" ", "_")) +
              "?hidelinks=1&hidetrans=1&limit=80")
    flat = lambda s: re.sub(r"[^a-z0-9]", "", s.lower())
    out = []
    for a in re.findall(r'class="mw-redirect"[^>]*title="([^"]+)"', h):
        a = html.unescape(a).strip()
        if BAD_ALIAS.search(a) or a.lower() in GENERIC:
            continue
        if len(a) > 42 or flat(a) == flat(name) or len(flat(a)) < 2:
            continue
        if a.lower() in [x.lower() for x in out]:
            continue
        out.append(a)
    out.sort(key=len)
    return out[:8]

def credit(fname):
    h = fetch("https://commons.wikimedia.org/wiki/File:" +
              urllib.parse.quote(fname.replace(" ", "_")))
    author = "Unknown"
    m = re.search(r'id="fileinfotpl(?:&#95;|_)aut"[^>]*>.*?</td>\s*<td[^>]*>(.*?)</td>', h, re.S)
    if m:
        author = (text(m.group(1)) or "Unknown")[:110]
    lics = [text(x) for x in
            re.findall(r'class="licensetpl(?:&#95;|_)short"[^>]*>(.*?)</span>', h, re.S)]
    lics = [l for l in dict.fromkeys(lics) if l]
    lic = lics[-1] if lics else "see file page"
    return "%s / Wikimedia Commons (%s)" % (author, lic)

def filepath(fname, width=1000):
    return ("https://commons.wikimedia.org/wiki/Special:FilePath/" +
            urllib.parse.quote(fname.replace(" ", "_")) + "?width=%d" % width)

def build(key, title, cat, era, diff):
    art = article(title)
    time.sleep(PAUSE)
    if not art:
        return None
    al = redirects(title, art["name"])
    time.sleep(PAUSE)
    cr = credit(art["file"])
    time.sleep(PAUSE)
    return ({"id": key, "name": art["name"], "category": cat, "era": era,
             "difficulty": diff, "aliases": al, "fact": art["fact"],
             "images": [{"url": filepath(art["file"]), "credit": cr}]},
            [{"id": key + "__" + re.sub(r"[^a-z0-9]+", "_", f.lower())[:40],
              "url": filepath(f), "credit": "Wikimedia Commons — see the file page",
              "hint": art["name"], "category": cat, "era": era}
             for f in art.get("others", [])])

if __name__ == "__main__":
    from titles_big import BIG
    out_path = sys.argv[1]
    out = {}
    if os.path.exists(out_path):
        try:
            out = {k: v for k, v in json.load(open(out_path)).items() if v}
        except ValueError:
            out = {}

    cand_path = "candidates_web.json"
    pool = []
    if os.path.exists(cand_path):
        try:
            pool = json.load(open(cand_path))
        except ValueError:
            pool = []
    seen_c = {c["id"] for c in pool}

    todo = [r for r in BIG if r[0] not in out]
    print("to build:", len(todo), "| have:", len(out), flush=True)
    for n, (key, title, cat, era, diff) in enumerate(todo, 1):
        built = build(key, title, cat, era, diff)
        rec, cands = built if built else (None, [])
        if cands:
            pool.extend(c for c in cands if c["id"] not in seen_c)
            seen_c.update(c["id"] for c in cands)
        if rec:
            out[key] = rec
            print("%4d/%d %-18s %-32s %d alias" % (n, len(todo), key, rec["name"][:32],
                                                   len(rec["aliases"])), flush=True)
        else:
            print("%4d/%d %-18s skipped" % (n, len(todo), key), flush=True)
        if n % 10 == 0:
            json.dump(out, open(out_path, "w"), indent=1)
            json.dump(pool, open(cand_path, "w"), indent=1)
    json.dump(out, open(out_path, "w"), indent=1)
    json.dump(pool, open(cand_path, "w"), indent=1)
    print("\nbuilt:", len(out), "of", len(BIG), "| candidates:", len(pool))
