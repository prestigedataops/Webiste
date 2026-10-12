/* FAQ accordion: one item open at a time, answers stay in the DOM for crawlers. */
(function () {
  "use strict";

  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-faq-trigger]"));

  function setOpen(trigger, open) {
    trigger.setAttribute("aria-expanded", String(open));
    trigger.closest(".faq__item").classList.toggle("is-open", open);
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var willOpen = trigger.getAttribute("aria-expanded") !== "true";
      triggers.forEach(function (t) { setOpen(t, false); });
      setOpen(trigger, willOpen);
    });
  });

  // First question open by default.
  if (triggers[0]) setOpen(triggers[0], true);
})();
