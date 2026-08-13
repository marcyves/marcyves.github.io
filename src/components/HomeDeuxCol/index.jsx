import { Link } from "react-router-dom";

import "../Col2/index.css";
import "./index.css";

function HomeDeuxCol() {
  return (
    <section className="home-deux home-expertise">
      <article
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <h2>Domaines d’expertise</h2>
        <p>
          Je suis Marc Augier, formateur et professeur de management.
          Développeur web depuis 1994, j’enseigne ce que je pratique&nbsp;:
          concevoir un système d’information, piloter un projet, et former par
          la pratique. Mes cours en ligne sont sur Udemy et Tuto.
        </p>
        <p>
          Docteur en sciences de l’information et de la communication, j’ai
          dirigé le département Organisation et Systèmes d’Information de SKEMA
          Business School, après avoir été consultant organisation et
          technologie chez Accenture. Les deux domaines ci-dessous sont le fil
          de ce parcours — et le cœur du catalogue.
        </p>

        <h3>Management des systèmes d’information (MIS)</h3>
        <p>
          Un système d’information n’est pas un logiciel isolé. C’est la façon
          dont une organisation capture, structure et utilise ses données. Je
          forme à le concevoir et à le piloter&nbsp;: modélisation MERISE et
          UML, bases de données relationnelles (MySQL, MariaDB, Microsoft
          Access), développement web (HTML, CSS, JavaScript, PHP, Laravel,
          React, WordPress), Python et data science.
        </p>
        <p>
          Côté organisation, je relie le SI à la transformation numérique, au
          knowledge management et à l’e-learning — le même fil que j’ai tenu en
          créant le Learning Lab de SKEMA. Le{" "}
          <Link to="/formation/1">parcours Développeur Web</Link> et le{" "}
          <Link to="/formation/2">parcours Python et Data Science</Link> en
          sont la carte pratique.
        </p>

        <h3>Gestion de projet</h3>
        <p>
          La gestion de projet, je l’enseigne comme je l’ai exercée&nbsp;:
          cadrer, prioriser, livrer. Méthodes Agile et Scrum, coordination
          d’équipes, indicateurs de performance et reporting. Pas un discours de
          process&nbsp;: des outils que vous utilisez dès le lendemain — Excel
          (tableaux de bord, Solver), mind mapping, documentation bilingue.
        </p>
        <p>
          C’est le cœur du{" "}
          <Link to="/formation/3">parcours Outils du manager</Link>&nbsp;:
          rendre visible ce qui se passe, décider, et faire avancer le projet —
          en développement logiciel comme en transformation digitale.
        </p>
      </article>
    </section>
  );
}

export default HomeDeuxCol;
