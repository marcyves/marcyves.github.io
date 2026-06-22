import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPenRuler,
  faCode,
  faCheckSquare,
  faRocket,
  faBookOpen,
  faShieldHalved,
  faPuzzlePiece,
  faPeopleGroup,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import skillsData from "../../data/skills.json";

import "./index.css";

const softSkills = [
  { icon: faBookOpen, title: "Apprentissage continu", description: "Veille permanente sur les technologies et méthodes." },
  { icon: faShieldHalved, title: "Rigueur & qualité", description: "Des formations structurées et des livrables soignés." },
  { icon: faPuzzlePiece, title: "Résolution de problèmes", description: "Approche pragmatique pour vos défis numériques." },
  { icon: faPeopleGroup, title: "Travail en équipe", description: "Collaboration et entraide au cœur de ma démarche." },
  { icon: faUserGear, title: "Autonomie", description: "Capacité à mener des projets de bout en bout." },
];

const learning = ["TypeScript", "Next.js", "Docker", "IA générative", "Flutter"];

const methodology = [
  { icon: faLightbulb, step: "Comprendre", description: "Analyser vos besoins et objectifs" },
  { icon: faPenRuler, step: "Concevoir", description: "Structurer le parcours adapté" },
  { icon: faCode, step: "Développer", description: "Créer les contenus et outils" },
  { icon: faCheckSquare, step: "Tester", description: "Valider avec les apprenants" },
  { icon: faRocket, step: "Livrer", description: "Déployer et accompagner" },
];

function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="skills-page">
      <section className="skills-hero page-section">
        <div className="container">
          <span className="section-label">Compétences</span>
          <h1 className="section-title">Mes compétences<span className="accent-dot">.</span></h1>
          <p className="skills-intro">
            Une expertise transversale en transformation digitale, du développement
            web à la gestion de projet, pour vous accompagner à chaque étape.
          </p>
        </div>
      </section>

      <section className="page-section page-section-alt">
        <div className="container">
          <h2 className="subsection-title">Compétences techniques</h2>
          <div className="skills-grid">
            {skillsData.map((group) => (
              <div key={group.category} className="skill-category card-dark">
                <h3>{group.category}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="skill-header">
                        <span>{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className="subsection-title">Compétences comportementales</h2>
          <div className="soft-skills-grid">
            {softSkills.map((skill) => (
              <div key={skill.title} className="soft-skill-card card-dark">
                <FontAwesomeIcon icon={skill.icon} className="soft-skill-icon" />
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-alt">
        <div className="container">
          <h2 className="subsection-title">En cours d&apos;apprentissage</h2>
          <div className="learning-tags">
            {learning.map((tech) => (
              <span key={tech} className="tag tag-accent">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className="subsection-title">Ma méthodologie</h2>
          <div className="methodology-flow">
            {methodology.map((step, index) => (
              <div key={step.step} className="methodology-step">
                <div className="methodology-card card-dark">
                  <FontAwesomeIcon icon={step.icon} className="methodology-icon" />
                  <h3>{step.step}</h3>
                  <p>{step.description}</p>
                </div>
                {index < methodology.length - 1 && (
                  <span className="methodology-arrow">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
