self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('memoria-marvel-dc-v1').then(function(cache) {
      return cache.addAll([
        'Tela Inicial.html',
        'Jogo da memória.html',
        'Jogo da memória.js',
        'Jogo da memória.css',
        'site.webmanifest',
        'favicon-96x96.png',
        'web-app-manifest-192x192.png',
        'web-app-manifest-512x512.png',
        'apple-touch-icon.png',
        'favicon.ico',
        'favicon.svg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});