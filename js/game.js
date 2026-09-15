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
    categoryChips: $("categoryChips"), eraChips: $("eraChips"),
    timerToggle: $("timerToggle"), endlessToggle: $("endlessToggle"),
    poolNote: $("poolNote"), startBtn: $("startBtn"),
    round: $("roundValue"), score: $("scoreValue"), streak: $("streakValue"),
    timerStat: $("timerStat"), timerValue: $("timerValue"),
    timerTrack: $("timerTrack"), timerFill: $("timerFill"),
    image: $("vehicleImage"), photoLoading: $("photoLoading"),
    categoryTag: $("categoryTag"), eraTag: $("eraTag"), difficultyTag: $("difficultyTag"),
    form: $("answerForm"), input: $("answerInput"), submitBtn: $("submitBtn"),
    hintBtn: $("hintBtn"), skipBtn: $("skipBtn"), endBtn: $("endBtn"),
    hintDisplay: $("hintDisplay"),
    feedback: $("feedback"),
    resultsTitle: $("resultsTitle"), finalScore: $("finalScore"),
    finalCorrect: $("finalCorrect"), finalStreak: $("finalStreak"), finalBest: $("finalBest"),
    review: $("review"), againBtn: $("againBtn"), changeBtn: $("changeBtn"),
    bestBadge: $("bestBadge"), bestValue: $("bestValue"), creditLine: $("creditLine")
  };

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

  function saveStore(store) {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch (e) { /* nothing worth doing — the score just won't persist */ }
  }

  let store = loadStore();

  function renderBest() {
    el.bestValue.textContent = store.highScore;
    el.bestBadge.hidden = store.highScore <= 0;
  }

  /* ----------------------------------------------------------- filters -- */

  const filters = {
    categories: new Set(CATEGORIES),
    eras: new Set(ERAS)
  };

  function labelFor(word) { return word.charAt(0).toUpperCase() + word.slice(1); }

  function buildChips(container, values, set, countBy) {
    container.innerHTML = "";
    values.forEach(function (value) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.setAttribute("aria-pressed", String(set.has(value)));
      const n = VEHICLES.filter(function (v) { return v[countBy] === value; }).length;
      btn.innerHTML = labelFor(value) + '<span class="chip-count">' + n + "</span>";
      btn.addEventListener("click", function () {
        if (set.has(value)) {
          // Never let the player filter everything away.
          if (set.size === 1) return;
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
      return filters.categories.has(v.category) && filters.eras.has(v.era);
    });
  }

  function updatePoolNote() {
    const n = pool().length;
    const target = el.endlessToggle.checked ? 1 : ROUNDS_PER_GAME;
    el.poolNote.textContent = n + (n === 1 ? " vehicle" : " vehicles") + " in this mix.";
    if (n < target) {
      el.poolNote.textContent += " Rounds will repeat vehicles.";
      el.poolNote.classList.add("warn");
    } else {
      el.poolNote.classList.remove("warn");
    }
    el.startBtn.disabled = n === 0;
  }

  /* -------------------------------------------------------------- game -- */

  const game = {
    queue: [], round: 0, score: 0, streak: 0, bestStreak: 0, correct: 0,
    history: [], current: null, hintsUsed: 0, retried: false,
    timerId: null, remaining: 0, endless: false, timed: false, awaiting: false
  };

  /* Difficulty scaling: early rounds stay on difficulty 1, the ceiling rises as
   * the game goes on, and later rounds prefer the harder end of what is open. */
  function difficultyCeiling(roundIndex) {
    if (roundIndex < 3) return 1;
    if (roundIndex < 6) return 2;
    return 3;
  }

  function pickVehicle(roundIndex, recentIds) {
    const available = pool();
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
    const total = game.endless ? 200 : ROUNDS_PER_GAME;
    const queue = [];
    const seen = [];
    for (let i = 0; i < total; i++) {
      const v = pickVehicle(i, seen);
      queue.push(v);
      seen.push(v.id);
      // Only avoid repeats within a window the pool can actually sustain.
      if (seen.length >= Math.max(1, Math.min(pool().length - 1, 12))) seen.shift();
    }
    return queue;
  }

  function show(screen) {
    el.setup.hidden = screen !== "setup";
    el.game.hidden = screen !== "game";
    el.results.hidden = screen !== "results";
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

    el.round.textContent = game.endless ? String(game.round + 1)
                                        : (game.round + 1) + " / " + ROUNDS_PER_GAME;
    el.score.textContent = game.score;
    el.streak.textContent = game.streak;

    el.feedback.hidden = true;
    el.feedback.innerHTML = "";
    el.hintDisplay.textContent = "";
    el.hintBtn.disabled = false;
    el.skipBtn.disabled = false;
    el.input.value = "";
    el.input.disabled = false;
    el.submitBtn.disabled = false;

    el.categoryTag.textContent = labelFor(game.current.category);
    el.eraTag.textContent = game.current.era;
    el.difficultyTag.textContent = "Difficulty " + game.current.difficulty;
    el.creditLine.textContent = "Photo: " + game.current.credit;

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
      if (game.remaining <= 0) {
        stopTimer();
        resolve(null, "timeout");
      }
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
    pts += Math.min(game.streak, STREAK_CAP) * STREAK_BONUS;
    if (game.timed) pts += Math.round(SPEED_BONUS * (Math.max(0, game.remaining) / ROUND_SECONDS));
    pts -= game.hintsUsed * HINT_COST;
    return Math.max(10, pts); // a correct answer is always worth something
  }

  /* ---------------------------------------------------------- feedback -- */

  /* Explains *why* a loose answer counted, which is the only way the player can
   * trust the fuzzy matching rather than suspect it. */
  function whyText(result, vehicle) {
    const typed = result.matched;
    if (!typed) return "";
    switch (result.how) {
      case "exact":
        return canonicalish(typed) === canonicalish(vehicle.name) ? "" : 'Counted as "' + typed + '".';
      case "typo":
        return 'Read as "' + typed + '" — spelling forgiven.';
      case "words":
      case "gist":
        return 'Matched on "' + typed + '".';
      default:
        return "";
    }
  }

  function canonicalish(s) { return String(s).toLowerCase().replace(/[^a-z0-9]/g, ""); }

  function feedbackShell(kind, head) {
    el.feedback.className = "feedback " + kind;
    el.feedback.hidden = false;
    const parts = ['<div class="fb-head">' + head + "</div>"];
    return parts;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function continueButton(parts, label) {
    parts.push('<div class="fb-actions"><button class="btn btn-primary" id="continueBtn">' +
               label + "</button></div>");
    el.feedback.innerHTML = parts.join("");
    const btn = $("continueBtn");
    btn.addEventListener("click", nextRound);
    btn.focus();
  }

  /* --------------------------------------------------------- resolution -- */

  function resolve(result, outcome) {
    if (!game.awaiting) return;
    game.awaiting = false;
    stopTimer();

    const vehicle = game.current;
    el.input.disabled = true;
    el.submitBtn.disabled = true;
    el.hintBtn.disabled = true;
    el.skipBtn.disabled = true;

    const said = el.input.value.trim();
    let parts;

    if (outcome === "correct") {
      const pts = pointsFor(vehicle);
      game.score += pts;
      game.correct += 1;
      game.streak += 1;
      if (game.streak > game.bestStreak) game.bestStreak = game.streak;

      parts = feedbackShell("good", game.streak >= 3 ? "Correct — " + game.streak + " in a row" : "Correct");
      parts.push('<div class="fb-name">' + escapeHtml(vehicle.name) + "</div>");
      parts.push('<p class="fb-note"><span class="fb-points">+' + pts + "</span> points</p>");
      const why = whyText(result, vehicle);
      if (why) parts.push('<p class="fb-why">' + escapeHtml(why) + "</p>");
    } else {
      game.streak = 0;
      const head = outcome === "timeout" ? "Out of time" : "Not this time";
      parts = feedbackShell("bad", head);
      parts.push('<div class="fb-name">' + escapeHtml(vehicle.name) + "</div>");
      if (said && outcome !== "timeout") {
        parts.push('<p class="fb-note">You said “' + escapeHtml(said) + "”.</p>");
      }
      const others = (vehicle.aliases || []).slice(0, 4).join(", ");
      if (others) parts.push('<p class="fb-note">Also accepted: ' + escapeHtml(others) + ".</p>");
    }

    if (vehicle.fact) parts.push('<p class="fb-fact">' + escapeHtml(vehicle.fact) + "</p>");

    game.history.push({
      vehicle: vehicle,
      said: said,
      correct: outcome === "correct",
      outcome: outcome
    });

    game.round += 1;
    el.score.textContent = game.score;
    el.streak.textContent = game.streak;

    const last = !game.endless && game.round >= ROUNDS_PER_GAME;
    continueButton(parts, last ? "See results" : "Next vehicle");
  }

  /* A near miss: no points lost, one retry, and a nudge about what is off. */
  function showNearMiss(result) {
    const numberProblem = result.how === "number-mismatch";
    const parts = feedbackShell("near", "So close");
    parts.push('<p class="fb-note">' + (numberProblem
      ? "Right family, wrong number — check the designation."
      : "That is nearly it. Check your spelling and try once more.") + "</p>");
    el.feedback.innerHTML = parts.join("");
    el.input.select();
    el.input.focus();
  }

  /* --------------------------------------------------------------- input */

  function submitAnswer(event) {
    event.preventDefault();
    if (!game.awaiting) return;

    const answer = el.input.value.trim();
    if (!answer) return;

    const result = VSMatch.check(answer, game.current);

    if (result.verdict === "correct") return resolve(result, "correct");

    // One free retry per round when the answer is in the right neighbourhood.
    if (result.verdict === "close" && !game.retried) {
      game.retried = true;
      return showNearMiss(result);
    }

    resolve(result, "wrong");
  }

  function takeHint() {
    if (!game.awaiting) return;
    const name = game.current.name;
    const letters = name.split("");
    let revealed = 0;
    let shown = "";

    game.hintsUsed += 1;

    for (let i = 0; i < letters.length; i++) {
      const ch = letters[i];
      if (/\s/.test(ch)) { shown += "  "; continue; }
      if (!/[A-Za-z0-9]/.test(ch)) { shown += ch + " "; continue; }
      if (revealed < game.hintsUsed) { shown += ch + " "; revealed += 1; }
      else shown += "_ ";
    }

    el.hintDisplay.textContent = shown.trim();

    // Stop once the name is fully revealed — no point charging for nothing.
    const hideable = name.replace(/[^A-Za-z0-9]/g, "").length;
    if (game.hintsUsed >= hideable) el.hintBtn.disabled = true;
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
        (h.outcome === "timeout" ? "ran out of time" : (h.said ? "you said “" + escapeHtml(h.said) + "”" : "no answer")) +
        "</span>";
      return '<div class="review-row ' + (h.correct ? "good" : "bad") + '">' +
             '<span class="review-name">' + escapeHtml(h.vehicle.name) + "</span>" +
             '<span class="tag tag-quiet">' + escapeHtml(h.vehicle.category) + "</span>" +
             said + "</div>";
    }).join("");

    show("results");
    el.againBtn.focus();
  }

  function stopEndless() { endGame(); }

  /* --------------------------------------------------------------- wire -- */

  buildChips(el.categoryChips, CATEGORIES, filters.categories, "category");
  buildChips(el.eraChips, ERAS, filters.eras, "era");
  el.endlessToggle.addEventListener("change", updatePoolNote);
  updatePoolNote();
  renderBest();

  el.startBtn.addEventListener("click", startGame);
  el.form.addEventListener("submit", submitAnswer);
  el.hintBtn.addEventListener("click", takeHint);
  el.skipBtn.addEventListener("click", function () {
    if (game.endless && !game.awaiting) return;
    resolve(null, "skipped");
  });
  el.endBtn.addEventListener("click", stopEndless);
  el.againBtn.addEventListener("click", startGame);
  el.changeBtn.addEventListener("click", function () { show("setup"); });

  // Enter advances from the feedback panel without reaching for the mouse.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !game.awaiting && !el.game.hidden) {
      const btn = $("continueBtn");
      if (btn) { e.preventDefault(); btn.click(); }
    }
    // Endless mode needs a way out.
    if (e.key === "Escape" && game.endless && !el.game.hidden) stopEndless();
  });
})();
