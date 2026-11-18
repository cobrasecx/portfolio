// About.jsx — página "Sobre mí" 👤
import { useTranslation, Trans } from 'react-i18next'
import '../../styles/About.css'
import picCV from '../../assets/img/photo-cv-black-bg.webp'

const LINKS = {
  inspt: 'https://inspt.utn.edu.ar/',
  utn: 'https://www.frba.utn.edu.ar/',
  career: 'https://inspt.utn.edu.ar/carreras/informatica_aplicada/',
}

// 🆕 "id" en vez de "title": es la clave para buscar la traducción en about.groups,
// "skills" queda igual porque los nombres de tecnologías no se traducen (JavaScript es JavaScript en cualquier idioma)
const SKILL_GROUPS = [
  {
    id: 'security',
    skills: [
      'Web hacking',
      'Bug bounties & VDPs',
      'CTFs & labs',
      'Caido',
      'Kali Linux',
    ],
  },
  {
    id: 'webDev',
    skills: [
      'JavaScript',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'HTML',
      'CSS',
      'Bootstrap',
      'Git',
      'REST APIs',
    ],
  },
  {
    id: 'also',
    skills: ['Linux', 'Bash', 'Python', 'Web3 (studying)'],
  },
]

const ExtLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

export const About = () => {
  const { t } = useTranslation()

  return (
    <section className="about">
      <div className="about__card text-center p-3">
        <h2>{t('about.title')}</h2>

        <p>{t('about.paragraph1')}</p>

        {/* 🆕 <Trans>: como el párrafo lleva 3 links adentro, no alcanza con t().
            "components" le dice a Trans qué elemento real va en cada hueco numerado
            del JSON (<1>, <3>, <5>), en el mismo orden en que aparecen */}
        <p>
          <Trans
            i18nKey="about.paragraph2"
            components={{
              1: <ExtLink href={LINKS.career} />,
              3: <ExtLink href={LINKS.inspt} />,
              5: <ExtLink href={LINKS.utn} />,
            }}
          />
        </p>

        <p>{t('about.paragraph3')}</p>

        {SKILL_GROUPS.map(({ id, skills }) => (
          <div key={id} className="about__group">
            <h3 className="h5">{t(`about.groups.${id}`)}</h3>
            <ul className="about__skills">
              {skills.map((skill) => (
                <li key={skill} className="about__skill ability">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="container mb-2">
          <img
            src={picCV}
            className="about__photo rounded-circle"
            alt={t('about.photoAlt')}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
