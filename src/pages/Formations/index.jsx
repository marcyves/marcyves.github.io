import { useEffect } from "react";

import CatalogHero from "../../components/CatalogHero";
import CatalogDesk from "../../components/CatalogDesk";
import liste_cours from "../../data/cours.json";

function Formations() {
  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-catalog">
      <CatalogHero
        title="Les formations"
        text="Choisissez un parcours, puis achetez le cours sur Udemy ou Tuto. Les certificats sont délivrés par la plateforme, pas par ce site."
        image="montblanc.webp"
        imageAlt="Le massif du Mont-Blanc"
      />
      <CatalogDesk courses={liste_cours} />
    </div>
  );
}

export default Formations;
