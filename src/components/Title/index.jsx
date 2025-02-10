import PropTypes from "prop-types";
import "./index.css";

function Title({ text }) {
  return (
  <section>
    <h2 className="mini-hero">{text}</h2>
  </section>);
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
