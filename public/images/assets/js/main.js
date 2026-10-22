/* ============================================================
   MUJERES DE ARENA — INTERACTIONS  ·  v2
   - Scroll progress bar
   - Sticky nav state + active section highlight
   - Fullscreen mobile menu
   - Smooth anchor scroll (header offset)
   - Hero entrance (adds .is-ready to <body>)
   - Word splitting for the manifesto quote
   - Scroll-reveal choreography (IntersectionObserver + stagger)
   - Journey scrollytelling (sticky panel crossfade + rail)
   - Parallax for full-bleed media
   - Starfield generation
   - Animated counters
   - FAQ accordion (one open at a time)
   ============================================================ */

(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Hero entrance ---------- */
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => document.body.classList.add('is-ready'));
  });

  /* ---------- Scroll progress ---------- */
  const progressBar = document.querySelector('.progress__bar');

  /* ---------- Sticky nav ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 60);
    if (progressBar) {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      progressBar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Fullscreen mobile menu ---------- */
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    menu.querySelectorAll('.menu__link').forEach((link, i) => {
      link.style.setProperty('--i', i);
    });
    const setMenu = (open) => {
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
    };
    toggle.addEventListener('click', () =>
      setMenu(!document.body.classList.contains('menu-open'))
    );
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => setMenu(false))
    );
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  /* ---------- Smooth scroll with header offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;
      window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  });

  /* ---------- Word splitting for staggered quotes ---------- */
  document.querySelectorAll('[data-split-words]').forEach((el) => {
    const split = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((token) => {
            if (/^\s+$/.test(token) || token === '') {
              frag.appendChild(document.createTextNode(token));
            } else {
              const span = document.createElement('span');
              span.className = 'word';
              span.textContent = token;
              frag.appendChild(span);
            }
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          split(child);
        }
      });
    };
    split(el);
    el.querySelectorAll('.word').forEach((w, i) => w.style.setProperty('--w', i));
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach((el) => {
      const siblings = Array.from(el.parentElement.children).filter((c) =>
        c.hasAttribute('data-reveal')
      );
      const idx = siblings.indexOf(el);
      if (idx > 0) el.style.setProperty('--i', idx);
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Journey scrollytelling ---------- */
  const stages = document.querySelectorAll('.stage');
  const stageImgs = document.querySelectorAll('[data-stage-img]');
  const stageDots = document.querySelectorAll('[data-stage-dot]');
  const railFill = document.querySelector('.journey__rail-fill');

  const setStage = (idx) => {
    stageImgs.forEach((img) =>
      img.classList.toggle('is-active', Number(img.dataset.stageImg) === idx)
    );
    stageDots.forEach((dot) =>
      dot.classList.toggle('is-active', Number(dot.dataset.stageDot) === idx)
    );
    stages.forEach((s) =>
      s.classList.toggle('is-active', Number(s.dataset.stage) === idx)
    );
    if (railFill && stageDots.length > 1) {
      railFill.style.height = `${(idx / (stageDots.length - 1)) * 100}%`;
    }
  };

  if (stages.length && 'IntersectionObserver' in window) {
    setStage(0);
    const stageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStage(Number(entry.target.dataset.stage));
        });
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: 0 }
    );
    stages.forEach((s) => stageObserver.observe(s));
  }

  /* ---------- Parallax ---------- */
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length && !reducedMotion) {
    let ticking = false;
    const updateParallax = () => {
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const speed = parseFloat(el.dataset.parallax) || 0.2;
          const offset =
            (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
          el.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`;
        }
      });
      ticking = false;
    };
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(updateParallax);
        }
      },
      { passive: true }
    );
    updateParallax();
  }

  /* ---------- Starfield ---------- */
  const starfield = document.querySelector('.starfield');
  if (starfield && !reducedMotion) {
    const COUNT = 130;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < COUNT; i++) {
      const star = document.createElement('span');
      star.className = 'star';
      const size = Math.random() < 0.12 ? 3 : Math.random() < 0.5 ? 2 : 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${(Math.random() * 100).toFixed(2)}%`;
      star.style.top = `${(Math.random() * 100).toFixed(2)}%`;
      star.style.setProperty('--twinkle-dur', `${(2.2 + Math.random() * 3.4).toFixed(2)}s`);
      star.style.setProperty('--twinkle-delay', `${(Math.random() * 4).toFixed(2)}s`);
      frag.appendChild(star);
    }
    starfield.appendChild(frag);
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window && !reducedMotion) {
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const duration = 1500;
          const start = performance.now();
          el.textContent = '0';
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = String(Math.round(target * eased));
            if (p < 1) window.requestAnimationFrame(tick);
          };
          window.requestAnimationFrame(tick);
          countObserver.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => countObserver.observe(c));
  }

  /* ---------- Active nav link ---------- */
  const sections = document.querySelectorAll('section[id], header.hero[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  if (sections.length && navLinks.length) {
    const setActive = () => {
      const y = window.scrollY + (nav ? nav.offsetHeight + 80 : 0);
      let current = '';
      sections.forEach((s) => {
        if (y >= s.offsetTop) current = s.id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === '#' + current);
      });
    };
    window.addEventListener('scroll', setActive, { passive: true });
    setActive();
  }

  /* ---------- FAQ: one open at a time ---------- */
  const faqItems = document.querySelectorAll('.qa');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
})();
