/* Motion: scroll progress, hero fade + cursor spotlight, count-up numbers, timeline progress, card spotlight.
 * Skipped entirely for visitors who prefer reduced motion. Content that animates in is only hidden once
 * html.motion is set, so nothing is lost if this script fails.
 *
 * Performance rules used here:
 *  - one rAF-throttled scroll handler; layout reads happen before style writes
 *  - work is skipped for sections that are offscreen
 *  - only transform / opacity are written (no page-wide CSS variables, no layout-triggering properties)
 *  - looping CSS animations are paused while their section is offscreen */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var root = document.documentElement;
  root.classList.add("motion");

  var hasIO = "IntersectionObserver" in window;
  var canHover = window.matchMedia("(hover: hover)").matches;
  var ease = function (t) { return 1 - Math.pow(1 - t, 3); };
  var each = function (list, fn) { Array.prototype.forEach.call(list, fn); };

  function onceVisible(el, cb, threshold) {
    if (!hasIO) { cb(el); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { io.unobserve(e.target); cb(e.target); }
      });
    }, { threshold: threshold || 0.35 });
    io.observe(el);
  }

  /* ---- Pause looping animations while their section is offscreen: [data-pause-offscreen] ---- */
  if (hasIO) {
    var pauser = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle("is-offscreen", !e.isIntersecting); });
    }, { rootMargin: "100px 0px" });
    each(document.querySelectorAll("[data-pause-offscreen]"), function (el) { pauser.observe(el); });
  }

  /* ---- Scroll progress bar ---- */
  var bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  bar.innerHTML = "<span></span>";
  document.body.appendChild(bar);
  var fill = bar.firstChild;

  var hero = document.querySelector(".hero");
  var heroInner = hero && hero.querySelector(".hero__inner");
  var heroSpot = hero && hero.querySelector(".hero__spot");
  var timelines = Array.prototype.slice.call(document.querySelectorAll("[data-timeline]"));
  var ticking = false;
  var heroH = hero ? hero.offsetHeight : 0;

  function frame() {
    ticking = false;
    var y = window.scrollY;
    var vh = window.innerHeight;

    // 1) reads
    var max = document.documentElement.scrollHeight - vh;
    var tlData = timelines.map(function (tl) {
      var r = tl.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return null; // offscreen: skip
      var front = vh * 0.62;
      var items = Array.prototype.map.call(tl.querySelectorAll(".tl__item"), function (item) {
        var n = item.querySelector(".tl__node").getBoundingClientRect();
        return { el: item, active: n.top + n.height / 2 <= front };
      });
      return { el: tl, p: Math.min(Math.max((front - r.top) / r.height, 0), 1), items: items };
    });

    // 2) writes
    fill.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0).toFixed(4) + ")";
    if (heroInner && y < heroH) {
      var hs = Math.min(y / (heroH * 0.85), 1);
      heroInner.style.transform = "translate3d(0," + (hs * 36).toFixed(1) + "px,0)";
      heroInner.style.opacity = (1 - hs * 0.75).toFixed(3);
    }
    tlData.forEach(function (d) {
      if (!d) return;
      d.el.style.setProperty("--p", d.p.toFixed(4));
      d.items.forEach(function (i) { i.el.classList.toggle("is-active", i.active); });
    });
  }

  function schedule() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(frame);
  }
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", function () { heroH = hero ? hero.offsetHeight : 0; schedule(); });
  frame();

  /* ---- Hero cursor spotlight: move one small element with transform ---- */
  if (hero && heroSpot && canHover) {
    var pending = false, px = 0, py = 0;
    hero.addEventListener("pointermove", function (e) {
      px = e.clientX; py = e.clientY;
      if (pending) return;
      pending = true;
      requestAnimationFrame(function () {
        var r = hero.getBoundingClientRect();
        heroSpot.style.transform = "translate3d(" + (px - r.left - 260).toFixed(0) + "px," + (py - r.top - 260).toFixed(0) + "px,0)";
        pending = false;
      });
    }, { passive: true });
  }

  /* ---- Count-up numbers: [data-count="30"] [data-prefix="<"] ---- */
  each(document.querySelectorAll("[data-count]"), function (el) {
    var target = Number(el.getAttribute("data-count"));
    var prefix = el.getAttribute("data-prefix") || "";
    onceVisible(el, function () {
      var start = performance.now();
      var duration = 1300;
      (function step(now) {
        var t = Math.min((now - start) / duration, 1);
        el.textContent = prefix + Math.round(target * ease(t));
        if (t < 1) requestAnimationFrame(step);
      })(start);
    }, 0.6);
  });

  /* ---- Card spotlight follows the cursor (one card at a time) ---- */
  if (canHover) {
    var lastCard = null, cx = 0, cy = 0, cardPending = false;
    document.addEventListener("pointermove", function (e) {
      var card = e.target.closest && e.target.closest(".card");
      if (!card) return;
      lastCard = card; cx = e.clientX; cy = e.clientY;
      if (cardPending) return;
      cardPending = true;
      requestAnimationFrame(function () {
        var r = lastCard.getBoundingClientRect();
        lastCard.style.setProperty("--mx", (cx - r.left) + "px");
        lastCard.style.setProperty("--my", (cy - r.top) + "px");
        cardPending = false;
      });
    }, { passive: true });
  }
})();
