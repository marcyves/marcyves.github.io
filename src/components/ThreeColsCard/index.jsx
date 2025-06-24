import PropTypes from "prop-types";
import "./index.css";

const ThreeColsCard = ({ title, items }) => {
  return (
    <section className="three-cols-card">
    <h2 className="card-title"   
        data-aos="flip-up"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">{title}</h2>
      <div className="three-cols-content">
          {items.map((item, index) => (
            <div key={index} className="col3"
            dangerouslySetInnerHTML={{ __html: item }}>       
            </div>
          ))}
      </div>
    </section>
  );
};

ThreeColsCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThreeColsCard;
