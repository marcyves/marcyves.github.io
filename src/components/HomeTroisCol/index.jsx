import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import "./index.css";

const COLUMNS = [
  {
    id: "cordee",
    title: "La cordée",
    subtitle: "Ensemble, vers de nouveaux sommets.",
    image: "/assets/images/cordee.jpg",
    alt: "Cordée en montagne",
    body: (
      <>
        <p>
          Une cordée symbolise la collaboration, l’entraide et la progression
          collective. Dans le cadre de la transformation numérique, je suis à
          vos côtés pour&nbsp;:
        </p>
        <ul>
          <li>
            <strong>Développer votre stratégie numérique&nbsp;:</strong>{" "}
            analyser vos besoins, définir vos objectifs et choisir les bons
            outils.
          </li>
          <li>
            <strong>Renforcer vos compétences&nbsp;:</strong> des formations
            adaptées pour vous et votre équipe dans des domaines clés comme les
            systèmes d’information, le knowledge management ou le marketing
            digital.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "refuge",
    title: "Le Refuge",
    subtitle: "Un espace sûr pour se former et se ressourcer.",
    image: "/assets/images/refuge.jpg",
    alt: "Refuge de montagne",
    body: (
      <>
        <p>
          Comme un refuge, je vous offre un cadre fiable pour apprendre,
          expérimenter et bâtir des solutions solides.
        </p>
        <ul>
          <li>
            <strong>Maîtrisez les fondamentaux techniques&nbsp;:</strong> HTML5,
            CSS3, PHP, JavaScript, Python, etc.
          </li>
          <li>
            <strong>Plongez dans les outils adaptés&nbsp;:</strong> bases de
            données (SQL, MySQL), frameworks (Laravel), et CMS (WordPress,
            Moodle).
          </li>
          <li>
            <strong>Explorez les logiciels libres&nbsp;:</strong> des solutions
            performantes et accessibles, pour vous équiper en toute liberté.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sommet",
    title: "Le Sommet",
    subtitle: "Votre objectif : atteindre de nouveaux horizons.",
    image: "/assets/images/sommet.jpg",
    alt: "Sommet de montagne",
    body: (
      <>
        <p>
          Le sommet représente vos ambitions numériques. Grâce à un
          accompagnement personnalisé et une expertise approfondie, je vous
          aide à&nbsp;:
        </p>
        <ul>
          <li>
            <strong>Optimiser vos processus&nbsp;:</strong> intégrer des
            solutions numériques qui transforment vos façons de travailler.
          </li>
          <li>
            <strong>Innover&nbsp;:</strong> adopter des approches digitales qui
            placent votre entreprise au cœur de la modernité.
          </li>
          <li>
            <strong>Soutenir la performance&nbsp;:</strong> garantir une mise en
            œuvre efficace et durable de vos projets.
          </li>
        </ul>
      </>
    ),
  },
];

function HomeTroisCol() {
  const titleId = useId();
  const dialogRef = useRef(null);
  const [openId, setOpenId] = useState(null);
  const openColumn = COLUMNS.find((column) => column.id === openId) ?? null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openId && !dialog.open) {
      dialog.showModal();
    }
  }, [openId]);

  return (
    <section className="home-trois">
      {COLUMNS.map((column) => (
        <article
          key={column.id}
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <button
            type="button"
            className="home-trois-hit"
            aria-haspopup="dialog"
            aria-expanded={openId === column.id}
            aria-labelledby={`home-trois-title-${column.id}`}
            onClick={() => setOpenId(column.id)}
          />
          <h2 id={`home-trois-title-${column.id}`}>{column.title}</h2>
          <img className="logo" src={column.image} alt={column.alt} />
        </article>
      ))}
      {createPortal(
        <dialog
          ref={dialogRef}
          className="home-trois-modal"
          aria-labelledby={titleId}
          onClose={() => setOpenId(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              event.currentTarget.close();
            }
          }}
        >
          {openColumn ? (
            <>
              <h2 id={titleId}>{openColumn.title}</h2>
              <h3>{openColumn.subtitle}</h3>
              {openColumn.body}
              <button
                type="button"
                className="button-action"
                onClick={() => dialogRef.current?.close()}
              >
                Fermer
              </button>
            </>
          ) : null}
        </dialog>,
        document.body
      )}
    </section>
  );
}

export default HomeTroisCol;
