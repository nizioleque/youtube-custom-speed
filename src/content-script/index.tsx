import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import ReactDOM from "react-dom/client";
import App from "./App";

function injectReact() {
  const container = document.createElement("span");

  // TODO handle missing element ?
  console.log(document.body.querySelector(".ytp-right-controls"));
  document.body.querySelector(".ytp-right-controls")?.prepend(container);

  const cache = createCache({ key: "mui", container });

  const reactRoot = ReactDOM.createRoot(container);
  reactRoot.render(
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>
  );
}

injectReact();
