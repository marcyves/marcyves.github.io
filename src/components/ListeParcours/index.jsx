import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "../Card";

import "./index.css";

function ListeParcours({ liste_parcours, type }) {

  return (
    <div>
      <section className="parcours">
          <section className="parcours-gallery">
            {liste_parcours.map((parcours) => (
              <Link
                className="parcours-card-link"
                key={parcours.id}
                to={`/${type}/${parcours.id}`}
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

ListeParcours.propTypes = {
  liste_parcours: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default ListeParcours;
