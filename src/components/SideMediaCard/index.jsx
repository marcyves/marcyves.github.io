import PropTypes from "prop-types";
import "./index.css";

const SideMediaCard = ({ imageSrc, title, items }) => {
  return (
    <section className="side-media-card">
    <h2 className="card-title"   
        data-aos="flip-up"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">{title}</h2>
      <div className="content">
      <div className="media">
        <img src={imageSrc} alt={title} className="media-image" />
      </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item"
            dangerouslySetInnerHTML={{ __html: item }}>
            
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

SideMediaCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SideMediaCard;
