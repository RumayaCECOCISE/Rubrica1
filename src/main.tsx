import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-expect-error CSS is handled by the bundler and has no TypeScript module declaration.
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
