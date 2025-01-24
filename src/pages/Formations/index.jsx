import { useEffect } from "react";

import MiniHero from "../../components/MiniHero";
import Parcours from "../../components/Parcours";
import courses_list from "../../data/parcours.json";

import "./index.css";


function Formations() {

  const root_id = document.getElementById('root');
  root_id.classList.add('gradient');

  return (
    <div>
      <MiniHero text="Les parcours de formation" />
      <section>
        <Parcours courses_list={courses_list} />
      </section>
    </div>
  );
}

export default Formations;
