import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Set theme once on app load
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  document.documentElement.classList.add("dark");
} else if (saved === "light") {
  document.documentElement.classList.remove("dark");
} else {
  // default: follow system preference
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  if (prefersDark) document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
