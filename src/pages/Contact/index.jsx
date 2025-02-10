import Title from "../../components/Title";
import Socials from "../../components/Socials";
import About from "../../components/About";

function Contact() {
  const root_id = document.getElementById('root');
  root_id.classList.add('gradient');

  return (
    <div>
      <Title text="Contact" />
        <h2>
Vous pouvez me contacter sur les différents réseaux sociaux ci-dessous.
        </h2>
    </div>
  );
}

export default Contact;
