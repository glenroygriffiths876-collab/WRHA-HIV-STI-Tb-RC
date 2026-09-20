const CACHE="wrha-hiv-sti-tb-hub-v6";
const SHELL=[
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.ico",
  "./favicon-32.png",
  "./favicon-16.png",
  "./apple-touch-icon.png",
  "./assets/wrha-logo.png",
  "./assets/gia-avatar.svg",
  "./assets/qr-partner.png",
  "./assets/qr-hstu.png",
  "./icons/icon-192.png",
  "./icons/icon-256.png",
  "./icons/icon-512.png",
  "./covers/prep.png",
  "./covers/sti.png",
  "./covers/tb.png",
  "./covers/pmtct.png",
  "./data/knowledge.json",
  "./data/services.json",
  "./manuals/prep-handbook-2023.pdf",
  "./manuals/sti-handbook-2026.pdf",
  "./manuals/tuberculosis-manual.pdf",
  "./manuals/pmtct-manual.pdf"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isFreshCritical = request.mode === "navigate" ||
    /\/(?:index\.html|manifest\.webmanifest|data\/knowledge\.json|data\/services\.json)$/.test(url.pathname);

  if (isFreshCritical) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request).then(cached => cached || caches.match("./index.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => new Response("This resource is not available offline yet.", {
          status: 503,
          statusText: "Offline",
          headers: {"Content-Type": "text/plain; charset=utf-8"}
        }));
    })
  );
});
