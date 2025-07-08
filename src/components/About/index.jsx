import "./index.css";

function About() {
  return (
    <>
      <section className="home-deux">
        <article>
        <figure>
            <img src="/assets/images/altitude_people.jpg" alt="Altitude" />
          </figure>
        </article>
        <article>
          <p>
            Développeur web depuis 1994, je suis aussi formateur et professeur
            de management, et je suis à la recherche de nouvelles méthodes de
            communication et de formation.
          </p>
          <p>
            Nous avons servi des milliers d’étudiants, de jeunes professionnels
            et d’entreprises, les aidant à se lancer et à se perfectionner dans
            le monde numérique. Altitude a été reconnu pour son excellence,
            recevant des prix qui soulignent notre engagement envers l’éducation
            et le développement professionnel.
          </p>
        </article>
      </section>
      <section className="home-deux">
        <article>
          <p>
            Marc Augier est un expert en stratégie numérique avec plus de 20 ans
            d’expérience dans le domaine. Sa passion pour l’enseignement et le
            conseil l’a conduit à fonder Altitude. Marc a commencé Altitude avec
            l’idée de créer une plateforme où les professionnels pourraient
            transmettre leur savoir aux étudiants, les préparant ainsi à relever
            les défis du monde numérique.
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
