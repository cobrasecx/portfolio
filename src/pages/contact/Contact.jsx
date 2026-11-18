// Contact.jsx — formulario de contacto ✉️ (ahora dentro de un modal, como Donations)
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import axios from 'axios'
import { Modal } from '../../components/pure/Modal'
import '../../styles/Contact.css'

const FORM_ENDPOINT =
  'https://formsubmit.co/ajax/203cf7fc5cf3429a39018970bed76969'

const FIELDS = [
  {
    name: 'name',
    type: 'text',
    labelKey: 'name',
    autoComplete: 'given-name',
    maxLength: 50,
  },
  {
    name: 'lastName',
    type: 'text',
    labelKey: 'lastName',
    autoComplete: 'family-name',
    maxLength: 50,
  },
  {
    name: 'email',
    type: 'email',
    labelKey: 'email',
    autoComplete: 'email',
    maxLength: 254,
  },
]

const INITIAL_FORM = { name: '', lastName: '', email: '', message: '' }

export const Contact = () => {
  const { t } = useTranslation()
  // 🆕 Antes el formulario se veía directo en la página. Ahora formOpen controla
  // si el Modal está montado o no (false = solo se ve el botón disparador)
  const [formOpen, setFormOpen] = useState(false)

  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleClean = () => setForm(INITIAL_FORM)

  const handleChange = ({ target: { name, value } }) =>
    setForm((prev) => ({ ...prev, [name]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    try {
      const { data } = await axios.post(FORM_ENDPOINT, form, {
        headers: { Accept: 'application/json' },
        timeout: 10000,
      })
      const failed = data?.success === false || data?.success === 'false'
      setStatus(failed ? 'error' : 'success')
    } catch (error) {
      // 📡 Si el navegador nunca pudo leer una respuesta (bloqueado, cancelado, timeout),
      // no hay forma de saber si FormSubmit igual procesó el envío del lado del servidor.
      if (error.response) {
        setStatus('error')
      } else {
        setStatus('unknown')
      }
    }
  }

  // 🔴 Botón "×" / Esc / clic en el fondo: SIEMPRE cierra todo, pase lo que pase
  // (salvo que esté enviando: ahí no dejamos cerrar para no perder el envío en curso)
  const handleModalClose = () => {
    if (status === 'sending') return
    if (status === 'success') handleClean() // si se había enviado bien, limpiamos para la próxima
    setStatus('idle')
    setFormOpen(false)
  }

  // 🟢 Botón "Cerrar" del resultado: distinto de handleModalClose a propósito.
  // Si fue error, en vez de cerrar todo, vuelve al formulario con lo que ya había escrito,
  // para que pueda corregir y reintentar sin perder los datos
  const handleResultClose = () => {
    if (status === 'success') {
      handleClean()
      setFormOpen(false)
    }
    setStatus('idle')
  }

  return (
    <section className="contact container text-center">
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.intro')}</p>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setFormOpen(true)}
      >
        {t('contact.openForm')}
      </button>

      {/* 🆕 El Modal solo se monta cuando formOpen es true */}
      {formOpen && (
        <Modal onClose={handleModalClose} label={t('contact.modalLabel')}>
          <div className="contact__card">
            <button
              type="button"
              className="btn-close btn-close-white contact__close"
              aria-label={t('contact.close')}
              onClick={handleModalClose}
            />

            {/* 🔀 Adentro del mismo modal: o ves el resultado, o ves el formulario */}
            {status === 'success' ||
            status === 'error' ||
            status === 'unknown' ? (
              <div className="text-center contact__result">
                <h2>
                  {status === 'success' && t('contact.result.success')}
                  {status === 'error' && t('contact.result.error')}
                  {status === 'unknown' && t('contact.result.unknown')}
                </h2>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleResultClose}
                >
                  {t('contact.close')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact__form container">
                {FIELDS.map(
                  ({ name, type, labelKey, autoComplete, maxLength }) => {
                    const label = t(`contact.fields.${labelKey}`)

                    return (
                      <input
                        key={name}
                        type={type}
                        name={name}
                        className="form-control contact__input w-100 mt-1"
                        placeholder={`${label}...`}
                        aria-label={label}
                        autoComplete={autoComplete}
                        maxLength={maxLength}
                        value={form[name]}
                        onChange={handleChange}
                        required
                      />
                    )
                  },
                )}

                <textarea
                  name="message"
                  className="form-control contact__input w-100 mt-1"
                  placeholder={`${t('contact.fields.message')}...`}
                  aria-label={t('contact.fields.message')}
                  rows={5}
                  maxLength={500}
                  value={form.message}
                  onChange={handleChange}
                  required
                />

                <div className="m-1">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending'
                      ? t('contact.sending')
                      : t('contact.send')}
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleClean}
                  >
                    {t('contact.clean')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Modal>
      )}
    </section>
  )
}
