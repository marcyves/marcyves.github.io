import "./index.css";

function HomeDeuxCol() {
  return (
    <section className="home-deux">
 <article>
        <h2>Domaines d’Expertise</h2>
        <ul>
          <li>
            <strong>Management des Systèmes d’Information (MIS) :</strong>{" "}
            Concevoir et piloter des solutions numériques adaptées aux besoins
            de votre organisation.
          </li>
          <li>
            <strong>Knowledge Management :</strong> Exploiter efficacement les
            connaissances au sein de l’entreprise pour un meilleur partage et
            une productivité accrue.
          </li>
          <li>
            <strong>Réseaux Sociaux :</strong> Déployer des stratégies sociales
            innovantes pour dynamiser votre présence en ligne.
          </li>
          <li>
            <strong>Digital Marketing :</strong> Maîtriser les leviers
            numériques pour atteindre vos objectifs marketing.
          </li>
        </ul>
      </article>

      <article>
        <h2>Compétences Techniques :</h2>
        <ul>
          <li>
            <strong>Développement Web :</strong> HTML5, CSS3, PHP, JavaScript.
          </li>
          <li>
            <strong>Bases de Données :</strong> De la modélisation (MERISE, UML)
            à la pratique (SQL avec MySQL, PostgreSQL, MS Access).
          </li>
          <li>
            <strong>Programmation & Frameworks :</strong> Python, Symfony, et
            autres environnements performants.
          </li>
          <li>
            <strong>CMS & Plateformes d’Apprentissage :</strong> WordPress,
            Drupal, Joomla pour vos sites web, et Moodle, Claroline, ou Dokeos
            pour vos formations en ligne.
          </li>
        </ul>
      </article>

    </section>
  );
}

export default HomeDeuxCol;
