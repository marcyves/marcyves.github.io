import PropTypes from "prop-types";
import "./index.css";

function Col2({ col1, col2 }) {
  return (
    <section className="col2">
      <article
        data-aos="zoom-in-right"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        dangerouslySetInnerHTML={{ __html: col1 }}
      />
      <article
        data-aos="zoom-in-left"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        dangerouslySetInnerHTML={{ __html: col2 }}
      />
    </section>
  );
}

Col2.propTypes = {
  col1: PropTypes.node.isRequired,
  col2: PropTypes.node.isRequired,
};

export default Col2;
