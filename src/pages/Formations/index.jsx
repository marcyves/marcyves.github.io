import { useEffect } from "react";
import { Link } from "react-router-dom";

import Title from "../../components/Title";
import ListeParcours from "../../components/ListeParcours";
import liste_parcours from "../../data/parcours.json";

import "./index.css";

function Formations() {
  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-catalog">
      <Title
        title="Les formations"
        text="Choisissez un parcours, puis achetez le cours sur Udemy ou Tuto. Les certificats sont délivrés par la plateforme, pas par ce site."
      />
      <nav className="platform-pair" aria-label="Plateformes">
        <Link className="parcours-platform-link" to="/plateforme/4">
          Cours sur Udemy
        </Link>
        <Link className="parcours-platform-link" to="/plateforme/5">
          Cours sur Tuto
        </Link>
      </nav>
      <Title
        title="Les trois parcours"
        text="Développeur web, Python et data science, outils du manager."
      />
      <ListeParcours liste_parcours={liste_parcours} type="formation" />
    </div>
  );
}

export default Formations;
