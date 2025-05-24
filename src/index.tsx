import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

async function begin() {
  // #root is core of the application, it will be always available
  const root = createRoot(document.getElementById("root") as HTMLElement);

  // TODO: Add strictmode here
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );

  if (process.env.NODE_ENV !== "local") {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker registered:", registration);
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      });
    }
  }
}

begin();

if (module.hot) {
  module.hot.accept(); // Accept updates for the current module
}
