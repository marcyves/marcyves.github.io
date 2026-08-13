import { useEffect } from "react";

import Hero from "../../components/Hero";
import HomeText from "../../components/HomeText";
import HomeDeuxCol from "../../components/HomeDeuxCol";
import HomeTroisCol from "../../components/HomeTroisCol";
import CallToAction from "../../components/CallToAction";
import ListeParcours from "../../components/ListeParcours";
import liste_parcours from "../../data/parcours.json";

function Home() {
  const root_id = document.getElementById("root");
  root_id.classList.remove("gradient");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero
        text="Bienvenue en Altitude"
        ctaLabel="Voir les formations"
        ctaLink="/formations/"
      />
      <div className="home-catalog">
        <HomeText
          title="Choisissez votre parcours"
          text="Cours en ligne par Marc Augier. Trois chemins, à votre rythme, sur Udemy et Tuto."
        />
        <ListeParcours liste_parcours={liste_parcours} type="formation" />
        <CallToAction
          title=""
          label="Voir toutes les formations"
          link="/formations/"
        />
      </div>
      <div className="home-more">
        <HomeDeuxCol />
        <HomeText
          title="Pourquoi me choisir comme Sherpa ?"
          text="Parce que je ne me contente pas de transmettre des connaissances. Je vous accompagne pour que vous puissiez les appliquer concrètement dans vos projets professionnels et personnels."
        />
        <HomeTroisCol />
        <CallToAction
          title="Prêtes et prêts à entamer votre ascension numérique ?"
          label="Voir les formations"
          link="/formations/"
        />
      </div>
    </div>
  );
}

export default Home;
