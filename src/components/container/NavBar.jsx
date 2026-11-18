import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from '../pure/ThemeToggle'
import { LanguageToggle } from '../pure/LanguageToggle'

// Parte común de las URLs: si cambia tu usuario, se edita solo acá
const PROJECTS_BASE_URL = 'https://cobrasecx.github.io'

// Los datos viven separados del HTML: para agregar o quitar un proyecto
// se toca una línea de este array y no un bloque entero de JSX
const projects = [
  {
    slug: 'shopping-cart-siete-oro-frontend',
    name: 'Siete de Oro: E-commerce',
  },
  { slug: 'car-workshop-frontend', name: 'SuperCar Workshop' },
  { slug: 'countries-cities', name: 'Countries Cities' },
  { slug: 'drum-machine', name: 'Drum' },
  { slug: 'song-finder', name: 'Song Finder' },
  { slug: 'markdown-previewer', name: 'Markdown Previewer' },
  { slug: 'random-quote-machine', name: 'Random Quotes' },
  { slug: 'dog-finder-2', name: 'Dog Finder' },
  { slug: 'pokedex', name: 'Pokedex ES' },
  { slug: 'music-band', name: 'Music Band' },
  { slug: 'js-calculator', name: 'JS Calculator' },
  { slug: 'to-do-list', name: 'To Do List' },
  { slug: 'notes', name: 'Notes' },
  { slug: 'contacts-list', name: 'Contacts List' },
  { slug: 'tasks-manager', name: 'Tasks Manager' },
  { slug: 'netflix-clone', name: 'Netflix Clone' },
  { slug: 'weather-app', name: 'Weather App' },
  { slug: '25-5-clock', name: 'Pomodoro Clock' },
]

// Mini-componente para un ítem del menú: evita repetir <li> + <NavLink>.
// "children" es el texto que escribís entre las etiquetas (ej. Home).
const NavItem = ({ to, children }) => (
  <li className="nav-item">
    <NavLink to={to} className="nav-link">
      {children}
    </NavLink>
  </li>
)

export const NavBar = () => {
  const { t } = useTranslation() // 🌐 "t" = función "traducir": recibe una clave y devuelve el texto en el idioma activo

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <span className="fw-bold fst-italic">My Portfolio</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem to="/">{t('nav.home')}</NavItem>

            <li className="nav-item dropdown">
              <button
                type="button"
                id="navbarDropdown"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown" // importante
                aria-expanded="false"
              >
                {t('nav.projects')}
              </button>

              <ul
                className="dropdown-menu text-center"
                aria-labelledby="navbarDropdown"
              >
                {/* <a> en vez de <NavLink> porque son URLs externas.
                    "key" ayuda a React a identificar cada elemento de la lista */}
                {projects.map(({ slug, name }) => (
                  <li key={slug}>
                    <a
                      href={`${PROJECTS_BASE_URL}/${slug}/`}
                      className="dropdown-item nav-link"
                    >
                      <span className="site-project">{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <NavItem to="/certifications">{t('nav.certifications')}</NavItem>
            <NavItem to="/writeups">{t('nav.writeups')}</NavItem>
            <NavItem to="/news">{t('nav.news')}</NavItem>
            <NavItem to="/about">{t('nav.about')}</NavItem>
            <NavItem to="/contact">{t('nav.contact')}</NavItem>
            <NavItem to="/donations">{t('nav.donations')}</NavItem>
            <li className="nav-item d-flex align-items-center">
              <ThemeToggle />
            </li>

            <li className="nav-item d-flex align-items-center ms-2">
              <LanguageToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
