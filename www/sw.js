// ABEF Sentiers : la page fonctionne hors ligne (les cartes téléchargées sont gérées par la page)
const V = 'abef-sentiers-v2';
const SHELL = ['./', './index.html', './leaflet/leaflet.js', './leaflet/leaflet.css', './capacitor.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('abef-sentiers-') && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
const timeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('délai')), ms))]);
self.addEventListener('fetch', e => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== 'GET' || u.origin !== self.location.origin) return;
  if (req.mode === 'navigate'){
    e.respondWith(timeout(fetch(req), 5000).then(r => { if (r.ok){ const cp = r.clone(); caches.open(V).then(c => c.put('./index.html', cp)); } return r; }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok){ const cp = r.clone(); caches.open(V).then(c => c.put(req, cp)); } return r; })));
});
