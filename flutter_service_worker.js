'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "372309005f3661aaf05c1a200cbae8a8",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "48ebfae51bae43aab4e6564c5ecd23b9",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "e490a5e66410d70c7c843c44572f7535",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/img3.png": "c7626bc30fa2267091dd05f71544dcf4",
"/assets/assets/img2.png": "6abcc447e451b68b59bab63c19541262",
"/assets/assets/img1.png": "0d554750d1586eff3c357523ea6eca56",
"/assets/assets/type2.png": "087d9fecb3007a2a72f6b81fb3e60095",
"/assets/assets/type3.png": "35fb37ad7272da8ba58e3dcb3cf18093",
"/assets/assets/type1.png": "fe67d8df8f0f00774bb28f7316114f0e",
"/assets/assets/type4.png": "dabaa686bb8aa922f60507ca543b5760"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
