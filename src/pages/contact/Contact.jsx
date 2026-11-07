// Contact.jsx — formulario de contacto ✉️
import { useState } from 'react'
import axios from 'axios'
import { Modal } from '../../components/pure/Modal'
import '../../styles/Contact.css'

// 🔗 Endpoint de FormSubmit. El código largo es un ALIAS que oculta tu email de los scrapers.
// No es un secreto, y ponerlo en .env no lo esconde: todo VITE_* termina en el bundle público.
const FORM_ENDPOINT =
  'https://formsubmit.co/ajax/203cf7fc5cf3429a39018970bed76969'

// 📝 Los datos de los inputs de una sola línea, en un array (mismo patrón .map() de NavBar)
const FIELDS = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    autoComplete: 'given-name',
    maxLength: 50,
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Lastname',
    autoComplete: 'family-name',
    maxLength: 50,
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    autoComplete: 'email',
    maxLength: 254,
  },
]

const INITIAL_FORM = { name: '', lastName: '', email: '', message: '' }

export const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM)

  // 🚦 UN solo estado para la etapa del envío, en vez de modal + isSended:
  // "idle" (escribiendo) | "sending" (enviando) | "success" | "error"
  const [status, setStatus] = useState('idle')

  const handleClean = () => setForm(INITIAL_FORM)

  // Forma funcional (prev => ...): siempre parte del estado más reciente 🔄
  const handleChange = ({ target: { name, value } }) =>
    setForm((prev) => ({ ...prev, [name]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return // 🛑 evita el doble envío

    setStatus('sending')
    try {
      // axios.post(url, datos, config). Con un objeto, axios arma el JSON y su Content-Type solo.
      const { data } = await axios.post(FORM_ENDPOINT, form, {
        headers: { Accept: 'application/json' },
        timeout: 10000, // 10 s: 3 s era muy justo para un servicio externo
      })

      // axios ya lanza error si el status no es 2xx. Por las dudas, también tratamos
      // como error una respuesta que diga explícitamente success: false / "false".
      const failed = data?.success === false || data?.success === 'false'
      setStatus(failed ? 'error' : 'success')
    } catch {
      // 🌐 Sin red, timeout o error del servidor: ahora SÍ se lo avisamos al usuario
      setStatus('error')
    }
  }

  const handleClose = () => {
    // Limpiamos solo si se envió. Si falló, conserva lo que escribió ✍️
    if (status === 'success') handleClean()
    setStatus('idle')
  }

  // 🎯 Early return: si ya hay resultado, mostramos el modal y listo.
  // Un solo bloque en lugar de dos casi iguales.
  if (status === 'success' || status === 'error') {
    return (
      <Modal>
        <div className="text-center contact__result">
          <h2>
            {status === 'success' ? 'Mensaje enviado ;)' : 'Hubo un error :('}
          </h2>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClose}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    )
  }

  return (
    <section className="contact container text-center">
      <h2>Contact:</h2>
      <form onSubmit={handleSubmit} className="contact__form container">
        {FIELDS.map(({ name, type, label, autoComplete, maxLength }) => (
          <input
            key={name} // 🔑 identificador único para cada elemento de la lista
            type={type}
            name={name}
            className="form-control contact__input w-100 mt-1"
            placeholder={`${label}...`}
            aria-label={label} // 🔊 el placeholder no reemplaza a un label
            autoComplete={autoComplete} // ayuda al navegador a autocompletar
            maxLength={maxLength}
            value={form[name]}
            onChange={handleChange}
            required
          />
        ))}

        <textarea
          name="message"
          className="form-control contact__input w-100 mt-1"
          placeholder="Message..."
          aria-label="Message"
          rows={5}
          maxLength={500}
          value={form.message}
          onChange={handleChange}
          required
        />

        <div className="m-1">
          {/* disabled mientras envía: no se puede clickear dos veces */}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>

          {/* type="button": ahora la limpieza la hace solo el onClick, sin el reset nativo */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClean}
          >
            Clean
          </button>
        </div>
      </form>
    </section>
  )
}
