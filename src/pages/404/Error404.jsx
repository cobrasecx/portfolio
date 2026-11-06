// ❌ Se elimina: import React from "react";
// ✅ Se agrega Link (navega sin recargar la página) y se saca useNavigate
import { Link } from "react-router-dom";

export const Error404 = () => {
  // ❌ Se elimina el hook useNavigate y la línea `let navigate = ...`
  return (
    // 🎨 Clases de Bootstrap en lugar de style={{...}}:
    // d-flex + flex-column = apila los elementos en columna
    // align-items-center = los centra horizontalmente
    <div className="text-center d-flex flex-column align-items-center">
      {/* ✍️ Texto corregido y coherente con el resto del sitio */}
      <h1>Error 404: Page not found</h1>

      {/* 🏠 Siempre lleva al inicio, haya historial o no.
          `to="/"` funciona con HashRouter porque Link arma la URL correcta */}
      <Link className="btn btn-dark" to="/">
        Go home
      </Link>
    </div>
  );
};