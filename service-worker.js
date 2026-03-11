// Shelter of Hope PWA Service Worker
// Strategy: Network-first with cache fallback (avoids stale content issues)
const CACHE_VERSION = 'soh-v2';
const OFFLINE_URL = '/index.html';

// Assets to pre-cache for offline support
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/programs.html',
  '/why-us.html',
  '/testimonials.html',
  '/contact.html',
  '/css/style.css?v=15',
  '/js/main.js?v=15',
  '/images/logo.png',
  '/manifest.json'
];

// Install: pre-cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_VERSION)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: Network-first strategy
// Always tries network first, falls back to cache if offline
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip external requests (fonts, analytics, unsplash images, etc.)
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Got a good network response — cache it for offline use
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Network failed — try cache
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          // If no cache match for navigation, show offline page
          if (event.request.mode === 'navigate') {
            return caches.match(OFFLINE_URL);
          }
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        });
      })
  );
});
