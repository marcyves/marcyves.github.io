import { useParams } from "react-router-dom";

import NotFound from "../NotFound";

import liste_cours from "../../data/cours.json";
import platform_data from "../../data/plateformes.json";
import Title from "../../components/Title";
import ListeCours from "../../components/ListeCours";

function Platform() {
  const { id } = useParams();
  const liste_cours_filtrée = liste_cours.filter((data) => data.platform === id);
  const platform = platform_data.find((data) => data.id === id);

  if (liste_cours_filtrée.length === 0 || platform.length === 0) {
    return (
      <NotFound type="no_course" />
    )
  }

  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  return (
    <div>
      <Title text={`Les cours de la plateforme ${platform.title}`} />
      <ListeCours liste_cours={liste_cours_filtrée} />
    </div>
  );
}

export default Platform;
