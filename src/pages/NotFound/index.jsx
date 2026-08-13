import Error from "../../components/Error";
import Title from "../../components/Title";

function NotFound({ type }) {
  return (
    <div className="page-catalog">
      <Title title="Page introuvable" text="" />
      <Error type={type} />
    </div>
  );
}

export default NotFound;
