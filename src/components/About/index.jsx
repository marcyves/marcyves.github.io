import "./index.css";

function About() {
  return (
    <section className="home-deux">
      <article>
        <h2>Vous êtes sur le site de Marc Augier</h2>
        <p>
          Ingénieur et spécialiste des technologies Web depuis 1994 après une
          première expérience en environnement mainframe IBM. Docteur en
          Sciences de l’information et de la communication, mes centres
          d’intérêts sont les logiciels et la culture libre, les outils de
          représentation de la connaissance, les documents et bibliothèques
          numériques.
        </p>
        <p>
          Je suis un développeur web, je suis aussi un formateur et un
          enseignant, et je suis à la recherche de nouvelles méthodes de
          communication et de formation.
        </p>
      </article>

      <article>
        <figure>
          <img src="/assets/images/marcvatar.webp" alt="Marc Augier" />
        </figure>
      </article>
    </section>
  );
}

export default About;