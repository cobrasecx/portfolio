import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { HashRouter } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 🗑️ basename="/" eliminado (ya es el valor por defecto) */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);