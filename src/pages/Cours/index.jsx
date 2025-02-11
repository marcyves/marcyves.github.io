import { Link, useParams } from "react-router-dom";

import NotFound from "../NotFound";

import liste_cours from "../../data/cours.json";
import Title from "../../components/Title";
import { useEffect } from "react";

function Cours() {

  const { id } = useParams();
  const le_cours = liste_cours.find((data) => data.id === id);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  if (le_cours.length === 0) {
    return (
      <NotFound type="no_course" />
    )
  }

  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  return (
    <>
      <Title text="Détails du cours" />
      <h2>{le_cours.title}</h2>
      <section className="home-text">
        <p>
          Les détails de chaque formation sont pour l'instant uniquement
          disponibles sur les plateformes qui les hébergent. N'hésitez pas à
          aller directement les visiter ou vous pouvez aussi me contacter si
          vous souhaitez en savoir plus sur un formation en particulier.
        </p>
        {le_cours.links.map((link) => (
            <Link to={link.href} target="_blank" key={link.name}>
              <button className="button-link">{link.name}</button>
            </Link>
          ))}
      </section>
    </>
  );
}

export default Cours;
