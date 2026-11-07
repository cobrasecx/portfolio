// Donations.jsx — página de donaciones 💜
import { useState } from 'react'
import '../../styles/Donations.css'
import { Modal } from '../../components/pure/Modal'

// 🪙 TUS DIRECCIONES: reemplazá los datos de ejemplo por los tuyos.
// Agregar otra billetera = agregar UN objeto más a este array.
const WALLETS = [
    { emoji: '🟣', network: 'Ethereum (ETH)', address: 'PEGÁ_ACÁ_TU_DIRECCIÓN' },
    { emoji: '🟠', network: 'Bitcoin (BTC)', address: 'PEGÁ_ACÁ_TU_DIRECCIÓN' },
]

// 📋 Un ítem de la lista. Tiene su propio estado "copied" para que cada
// botón muestre "Copied!" de forma independiente.
const WalletItem = ({ emoji, network, address }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            // 📎 API del navegador para copiar al portapapeles (requiere HTTPS o localhost)
            await navigator.clipboard.writeText(address)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000) // ⏱️ vuelve a "Copy" a los 2 segundos
        } catch {
            // Si el navegador lo bloquea, igual se puede seleccionar el texto a mano
        }
    }

    return (
        <li className="donations__item">
            <strong>
                {emoji} {network}
            </strong>
            <code className="donations__address">{address}</code>
            <button
                type="button"
                className="btn btn-sm btn-outline-light"
                onClick={handleCopy}
            >
                <i
                    className={`bi ${copied ? 'bi-check2' : 'bi-clipboard'} me-1`}
                    aria-hidden="true"
                ></i>
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </li>
    )
}

export const Donations = () => {
    // 🔘 El estado "abierto/cerrado" vive acá, en la página; el Modal solo avisa (onClose)
    const [isOpen, setIsOpen] = useState(false)
    const close = () => setIsOpen(false)

    return (
        <section className="donations text-center p-3">
            <h2>Support my work 💜</h2>
            <p>
                If you enjoy my projects or my content, any contribution helps me keep
                learning, building and sharing. Thank you so much! 🙏
            </p>

            <button
                type="button"
                className="btn btn-success btn-lg"
                onClick={() => setIsOpen(true)}
            >
                <i className="bi bi-heart-fill me-2" aria-hidden="true"></i>
                Donate
            </button>

            {/* ✅ Solo se dibuja cuando isOpen es true */}
            {isOpen && (
                <Modal onClose={close} label="Donation addresses">
                    <div className="donations__card">
                        <button
                            type="button"
                            className="btn-close btn-close-white donations__close"
                            aria-label="Close"
                            onClick={close}
                        ></button>
                        <h3 className="h4">Choose a network 🪙</h3>
                        <p className="small">⚠️ Double-check the network before sending.</p>
                        <ul className="donations__list">
                            {WALLETS.map((wallet) => (
                                <WalletItem key={wallet.network} {...wallet} />
                            ))}
                        </ul>
                    </div>
                </Modal>
            )}
        </section>
    )
}