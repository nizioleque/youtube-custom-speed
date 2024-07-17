import ReactDOM from "react-dom/client";
import ThemeProvider from "../components/ThemeProvider";
import App from "./App";

function injectReact() {
  const root = document.querySelector("#root")!;
  document.body.appendChild(root);

  const reactRoot = ReactDOM.createRoot(root);

  reactRoot.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

injectReact();
