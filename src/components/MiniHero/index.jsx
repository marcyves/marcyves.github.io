import PropTypes from "prop-types";
import "./index.css";

function MiniHero({ text }) {
  return (
  <section>
    <h2 className="mini-hero">{text}</h2>
  </section>);
}

MiniHero.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MiniHero;
