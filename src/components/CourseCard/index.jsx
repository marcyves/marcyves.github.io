import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.css";
import CallToAction from "../CallToAction";

function CourseCard({ id, title, description, image, links }) {
  return (
    <div className="course-card">
      <img src={`/assets/images/${image}`} alt={title} />
      <h2 className="caption">{title}</h2>
      <CallToAction      
      title=""
      label="Détails"
      link={`/cours/${id}`}/>
      {links.map((link) => (
        <CallToAction
          key={link.name}
          title=""
          label={link.name}
          link={link.href}
        />
      ))}
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
