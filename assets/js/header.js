/* Header: frosted background after scrolling, and the mobile menu toggle. */
(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.getElementById("mobile-menu");
  if (!header) return;

  var SCROLL_THRESHOLD = 24;
  var MOBILE_QUERY = window.matchMedia("(max-width: 860px)");

  function isMenuOpen() {
    return toggle && toggle.getAttribute("aria-expanded") === "true";
  }

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
    syncGlass();
  }

  function syncGlass() {
    header.classList.toggle("is-glass", window.scrollY > SCROLL_THRESHOLD || isMenuOpen());
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () { setMenu(!isMenuOpen()); });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isMenuOpen()) { setMenu(false); toggle.focus(); }
    });
    MOBILE_QUERY.addEventListener("change", function () { setMenu(false); });
  }

  window.addEventListener("scroll", syncGlass, { passive: true });
  syncGlass();
})();
