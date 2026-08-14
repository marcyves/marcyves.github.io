import { useParams } from "react-router-dom";
import { useEffect } from "react";

import NotFound from "../NotFound";
import liste_cours from "../../data/cours.json";
import Title from "../../components/Title";

import "./index.css";

function buyLabel(name) {
  if (name === "Udemy") return "Acheter sur Udemy";
  if (name === "Tuto") return "Acheter sur Tuto";
  return name;
}

function Cours() {
  const { id } = useParams();
  const le_cours = liste_cours.find((data) => data.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!le_cours) {
    return <NotFound type="no_course" />;
  }

  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  return (
    <div className="page-catalog">
      <Title title={le_cours.title} />
      <section className="course-detail">
        <article
          className="course-detail-copy"
          dangerouslySetInnerHTML={{ __html: le_cours.description }}
        />
        <aside className="course-detail-media">
          <img
            src={`/assets/images/${le_cours.image}`}
            alt=""
            width="352"
            height="198"
          />
          <div className="course-detail-actions">
            {le_cours.links.map((link) => (
              <a
                key={link.href}
                className="button-action"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {buyLabel(link.name)}
              </a>
            ))}
          </div>
          <p>
            Le programme détaillé est sur Udemy ou Tuto. Ouvrez le lien du cours
            pour acheter, ou écrivez-moi si vous hésitez entre deux formations.
          </p>
        </aside>
      </section>
    </div>
  );
}

export default Cours;
