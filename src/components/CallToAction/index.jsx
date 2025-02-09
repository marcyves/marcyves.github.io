import PropTypes from "prop-types";

import "./index.css";

function CallToAction({ title, label }) {

  return (
<article className="call-to-action">
        <p>
          <strong>{title}</strong>
          <br />
          <button>{label}</button>
        </p>
      </article>);

    }

    CallToAction.propTypes = {
      title: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }
    
export default CallToAction;