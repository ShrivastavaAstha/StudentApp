const CACHE_NAME = "edumanage-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/pwa-192x192.png",
  "/pwa-512x512.png",
  "/manifest.webmanifest",
];

// ✅ Install Service Worker & Cache
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Caching app shell...");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// ✅ Activate & Clean old caches
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating...");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log("[Service Worker] Removing old cache:", name);
            return caches.delete(name);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// ✅ Intercept fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
      .catch(() => caches.match("/"))
  );
});

// ✅ Handle push notifications
self.addEventListener("push", (event) => {
  const data = event.data
    ? event.data.text()
    : "New notification from EduManage";

  const options = {
    body: data,
    icon: "/pwa-192x192.png", // ✅ REAL ICON IMAGE
    badge: "/pwa-192x192.png", // ✅ BADGE IMAGE
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };

  event.waitUntil(
    self.registration.showNotification("EduManage Student App", options)
  );
});

// ✅ Click on notification opens app
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});
