import Error from "../../components/Error";
import MiniHero from "../../components/MiniHero";

function NotFound({ type }) {
  return (
    <div>
      <MiniHero text={`Vous êtes perdu... et moi aussi`} />
      <Error type={type} />
    </div>
  );
}

export default NotFound;
