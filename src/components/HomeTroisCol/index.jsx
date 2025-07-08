import "./index.css";

function HomeTroisCol() {
  return (
    <section className="home-trois">
      <article
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out">
        <h2>La cordée</h2>
        <h3>Ensemble, vers de nouveaux sommets.</h3>
        <img className="logo" src="/assets/images/cordee.jpg" alt="cordée"/>
        <p>
        Une cordée symbolise la collaboration, l’entraide et la progression collective. Dans le cadre de la transformation numérique, je suis à vos côtés pour :
        </p>
        <ul>
          <li><strong>Développer votre stratégie numérique :</strong> analyser vos besoins, définir vos objectifs et choisir les bons outils.</li>
          <li><strong>Renforcer vos compétences :</strong> des formations adaptées pour vous et votre équipe dans des domaines clés comme les systèmes d’information, le knowledge management ou le marketing digital.</li>
        </ul>
      </article>

      <article
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out">
        <h2>Le Refuge</h2>
        <h3>Un espace sûr pour se former et se ressourcer.</h3>
        <img className="logo" src="/assets/images/refuge.jpg" alt="refuge"/>
        <p>
           Comme un refuge, je vous offre un cadre fiable pour apprendre, expérimenter et bâtir des solutions solides.
           </p>
           <ul>
            <li><strong>Maîtrisez les fondamentaux techniques :</strong> HTML5, CSS3, PHP, JavaScript, Python, etc.
            </li>
            <li><strong>Plongez dans les outils adaptés :</strong> bases de données (SQL, MySQL), frameworks (Laravel), et CMS (WordPress, Moodle).</li>   
            <li><strong>Explorez les logiciels libres :</strong> des solutions performantes et accessibles, pour vous équiper en toute liberté.</li>
           </ul>
      </article>
      <article
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out">
        <h2>Le Sommet</h2>
        <h3>
        Votre objectif : atteindre de nouveaux horizons.
        </h3>
        <img className="logo" src="/assets/images/sommet.jpg" alt="sommet"/>
        <p>
        Le sommet représente vos ambitions numériques. Grâce à un accompagnement personnalisé et une expertise approfondie, je vous aide à :
        </p>
        <ul>
          <li>
          <strong>Optimiser vos processus :</strong> intégrer des solutions numériques qui transforment vos façons de travailler.</li>
          <li><strong>Innover :</strong>  adopter des approches digitales qui placent votre entreprise au cœur de la modernité.</li>
          <li><strong>Soutenir la performance :</strong>  garantir une mise en œuvre efficace et durable de vos projets.</li>
        </ul>
      </article>
    </section>
  );
}

export default HomeTroisCol;
