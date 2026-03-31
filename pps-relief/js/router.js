/* ============================================================
   Hash Router — SPA navigation with transitions
   ============================================================ */
const Router = (() => {
  const routes = {};
  const stack = [];
  let currentView = null;
  let lastDepth = 0;

  function depth(hash) {
    return (hash || '').split('/').filter(Boolean).length;
  }

  function register(pattern, handler) {
    routes[pattern] = handler;
  }

  function match(hash) {
    const path = hash.replace('#', '') || '/dashboard';
    for (const pattern of Object.keys(routes)) {
      const regex = new RegExp('^' + pattern.replace(/:(\w+)/g, '([^/]+)') + '$');
      const m = path.match(regex);
      if (m) return { handler: routes[pattern], params: m.slice(1), path };
    }
    return null;
  }

  function navigate(hash, replace) {
    if (replace) {
      history.replaceState(null, '', hash);
    } else {
      history.pushState(null, '', hash);
    }
    resolve();
  }

  function resolve() {
    const hash = location.hash || '#/dashboard';
    const result = match(hash);
    if (!result) { navigate('#/dashboard', true); return; }

    const content = document.getElementById('app-content');
    const newDepth = depth(hash);
    const isBack = newDepth < lastDepth;
    lastDepth = newDepth;

    // Transition
    content.classList.remove('view-enter');
    void content.offsetWidth; // force reflow
    content.classList.add('view-enter');

    result.handler(...result.params);

    // Update tabs
    document.querySelectorAll('.tab').forEach(tab => {
      const href = tab.getAttribute('href');
      const active = hash.startsWith(href);
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active);
    });

    // Update back button
    const backBtn = document.getElementById('back-btn');
    const showBack = newDepth > 2; // show on drill-down views
    backBtn.classList.toggle('hidden', !showBack);

    // Update header spacer visibility to balance layout
    const spacer = document.querySelector('.header-spacer');
    if (spacer) spacer.style.width = showBack ? '40px' : '40px';

    currentView = hash;

    // Scroll to top
    content.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function back() {
    history.back();
  }

  function init() {
    window.addEventListener('hashchange', resolve);
    window.addEventListener('popstate', resolve);
    document.getElementById('back-btn').addEventListener('click', back);

    // Tab clicks
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        navigate(tab.getAttribute('href'));
      });
    });
  }

  return { register, navigate, resolve, back, init };
})();
