import js from '@eslint/js' // 📘 reglas recomendadas de JavaScript
import globals from 'globals' // 🌐 variables globales (window, document...)
import react from 'eslint-plugin-react' // ⚛️ reglas de React
import reactHooks from 'eslint-plugin-react-hooks' // 🪝 reglas de Hooks
import prettier from 'eslint-config-prettier' // 🤝 evita choques con Prettier

export default [
  // 🚫 carpetas que ESLint debe ignorar
  { ignores: ['dist', 'node_modules'] },

  js.configs.recommended,

  {
    files: ['**/*.{js,jsx}'], // 📂 qué archivos revisa
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // 📦 usamos import/export
      globals: globals.browser, // 🌐 reconoce window, document, etc.
      parserOptions: { ecmaFeatures: { jsx: true } }, // ✨ entiende JSX
    },
    plugins: { react, 'react-hooks': reactHooks },
    settings: { react: { version: 'detect' } }, // 🔎 detecta tu versión de React
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules, // ✅ no exige "import React" (React 17+)
      'react/prop-types': 'off', // 🔕 React 19 ya no valida propTypes en runtime
      'react-hooks/rules-of-hooks': 'error', // 🪝 Hooks solo en el lugar correcto
      'react-hooks/exhaustive-deps': 'warn', // ⚠️ dependencias de useEffect completas
    },
  },

  prettier, // 🤝 siempre al final, para que gane sobre las demás reglas
]
