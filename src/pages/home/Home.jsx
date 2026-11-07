// Home.jsx — página de inicio 🏠
import '../../styles/Home.css' // 🎨 los estilos salen del JSX y viven en su propio archivo
import { NavBarSocial } from '../../components/container/NavBarSocial'

// 📝 Textos arriba, separados del diseño: si cambiás de alias o de título,
// editás UNA línea sin tocar el JSX.
const HERO = {
  title: "Hi! I'm Alberto Ayza (betodev)",
  subtitle:
    'Soft & Web Developer, Pentester & content creator located in Argentina',
}

export const Home = () => (
  // <main> en vez de <div>: le dice al navegador cuál es el contenido principal 🧭
  <main className="home">
    <header className="home__hero text-center">
      <h1>{HERO.title}</h1>
      {/* <p className="h3">: se ve como h3 de Bootstrap, pero no salta de h1 a h3 (orden correcto de títulos) */}
      <p className="h3">{HERO.subtitle}</p>
    </header>

    <footer>
      {/* 📊 Acá va <Visits /> cuando resolvamos el contador */}
      <NavBarSocial />
    </footer>
  </main>
)
