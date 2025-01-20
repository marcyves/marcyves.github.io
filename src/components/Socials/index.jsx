import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import './index.css'

function Socials() {
  return (
    <nav className="socials">
    <ul>
      <li><a href="https://twitter.com/marcyves" className="icon"><FontAwesomeIcon icon={faTwitter} alt="GitHub" /></a></li>
      <li><a href="https://facebook.com/marc.augier" className="icon"><FontAwesomeIcon icon={faFacebook} alt="GitHub" /></a></li>
      <li><a href="https://linkedin.com/in/marcaugier" className="icon"><FontAwesomeIcon icon={faLinkedin} alt="GitHub" /></a></li>
      <li><a href="https://github.com/marcyves" className="icon"><FontAwesomeIcon icon={faGithub} alt="GitHub" /></a></li>
      <li><a href="mailto:marc.augier@xdm-consulting.fr" className="icon"><FontAwesomeIcon icon={faEnvelope} alt="GitHub" /></a></li>
    </ul>
  </nav>
)
}

export default Socials
