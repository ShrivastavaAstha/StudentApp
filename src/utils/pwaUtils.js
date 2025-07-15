// ✅ Register service worker
export const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("✅ Service Worker registered:", registration);
      return registration;
    } catch (error) {
      console.error("❌ Service Worker registration failed:", error);
    }
  }
};

// ✅ Ask for permission from the user to send notifications
export const requestNotificationPermission = async () => {
  if ("Notification" in window) {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }
  return false;
};

// ✅ Send notification through service worker (works on mobile)
export const sendNotification = async (title, body) => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      registration.showNotification(title, {
        body,
        icon: "/pwa-192x192.png", //
        badge: "/pwa-192x192.png",
        vibrate: [100, 50, 100],
        tag: "demo-notification",
        renotify: true,
      });
    } catch (error) {
      console.error("❌ Failed to send notification:", error);
    }
  }
};

// ✅ Optional: Subscribe to PushManager (only needed if using real push backend)
export const subscribeToNotifications = async (registration) => {
  try {
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BOwJvvhThF-PtqjQW8xdRJ5nVp8KE0bWDKqyJGM5kQR8fHwVzKBmjyg6PaUvbGOLqXNKEjOvFVKLhUODPKQ8VVw",
    });
    console.log("🔔 Push subscription:", subscription);
    return subscription;
  } catch (error) {
    console.error("❌ Failed to subscribe to push notifications:", error);
  }
};

// ✅ Show install button when PWA can be installed
export const installPWA = () => {
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const installButton = document.getElementById("install-button");
    if (installButton) {
      installButton.style.display = "block";
      installButton.addEventListener("click", () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("📲 User accepted the PWA install prompt");
          } else {
            console.log("🚫 User dismissed the PWA install prompt");
          }
          deferredPrompt = null;
        });
      });
    }
  });
};
