import Hero from "../../components/Hero";
import HomeText from "../../components/HomeText";
import HomeTroisCol from "../../components/HomeTroisCol";

import "./index.css";

function Home() {
  return (
    <div>
      <Hero text="Bienvenue en Altitude" />
      <HomeText />
      <HomeTroisCol />
    </div>
  );
}

export default Home;
