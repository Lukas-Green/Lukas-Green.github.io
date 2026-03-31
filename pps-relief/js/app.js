/* ============================================================
   App Entry Point — initialization and wiring
   ============================================================ */
(function() {
  'use strict';

  // Register routes
  Router.register('/dashboard', UI.renderDashboard);
  Router.register('/steps', UI.renderStepsList);
  Router.register('/step/(\\d+)', (id) => UI.renderStep(id));
  Router.register('/step/(\\d+)/sub/([\\d.]+)', (stepId, subId) => UI.renderSubstep(stepId, subId));
  Router.register('/documents', UI.renderDocuments);
  Router.register('/info', UI.renderInfo);
  Router.register('/info/glossary', UI.renderGlossary);

  // Initialize router
  Router.init();

  // Show onboarding or go to dashboard
  const showingOnboarding = Onboarding.init();
  if (!showingOnboarding) {
    Router.resolve();
  }

  // Dismiss tooltip on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('legal-term')) {
      UI.hideTooltip();
    }
  });

  // Handle back button for substep drill-down route
  document.getElementById('back-btn').addEventListener('click', () => {
    Router.back();
  });

})();
