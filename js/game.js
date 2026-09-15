/* Vehicle Spotter — game loop, filters, scoring and persistence. */
(function () {
  "use strict";

  const ROUNDS_PER_GAME = 10;
  const ROUND_SECONDS = 30;
  const HINT_COST = 25;
  const BASE_POINTS = 100;        // multiplied by difficulty
  const STREAK_BONUS = 10;        // per consecutive correct answer, capped
  const STREAK_CAP = 10;
  const SPEED_BONUS = 50;         // timer mode only, scaled by time left
  const STORE_KEY = "vehicleSpotter.v1";

  const $ = (id) => document.getElementById(id);

  const el = {
    setup: $("setupScreen"), game: $("gameScreen"), results: $("resultsScreen"),
    categoryChips: $("categoryChips"), eraChips: $("eraChips"), difficultyChips: $("difficultyChips"),
    timerToggle: $("timerToggle"), endlessToggle: $("endlessToggle"),
    poolNote: $("poolNote"), startBtn: $("startBtn"),
    correctionsPanel: $("correctionsPanel"), correctionsList: $("correctionsList"),
    exportBtn: $("exportBtn"), clearCorrectionsBtn: $("clearCorrectionsBtn"),
    round: $("roundValue"), score: $("scoreValue"), streak: $("streakValue"),
    timerStat: $("timerStat"), timerValue: $("timerValue"),
    timerTrack: $("timerTrack"), timerFill: $("timerFill"),
    image: $("vehicleImage"), photoLoading: $("photoLoading"),
    categoryTag: $("categoryTag"), eraTag: $("eraTag"), difficultyTag: $("difficultyTag"),
    form: $("answerForm"), input: $("answerInput"), submitBtn: $("submitBtn"),
    hintBtn: $("hintBtn"), skipBtn: $("skipBtn"), endBtn: $("endBtn"),
    hintDisplay: $("hintDisplay"), feedback: $("feedback"),
    resultsTitle: $("resultsTitle"), finalScore: $("finalScore"),
    finalCorrect: $("finalCorrect"), finalStreak: $("finalStreak"), finalBest: $("finalBest"),
    review: $("review"), againBtn: $("againBtn"), changeBtn: $("changeBtn"),
    bestBadge: $("bestBadge"), bestValue: $("bestValue"),
    modal: $("modal"), modalTitle: $("modalTitle"), modalBody: $("modalBody"),
    modalActions: $("modalActions")
  };

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ----------------------------------------------------------- storage -- */

  /* Private browsing and blocked site data both make localStorage throw, so
   * every access is guarded and the game plays fine without it. */
  function loadStore() {
    try {
      const raw = window.localStorage.getItem(STORE_KEY);
      if (!raw) return { highScore: 0, bestStreak: 0 };
      const parsed = JSON.parse(raw);
      return {
        highScore: Number(parsed.highScore) || 0,
        bestStreak: Number(parsed.bestStreak) || 0
      };
    } catch (e) {
      return { highScore: 0, bestStreak: 0 };
    }
  }

  function saveStore(s) {
    try { window.localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch (e) { /* ignore */ }
  }

  let store = loadStore();

  function renderBest() {
    el.bestValue.textContent = store.highScore;
    el.bestBadge.hidden = store.highScore <= 0;
  }

  /* ----------------------------------------------------------- filters -- */

  const filters = {
    categories: new Set(CATEGORIES),
    eras: new Set(ERAS),
    difficulties: new Set([1, 2, 3])
  };

  const DIFFICULTY_LABELS = { 1: "Easy", 2: "Medium", 3: "Hard" };

  function categoryLabel(c) {
    return (typeof CATEGORY_LABELS !== "undefined" && CATEGORY_LABELS[c]) ||
           c.charAt(0).toUpperCase() + c.slice(1);
  }

  function buildChips(container, values, set, label, countFor) {
    container.innerHTML = "";
    values.forEach(function (value) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.setAttribute("aria-pressed", String(set.has(value)));
      btn.innerHTML = escapeHtml(label(value)) +
                      '<span class="chip-count">' + countFor(value) + "</span>";
      btn.addEventListener("click", function () {
        if (set.has(value)) {
          if (set.size === 1) return;   // never let the player filter everything away
          set.delete(value);
        } else {
          set.add(value);
        }
        btn.setAttribute("aria-pressed", String(set.has(value)));
        updatePoolNote();
      });
      container.appendChild(btn);
    });
  }

  function pool() {
    return VEHICLES.filter(function (v) {
      return filters.categories.has(v.category) &&
             filters.eras.has(v.era) &&
             filters.difficulties.has(v.difficulty) &&
             !Corrections.isHidden(v.id);
    });
  }

  function updatePoolNote() {
    const n = pool().length;
    const target = el.endlessToggle.checked ? 1 : ROUNDS_PER_GAME;
    const hidden = Corrections.hiddenIds().length;
    let text = n + (n === 1 ? " vehicle" : " vehicles") + " in this mix";
    if (hidden) text += ", " + hidden + " hidden by your corrections";
    text += ".";
    if (n === 0) {
      text = "Nothing matches these filters.";
      el.poolNote.classList.add("warn");
    } else if (n < target) {
      text += " Rounds will repeat vehicles.";
      el.poolNote.classList.add("warn");
    } else {
      el.poolNote.classList.remove("warn");
    }
    el.poolNote.textContent = text;
    el.startBtn.disabled = n === 0;
  }

  /* ------------------------------------------------------- corrections -- */

  function renderCorrections() {
    const items = Corrections.entries();
    el.correctionsPanel.hidden = items.length === 0;
    if (!items.length) return;

    const names = {};
    VEHICLES.forEach(function (v) { names[v.id] = v.name; });   // the dataset's own name

    el.correctionsList.innerHTML = items.map(function (item, i) {
      let what;
      switch (item.kind) {
        case "name":
          what = 'renamed to “' + escapeHtml(item.value) + '”' +
                 (item.keepOld ? " (old name still accepted)" : "");
          break;
        case "alias":
          what = '“' + escapeHtml(item.value) + '” also accepted';
          break;
        case "dropped":
          what = '“' + escapeHtml(item.value) + '” no longer accepted';
          break;
        default:
          what = "hidden — " + escapeHtml(item.value) +
                 (item.note ? ": " + escapeHtml(item.note) : "");
      }
      return '<div class="correction-row">' +
             '<span class="correction-name">' + escapeHtml(names[item.id] || item.id) + "</span>" +
             '<span class="correction-what">' + what + "</span>" +
             '<button class="btn btn-ghost btn-tiny" data-undo="' + i + '">Undo</button>' +
             "</div>";
    }).join("");

    Array.prototype.forEach.call(el.correctionsList.querySelectorAll("[data-undo]"), function (btn) {
      btn.addEventListener("click", function () {
        Corrections.undo(items[Number(btn.getAttribute("data-undo"))]);
        renderCorrections();
        updatePoolNote();
      });
    });
  }

  /* -------------------------------------------------------------- modal -- */

  let modalCleanup = null;

  function openModal(title, bodyHtml, actions) {
    el.modalTitle.textContent = title;
    el.modalBody.innerHTML = bodyHtml;
    el.modalActions.innerHTML = "";

    actions.forEach(function (a) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn " + (a.primary ? "btn-primary" : "btn-ghost");
      btn.textContent = a.label;
      btn.addEventListener("click", function () { a.onClick(); });
      el.modalActions.appendChild(btn);
    });

    el.modal.hidden = false;
    const first = el.modalBody.querySelector("input, textarea, select") ||
                  el.modalActions.querySelector("button");
    if (first) first.focus();

    modalCleanup = function () { el.modal.hidden = true; modalCleanup = null; };
  }

  function closeModal() { if (modalCleanup) modalCleanup(); }

  el.modal.addEventListener("click", function (e) { if (e.target === el.modal) closeModal(); });

  /* -------------------------------------------------------------- game -- */

  /* The entry as corrected by the player: renamed, with aliases added or
   * dropped. Everything on screen and everything the matcher sees uses this,
   * never the raw dataset row. */
  function corrected(vehicle) { return Corrections.apply(vehicle); }
  function current() { return corrected(game.current); }

  const game = {
    queue: [], round: 0, score: 0, streak: 0, streakBefore: 0, bestStreak: 0, correct: 0,
    history: [], current: null, hintsUsed: 0, retried: false,
    timerId: null, remaining: 0, endless: false, timed: false, awaiting: false,
    lastAnswer: "", resolvedAs: null
  };

  /* Difficulty scaling: early rounds stay on the easier end of whatever the
   * player has enabled, and the ceiling lifts as the game goes on. */
  function difficultyCeiling(roundIndex) {
    if (roundIndex < 3) return 1;
    if (roundIndex < 6) return 2;
    return 3;
  }

  function pickVehicle(roundIndex, recentIds, available) {
    const ceiling = difficultyCeiling(roundIndex);

    let eligible = available.filter(function (v) { return v.difficulty <= ceiling; });
    if (!eligible.length) eligible = available.slice();

    // Prefer the hardest tier available once the game has warmed up.
    if (roundIndex >= 3) {
      const top = eligible.filter(function (v) { return v.difficulty === ceiling; });
      if (top.length && Math.random() < 0.6) eligible = top;
    }

    const fresh = eligible.filter(function (v) { return recentIds.indexOf(v.id) === -1; });
    const from = fresh.length ? fresh : eligible;
    return from[Math.floor(Math.random() * from.length)];
  }

  function buildQueue() {
    const available = pool();
    const total = game.endless ? 300 : ROUNDS_PER_GAME;
    const queue = [];
    const seen = [];
    const window_ = Math.max(1, Math.min(available.length - 1, 25));
    for (let i = 0; i < total; i++) {
      const v = pickVehicle(i, seen, available);
      queue.push(v);
      seen.push(v.id);
      if (seen.length >= window_) seen.shift();
    }
    return queue;
  }

  function show(screen) {
    el.setup.hidden = screen !== "setup";
    el.game.hidden = screen !== "game";
    el.results.hidden = screen !== "results";
    // Only the game screen is locked to the viewport; the others may scroll.
    document.body.classList.toggle("playing", screen === "game");
    if (screen === "setup") { renderCorrections(); updatePoolNote(); }
  }

  function startGame() {
    game.endless = el.endlessToggle.checked;
    game.timed = el.timerToggle.checked;
    game.queue = buildQueue();
    game.round = 0;
    game.score = 0;
    game.streak = 0;
    game.bestStreak = 0;
    game.correct = 0;
    game.history = [];
    show("game");
    el.timerStat.hidden = !game.timed;
    el.timerTrack.hidden = !game.timed;
    el.endBtn.hidden = !game.endless;
    nextRound();
  }

  function nextRound() {
    stopTimer();
    if (!game.endless && game.round >= ROUNDS_PER_GAME) return endGame();

    game.current = game.queue[game.round % game.queue.length];
    game.hintsUsed = 0;
    game.retried = false;
    game.awaiting = true;
    game.lastAnswer = "";
    game.resolvedAs = null;

    el.round.textContent = game.endless ? String(game.round + 1)
                                        : (game.round + 1) + " / " + ROUNDS_PER_GAME;
    el.score.textContent = game.score;
    el.streak.textContent = game.streak;

    el.feedback.hidden = true;
    el.feedback.innerHTML = "";
    el.skipBtn.disabled = false;
    el.input.value = "";
    el.input.disabled = false;
    el.submitBtn.disabled = false;

    el.categoryTag.textContent = categoryLabel(game.current.category);
    el.eraTag.textContent = game.current.era;
    el.difficultyTag.textContent = DIFFICULTY_LABELS[game.current.difficulty];

    paintHint();
    loadPhoto(game.current);
    preloadNext();
    el.input.focus();

    if (game.timed) startTimer();
  }

  function loadPhoto(vehicle) {
    el.image.classList.remove("ready");
    el.photoLoading.hidden = false;
    el.photoLoading.textContent = "Loading photo…";
    el.image.alt = "Photograph of a " + vehicle.category + " to identify";
    el.image.onload = function () {
      el.image.classList.add("ready");
      el.photoLoading.hidden = true;
    };
    el.image.onerror = function () {
      el.photoLoading.hidden = false;
      el.photoLoading.textContent = "Photo unavailable — answer from the tags below.";
    };
    el.image.src = vehicle.imageUrl;
  }

  function preloadNext() {
    const next = game.queue[(game.round + 1) % game.queue.length];
    if (next) { const img = new Image(); img.src = next.imageUrl; }
  }

  /* ------------------------------------------------------------- timer -- */

  function startTimer() {
    game.remaining = ROUND_SECONDS;
    paintTimer();
    game.timerId = window.setInterval(function () {
      game.remaining -= 1;
      paintTimer();
      if (game.remaining <= 0) { stopTimer(); resolve(null, "timeout"); }
    }, 1000);
  }

  function stopTimer() {
    if (game.timerId !== null) { window.clearInterval(game.timerId); game.timerId = null; }
  }

  function paintTimer() {
    const left = Math.max(0, game.remaining);
    el.timerValue.textContent = left;
    el.timerFill.style.width = (left / ROUND_SECONDS * 100) + "%";
    const low = left <= 5;
    el.timerStat.classList.toggle("low", low);
    el.timerFill.classList.toggle("low", low);
  }

  /* ------------------------------------------------------------ points -- */

  function pointsFor(vehicle) {
    let pts = BASE_POINTS * vehicle.difficulty;
    pts += Math.min(game.streakBefore, STREAK_CAP) * STREAK_BONUS;
    if (game.timed) pts += Math.round(SPEED_BONUS * (Math.max(0, game.remaining) / ROUND_SECONDS));
    pts -= game.hintsUsed * HINT_COST;
    return Math.max(10, pts);   // a correct answer is always worth something
  }

  /* ---------------------------------------------------------- feedback -- */

  /* Explains *why* a loose answer counted, which is the only way the player can
   * trust the fuzzy matching rather than suspect it. */
  function whyText(result, vehicle) {
    if (!result || !result.matched) return "";
    switch (result.how) {
      case "exact":
        return flatten(result.matched) === flatten(vehicle.name)
          ? "" : 'Counted as “' + result.matched + '”.';
      case "typo":
        return 'Read as “' + result.matched + '” — spelling forgiven.';
      case "words":
      case "gist":
        return 'Matched on “' + result.matched + '”.';
      default:
        return "";
    }
  }

  function flatten(s) { return String(s).toLowerCase().replace(/[^a-z0-9]/g, ""); }

  function creditHtml(vehicle) {
    return '<p class="fb-credit">Photo: ' + escapeHtml(vehicle.credit) + "</p>";
  }

  /* --------------------------------------------------------- resolution -- */

  function resolve(result, outcome) {
    if (!game.awaiting) return;
    game.awaiting = false;
    stopTimer();

    game.lastAnswer = el.input.value.trim();
    game.streakBefore = game.streak;

    el.input.disabled = true;
    el.submitBtn.disabled = true;
    el.hintBtn.disabled = true;
    el.skipBtn.disabled = true;

    if (outcome === "correct") {
      const pts = pointsFor(game.current);
      game.score += pts;
      game.correct += 1;
      game.streak += 1;
      if (game.streak > game.bestStreak) game.bestStreak = game.streak;
      game.resolvedAs = { outcome: "correct", points: pts, result: result };
    } else {
      game.streak = 0;
      game.resolvedAs = { outcome: outcome, points: 0, result: result };
    }

    game.history.push({
      vehicle: game.current, said: game.lastAnswer,
      correct: outcome === "correct", outcome: outcome
    });

    game.round += 1;
    el.score.textContent = game.score;
    el.streak.textContent = game.streak;
    renderFeedback();
  }

  function renderFeedback() {
    const vehicle = current();
    const state = game.resolvedAs;
    const parts = [];
    let kind;

    if (state.outcome === "correct") {
      kind = "good";
      parts.push('<div class="fb-head">' +
        (game.streak >= 3 ? "Correct — " + game.streak + " in a row" : "Correct") + "</div>");
      parts.push('<div class="fb-name">' + escapeHtml(vehicle.name) + "</div>");
      parts.push('<p class="fb-note"><span class="fb-points">+' + state.points + "</span> points</p>");
      const why = whyText(state.result, vehicle);
      if (why) parts.push('<p class="fb-why">' + escapeHtml(why) + "</p>");
    } else {
      kind = "bad";
      parts.push('<div class="fb-head">' +
        (state.outcome === "timeout" ? "Out of time" : "Not this time") + "</div>");
      parts.push('<div class="fb-name">' + escapeHtml(vehicle.name) + "</div>");
      if (game.lastAnswer && state.outcome !== "timeout") {
        parts.push('<p class="fb-note">You said “' + escapeHtml(game.lastAnswer) + "”.</p>");
      }
      const others = (vehicle.aliases || []).slice(0, 4).join(", ");
      if (others) parts.push('<p class="fb-note">Also accepted: ' + escapeHtml(others) + ".</p>");
    }

    if (vehicle.fact) parts.push('<p class="fb-fact">' + escapeHtml(vehicle.fact) + "</p>");
    parts.push(creditHtml(vehicle));

    const last = !game.endless && game.round >= ROUNDS_PER_GAME;
    parts.push('<div class="fb-actions">' +
      '<button class="btn btn-primary" id="continueBtn">' +
      (last ? "See results" : "Next vehicle") + "</button>" +
      (state.outcome !== "correct" && game.lastAnswer
        ? '<button class="btn btn-ghost" id="acceptBtn">I was right</button>' : "") +
      '<button class="btn btn-ghost btn-tiny" id="fixBtn">Fix entry</button>' +
      "</div>");

    el.feedback.className = "feedback " + kind;
    el.feedback.hidden = false;
    el.feedback.innerHTML = parts.join("");

    const cont = $("continueBtn");
    cont.addEventListener("click", nextRound);
    // preventScroll matters: the panel scrolls, and focusing the button would
    // otherwise scroll "Correct"/"Not this time" out of sight at the top.
    cont.focus({ preventScroll: true });
    el.feedback.scrollTop = 0;

    const accept = $("acceptBtn");
    if (accept) accept.addEventListener("click", openAcceptDialog);
    $("fixBtn").addEventListener("click", openFixDialog);
  }

  /* A near miss: no points lost, one retry, and a nudge about what is off. */
  function showNearMiss(result) {
    const numberProblem = result.how === "number-mismatch";
    el.feedback.className = "feedback near";
    el.feedback.hidden = false;
    el.feedback.innerHTML =
      '<div class="fb-head">So close</div>' +
      '<p class="fb-note">' + (numberProblem
        ? "Right family, but check the designation — the letters and numbers have to match."
        : "That is nearly it. Check your spelling and try once more.") + "</p>";
    el.input.select();
    el.input.focus();
  }

  /* ------------------------------------------------- correcting entries -- */

  /* "I was right" — the player's answer becomes an accepted alias for this
   * vehicle from now on, and the round is re-scored as correct. */
  function openAcceptDialog() {
    const vehicle = current();
    const answer = game.lastAnswer;
    const clashes = clashesWith(answer, vehicle.id);

    let body = "<p>Accept <strong>“" + escapeHtml(answer) + "”</strong> as a name for " +
               "<strong>" + escapeHtml(vehicle.name) + "</strong> from now on?</p>";
    if (clashes.length) {
      body += '<p class="modal-warn">Note: that also matches ' +
              escapeHtml(clashes.slice(0, 3).join(", ")) +
              ". Both will accept it.</p>";
    }
    body += '<p class="modal-quiet">Saved in this browser. Export your corrections ' +
            "from the setup screen to fold them back into the dataset.</p>";

    openModal("Accept this answer", body, [
      { label: "Cancel", onClick: closeModal },
      {
        label: "Accept it", primary: true,
        onClick: function () {
          const problem = Corrections.addAlias(game.current.id, answer);
          closeModal();
          if (problem && problem !== "Already added.") return;
          awardRetroactively();
        }
      }
    ]);
  }

  /* Re-score a round the player has just corrected. */
  function awardRetroactively() {
    if (!game.resolvedAs || game.resolvedAs.outcome === "correct") return;

    game.streak = game.streakBefore + 1;
    if (game.streak > game.bestStreak) game.bestStreak = game.streak;
    const pts = pointsFor(game.current);
    game.score += pts;
    game.correct += 1;

    game.resolvedAs = {
      outcome: "correct", points: pts,
      result: { matched: game.lastAnswer, how: "corrected" }
    };

    const entry = game.history[game.history.length - 1];
    if (entry) { entry.correct = true; entry.outcome = "corrected"; }

    el.score.textContent = game.score;
    el.streak.textContent = game.streak;
    renderFeedback();
  }

  /* Names another entry in the set would also accept. */
  function clashesWith(text, exceptId) {
    if (!text) return [];
    return VEHICLES.filter(function (v) {
      return v.id !== exceptId &&
             VSMatch.check(text, Corrections.apply(v)).verdict === "correct";
    }).map(function (v) { return Corrections.apply(v).name; });
  }

  /* "Fix entry" — edit the name the game calls this vehicle, and prune any
   * aliases that should not be accepted. The dataset row is never touched;
   * everything is an overlay saved in this browser. */
  function openFixDialog() {
    const row = game.current;                 // dataset entry, for ids and originals
    const vehicle = current();                // as the player currently sees it

    function body() {
      const aliases = vehicle.aliases || [];
      const chips = aliases.length
        ? aliases.map(function (a) {
            return '<button type="button" class="alias-chip" data-drop="' +
                   escapeHtml(a) + '" title="Stop accepting this answer">' +
                   escapeHtml(a) + '<span aria-hidden="true">×</span></button>';
          }).join("")
        : '<span class="modal-quiet">No other spellings accepted.</span>';

      const droppedList = Corrections.entries().filter(function (e) {
        return e.kind === "dropped" && e.id === row.id;
      });
      const restore = droppedList.length
        ? '<div class="field"><span>No longer accepted</span><div class="alias-chips">' +
          droppedList.map(function (e) {
            return '<button type="button" class="alias-chip alias-chip-off" data-restore="' +
                   escapeHtml(e.value) + '" title="Accept this again">' +
                   escapeHtml(e.value) + '<span aria-hidden="true">+</span></button>';
          }).join("") + "</div></div>"
        : "";

      return '<label class="field"><span>Name</span>' +
             '<input type="text" id="fixName" maxlength="80" value="' +
             escapeHtml(vehicle.name) + '"></label>' +
             '<p class="fix-clash" id="fixClash" hidden></p>' +
             (Corrections.isRenamed(row.id)
               ? '<p class="modal-quiet">The dataset calls this “' +
                 escapeHtml(row.name) + '”.</p>'
               : "") +
             '<label class="toggle toggle-compact"><input type="checkbox" id="fixKeepOld">' +
             '<span>Still accept “' + escapeHtml(row.name) +
             '” <em>— only matters if you change the name</em></span></label>' +
             '<div class="field"><span>Also accepted — click to remove</span>' +
             '<div class="alias-chips">' + chips + "</div></div>" +
             restore;
    }

    function wire() {
      const input = $("fixName");
      const clash = $("fixClash");

      // Live warning: renaming onto a name the set already uses is allowed, but
      // the player should know both entries will answer to it.
      function checkClash() {
        const names = clashesWith(input.value.trim(), row.id);
        clash.hidden = names.length === 0;
        if (names.length) {
          clash.textContent = "Heads up: " + names.slice(0, 3).join(", ") +
                              (names.length > 3 ? " and others" : "") + " also answer to that.";
        }
      }
      input.addEventListener("input", checkClash);
      checkClash();

      const keep = $("fixKeepOld");
      const stored = Corrections.isRenamed(row.id);
      if (stored) keep.checked = (vehicle.aliases || []).some(function (a) {
        return a.toLowerCase() === row.name.toLowerCase();
      });

      Array.prototype.forEach.call(el.modalBody.querySelectorAll("[data-drop]"), function (btn) {
        btn.addEventListener("click", function () {
          const alias = btn.getAttribute("data-drop");
          // The player's own additions are removed outright; dataset ones are
          // suppressed, so they can be restored later.
          if (Corrections.aliasesFor(row.id).some(function (a) {
                return a.toLowerCase() === alias.toLowerCase(); })) {
            Corrections.removeAlias(row.id, alias);
          } else {
            Corrections.dropAlias(row.id, alias);
          }
          reopen();
        });
      });

      Array.prototype.forEach.call(el.modalBody.querySelectorAll("[data-restore]"), function (btn) {
        btn.addEventListener("click", function () {
          Corrections.restoreAlias(row.id, btn.getAttribute("data-restore"));
          reopen();
        });
      });
    }

    function reopen() {
      const typed = $("fixName") ? $("fixName").value : null;
      closeModal();
      openFixDialog();
      if (typed !== null && $("fixName")) $("fixName").value = typed;
    }

    openModal("Fix this entry", body(), [
      { label: "Cancel", onClick: closeModal },
      { label: "Hide entry…", onClick: function () { closeModal(); openReportDialog(); } },
      {
        label: "Save", primary: true,
        onClick: function () {
          const problem = Corrections.rename(row, $("fixName").value, $("fixKeepOld").checked);
          if (problem) { $("fixClash").hidden = false; $("fixClash").textContent = problem; return; }
          closeModal();
          refreshAfterFix();
        }
      }
    ]);
    wire();
  }

  /* After an edit, redraw whatever is showing the old name. */
  function refreshAfterFix() {
    if (game.resolvedAs) renderFeedback();
    if (game.hintsUsed) paintHint();   // the mask spelled out the old name
  }

  function openReportDialog() {
    const vehicle = current();
    const options = Object.keys(Corrections.REASONS).map(function (key, i) {
      return '<label class="radio"><input type="radio" name="reason" value="' + key + '"' +
             (i === 0 ? " checked" : "") + "> " +
             escapeHtml(Corrections.REASONS[key]) + "</label>";
    }).join("");

    openModal("Report this entry", "<p>What is wrong with <strong>" +
      escapeHtml(vehicle.name) + "</strong>?</p>" + options +
      '<label class="field"><span>Note (optional)</span>' +
      '<input type="text" id="reportNote" maxlength="200" placeholder="What should it say?"></label>' +
      '<p class="modal-quiet">The entry is hidden from future rounds in this browser.</p>', [
      { label: "Cancel", onClick: closeModal },
      {
        label: "Hide this entry", primary: true,
        onClick: function () {
          const picked = el.modalBody.querySelector('input[name="reason"]:checked');
          const note = $("reportNote");
          Corrections.flag(game.current.id, picked ? picked.value : "other", note ? note.value : "");
          closeModal();
          // Drop it from the rest of this game too.
          game.queue = game.queue.filter(function (v) { return v.id !== game.current.id; });
          if (!game.queue.length) return endGame();
          nextRound();
        }
      }
    ]);
  }

  /* --------------------------------------------------------------- input */

  function submitAnswer(event) {
    event.preventDefault();
    if (!game.awaiting) return;

    const answer = el.input.value.trim();
    if (!answer) return;

    const result = VSMatch.check(answer, current());

    if (result.verdict === "correct") return resolve(result, "correct");

    // One free retry per round when the answer is in the right neighbourhood.
    if (result.verdict === "close" && !game.retried) {
      game.retried = true;
      return showNearMiss(result);
    }
    resolve(result, "wrong");
  }

  /* "M4 Sherman" with two letters revealed -> "M 4  _ _ _ _ _ _ _" */
  function maskedName(name, revealCount) {
    let revealed = 0;
    let shown = "";
    for (let i = 0; i < name.length; i++) {
      const ch = name[i];
      if (/\s/.test(ch)) { shown += "  "; continue; }
      if (!/[A-Za-z0-9]/.test(ch)) { shown += ch + " "; continue; }
      if (revealed < revealCount) { shown += ch + " "; revealed += 1; }
      else shown += "_ ";
    }
    return shown.trim();
  }

  function paintHint() {
    const name = current().name;
    el.hintDisplay.textContent = game.hintsUsed ? maskedName(name, game.hintsUsed) : "";
    const hideable = name.replace(/[^A-Za-z0-9]/g, "").length;
    el.hintBtn.disabled = !game.awaiting || game.hintsUsed >= hideable;
  }

  function takeHint() {
    if (!game.awaiting) return;
    game.hintsUsed += 1;
    paintHint();
    el.input.focus();
  }

  /* ------------------------------------------------------------ results -- */

  function endGame() {
    stopTimer();
    if (game.score > store.highScore) store.highScore = game.score;
    if (game.bestStreak > store.bestStreak) store.bestStreak = game.bestStreak;
    saveStore(store);
    renderBest();

    const beat = game.score > 0 && game.score >= store.highScore;
    el.resultsTitle.textContent = beat ? "New high score" : "Game over";
    el.finalScore.textContent = game.score;
    el.finalCorrect.textContent = game.correct + " / " + game.history.length;
    el.finalStreak.textContent = game.bestStreak;
    el.finalBest.textContent = store.highScore;

    el.review.innerHTML = game.history.map(function (h) {
      const said = h.correct ? "" :
        '<span class="review-said">' +
        (h.outcome === "timeout" ? "ran out of time"
          : (h.said ? "you said “" + escapeHtml(h.said) + "”" : "no answer")) +
        "</span>";
      return '<div class="review-row ' + (h.correct ? "good" : "bad") + '">' +
             '<span class="review-name">' + escapeHtml(corrected(h.vehicle).name) + "</span>" +
             '<span class="tag tag-quiet">' + escapeHtml(categoryLabel(h.vehicle.category)) + "</span>" +
             said + "</div>";
    }).join("");

    show("results");
    el.againBtn.focus();
  }

  /* --------------------------------------------------------------- wire -- */

  function countBy(field, value) {
    return VEHICLES.filter(function (v) { return v[field] === value; }).length;
  }

  buildChips(el.categoryChips, CATEGORIES, filters.categories, categoryLabel,
             function (c) { return countBy("category", c); });
  buildChips(el.eraChips, ERAS, filters.eras, function (e) { return e; },
             function (e) { return countBy("era", e); });
  buildChips(el.difficultyChips, [1, 2, 3], filters.difficulties,
             function (d) { return DIFFICULTY_LABELS[d]; },
             function (d) { return countBy("difficulty", d); });

  el.endlessToggle.addEventListener("change", updatePoolNote);
  renderCorrections();
  updatePoolNote();
  renderBest();

  el.startBtn.addEventListener("click", startGame);
  el.form.addEventListener("submit", submitAnswer);
  el.hintBtn.addEventListener("click", takeHint);
  el.skipBtn.addEventListener("click", function () { resolve(null, "skipped"); });
  el.endBtn.addEventListener("click", endGame);
  el.againBtn.addEventListener("click", startGame);
  el.changeBtn.addEventListener("click", function () { show("setup"); });

  el.exportBtn.addEventListener("click", function () {
    const json = Corrections.exportJSON();
    openModal("Export corrections",
      '<p class="modal-quiet">Paste this into an issue, or use it to update ' +
      "js/vehicles.js.</p><textarea class=\"export-box\" readonly rows=\"10\">" +
      escapeHtml(json) + "</textarea>", [
      { label: "Close", onClick: closeModal },
      { label: "Copy", primary: true, onClick: function () {
          const box = el.modalBody.querySelector(".export-box");
          box.select();
          try { document.execCommand("copy"); } catch (e) { /* user can copy by hand */ }
        } }
    ]);
  });

  el.clearCorrectionsBtn.addEventListener("click", function () {
    openModal("Clear corrections",
      "<p>Remove every alias you have added and un-hide every flagged entry?</p>", [
      { label: "Cancel", onClick: closeModal },
      { label: "Clear all", primary: true, onClick: function () {
          Corrections.clearAll();
          closeModal();
          renderCorrections();
          updatePoolNote();
        } }
    ]);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !el.modal.hidden) { closeModal(); return; }
    // Enter advances from the feedback panel without reaching for the mouse.
    if (e.key === "Enter" && !game.awaiting && !el.game.hidden && el.modal.hidden) {
      const btn = $("continueBtn");
      if (btn) { e.preventDefault(); btn.click(); }
    }
  });
})();
