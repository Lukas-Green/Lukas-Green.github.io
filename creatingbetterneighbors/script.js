/* ==========================================================================
   Creating Better Neighbors — script.js
   Small, dependency-free. Handles nav, counters, donate form, newsletter.
   ========================================================================== */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Year stamp ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky header shadow on scroll ---------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  if (navToggle && header) {
    navToggle.addEventListener('click', () => {
      const open = header.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close menu on nav link click
    document.querySelectorAll('#navLinks a').forEach((a) => {
      a.addEventListener('click', () => {
        header.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && header.classList.contains('is-open')) {
        header.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  /* ---------- Number formatting ---------- */
  const formatNumber = (n) => n.toLocaleString('en-US');

  /* ---------- Counter animation ----------
     Animates [data-count] elements when they enter the viewport.
     Respects data-suffix and prefers-reduced-motion.
  */
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const render = (n) => prefix + formatNumber(n) + suffix;
    if (prefersReducedMotion) {
      el.textContent = render(target);
      return;
    }
    const duration = 1500;
    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const value = Math.floor(easeOut(progress) * target);
      el.textContent = render(value);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = render(target);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window && counters.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35, rootMargin: '0px 0px -10% 0px' });
    counters.forEach((c) => io.observe(c));
  } else {
    // Fallback: just set the final value
    counters.forEach(animateCounter);
  }

  /* ---------- Donate form ---------- */
  const donateForm = document.getElementById('donateForm');
  if (donateForm) {
    const amtButtons = donateForm.querySelectorAll('.amt');
    const customInput = donateForm.querySelector('#customAmt');
    const freqInputs = donateForm.querySelectorAll('input[name="freq"]');
    const yourGift = document.getElementById('yourGift');
    const doubled = document.getElementById('doubled');
    const giftBtnAmt = document.getElementById('giftBtnAmt');
    const doubleNote = document.getElementById('doubleNote');

    let currentAmount = 50;
    let frequency = 'once';

    const renderAmount = () => {
      const label = '$' + formatNumber(currentAmount) + (frequency === 'monthly' ? '/mo' : '');
      if (yourGift)   yourGift.textContent = '$' + formatNumber(currentAmount);
      if (doubled)    doubled.textContent  = '$' + formatNumber(currentAmount * 2);
      if (giftBtnAmt) giftBtnAmt.textContent = label;
      if (doubleNote) {
        doubleNote.style.display = currentAmount > 0 ? '' : 'none';
      }
    };

    amtButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        amtButtons.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        currentAmount = parseInt(btn.dataset.amt, 10) || 0;
        if (customInput) customInput.value = '';
        renderAmount();
      });
    });

    if (customInput) {
      customInput.addEventListener('input', () => {
        const value = parseInt(customInput.value, 10);
        if (!isNaN(value) && value > 0) {
          amtButtons.forEach((b) => b.classList.remove('is-active'));
          currentAmount = value;
          renderAmount();
        }
      });
    }

    freqInputs.forEach((input) => {
      input.addEventListener('change', () => {
        frequency = input.value;
        renderAmount();
      });
    });

    donateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!currentAmount || currentAmount < 5) {
        if (customInput) customInput.focus();
        return;
      }
      const btn = donateForm.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = 'Thank you! Redirecting to secure checkout…';
        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = original;
          renderAmount();
        }, 2400);
      }
    });

    renderAmount();
  }

  /* ---------- Newsletter form ---------- */
  const newsForm = document.getElementById('newsForm');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsForm.querySelector('#email');
      if (!email || !email.value || !email.checkValidity()) {
        if (email) email.focus();
        return;
      }
      const btn = newsForm.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Subscribed ✓';
        email.value = '';
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = original;
        }, 2400);
      }
    });
  }

  /* ---------- Scroll reveal (subtle) ----------
     Fades in sections as they enter the viewport.
  */
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const reveals = document.querySelectorAll('.section, .hero__card, .program, .involved__card, .story');
    reveals.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity .7s ease, transform .7s ease';
    });
    const revealIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((el) => revealIO.observe(el));
  }
})();
