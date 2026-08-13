import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CourseCard from "../CourseCard";

import "./index.css";

function ListeCours({ liste_cours }) {
  return (
    <div>
      <section className="cours">
        <section className="cours-gallery">
          {liste_cours.map((cours) => (
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
              />
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}

ListeCours.propTypes = {
  liste_cours: PropTypes.array.isRequired,
};

export default ListeCours;
