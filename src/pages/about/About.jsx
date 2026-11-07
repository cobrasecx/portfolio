// About.jsx — página "Sobre mí" 👤
import "../../styles/About.css";
import picCV from "../../assets/img/photo-cv-black-bg.png";

// 📝 Las URLs juntas arriba: si una cambia, se edita en un solo lugar
const LINKS = {
  inspt: "https://inspt.utn.edu.ar/",
  utn: "https://www.frba.utn.edu.ar/",
  career: "https://inspt.utn.edu.ar/carreras/informatica_aplicada/",
};

// 📊 Habilidades en un array de objetos: agregar o quitar una = editar UNA línea.
// ⚠️ Python venía de tu bio vieja: dejalo solo si sigue vigente.
const SKILL_GROUPS = [
  {
    title: "Security",
    skills: ["Web hacking", "Bug bounties & VDPs", "CTFs & labs", "Caido", "Kali Linux"],
  },
  {
    title: "Web development",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Bootstrap", "Git", "REST APIs"],
  },
  {
    title: "Also",
    skills: ["Linux", "Bash", "Python", "Web3 (studying)"],
  },
];

// Link externo seguro: pestaña nueva + noopener noreferrer 🛡️
const ExtLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export const About = () => (
  <section className="about">
    <div className="about__card text-center p-3">
      <h2>About:</h2>

      <p>
        Hi! I&apos;m Alberto Ayza, a cybersecurity student and junior ethical
        hacking researcher from Argentina. I focus on web hacking: I practice
        with bug bounty programs and VDPs, PortSwigger Web Security Academy
        labs, OWASP Juice Shop and CTFs, and I use Caido as my intercepting
        proxy.
      </p>

      <p>
        Before moving into security I worked as a full-stack web developer
        (JavaScript, React, Node.js, Express and MongoDB). That background helps
        me understand how web applications are built, and therefore how they
        break. I hold a{" "}
        <ExtLink href={LINKS.career}>
          Higher Technician degree in Applied Computing
        </ExtLink>{" "}
        (2022) from <ExtLink href={LINKS.inspt}>INSPT</ExtLink> -{" "}
        <ExtLink href={LINKS.utn}>UTN</ExtLink> in Buenos Aires.
      </p>

      <p>
        I&apos;m also a freelancer and entrepreneur, and I&apos;m currently studying
        Web3. If you want to talk about web development, security or a project,
        reach out through the Contact section.
      </p>

      {/* 🔁 Un grupo por cada elemento del array; adentro, una "pastilla" por habilidad */}
      {SKILL_GROUPS.map(({ title, skills }) => (
        <div key={title} className="about__group">
          <h3 className="h5">{title}</h3>
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
          className="img-fluid rounded-top img-thumbnail"
          alt="Photo of Alberto Ayza"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);