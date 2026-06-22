import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFolderOpen,
  faGraduationCap,
  faAward,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import liste_parcours from "../../data/parcours.json";

import "./index.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featured = liste_parcours.slice(0, 3);

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-bg-glow" />
        <div className="container hero-content">
          <div className="hero-text">
            <span className="section-label">Consultant Transformation Digitale</span>
            <h1 className="hero-name">Marc Augier</h1>
            <h2 className="hero-role">
              Consultant <span className="accent">Transformation Digitale</span>
            </h2>
            <p className="hero-description">
              Accompagnement et formation pour votre ascension numérique.
              Je vous guide pas à pas dans votre transformation digitale,
              avec des parcours adaptés et une expertise terrain.
            </p>
            <div className="hero-tags">
              <span className="tag">React</span>
              <span className="tag">JavaScript</span>
              <span className="tag">WordPress</span>
              <span className="tag">Python</span>
            </div>
            <div className="hero-actions">
              <Link to="/formations/" className="btn btn-primary">
                Voir mes formations
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <a
                href="https://github.com/marcyves"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FontAwesomeIcon icon={faGithub} />
                Voir mon GitHub
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-card">
              <div className="code-preview">
                <div className="code-dots">
                  <span /><span /><span />
                </div>
                <pre>{`const altitude = {
  mission: "Transformer",
  expertise: ["Web", "Data", "Management"],
  passion: true
};`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <FontAwesomeIcon icon={faFolderOpen} className="stat-icon" />
            <span className="stat-number">3</span>
            <span className="stat-label">parcours de formation</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-card">
            <FontAwesomeIcon icon={faGraduationCap} className="stat-icon" />
            <span className="stat-number">18+</span>
            <span className="stat-label">mois de contenu</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-card">
            <FontAwesomeIcon icon={faAward} className="stat-icon" />
            <span className="stat-number">1</span>
            <span className="stat-label">spécialisation digitale</span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Formations</span>
              <h2 className="section-title">Parcours vedettes</h2>
            </div>
            <Link to="/formations/" className="see-all-link">
              Voir toutes les formations
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="projects-grid">
            {featured.map((parcours) => (
              <Link
                key={parcours.id}
                to={`/formation/${parcours.id}`}
                className="project-card card-dark"
              >
                <div className="project-image">
                  <img
                    src={`/assets/images/${parcours.image}`}
                    alt={parcours.title}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add("project-image-fallback");
                    }}
                  />
                </div>
                <div className="project-body">
                  <h3>{parcours.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: parcours.short_description.replace(/<br\/?>/g, " "),
                    }}
                  />
                  <div className="project-tags">
                    <span className="tag tag-accent">Formation</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-alt about-preview">
        <div className="container about-preview-inner">
          <div className="about-preview-text card-dark">
            <FontAwesomeIcon icon={faUser} className="about-icon" />
            <h2>À propos de moi</h2>
            <p>
              Consultant en transformation digitale, je ne me contente pas de
              transmettre des connaissances. Je vous accompagne pour que vous
              puissiez les appliquer concrètement dans vos projets
              professionnels et personnels.
            </p>
            <Link to="/a-propos" className="btn btn-outline-accent">
              En savoir plus sur mon parcours
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="about-preview-visual">
            <div className="about-illustration">
              <div className="illustration-glow" />
              <div className="illustration-content">
                <span className="illustration-icon">&lt;/&gt;</span>
                <p>Altitude — Votre Sherpa numérique</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
