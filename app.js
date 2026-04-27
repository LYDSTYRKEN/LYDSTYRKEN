/* ════════════════════════════════════════════════════════════════
   LYDSTYRKEN — Fælles JavaScript for alle sider
   ════════════════════════════════════════════════════════════════
   Indeholder: Burger menu, scroll-progress, nav-scrolled,
   reveal on scroll, View Transitions hjælpere.

   Side-specifik JS forbliver i den enkelte HTML-fil.
   ════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─────────────────────────────────────────────────────────────
  //   BURGER MENU
  // ─────────────────────────────────────────────────────────────

  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;

  function toggleMenu() {
    const isOpen = body.classList.toggle('menu-open');
    if (burger) burger.setAttribute('aria-expanded', String(isOpen));
  }

  function closeMenu() {
    body.classList.remove('menu-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  if (burger) burger.addEventListener('click', toggleMenu);

  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setTimeout(closeMenu, 50));
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });

  // ─────────────────────────────────────────────────────────────
  //   SCROLL PROGRESS + NAV SCROLLED-STATE
  //   Bruger requestAnimationFrame så den er smooth selv på lange sider.
  // ─────────────────────────────────────────────────────────────

  const progress = document.getElementById('progress');
  const nav = document.getElementById('nav');
  let scrollTicking = false;

  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
    if (progress) {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      progress.style.width = pct + '%';
    }
    scrollTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(onScroll);
      scrollTicking = true;
    }
  }, { passive: true });

  // Kør én gang ved load så nav og progress matcher initial scroll position
  onScroll();

  // ─────────────────────────────────────────────────────────────
  //   REVEAL ON SCROLL (IntersectionObserver)
  //   Tilføjer .visible når element kommer ind i viewport.
  // ─────────────────────────────────────────────────────────────

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Eksponér så side-specifik JS kan registrere nye reveal-elementer
    // efter de er rendered (fx lagersalg.js efter renderProducts()).
    window.LYDSTYRKEN_observeReveal = (root = document) => {
      root.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
    };
  } else {
    // Fallback: vis alt med det samme hvis IntersectionObserver ikke understøttes
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    window.LYDSTYRKEN_observeReveal = () => {};
  }

  // ─────────────────────────────────────────────────────────────
  //   VIEW TRANSITIONS — fallback-hjælper
  //   Browseren håndterer @view-transition automatisk, men hvis
  //   side-specifik JS skal trigge en transition manuelt, kan den
  //   bruge denne wrapper.
  // ─────────────────────────────────────────────────────────────

  window.LYDSTYRKEN_transition = (callback) => {
    if (document.startViewTransition) {
      return document.startViewTransition(callback);
    }
    callback();
    return { finished: Promise.resolve(), ready: Promise.resolve(), updateCallbackDone: Promise.resolve() };
  };

})();
