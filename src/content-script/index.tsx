import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import ReactDOM from "react-dom/client";
import { waitUntilExists } from "../utils/dom";
import App from "./App";

async function injectReact() {
  const container = document.createElement("span");

  // wait for the player UI to be available
  const target = await waitUntilExists(() =>
    document.body.querySelector(".ytp-right-controls")
  );

  target.prepend(container);

  const cache = createCache({ key: "mui", container });

  const reactRoot = ReactDOM.createRoot(container);
  reactRoot.render(
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>
  );
}

injectReact();
