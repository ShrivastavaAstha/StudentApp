let deferredPrompt = null;

export const setupInstallPromptListener = () => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault(); // Prevent default mini-infobar
    deferredPrompt = e;

    // ✅ Dispatch a custom event so Settings.jsx knows it's available
    window.dispatchEvent(new Event("pwaInstallAvailable"));

    console.log("Install prompt is ready.");
  });
};

export const triggerPWAInstall = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    if (result.outcome === "accepted") {
      console.log("User accepted the install prompt.");
    } else {
      console.log("User dismissed the install prompt.");
    }
    deferredPrompt = null;
  } else {
    alert("It looks like you have already installed the app.");
  }
};
