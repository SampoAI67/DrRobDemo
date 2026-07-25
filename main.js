/* ---------------------------------------------------------------------------
   Zero dipendenze. Tre soli comportamenti:
   1. reveal on scroll (solo transform/opacity, disattivato con reduced-motion)
   2. hairline dell'header quando la pagina è scrollata
   3. anno corrente nel footer
   --------------------------------------------------------------------------- */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. Reveal --------------------------------------------------------------- */
  var targets = document.querySelectorAll('[data-reveal]');

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    /* Tutto ciò che è già nella prima schermata compare subito: il rootMargin
       negativo dell'observer, da solo, terrebbe nascosta la CTA a fondo hero. */
    targets.forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in');
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    targets.forEach(function (el) { if (!el.classList.contains('is-in')) io.observe(el); });
  }

  /* 2. Header ------------------------------------------------------------- */
  var header = document.getElementById('site-header');
  if (header) {
    var sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px';
    document.body.prepend(sentinel);

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        header.dataset.stuck = String(!entries[0].isIntersecting);
      }).observe(sentinel);
    }
  }

  /* 3. Barra d'azione mobile ---------------------------------------------
     Compare solo quando la CTA dell'hero e' uscita dal campo: due bottoni
     primari identici sulla stessa schermata sono una gerarchia rotta. */
  var bar = document.querySelector('.mobile-bar');
  var heroCta = document.querySelector('.hero__actions');

  if (bar && heroCta && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      bar.classList.toggle('is-up', !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(heroCta);
  } else if (bar) {
    bar.classList.add('is-up');
  }

  /* 4. Anno --------------------------------------------------------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
