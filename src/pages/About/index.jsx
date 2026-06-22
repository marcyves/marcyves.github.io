import Title from "../../components/Title";
import AboutText from "../../components/About";
import { useEffect } from "react";

import "./index.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Title
        title="Mon parcours"
        text="<p>Fondé par un passionné de transformation digitale, Altitude est né de la volonté de partager des expériences et des connaissances pour aider d'autres à naviguer dans un paysage numérique en constante évolution.</p>"
      />
      <AboutText />
    </div>
  );
}

export default About;
