// Wissensapp Service Worker – cached die App-Dateien für Offline-Betrieb
const CACHE_NAME = 'wissensapp-v11';
const ASSETS = [
  './',
  './index.html',
  './questions.js',
  './manifest.json',
  './icon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Anthropic-API niemals cachen – Antworten kommen direkt aus dem Netz
  if (url.hostname === 'api.anthropic.com') {
    return; // Standard-Fetch-Verhalten
  }

  // Statische Assets: cache-first, im Hintergrund aktualisieren
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
