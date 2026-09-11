import { useParams } from "react-router-dom";
import { useEffect } from "react";

import NotFound from "../NotFound";
import liste_cours from "../../data/cours.json";
import platform_data from "../../data/plateformes.json";
import CatalogHero from "../../components/CatalogHero";
import CatalogDesk from "../../components/CatalogDesk";

function Platform() {
  const { id } = useParams();
  const liste_cours_filtrée = liste_cours.filter(
    (data) => data.platform === id
  );
  const platform = platform_data.find((data) => data.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!platform || liste_cours_filtrée.length === 0) {
    return <NotFound type="no_course" />;
  }

  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  return (
    <div className="page-catalog">
      <CatalogHero
        title={`Cours sur ${platform.title}`}
        text={platform.description}
        image="montblanc.webp"
        imageAlt="Le massif du Mont-Blanc"
      />
      <CatalogDesk
        key={id}
        courses={liste_cours}
        initialPlatform={id}
      />
    </div>
  );
}

export default Platform;
