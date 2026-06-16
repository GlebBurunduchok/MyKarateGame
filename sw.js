const CACHE_NAME = 'karate-game-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/cases.html',
  '/accessories.html',
  '/amunition.html',
  '/clicker.html',
  '/inventory.html',
  '/settings.html',
  '/box.png',
  '/coin.png',
  '/case_accessories.png',
  '/case_amunition.png',
  '/case_soon.png',
  '/coin_clicker.png',
  '/inventory_image.jpg',
  '/keychain.png',
  '/slippers.png',
  '/shirt.png',
  '/hat.png',
  '/bag.png',
  '/gloves.png',
  '/foot_protection.png',
  '/kimono.png',
  '/belt.png',
  '/helmet.png'
];

// Встановлення кешу
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Відповідь з кешу або мережі
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Оновлення кешу при новій версії
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});