import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "../../components/Card";

import "./index.css";

function Parcours({ courses_list }) {
  return (
    <div>
      <section className="parcours">
          <section className="parcours-gallery">
            {courses_list.map((parcours) => (
              <Link
                className="card-link"
                key={parcours.id}
                to={`/formation/${parcours.id}`}
              >
                <Card
                  key={parcours.id}
                  title={parcours.title}
                  description={parcours.description}
                  image={parcours.image}
                />
              </Link>
            ))}
          </section>
      </section>
    </div>
  );
}

Parcours.propTypes = {
  courses_list: PropTypes.array.isRequired,
};

export default Parcours;
