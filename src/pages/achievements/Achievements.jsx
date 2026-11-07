// 📦 DATOS: separados de la vista.
// Para sumar un logro nuevo solo tocás este array, sin tocar el JSX.
const ACHIEVEMENTS = [
  {
    category: 'Cybersecurity',
    items: [
      {
        title: 'Linux Fundamentals',
        url: 'https://academy.hackthebox.com/achievement/845032/18',
      },
      {
        title: 'Using Metasploit Framework',
        url: 'https://academy.hackthebox.com/achievement/845032/39',
      },
      {
        title: 'Introduction to Web Applications',
        url: 'https://academy.hackthebox.com/achievement/845032/75',
      },
      {
        title: 'Introduction to Networking',
        url: 'https://academy.hackthebox.com/achievement/845032/34',
      },
    ],
  },
  {
    category: 'Web development',
    items: [
      {
        title: 'Frontend Development Libraries',
        url: 'https://www.freecodecamp.org/certification/betoayza/front-end-development-libraries',
      },
    ],
  },
]

// 🖼️ VISTA: recorre los datos y dibuja una sección por categoría.
export const Achievements = () => {
  return (
    <div className="text-center container">
      <h1>Achievements</h1>
      <div className="bg-dark d-inline-block p-2 rounded border border-3 border-success">
        {/* 🔁 Primer .map(): una <section> por categoría.
            `key` ayuda a React a identificar cada elemento de la lista. */}
        {ACHIEVEMENTS.map(({ category, items }) => (
          <section key={category}>
            <h3>{category}</h3>
            <ul className="list-unstyled">
              {/* 🔁 Segundo .map() (anidado): un <li> por logro. */}
              {items.map(({ title, url }) => (
                <li key={url}>
                  {/* 🔐 noopener noreferrer: la pestaña nueva no puede
                      manipular esta página ni recibe el referrer. */}
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
