// News.jsx — novedades y logros del momento 📰

// 📝 TUS NOVEDADES: una por objeto. Para agregar una, copiá un bloque y cambiá los datos.
// 📅 date: usá siempre el formato AAAA-MM-DD (ej. 2026-11-07) para que el orden funcione.
// 🏷️ tag: la categoría que aparece en la etiqueta (Achievement, Project, Idea...).
// 🔗 link: opcional. Si no hay link, la tarjeta simplemente no muestra el botón.
const NEWS = [
  {
    date: '2026-11-07',
    emoji: '🏆',
    tag: 'Achievement',
    title: 'Example: completed a TryHackMe room',
    text: 'Replace this with a short description of what you achieved.',
    link: 'https://tryhackme.com',
  },
  {
    date: '2026-11-01',
    emoji: '🚀',
    tag: 'Project',
    title: 'Example: working on a new project',
    text: 'Share what you are building and what you are learning along the way.',
  },
  {
    date: '2026-10-20',
    emoji: '💡',
    tag: 'Idea',
    title: 'Example: an idea I am exploring',
    text: 'A quick note about an idea you would like to turn into something real.',
  },
]

// 🔽 Ordenamos de la más nueva a la más vieja, UNA sola vez, afuera del componente.
// [...NEWS] hace una copia para no modificar el array original.
// localeCompare compara textos; como las fechas son AAAA-MM-DD, el orden alfabético = cronológico.
const sortedNews = [...NEWS].sort((a, b) => b.date.localeCompare(a.date))

export const News = () => (
  <section className="container py-3">
    <h2 className="text-center mb-4">News 📰</h2>

    {/* 🧱 Grilla de Bootstrap: 1 columna en celular, 2 en pantallas medianas y grandes */}
    <div className="row row-cols-1 row-cols-md-2 g-3">
      {sortedNews.map(({ date, emoji, tag, title, text, link }) => (
        // key único: combinamos fecha y título por si dos novedades comparten día
        <div className="col" key={`${date}-${title}`}>
          <article className="card text-bg-dark border-secondary h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="badge text-bg-info">
                  {emoji} {tag}
                </span>
                <small className="text-secondary">{date}</small>
              </div>
              <h3 className="h5 card-title">{title}</h3>
              <p className="card-text">{text}</p>

              {/* ✅ Solo se dibuja el botón si la novedad tiene link */}
              {link && (
                <a
                  href={link}
                  className="btn btn-sm btn-outline-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                  <i
                    className="bi bi-box-arrow-up-right ms-2"
                    aria-hidden="true"
                  ></i>
                </a>
              )}
            </div>
          </article>
        </div>
      ))}
    </div>
  </section>
)
