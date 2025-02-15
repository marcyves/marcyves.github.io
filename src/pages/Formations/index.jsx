import Title from "../../components/Title";
import ListeParcours from "../../components/ListeParcours";
import liste_parcours from "../../data/parcours.json";
import liste_platforme from "../../data/plateformes.json";
import { useEffect } from "react";

function Formations() {
  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Title text="Les parcours de formation" />
      <ListeParcours liste_parcours={liste_parcours} type="formation" />
      <Title text="Les formations par plateforme" />
      <ListeParcours liste_parcours={liste_platforme} type="plateforme" />
    </div>
  );
}

export default Formations;
