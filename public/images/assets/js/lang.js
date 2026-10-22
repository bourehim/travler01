/* ============================================================
   MUJERES DE ARENA — LANGUAGE SWITCHER
   Each language lives on its own page, so the switcher is a plain
   navigation control: changing the select loads that page.
   Included only on the translated pages.
   ============================================================ */

(function () {
  'use strict';

  document.querySelectorAll('select[data-lang-nav]').forEach(function (select) {
    select.addEventListener('change', function () {
      if (select.value) window.location.href = select.value;
    });
  });
})();
