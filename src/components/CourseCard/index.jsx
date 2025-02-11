import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";

function CourseCard({ id, title, description, image, links }) {
  return (
    <div className="course-card">
      <img src={`/assets/images/${image}`} alt={title} />
      <div className="course-text">
        <h2 className="caption">{title}</h2>
        <div className="links-bar">
          <Link to={`/cours/${id}`} target="_blank">
            <button className="button-link">Détails</button>
          </Link>
          {links.map((link) => (
            <Link to={link.href} target="_blank" key={link.name}>
              <button className="button-link">{link.name}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};

export default CourseCard;
