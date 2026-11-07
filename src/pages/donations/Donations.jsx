// Donations.jsx — página de donaciones 💜
import { useState } from 'react'
import '../../styles/Donations.css'
import { Modal } from '../../components/pure/Modal'

// 🔑 TUS DIRECCIONES: una sola vez cada una, copiadas directo desde tu billetera.
// Una dirección por "familia" de red (las EVM comparten la misma 0x).
const ADDRESSES = {
  tron: 'PEGÁ_ACÁ_TU_DIRECCIÓN_TRON', // empieza con T
  evm: 'PEGÁ_ACÁ_TU_DIRECCIÓN_EVM', // empieza con 0x (Ethereum, Base, Polygon...)
  bitcoin: 'PEGÁ_ACÁ_TU_DIRECCIÓN_BITCOIN', // empieza con bc1
}

// 🪙 UNA LÍNEA POR CADA COMBINACIÓN MONEDA + RED.
// Para sumar una moneda nueva: copiá una línea, cambiá los datos y listo.
// ⚠️ El nombre de la red debe ser igual al que muestra tu billetera.
const WALLETS = [
  {
    emoji: '💵',
    coin: 'Tether (USDT)',
    network: 'Tron (TRC-20)',
    address: ADDRESSES.tron,
  },
  {
    emoji: '🔵',
    coin: 'USD Coin (USDC)',
    network: 'Base',
    address: ADDRESSES.evm,
  },
  {
    emoji: '🟡',
    coin: 'Dai (DAI)',
    network: 'Ethereum (ERC-20)',
    address: ADDRESSES.evm,
  },
  {
    emoji: '🟠',
    coin: 'Bitcoin (BTC)',
    network: 'Bitcoin',
    address: ADDRESSES.bitcoin,
  },
]

// 📋 Un ítem de la lista. Tiene su propio estado "copied" para que cada
// botón muestre "Copied!" de forma independiente.
const WalletItem = ({ emoji, coin, network, address }) => {
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
        {emoji} {coin}
      </strong>
      {/* 🏷️ Etiqueta de Bootstrap con el nombre de la red */}
      <span className="badge text-bg-info ms-2">{network}</span>
      <code className="donations__address">{address}</code>
      {/* ⚠️ ACÁ va el aviso: entre la dirección y el botón Copy */}
      <p className="small text-warning mb-2">
        ⚠️ Send only {coin} through the {network} network
      </p>
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
                <WalletItem
                  key={`${wallet.coin}-${wallet.network}`}
                  {...wallet}
                />
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </section>
  )
}
