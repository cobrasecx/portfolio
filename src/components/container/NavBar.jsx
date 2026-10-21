import React from "react";
import { NavLink } from "react-router-dom";

const inactiveStyle = {
  textDecoration: "none",
  color: "#adff2f",
};

const activeStyle = {
  textDecoration: "none",
  color: "#ff8243",
};

const siteStyle = {
  color: "#7df9ff",
  fontStyle: "italic",
  fontWeight: "bold",
};

let activeClassName = "pastelOrange";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          className={"navbar-brand"}
        >
          <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
            My Portfolio
          </span>
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
            <li className="nav-item">
              <NavLink
                to={`/`}
                className={"nav-link"}
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="#"
                className={`nav-link dropdown-toggle ${({ isActive }) =>
                  isActive ? activeClassName : undefined}`}
                style={inactiveStyle}
                data-bs-toggle="dropdown" // importante
              >
                Proyects
              </NavLink>

              <ul
                className="dropdown-menu dropdown-menu-dark dropdown-menu-right text-center"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  {/* using <a> instead <NavLink> for external URLs */}
                  <a
                    href="https://cobrasecx.github.io/shopping-cart-siete-oro-frontend/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Siete de Oro: E-commerce</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/car-workshop-frontend/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>SuperCar Workshop</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/countries-cities/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Countries Cities</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/drum-machine/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Drum</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/song-finder/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Song Finder</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/markdown-previewer/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Markdown Previewer</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/random-quote-machine/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Random Quotes</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/dog-finder-2/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Dog Finder</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/pokedex/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Pokedex ES</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/music-band/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Music Band</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/js-calculator/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>JS Calculator</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/to-do-list/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>To Do List</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/notes/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Notes</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/contacts-list/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Contacts List</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/tasks-manager/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Tasks Manager</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/netflix-clone/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Netflix Clone</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/weather-app/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Weather App</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://cobrasecx.github.io/25-5-clock/"
                    className={"dropdown-item nav-link"}
                  >
                    <span style={siteStyle}>Pomodoro Clock</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/achievements`}
                className={"nav-link"}
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                Achievements
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/about`}
                className={"nav-link"}
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/contact`}
                className={"nav-link"}
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
