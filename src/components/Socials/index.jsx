import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const links = [
  { href: "https://x.com/marcyves", icon: faTwitter, label: "X" },
  {
    href: "https://facebook.com/marc.augier",
    icon: faFacebook,
    label: "Facebook",
  },
  {
    href: "https://linkedin.com/in/marcaugier",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/marcyves", icon: faGithub, label: "GitHub" },
  {
    href: "mailto:marc.augier@xdm-consulting.fr",
    icon: faEnvelope,
    label: "Courriel",
  },
];

function Socials() {
  return (
    <nav className="socials" aria-label="Réseaux et contact">
      <ul>
        {links.map((item) => (
          <li key={item.label}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.href}
              className="icon"
              aria-label={item.label}
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Socials;
