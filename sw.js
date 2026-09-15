const CACHE_NAME = 'smart-note-v1';
const urlsToCache = [
  './',
  './manifest.json'
];

// ติดตั้ง Service Worker และแคชไฟล์
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// ดึงข้อมูลจากแคชเมื่อไม่มีอินเทอร์เน็ต
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
