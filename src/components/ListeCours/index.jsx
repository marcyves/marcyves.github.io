import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CourseCard from "../CourseCard";
import liste_parcours from "../../data/parcours.json";

import "./index.css";

function parcoursLabel(title) {
  return title.replace(/^Parcours\s+/i, "");
}

function ListeCours({ liste_cours }) {
  return (
    <div>
      <section className="cours">
        <section className="cours-gallery">
          {liste_cours.map((cours) => {
            const parcours = liste_parcours.find(
              (item) => item.id === cours.parcours
            );
            return (
              <div className="card-link" key={cours.id}>
                <Link
                  className="course-card-hit"
                  to={`/cours/${cours.id}`}
                  aria-labelledby={`cours-title-${cours.id}`}
                />
                <CourseCard
                  id={cours.id}
                  title={cours.title}
                  image={cours.image}
                  links={cours.links}
                  parcours={
                    parcours ? parcoursLabel(parcours.title) : undefined
                  }
                />
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
}

ListeCours.propTypes = {
  liste_cours: PropTypes.array.isRequired,
};

export default ListeCours;
