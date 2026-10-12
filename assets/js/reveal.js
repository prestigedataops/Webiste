/* Scroll-reveal for [data-reveal] elements. Content is only hidden while JS runs (see components.css). */
(function () {
  "use strict";

  var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function show(el) { el.classList.add("is-visible"); }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach(show);
    return;
  }

  // Stagger siblings so grouped items cascade in.
  items.forEach(function (el) {
    var siblings = Array.prototype.filter.call(el.parentElement.children, function (c) {
      return c.hasAttribute("data-reveal");
    });
    el.style.setProperty("--i", siblings.indexOf(el));
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      show(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -4% 0px" });

  items.forEach(function (el) { observer.observe(el); });

  // Failsafe: never leave content invisible if the observer misfires.
  setTimeout(function () { items.forEach(show); }, 4000);
})();
