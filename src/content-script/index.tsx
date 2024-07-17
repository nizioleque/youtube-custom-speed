import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "../components/ThemeProvider";
import App from "./App";

function injectFont() {
  // Example of injecting a font in the content script
  const style = document.createElement("style");
  style.innerHTML =
    "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap')";
  document.head.appendChild(style);
}

function injectReact() {
  const container = document.createElement("div");

  // Example of injecting and styling the React root
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999
  `;
  document.body.appendChild(container);

  // Put the React root in Shadow DOM to avoid CSS conflicts
  const shadowRoot = container.attachShadow({ mode: "open" });
  const rootElement = document.createElement("div");
  shadowRoot.appendChild(rootElement);
  const cache = createCache({ key: "mui", container: rootElement });

  const reactRoot = ReactDOM.createRoot(rootElement);
  reactRoot.render(
    <CacheProvider value={cache}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CacheProvider>
  );
}

injectFont();
injectReact();
