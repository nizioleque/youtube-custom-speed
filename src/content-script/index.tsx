import { waitUntilExists } from "@/utils/dom";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./ContextProvider";
import { getControls } from "./utils";

async function injectReact() {
  const container = document.createElement("span");

  // wait for the player UI to be available
  const target = await waitUntilExists(getControls);

  target.prepend(container);

  const cache = createCache({ key: "mui", container });

  const reactRoot = ReactDOM.createRoot(container);
  reactRoot.render(
    <CacheProvider value={cache}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </CacheProvider>
  );
}

injectReact();
