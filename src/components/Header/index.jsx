import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./index.css";

function Header({ navLink }) {
  return (
    <header className="header">
      <h1>
        <NavLink className="header-logo" to="/">
          Altitude
        </NavLink>
      </h1>
      <nav aria-label="Principal">
        <ul>
          {navLink.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) => {
                  const primary = item.name === "Formations" ? "nav-primary" : "";
                  return [isActive ? "active-link" : "", primary]
                    .filter(Boolean)
                    .join(" ");
                }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  navLink: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
