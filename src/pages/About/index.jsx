import Title from "../../components/Title";
import AboutText from "../../components/About";

function About() {
  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  return (
    <div>
      <Title
        title="Notre Histoire"
        text="<h2>Depuis plusieurs années, Altitude forme des experts.</h2>Fondé par un passionné, Altitude est né de la volonté de partager des expériences et des connaissances pour aider d’autres à naviguer dans un paysage numérique en constante évolution."
      />
      <AboutText />
    </div>
  );
}

export default About;
