import { useParams } from "react-router-dom";

import NotFound from "../NotFound";

import liste_cours from "../../data/cours.json";
import parcours_data from "../../data/parcours.json";

import Title from "../../components/Title";
import ListeCours from "../../components/ListeCours";
import { useEffect } from "react";

function Formation() {
  const { id } = useParams();
  const liste_cours_filtrée = liste_cours.filter(
    (data) => data.parcours === id
  );
  const parcours = parcours_data.find((data) => data.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (liste_cours_filtrée.length === 0 || parcours.length === 0) {
    return <NotFound type="no_course" />;
  }

  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  return (
    <div>
      <Title
        title={`Le parcours ${parcours.title}`}
        text={parcours.description}
      />
      <ListeCours liste_cours={liste_cours_filtrée} />
    </div>
  );
}

export default Formation;
