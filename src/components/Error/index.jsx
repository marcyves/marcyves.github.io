import "./index.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Error({ type }) {
  const messages = {
    default: {
      title: "Cette page n’existe pas",
      message: "Le lien est incorrect, ou la page a été déplacée.",
      actionLabel: "Voir les formations",
      actionHref: "/formations/",
    },
    no_course: {
      title: "Aucun cours dans ce parcours pour le moment",
      message: "Choisissez un autre parcours, ou parcourez tout le catalogue.",
      actionLabel: "Voir les formations",
      actionHref: "/formations/",
    },
  };

  const message = messages[type] || messages.default;

  return (
    <section className="error">
      <h1>{message.title}</h1>
      <p>{message.message}</p>
      <p>
        <Link className="button-action" to={message.actionHref}>
          {message.actionLabel}
        </Link>
      </p>
    </section>
  );
}

Error.propTypes = {
  type: PropTypes.string,
};

export default Error;
