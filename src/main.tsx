import { StrictMode } from "react";
// import "@fontsource/playfair-display"; // Defaults to weight 400
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
