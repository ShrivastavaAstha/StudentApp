import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { setupInstallPromptListener } from "./utils/installPrompt";

setupInstallPromptListener();

import { registerSW } from "virtual:pwa-register";
registerSW(); // This will auto-update the service worker in the background

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
