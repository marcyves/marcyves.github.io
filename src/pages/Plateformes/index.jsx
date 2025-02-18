import Title from "../../components/Title";
import ListeParcours from "../../components/ListeParcours";
import liste_platforme from "../../data/plateformes.json";
import { useEffect } from "react";

function Plateformes() {
  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title
        title="Les parcours de formation"
        text="Découvrez mes formations en ligne selon votre besoin et votre préférence d’apprentissage. Que vous souhaitiez explorer un domaine spécifique ou suivre mes cours sur une plateforme de votre choix, plusieurs options s’offrent à vous."
      />
      <Title
        title="Les formations par plateforme"
        text="Vous avez une plateforme préférée pour apprendre ? Retrouvez mes formations sur :
        <ul>
        <li>Udemy : Accédez à mes cours avec des vidéos détaillées, des exercices pratiques et un suivi structuré pour progresser à votre rythme.</li>
	      <li>Retrouvez mes cours en ligne et mes formations en ligne.</li>
        </ul>"
      />
      <ListeParcours liste_parcours={liste_platforme} type="plateforme" />
      <Title
        title="👉 Choisissez votre parcours et démarrez votre formation dès aujourd’hui !"
        text=""
        />
    </div>
  );
}

export default Plateformes;
