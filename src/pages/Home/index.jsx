import Hero from "../../components/Hero";
import HomeText from "../../components/HomeText";
import Socials from "../../components/Socials";

import "./index.css";

function Home() {
  return (
    <div>
      <Hero text="Bienvenue sur Altitude" />
      <HomeText />
      <Socials />
    </div>
  );
}

export default Home;
