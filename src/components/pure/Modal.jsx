import { useEffect } from 'react'
import '../../styles/Modal.css' // ✅ import estático (antes era import(...) dinámico)

// onClose y label son opcionales: si no se pasan, el modal se comporta como antes
export const Modal = ({ children, onClose, label }) => {
  // ⌨️ Cierra con la tecla Esc. El return limpia el listener al desmontar el modal
  useEffect(() => {
    if (!onClose) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    // 🖱️ Clic en el fondo oscuro = cerrar
    <div className="modal is-open" onClick={onClose}>
      <div
        className="modal-div"
        role="dialog" // ♿ le dice al lector de pantalla "esto es un diálogo"
        aria-modal="true"
        aria-label={label}
        onClick={(e) => e.stopPropagation()} // 🛑 un clic adentro NO debe cerrarlo
      >
        {children}
      </div>
    </div>
  )
}