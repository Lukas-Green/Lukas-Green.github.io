/* ============================================================
   Service Worker — Cache-first, full offline support
   ============================================================ */
const CACHE_NAME = 'pps-relief-v1';
const ASSETS = [
  '/pps-relief/',
  '/pps-relief/index.html',
  '/pps-relief/css/app.css',
  '/pps-relief/js/state.js',
  '/pps-relief/js/router.js',
  '/pps-relief/js/ui.js',
  '/pps-relief/js/onboarding.js',
  '/pps-relief/js/app.js',
  '/pps-relief/js/sw-register.js',
  '/pps-relief/data/pps-relief.js',
  '/pps-relief/data/glossary.js',
  '/pps-relief/manifest.json',
  '/pps-relief/icons/icon.svg',
  '/pps-relief/icons/icon-192.png',
  '/pps-relief/icons/icon-512.png'
];

// Install — precache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch — cache-first strategy
self.addEventListener('fetch', (event) => {
  // Only handle same-origin requests within our scope
  if (!event.request.url.includes('/pps-relief/')) return;

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          // Cache successful responses
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
      .catch(() => {
        // Fallback to index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/pps-relief/index.html');
        }
      })
  );
});
