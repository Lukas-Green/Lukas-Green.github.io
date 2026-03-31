/* ============================================================
   Onboarding Flow — 4-screen walkthrough
   ============================================================ */
const Onboarding = (() => {
  let currentScreen = 0;
  let startingPoint = null;
  let hasAttorney = null;

  function init() {
    const state = State.get();
    if (state.onboardingComplete) return false; // skip

    const el = document.getElementById('onboarding');
    el.classList.remove('hidden');

    // Show first screen
    showScreen(0);

    // Skip buttons
    el.querySelectorAll('.onboarding-skip').forEach(btn => {
      btn.addEventListener('click', finish);
    });

    // Next buttons (screens 0, 1)
    el.querySelectorAll('.onboarding-next[data-next]').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = parseInt(btn.dataset.next);
        showScreen(next);
      });
    });

    // Starting point cards
    document.querySelectorAll('#startingPointCards .onboarding-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('#startingPointCards .onboarding-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        startingPoint = card.dataset.value;
        document.getElementById('startingNext').disabled = false;
      });
    });

    // Attorney cards
    document.querySelectorAll('#attorneyCards .onboarding-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('#attorneyCards .onboarding-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        hasAttorney = card.dataset.value;
        document.getElementById('finishOnboarding').disabled = false;
      });
    });

    // Finish button
    document.getElementById('finishOnboarding').addEventListener('click', finish);

    return true; // showing onboarding
  }

  function showScreen(index) {
    const screens = document.querySelectorAll('.onboarding-screen');
    const dots = document.querySelectorAll('.onboarding-dots .dot');

    screens.forEach((s, i) => {
      if (i === currentScreen && i !== index) {
        s.classList.remove('active');
        s.classList.add('exiting');
        setTimeout(() => s.classList.remove('exiting'), 350);
      } else if (i === index) {
        // Small delay for enter animation
        setTimeout(() => s.classList.add('active'), 50);
      } else {
        s.classList.remove('active', 'exiting');
      }
    });

    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentScreen = index;
  }

  function finish() {
    State.completeOnboarding({
      startingPoint: startingPoint || 'just-starting',
      hasAttorney: hasAttorney || 'unsure'
    });

    const el = document.getElementById('onboarding');
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      el.classList.add('hidden');
      el.style.opacity = '';
      el.style.transition = '';
      // Navigate to dashboard
      Router.navigate('#/dashboard', true);
      Router.resolve();
    }, 300);
  }

  return { init };
})();
