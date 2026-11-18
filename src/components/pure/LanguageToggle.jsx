// LanguageToggle.jsx — botón para alternar entre español e inglés 🌐
import { useTranslation } from 'react-i18next'

export const LanguageToggle = () => {
  // i18n: la instancia que maneja el idioma actual y permite cambiarlo
  const { i18n } = useTranslation()

  // Si el idioma activo empieza con "es", el próximo toque va a inglés, y viceversa
  const isSpanish = i18n.language.startsWith('es')
  const nextLang = isSpanish ? 'en' : 'es'

  const handleToggle = () => i18n.changeLanguage(nextLang)

  return (
    <button
      type="button"
      className="btn btn-sm btn-outline-secondary"
      onClick={handleToggle}
      aria-label="Change language"
    >
      {/* Muestra el idioma AL QUE VAS A CAMBIAR, no el actual (patrón común en switches) */}
      {isSpanish ? '🇬🇧 EN' : '🇦🇷 ES'}
    </button>
  )
}
