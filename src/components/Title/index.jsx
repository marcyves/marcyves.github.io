import PropTypes from "prop-types";
import "./index.css";

function Title({ title,text }) {
  return (
  <section>
    <h2 className="mini-hero"         data-aos="flip-up"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">{title}</h2>
    <p className="mini-hero"         data-aos="flip-down"
        data-aos-delay="10"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        dangerouslySetInnerHTML={{ __html: text }}></p>
  </section>);
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
