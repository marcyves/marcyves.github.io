import Hero from "../../components/Hero";
import HomeText from "../../components/HomeText";
import HomeDeuxCol from "../../components/HomeDeuxCol";
import HomeTroisCol from "../../components/HomeTroisCol";

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
      <article className="call-to-action">
        <p>
          <strong>Prêt.e.s à entamer votre ascension numérique ?</strong>
          <br />
          <button>Commencez maintenant</button>
        </p>
      </article>
    </div>
  );
}

export default Home;
