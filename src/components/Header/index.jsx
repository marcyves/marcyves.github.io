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
      <nav>
        <ul>
          {navLink.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                key={item.name}
                className={({ isActive }) => {
                  return isActive ? "active-link" : "";
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
