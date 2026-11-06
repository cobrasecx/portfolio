// ❌ Se elimina: import React from "react";
import { StrictMode } from "react"; // 🛡️ Se importa desde "react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 🗑️ basename="/" eliminado (ya es el valor por defecto) */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);