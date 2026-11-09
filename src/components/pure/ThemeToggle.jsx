// ThemeToggle.jsx — botón para alternar modo claro/oscuro 🌓
import { useState } from 'react'

// 📖 La "fuente de verdad" es el atributo de <html>, que ya puso el script del index.html.
// Pasar una FUNCIÓN a useState hace que se ejecute una sola vez, al montar el componente.
const getCurrentTheme = () =>
  document.documentElement.getAttribute('data-bs-theme') || 'dark'

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(getCurrentTheme)
  const next = theme === 'dark' ? 'light' : 'dark'

  const toggle = () => {
    setTheme(next) // 🔄 actualiza el ícono
    document.documentElement.setAttribute('data-bs-theme', next) // 🎨 Bootstrap cambia todo
    try {
      localStorage.setItem('theme', next) // 💾 lo recuerda para la próxima visita
    } catch {
      // Si el navegador bloquea el almacenamiento, el cambio igual funciona en esta visita
    }
  }

  return (
    <button
      type="button"
      className="btn btn-outline-secondary btn-sm ms-lg-2"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`} // ♿ un botón con solo ícono necesita un nombre
    >
      <i
        className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}
        aria-hidden="true"
      ></i>
    </button>
  )
}
