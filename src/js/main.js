document.addEventListener("DOMContentLoaded", function () {
  // Mobiles Menü auf- und zuklappen
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Sprachauswahl auf- und zuklappen
  var langSwitch = document.querySelector(".lang-switch");
  if (langSwitch) {
    var langButton = langSwitch.querySelector(".lang-current");
    var setOpen = function (open) {
      langSwitch.classList.toggle("lang-open", open);
      langButton.setAttribute("aria-expanded", open ? "true" : "false");
    };

    langButton.addEventListener("click", function () {
      setOpen(!langSwitch.classList.contains("lang-open"));
    });
    document.addEventListener("click", function (event) {
      if (!langSwitch.contains(event.target)) setOpen(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }
});
