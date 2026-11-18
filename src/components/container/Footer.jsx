// Footer.jsx — pie de página global 🦶, visible en todas las páginas
import { NavBarSocial } from './NavBarSocial'

const YEAR = new Date().getFullYear()

export const Footer = () => (
  <footer className="bg-black py-4 text-center">
    <NavBarSocial />
    <p className="text-white-50 mb-0 mt-2">
      © {YEAR} Alberto Ayza (CobraSec). All rights reserved.
    </p>
  </footer>
)
