import "./index.css";
import PropTypes from "prop-types";

function HomeText({ title, subtitle, text }) {
  return (
    <section className="home-text">
      <article>
        <h2>{title}</h2>
        {subtitle ? <h3>{subtitle}</h3> : null}
        <p>{text}</p>
      </article>
    </section>
  );
}

HomeText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default HomeText;
