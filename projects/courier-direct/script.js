/* Courier Direct — script.js
   Nav toggle, scroll reveal, quote form validation, rate estimator.
   No frameworks. No external deps. */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initNavToggle();
    initScrollReveal();
    initQuoteForm();
    initRateCalculator();
    setFooterYear();
  });

  /* 1. Hamburger nav toggle */
  function initNavToggle() {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close menu when a nav link is clicked (mobile)
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* 2. IntersectionObserver scroll reveal */
  function initScrollReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  /* 3. Quote form validation + inline success */
  function initQuoteForm() {
    var form = document.getElementById('quote-form');
    var success = document.getElementById('quote-success');
    if (!form || !success) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var errors = 0;
      clearErrors(form);

      var name = form.querySelector('#q-name');
      if (!name.value.trim()) {
        showError(name, 'Please enter your name.');
        errors++;
      }

      var phone = form.querySelector('#q-phone');
      var digits = phone.value.replace(/\D/g, '');
      if (!digits) {
        showError(phone, 'Please enter your phone number.');
        errors++;
      } else if (digits.length < 10) {
        showError(phone, 'Please enter a valid 10-digit phone number.');
        errors++;
      }

      var email = form.querySelector('#q-email');
      if (!email.value.trim()) {
        showError(email, 'Please enter your email address.');
        errors++;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError(email, 'Please enter a valid email address.');
        errors++;
      }

      if (errors === 0) {
        form.hidden = true;
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  function showError(input, message) {
    var field = input.closest('.field');
    if (!field) return;
    field.classList.add('has-error');
    var msg = field.querySelector('.field-error');
    if (msg) msg.textContent = message;
  }

  function clearErrors(form) {
    form.querySelectorAll('.field.has-error').forEach(function (f) {
      f.classList.remove('has-error');
      var msg = f.querySelector('.field-error');
      if (msg) msg.textContent = '';
    });
  }

  /* 4. Rate estimator */
  function initRateCalculator() {
    var wrap = document.getElementById('calculator');
    if (!wrap) return;

    var tierBtns = wrap.querySelectorAll('[data-tier]');
    var distBtns = wrap.querySelectorAll('[data-dist]');
    var afterHours = document.getElementById('calc-afterhours');
    var amountEl = document.getElementById('calc-amount');
    var noteEl = document.getElementById('calc-note');

    var state = {
      tier: 'rush',
      base: 35,
      tierLabel: 'Rush pickup',
      dist: 'short',
      mult: 1,
      distLabel: 'under 10 miles in metro'
    };

    function recalc() {
      if (state.tier === 'truck') {
        amountEl.textContent = 'Call us';
        noteEl.textContent = 'Truck service is quoted live based on size, weight, and destination.';
        return;
      }
      var total = state.base * state.mult;
      if (afterHours && afterHours.checked) total += 15;
      amountEl.textContent = '$' + Math.round(total);
      noteEl.textContent = state.tierLabel + ', ' + state.distLabel +
        (afterHours && afterHours.checked ? ' (after-hours surcharge applied)' : '') + '.';
    }

    function setActive(group, btn) {
      group.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
    }

    tierBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setActive(tierBtns, btn);
        state.tier = btn.dataset.tier;
        state.base = parseFloat(btn.dataset.base) || 0;
        state.tierLabel = (btn.textContent.trim().split('\n')[0] || btn.dataset.tier) + ' pickup';
        recalc();
      });
    });

    distBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setActive(distBtns, btn);
        state.dist = btn.dataset.dist;
        state.mult = parseFloat(btn.dataset.mult) || 1;
        state.distLabel = btn.textContent.trim().toLowerCase();
        recalc();
      });
    });

    if (afterHours) afterHours.addEventListener('change', recalc);

    recalc();
  }

  /* Footer year (trivial utility) */
  function setFooterYear() {
    var year = document.getElementById('footer-year');
    if (year) year.textContent = new Date().getFullYear();
  }

})();
