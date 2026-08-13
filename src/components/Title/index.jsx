import PropTypes from "prop-types";
import "./index.css";

function Title({ title, text }) {
  return (
    <section className="page-lead">
      {title ? <h2 className="mini-hero">{title}</h2> : null}
      {text ? (
        <p
          className="mini-hero"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ) : null}
    </section>
  );
}

Title.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};

export default Title;
