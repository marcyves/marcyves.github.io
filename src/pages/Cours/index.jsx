import { useParams } from "react-router-dom";
import { useEffect } from "react";

import NotFound from "../NotFound";
import liste_cours from "../../data/cours.json";
import Title from "../../components/Title";
import Col2 from "../../components/Col2";

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

  const links = le_cours.links
    .map(
      (link) =>
        `<a class="button-link" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.name}</a>`
    )
    .join("");

  const col2 = `<img src="/assets/images/${le_cours.image}" alt="${le_cours.title}" /><div class="links-bar">${links}</div>`;

  return (
    <div className="page-catalog">
      <Title title={le_cours.title} text="Détail du cours" />
      <Col2 col1={le_cours.description} col2={col2} />
      <section className="home-text">
        <p>
          Le programme détaillé est sur Udemy ou Tuto. Ouvrez le lien du cours
          pour acheter, ou écrivez-moi si vous hésitez entre deux formations.
        </p>
      </section>
    </div>
  );
}

export default Cours;
