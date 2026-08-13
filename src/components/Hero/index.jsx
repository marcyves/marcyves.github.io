import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./index.css";

function Hero({ text, ctaLabel, ctaLink }) {
  return (
    <section id="hero">
      <div className="hero-copy">
        <h2>{text}</h2>
        {ctaLabel && ctaLink ? (
          <Link className="button-action hero-cta" to={ctaLink}>
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}

Hero.propTypes = {
  text: PropTypes.string.isRequired,
  ctaLabel: PropTypes.string,
  ctaLink: PropTypes.string,
};

export default Hero;
