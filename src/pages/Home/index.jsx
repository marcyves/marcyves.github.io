import Hero from "../../components/Hero";
import HomeText from "../../components/HomeText";
import HomeDeuxCol from "../../components/HomeDeuxCol";
import HomeTroisCol from "../../components/HomeTroisCol";
import CallToAction from "../../components/CallToAction";

function Home() {
  const root_id = document.getElementById('root');
  root_id.classList.remove('gradient');

  return (
    <div>
      <Hero text="Bienvenue en Altitude" />
      <HomeText
        title="Un Sherpa numérique à votre écoute"
        subtitle="Accompagner votre transformation numérique pas à pas"
        text="Altitude est un service de conseil et de formation pour les étudiants, les professionnels et les entreprises qui cherchent à se lancer dans le monde numérique. Nous sommes une équipe de professionnels et d'étudiants qui partagent leur expérience et leurs connaissances pour vous accompagner dans votre parcours."
      />
      <HomeDeuxCol />
      <HomeText
      title="Pourquoi me choisir comme Sherpa ?"
      subtitle=""
      text="          Parce que je ne me contente pas de transmettre des connaissances. Je
          vous accompagne pour que vous puissiez les appliquer concrètement dans
          vos projets professionnels et personnels."
    />
      <HomeTroisCol />
      <CallToAction 
      title="Prêtes et prêts à entamer votre ascension numérique ?"
      label="Commencez maintenant"
      link="/formations"
      />
    </div>
  );
}

export default Home;
