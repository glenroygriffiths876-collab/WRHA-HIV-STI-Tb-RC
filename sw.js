const CACHE_NAME = "wrha-hiv-sti-tb-rc-v20260920-gia-hardfix-f";
const ASSETS = ["./wrha-logo.png", "./gia-avatar.png", "./favicon-16.png", "./favicon-32.png", "./favicon.ico", "./apple-touch-icon.png", "./icon-192.png", "./icon-512.png", "./maskable-512.png", "./manifest.webmanifest"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const req = event.request;
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(fetch(req, {cache:'no-store'}).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE_NAME).then(c => c.put('./index.html', copy)).catch(()=>{});
      return resp;
    }).catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  event.respondWith(fetch(req).then(resp => {
    const copy = resp.clone();
    caches.open(CACHE_NAME).then(c => c.put(req, copy)).catch(()=>{});
    return resp;
  }).catch(() => caches.match(req)));
});
