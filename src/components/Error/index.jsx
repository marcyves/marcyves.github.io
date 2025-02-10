import "./index.css";

import PropTypes from 'prop-types'

function Error({ type }) {
  if (type === "") {
    type = "default";
  }

  const messages = [
    {
      type: "default",
      title: "Oops, quelque chose s'est mal passé",
      message:
        "Ne vous inquiétez pas, nous finirons tout de même par trouver ce que vous cherchiez.",
    },
    {
      type: "no_course",
      title: "Il n'y a pas encore de cours dans ce parcours",
      message: "Nous sommes en travaux, revenez bientôt pour voir apparaitre des nouveautés.",
    },
  ];

  const message = messages.find((data) => data.type === type);

  return (
    <section className="error">
      <h1>{message.title}</h1>
      <p>{message.message}</p>
    </section>
  );
}

Error.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Error;
