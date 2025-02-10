import Error from "../../components/Error";
import Title from "../../components/Title";

function NotFound({ type }) {
  return (
    <div>
      <Title text={`Vous êtes perdu... et moi aussi`} />
      <Error type={type} />
    </div>
  );
}

export default NotFound;
