import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Socials from "../Socials";

import "./index.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo">
            <FontAwesomeIcon icon={faCode} className="logo-icon" />
            <span>Altitude</span>
          </Link>
          <p className="footer-title">Consultant Transformation Digitale</p>
          <p className="footer-bio">
            Accompagnement et formation pour votre ascension numérique.
            Conseil, expertise et parcours adaptés à vos ambitions.
          </p>
          <p className="footer-copy">© Marc Augier | 2025</p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/formations/">Formations</Link></li>
            <li><Link to="/competences">Compétences</Link></li>
            <li><Link to="/a-propos">Parcours</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Réseaux</h4>
          <Socials variant="footer" />
          <div className="footer-cta">
            <p>Une question ?</p>
            <Link to="/contact" className="btn btn-primary">
              Me contacter
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>Développé avec ❤️ et React</p>
        <button className="back-to-top" onClick={scrollToTop} aria-label="Retour en haut">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
