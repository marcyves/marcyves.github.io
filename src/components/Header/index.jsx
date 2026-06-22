import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDownload } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

function Header({ navLink }) {
  return (
    <header className="header">
      <div className="header-inner container">
        <h1 className="header-brand">
          <NavLink className="header-logo" to="/">
            <FontAwesomeIcon icon={faCode} className="logo-icon" />
            <span>Altitude</span>
          </NavLink>
        </h1>
        <nav className="header-nav">
          <ul>
            {navLink.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="/assets/cv-marc-augier.pdf"
          className="btn btn-outline-accent header-cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDownload} />
          Voir mon CV
        </a>
      </div>
    </header>
  );
}

Header.propTypes = {
  navLink: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
