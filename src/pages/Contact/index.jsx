import Title from "../../components/Title";

function Contact() {
  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  return (
    <div className="page-catalog">
      <Title
        title="Contact"
        text="Une question sur un parcours ou un cours ? Écrivez-moi, ou utilisez les liens en bas de page."
      />
      <p className="contact-mail">
        <a href="mailto:marc.augier@xdm-consulting.fr">
          marc.augier@xdm-consulting.fr
        </a>
      </p>
    </div>
  );
}

export default Contact;
