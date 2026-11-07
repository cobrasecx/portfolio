// WriteUps.jsx — tabla de writeups (enlaces a GitHub) ✍️
import '../../styles/WriteUps.css'

// 📝 TUS WRITEUPS: una línea de datos por máquina. Para agregar una, copiá un bloque.
// 📅 date: formato AAAA-MM-DD (así el orden automático funciona)
// 🎮 platform: HackTheBox, TryHackMe, DockerLabs...
// 🔗 link: la URL del writeup en tu GitHub
const WRITEUPS = [
  {
    date: '2026-11-05',
    platform: 'HackTheBox',
    machine: 'Example-HTB-Machine',
    difficulty: 'Easy',
    link: 'https://github.com/cobrasecx',
  },
  {
    date: '2026-10-28',
    platform: 'TryHackMe',
    machine: 'Example-THM-Room',
    difficulty: 'Medium',
    link: 'https://github.com/cobrasecx',
  },
  {
    date: '2026-10-15',
    platform: 'DockerLabs',
    machine: 'Example-DockerLabs-Machine',
    difficulty: 'Fácil',
    link: 'https://github.com/cobrasecx',
  },
]

// 🔽 De la más nueva a la más vieja, igual que en News
const sortedWriteUps = [...WRITEUPS].sort((a, b) =>
  b.date.localeCompare(a.date),
)

export const WriteUps = () => (
  <section className="writeups container py-3">
    <h2 className="writeups__title text-center">Write-ups ✍️</h2>
    <p className="writeups__intro text-center">
      Walkthroughs of machines and rooms I have solved. Each one opens on my
      GitHub.
    </p>

    <table className="writeups__table">
      {/* 👁️ visually-hidden (Bootstrap): lo leen los lectores de pantalla, no se ve */}
      <caption className="visually-hidden">List of published write-ups</caption>
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Platform</th>
          <th scope="col">Machine</th>
          <th scope="col">Difficulty</th>
          <th scope="col">Write-up</th>
        </tr>
      </thead>
      <tbody>
        {sortedWriteUps.map(({ date, platform, machine, difficulty, link }) => (
          <tr key={`${platform}-${machine}`}>
            {/* 🏷️ data-label: el CSS lo usa en pantallas chicas como título de cada dato */}
            <td data-label="Date">{date}</td>
            <td data-label="Platform">{platform}</td>
            <td data-label="Machine" className="writeups__machine">
              {machine}
            </td>
            <td data-label="Difficulty">{difficulty}</td>
            <td data-label="Write-up">
              <a
                href={link}
                className="writeups__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github me-2" aria-hidden="true"></i>
                Read
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
)
