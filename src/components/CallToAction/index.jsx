import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./index.css";

function CallToAction({ title, label, link }) {
  return (
    <article className={title ? "call-to-action" : "cta-no-title"}>
      {title ? (
        <p>
          <strong>{title}</strong>
        </p>
      ) : null}
      <Link to={link} className="button-action">
        {label}
      </Link>
    </article>
  );
}

CallToAction.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CallToAction;
