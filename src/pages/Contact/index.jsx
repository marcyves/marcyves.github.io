import Title from "../../components/Title";

function Contact() {
  const root_id = document.getElementById('root');
  root_id.classList.add('gradient');

  return (
    <div>
      <Title title="Contact" text="Vous souhaitez en savoir plus sur mes formations ? Vous avez des questions sur mes parcours ? Contactez-moi !" />
        <h2>
Vous pouvez me contacter sur les différents réseaux sociaux ci-dessous.
        </h2>
    </div>
  );
}

export default Contact;
