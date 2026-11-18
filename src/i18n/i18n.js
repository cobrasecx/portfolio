// i18n.js — arranca el motor de traducciones una sola vez, al cargar la app
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import es from './locales/es/translation.json'
import en from './locales/en/translation.json'

i18n
  .use(LanguageDetector) // 🔍 detecta el idioma del navegador / localStorage
  .use(initReactI18next) // 🔌 conecta i18next con React (habilita los hooks)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: 'en', // 🛟 si no detecta nada o falla, usa inglés
    interpolation: {
      escapeValue: false, // React ya escapa el HTML por su cuenta, no hace falta duplicarlo
    },
  })

export default i18n
