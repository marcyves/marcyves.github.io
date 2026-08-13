import "./index.css";

function About() {
  return (
    <>
      <section className="home-deux">
        <article>
          <figure>
            <img
              src="/assets/images/altitude_people.jpg"
              alt="Personne en formation"
            />
          </figure>
        </article>
        <article>
          <p>
            Développeur web depuis 1994, je suis aussi formateur et professeur
            de management. Je cherche encore, cours après cours, des façons
            plus claires d’enseigner.
          </p>
          <p>
            Mes cours sont sur Udemy et Tuto, regroupés en trois parcours :
            développeur web, Python et data science, outils du manager.
          </p>
        </article>
      </section>
      <section className="home-deux">
        <article>
          <p>
            J’ai créé Altitude comme un catalogue : un endroit pour me
            trouver, choisir un parcours, et acheter la formation sur la
            plateforme qui l’héberge. L’accompagnement, c’est construire avec
            vous — pas seulement transmettre un cours.
          </p>
        </article>

        <article>
          <figure>
            <img src="/assets/images/altitude_marc.jpg" alt="Marc Augier" />
          </figure>
        </article>
      </section>
    </>
  );
}

export default About;
