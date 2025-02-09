import MiniHero from "../../components/MiniHero";
import ListeParcours from "../../components/ListeParcours";
import liste_parcours from "../../data/parcours.json";

function Formations() {
  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  return (
    <div>
      <MiniHero text="Les parcours de formation" />
      <ListeParcours liste_parcours={liste_parcours} />
    </div>
  );
}

export default Formations;
