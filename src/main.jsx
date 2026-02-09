import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Set theme once on app load (default: light)
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
  if (saved === "light") {
    // explicit light preference already applied
  } else {
    localStorage.setItem("theme", "light");
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
