import { useParams } from "react-router-dom";
import { useEffect } from "react";

import NotFound from "../NotFound";
import liste_cours from "../../data/cours.json";
import parcours_data from "../../data/parcours.json";
import CatalogHero from "../../components/CatalogHero";
import CatalogDesk from "../../components/CatalogDesk";

function Formation() {
  const { id } = useParams();
  const liste_cours_filtrée = liste_cours.filter(
    (data) => data.parcours === id
  );
  const parcours = parcours_data.find((data) => data.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!parcours || liste_cours_filtrée.length === 0) {
    return <NotFound type="no_course" />;
  }

  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  return (
    <div className="page-catalog">
      <CatalogHero
        title={parcours.title}
        text={parcours.short_description}
        image={parcours.image}
        imageAlt=""
      />
      <CatalogDesk
        key={id}
        courses={liste_cours}
        initialParcours={id}
      />
    </div>
  );
}

export default Formation;
