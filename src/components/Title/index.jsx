import PropTypes from "prop-types";
import "./index.css";

function Title({ title, text }) {
  return (
    <section className="page-header container">
      <span className="section-label">Altitude</span>
      <h2>{title}</h2>
      {text && (
        <p
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </section>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
