import PropTypes from "prop-types";

import "./index.css";
import { Link } from "react-router-dom";

function CallToAction({ title, label, link }) {

  return (
        
        <article 
        className={`${title != ""  ? "call-to-action" : "cta-no-title"}`}
        >
        <p>
          {title ? <><strong>{title}</strong><br /></> : <></>}
          <Link to={link}><button className="button-action">{label}</button></Link>
        </p>
      </article>);

    }

    CallToAction.propTypes = {
      title: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }
    
export default CallToAction;