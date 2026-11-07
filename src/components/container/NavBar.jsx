import { NavLink } from 'react-router-dom'

const inactiveStyle = {
  textDecoration: 'none',
  color: '#adff2f',
}

const activeStyle = {
  textDecoration: 'none',
  color: '#ff8243',
}

const siteStyle = {
  color: '#7df9ff',
  fontStyle: 'italic',
  fontWeight: 'bold',
}

// NavLink llama a esta función y le pasa { isActive }.
// Antes estaba repetida 5 veces; ahora se define una sola vez.
const linkStyle = ({ isActive }) => (isActive ? activeStyle : inactiveStyle)

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
    <NavLink to={to} className="nav-link" style={linkStyle}>
      {children}
    </NavLink>
  </li>
)

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" style={linkStyle} className="navbar-brand">
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
            <NavItem to="/">Home</NavItem>

            <li className="nav-item dropdown">
              <NavLink
                to="#"
                id="navbarDropdown"
                className="nav-link dropdown-toggle"
                style={inactiveStyle}
                data-bs-toggle="dropdown" // importante
              >
                Projects
              </NavLink>

              <ul
                className="dropdown-menu dropdown-menu-dark text-center"
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
                      <span style={siteStyle}>{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <NavItem to="/achievements">Achievements</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  )
}
