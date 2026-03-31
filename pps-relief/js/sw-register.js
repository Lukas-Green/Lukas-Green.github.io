/* ============================================================
   Service Worker Registration
   ============================================================ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/pps-relief/sw.js', { scope: '/pps-relief/' })
      .then(reg => {
        // Check for updates
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
              UI.showToast('Update available — refresh to get the latest version', '');
            }
          });
        });
      })
      .catch(err => {
        // Service worker registration failed — app still works
      });
  });
}
