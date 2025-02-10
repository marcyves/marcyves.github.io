import "./index.css";
import PropTypes from "prop-types";

function HomeText({title, subtitle, text}) {
  
  return (
    <section className="home-text">
      <article>
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
}

export default HomeText;
