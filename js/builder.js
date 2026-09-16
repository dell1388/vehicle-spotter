/* Vehicle Spotter — the entry builder.
 *
 * Two ways to make an entry, sharing one draft store (js/drafts.js):
 *
 *   Identify these — a queue of photographs found on vehicle articles that the
 *     harvester could not confidently attach to any entry. The page shows one,
 *     says where it came from, and the player names it.
 *
 *   Add your own — a picture (link or file) and a name, and the entry is built
 *     around them.
 *
 * Everything is saved locally and exports as JSON, so entries made here can be
 * folded into js/vehicles.js permanently.
 */
const Builder = (function () {
  "use strict";

  const SKIP_KEY = "vehicleSpotter.candidatesSkipped.v1";
  const $ = (id) => document.getElementById(id);

  let queue = [];
  let current = null;
  let onChange = function () {};

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ------------------------------------------------------------- skips -- */

  function loadSkips() {
    try {
      const raw = window.localStorage.getItem(SKIP_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function saveSkips(list) {
    try { window.localStorage.setItem(SKIP_KEY, JSON.stringify(list)); } catch (e) { /* ignore */ }
  }

  function skip(id) {
    const list = loadSkips();
    if (list.indexOf(id) === -1) list.push(id);
    saveSkips(list);
  }

  function resetSkips() { saveSkips([]); rebuildQueue(); }

  function unskip(id) {
    saveSkips(loadSkips().filter(function (x) { return x !== id; }));
  }

  /* ------------------------------------------------------------- queue -- */

  /* The entry whose article this picture was found on, if it is still in the
   * set and still playable. */
  function hostEntry(candidate) {
    if (!candidate || !candidate.entry) return null;
    const row = VEHICLES.filter(function (v) { return v.id === candidate.entry; })[0];
    if (!row || Corrections.isHidden(row.id)) return null;
    return Corrections.apply(row);
  }

  function rebuildQueue() {
    const pool = (typeof CANDIDATES !== "undefined" && CANDIDATES) || [];
    const skipped = loadSkips();
    const used = Drafts.usedCandidates();
    queue = pool.filter(function (c) {
      return skipped.indexOf(c.id) === -1 && !used[c.id];
    });
    showNext();
  }

  function showNext() {
    current = queue.length ? queue[0] : null;
    const empty = !current;
    $("candidateBox").hidden = empty;
    $("identifyEmpty").hidden = !empty;
    $("identifyIntro").textContent = empty
      ? ""
      : queue.length + " picture" + (queue.length === 1 ? "" : "s") +
        " the dataset could not place. Name one and it becomes an entry.";
    if (empty) return;

    const img = $("candidateImage");
    img.classList.remove("ready");
    $("candidateLoading").hidden = false;
    img.onload = function () { img.classList.add("ready"); $("candidateLoading").hidden = true; };
    img.onerror = function () { $("candidateLoading").textContent = "Picture would not load — skip it."; };
    img.src = current.url;

    /* Most of these pictures really are of the vehicle whose article they sat
     * on — the filename just does not say so. Offer that in one click. */
    const attach = $("identifyAttach");
    const host = hostEntry(current);
    attach.hidden = !host;
    if (host) {
      attach.innerHTML = '<span class="fix-glyph" aria-hidden="true">+</span>Add to ' +
                         escapeHtml(host.name);
      attach.title = "This is a picture of the " + host.name;
    }

    $("candidateHint").innerHTML = current.hint
      ? "Found on the <strong>" + escapeHtml(current.hint) + "</strong> page, but the " +
        "filename did not match it, so it may be a variant, a relative, or something else entirely."
      : "";
    /* The article the picture came from is a fair opening guess. */
    if (current.category) $("identifyCategory").value = current.category;
    if (current.era) $("identifyEra").value = current.era;

    $("identifyName").value = "";
    $("identifyName").focus();
  }

  /* --------------------------------------------------- category pickers -- */

  /* One row of selects, reused by both forms. */
  function metaControls(prefix) {
    const cats = CATEGORIES.map(function (c) {
      return '<option value="' + c + '">' + escapeHtml(CATEGORY_LABELS[c] || c) + "</option>";
    }).join("");
    const eras = ERAS.map(function (e) {
      return '<option value="' + escapeHtml(e) + '">' + escapeHtml(e) + "</option>";
    }).join("");
    return '<label class="field"><span>Category</span>' +
           '<select id="' + prefix + 'Category">' + cats + "</select></label>" +
           '<label class="field"><span>Era</span>' +
           '<select id="' + prefix + 'Era">' + eras + "</select></label>" +
           '<label class="field"><span>Difficulty</span><select id="' + prefix + 'Difficulty">' +
           '<option value="1">Easy</option><option value="2" selected>Medium</option>' +
           '<option value="3">Hard</option></select></label>';
  }

  function readMeta(prefix) {
    return {
      category: $(prefix + "Category").value,
      era: $(prefix + "Era").value,
      difficulty: Number($(prefix + "Difficulty").value)
    };
  }

  /* ------------------------------------------------------------ drafts -- */

  function renderDrafts() {
    const items = Drafts.all();
    $("draftsIntro").textContent = items.length
      ? items.length + " entr" + (items.length === 1 ? "y" : "ies") +
        " of your own. They are in the game already, and export as JSON."
      : "Nothing yet. Identify a picture, or add one of your own.";

    $("draftsList").innerHTML = items.map(function (d) {
      return '<div class="draft-row">' +
             '<img class="draft-thumb" src="' + escapeHtml(d.images[0].url) + '" alt="">' +
             '<div class="draft-body"><span class="draft-name">' + escapeHtml(d.name) + "</span>" +
             '<span class="draft-meta">' + escapeHtml(CATEGORY_LABELS[d.category] || d.category) +
             " · " + escapeHtml(d.era) + " · " +
             ["Easy", "Medium", "Hard"][d.difficulty - 1] + "</span></div>" +
             '<button class="btn btn-ghost btn-tiny" data-del="' + escapeHtml(d.id) + '">Delete</button>' +
             "</div>";
    }).join("");

    Array.prototype.forEach.call($("draftsList").querySelectorAll("[data-del]"), function (btn) {
      btn.addEventListener("click", function () {
        Drafts.remove(btn.getAttribute("data-del"));
        renderDrafts();
        rebuildQueue();
        onChange();
      });
    });
  }

  /* -------------------------------------------------------------- tabs -- */

  function selectTab(which) {
    const tabs = { identify: "tabIdentify", add: "tabAdd", drafts: "tabDrafts" };
    const panels = { identify: "identifyPanel", add: "addPanel", drafts: "draftsPanel" };
    Object.keys(tabs).forEach(function (k) {
      $(tabs[k]).setAttribute("aria-selected", String(k === which));
      $(panels[k]).hidden = k !== which;
    });
    if (which === "drafts") renderDrafts();
    if (which === "identify") rebuildQueue();
  }

  /* --------------------------------------------------------------- init -- */

  function init(options) {
    onChange = (options && options.onChange) || function () {};

    $("identifyMeta").innerHTML = metaControls("identify");
    $("addMeta").innerHTML = metaControls("add");

    $("tabIdentify").addEventListener("click", function () { selectTab("identify"); });
    $("tabAdd").addEventListener("click", function () { selectTab("add"); });
    $("tabDrafts").addEventListener("click", function () { selectTab("drafts"); });

    /* --- identify --- */
    $("identifyForm").addEventListener("submit", function (e) {
      e.preventDefault();
      if (!current) return;
      const name = $("identifyName").value.trim();
      if (!name) return;
      const meta = readMeta("identify");
      const problem = Drafts.add({
        name: name, category: meta.category, era: meta.era, difficulty: meta.difficulty,
        images: [{ url: current.url, credit: current.credit }],
        from: current.id
      });
      if (problem) { window.alert(problem); return; }
      onChange();
      rebuildQueue();
    });

    $("identifyAttach").addEventListener("click", function () {
      if (!current) return;
      const host = hostEntry(current);
      if (!host) return;

      const candidate = current;
      const problem = Corrections.addImage(candidate.entry, candidate.url, candidate.credit);
      if (problem) { window.alert(problem); return; }

      skip(candidate.id);
      onChange();
      rebuildQueue();

      if (options.showToast) {
        options.showToast("Added to " + host.name + ".", function () {
          Corrections.removeAddedImage(candidate.entry, candidate.url);
          unskip(candidate.id);
          onChange();
          rebuildQueue();
        });
      }
    });

    $("identifySkip").addEventListener("click", function () {
      if (!current) return;
      skip(current.id);
      rebuildQueue();
    });

    $("identifyReject").addEventListener("click", function () {
      if (!current) return;
      skip(current.id);            // same effect, but says why out loud
      rebuildQueue();
    });

    /* --- add your own --- */
    let uploaded = null;

    function preview(url) {
      $("addPreviewBox").hidden = !url;
      if (url) $("addPreview").src = url;
    }

    $("addUrl").addEventListener("input", function () {
      uploaded = null;
      preview($("addUrl").value.trim());
    });

    $("addFile").addEventListener("change", function () {
      const file = $("addFile").files && $("addFile").files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function () {
        uploaded = String(reader.result);
        if (uploaded.length > Drafts.MAX_IMAGE_BYTES) {
          $("addNote").textContent = "That file is large; it may not save. A URL is safer.";
        } else {
          $("addNote").textContent = "";
        }
        $("addUrl").value = "";
        preview(uploaded);
      };
      reader.readAsDataURL(file);
    });

    $("addForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const url = uploaded || $("addUrl").value.trim();
      const name = $("addName").value.trim();
      if (!url) { $("addNote").textContent = "Give a picture first."; return; }
      if (!name) { $("addNote").textContent = "Give it a name."; return; }

      const meta = readMeta("add");
      const problem = Drafts.add({
        name: name,
        aliases: $("addAliases").value.split(",").map(function (a) { return a.trim(); })
                                    .filter(Boolean),
        category: meta.category, era: meta.era, difficulty: meta.difficulty,
        fact: $("addFact").value.trim() || undefined,
        images: [{ url: url, credit: $("addCredit").value.trim() || "Added by hand" }]
      });
      if (problem) { $("addNote").textContent = problem; return; }

      $("addForm").reset();
      uploaded = null;
      preview("");
      $("addNote").textContent = "Added. It is in the game now.";
      onChange();
    });

    /* --- drafts --- */
    $("draftsExport").addEventListener("click", function () {
      (options.openModal)("Export your entries",
        '<p class="modal-quiet">Paste this back to have them folded into ' +
        "js/vehicles.js permanently.</p>" +
        '<textarea class="export-box" readonly rows="12">' +
        escapeHtml(Drafts.exportJSON()) + "</textarea>",
        [{ label: "Close", onClick: options.closeModal },
         { label: "Copy", primary: true, onClick: function () {
             const box = document.querySelector("#modalBody .export-box");
             box.select();
             try { document.execCommand("copy"); } catch (err) { /* copy by hand */ }
           } }]);
    });

    $("draftsImport").addEventListener("click", function () {
      (options.openModal)("Import entries",
        '<p class="modal-quiet">Paste entries exported from here or elsewhere.</p>' +
        '<textarea class="export-box" id="importBox" rows="12" ' +
        'placeholder="[ { &quot;name&quot;: … } ]"></textarea>',
        [{ label: "Cancel", onClick: options.closeModal },
         { label: "Import", primary: true, onClick: function () {
             const problem = Drafts.importJSON($("importBox").value);
             if (problem) { window.alert(problem); return; }
             options.closeModal();
             renderDrafts();
             onChange();
           } }]);
    });

    $("draftsReset").addEventListener("click", function () { resetSkips(); });

    $("draftsClear").addEventListener("click", function () {
      (options.openModal)("Delete all your entries",
        "<p>Remove every entry you have created? This cannot be undone.</p>",
        [{ label: "Cancel", onClick: options.closeModal },
         { label: "Delete all", primary: true, onClick: function () {
             Drafts.clearAll();
             options.closeModal();
             renderDrafts();
             rebuildQueue();
             onChange();
           } }]);
    });

    selectTab("identify");
  }

  return { init: init, selectTab: selectTab, refresh: function () { rebuildQueue(); renderDrafts(); } };
})();
