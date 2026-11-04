// NavBarSocial.jsx — iconos de redes sociales 🌐
import "bootstrap-icons/font/bootstrap-icons.css"; // 🎨 el CSS de los iconos vive donde se usa

// 📝 Los datos en un array: agregar una red = agregar UNA línea.
const SOCIALS = [
  { name: "GitHub", href: "https://github.com/cobrasecx", icon: "bi-github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/albertoayza", icon: "bi-linkedin" },
  { name: "YouTube", href: "https://www.youtube.com/@linuxexplorer1", icon: "bi-youtube" },
];

export const NavBarSocial = () => (
  <ul className="nav justify-content-center">
    {SOCIALS.map(({ name, href, icon }) => (
      // key: React necesita un identificador único por elemento de la lista 🔑
      <li className="nav-item" key={name}>
        <a
          href={href}
          className="nav-link text-white"
          style={{ fontSize: "40px" }} // el <i> hereda el tamaño, así se define una sola vez
          target="_blank" // abre en pestaña nueva
          rel="noopener noreferrer" // 🛡️ evita que la pestaña nueva controle a la tuya (tabnabbing)
          aria-label={name} // 🔊 un link con solo ícono no tiene texto: esto le da nombre al lector de pantalla
        >
          <i className={icon} aria-hidden="true"></i>
        </a>
      </li>
    ))}
  </ul>
);