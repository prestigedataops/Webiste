/* Sitewide behaviour: header, mobile menu, scroll reveal, FAQ accordion, analytics events.
 * Everything degrades gracefully: with JS off, content and links still work. */

const q = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------- Header + mobile menu ---------- */
function initHeader() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.getElementById("mobile-menu");
  if (!header) return;

  const isOpen = () => toggle?.getAttribute("aria-expanded") === "true";
  const sync = () => header.classList.toggle("is-solid", window.scrollY > 24 || isOpen());
  const setMenu = (open) => {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
    sync();
  };

  toggle?.addEventListener("click", () => setMenu(!isOpen()));
  menu?.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) { setMenu(false); toggle.focus(); }
  });
  window.matchMedia("(max-width: 860px)").addEventListener("change", () => setMenu(false));
  window.addEventListener("scroll", sync, { passive: true });
  sync();
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const items = q("[data-reveal]");
  const show = (el) => el.classList.add("is-visible");
  if (!items.length) return;

  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    items.forEach(show);
    return;
  }
  items.forEach((el) => {
    const sibs = Array.from(el.parentElement.children).filter((c) => c.hasAttribute("data-reveal"));
    el.style.setProperty("--i", sibs.indexOf(el));
  });
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
  );
  items.forEach((el) => io.observe(el));
  setTimeout(() => items.forEach(show), 4000); // failsafe
}

/* ---------- FAQ accordion ---------- */
function initFaq() {
  const triggers = q("[data-faq-trigger]");
  const set = (t, open) => {
    t.setAttribute("aria-expanded", String(open));
    t.closest(".faq__item").classList.toggle("is-open", open);
  };
  triggers.forEach((t) =>
    t.addEventListener("click", () => {
      const willOpen = t.getAttribute("aria-expanded") !== "true";
      triggers.forEach((o) => set(o, false));
      set(t, willOpen);
    }),
  );
  if (triggers[0]) set(triggers[0], true);
}

/* ---------- Analytics events (GA4, only if gtag is loaded) ---------- */
function initTracking() {
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-track]");
    if (!el || typeof window.gtag !== "function") return;
    window.gtag("event", el.dataset.track, { location: el.dataset.trackLocation || "page" });
  });
}

initHeader();
initReveal();
initFaq();
initTracking();
