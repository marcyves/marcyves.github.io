import "./index.css";
import PropTypes from "prop-types";

function HomeText({ title, subtitle, text }) {
  return (
    <section className="home-text">
      <article
        data-aos="zoom-in-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{text}</p>
      </article>
    </section>
  );
}

HomeText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HomeText;
