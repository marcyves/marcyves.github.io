import PropTypes from "prop-types";
import "./index.css";

function CourseCard({ id, title, image, links }) {
  return (
    <div className="course-card">
      <img src={`/assets/images/${image}`} alt="" />
      <div className="course-text">
        <h2 className="caption" id={`cours-title-${id}`}>
          {title}
        </h2>
        <div className="links-bar">
          {links.map((link) => (
            <a
              className="button-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              key={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};

export default CourseCard;
