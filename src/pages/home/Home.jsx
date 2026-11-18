// Home.jsx — página de inicio 🏠
import { useTranslation } from 'react-i18next'
import '../../styles/Home.css' // 🎨 los estilos salen del JSX y viven en su propio archivo

export const Home = () => {
  const { t } = useTranslation()

  return (
    // <main> en vez de <div>: le dice al navegador cuál es el contenido principal 🧭
    <main className="home">
      <header className="home__hero text-center">
        <h1>{t('home.title')}</h1>
        {/* <p className="h3">: se ve como h3 de Bootstrap, pero no salta de h1 a h3 (orden correcto de títulos) */}
        <p className="h3">{t('home.subtitle')}</p>
      </header>
    </main>
  )
}
