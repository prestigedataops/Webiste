/* Free-audit request form.
 * CONFIG: set data-endpoint on the <form> to a POST URL (Formspree, serverless function, ...) to submit for real.
 * Until then the form falls back to opening the visitor's email app, so no lead is silently lost. */
(function () {
  "use strict";

  var form = document.querySelector("[data-audit-form]");
  if (!form) return;

  var status = form.querySelector(".form__status");
  var button = form.querySelector("button[type=submit]");
  var endpoint = form.getAttribute("data-endpoint") || "";
  var email = form.getAttribute("data-email");

  function collect() {
    var data = {};
    new FormData(form).forEach(function (value, key) { data[key] = String(value); });
    return data;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    var data = collect();
    button.disabled = true;
    status.textContent = "Sending…";

    if (!endpoint) {
      var body = Object.keys(data).map(function (k) { return k + ": " + data[k]; }).join("\n");
      window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent("Website message") + "&body=" + encodeURIComponent(body);
      status.textContent = "Your email app should open with the request ready to send.";
      button.disabled = false;
      return;
    }

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    }).then(function (res) {
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.textContent = "Thank you. We will reply within one business day.";
    }).catch(function () {
      status.textContent = "Something went wrong. Please email " + email + " directly.";
    }).then(function () { button.disabled = false; });
  });
})();
