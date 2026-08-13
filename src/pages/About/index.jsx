import Title from "../../components/Title";
import AboutText from "../../components/About";

function About() {
  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  return (
    <div className="page-catalog">
      <Title
        title="À propos"
        text="Développeur web depuis 1994, formateur et professeur de management."
      />
      <AboutText />
    </div>
  );
}

export default About;
