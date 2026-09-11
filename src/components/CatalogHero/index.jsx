import PropTypes from "prop-types";
import "./index.css";

function CatalogHero({ title, text, image, imageAlt }) {
  return (
    <section className="catalog-hero">
      <div className="catalog-hero-copy">
        <h2 className="mini-hero">{title}</h2>
        {text ? <p className="mini-hero">{text}</p> : null}
      </div>
      <img
        className="catalog-hero-photo"
        src={`/assets/images/${image}`}
        alt={imageAlt}
        width="640"
        height="400"
        decoding="async"
      />
    </section>
  );
}

CatalogHero.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default CatalogHero;
