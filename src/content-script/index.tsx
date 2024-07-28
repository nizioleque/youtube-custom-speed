import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "../components/ThemeProvider";
import App from "./App";

function injectReact() {
  // TODO remove & fix lagging in MUI documentation
  return;

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

injectReact();
