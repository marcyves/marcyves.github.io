import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const icons = {
  twitter: faTwitter,
  facebook: faFacebook,
  linkedin: faLinkedin,
  github: faGithub,
  email: faEnvelope,
};

const links = [
  { key: "github", href: "https://github.com/marcyves", label: "GitHub" },
  { key: "linkedin", href: "https://linkedin.com/in/marcaugier", label: "LinkedIn" },
  { key: "email", href: "mailto:marc.augier@xdm-consulting.fr", label: "Email" },
  { key: "twitter", href: "https://x.com/marcyves", label: "X.com" },
  { key: "facebook", href: "https://facebook.com/marc.augier", label: "Facebook" },
];

function Socials({ variant = "default" }) {
  const displayLinks = variant === "footer"
    ? links.filter((l) => ["github", "linkedin", "email"].includes(l.key))
    : links;

  return (
    <nav className={`socials socials-${variant}`}>
      <ul>
        {displayLinks.map((link) => (
          <li key={link.key}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              className="icon"
              aria-label={link.label}
            >
              <FontAwesomeIcon icon={icons[link.key]} />
              {variant === "footer" && <span>{link.label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Socials.propTypes = {
  variant: PropTypes.oneOf(["default", "footer"]),
};

export default Socials;
