import Title from "../../components/Title";
import ListeParcours from "../../components/ListeParcours";
import { supabase } from '../../utils/supabase.jsx'
import { useEffect, useState } from "react";

function Formations() {
  const root_id = document.getElementById("root");
  root_id.classList.add("gradient");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const [parcours, setParcours] = useState([])
  
    useEffect(() => {
      async function getParcours() {
        const { data: parcours } = await supabase.from('parcours').select()

        if (parcours.length > 1) {
          setParcours(parcours)
        }
      }
  
      getParcours()
    }, [])
  

  return (
    <div>
      <Title
        title="Les parcours de formation"
        text="Découvrez mes formations en ligne selon votre besoin et votre préférence d’apprentissage. Que vous souhaitiez explorer un domaine spécifique ou suivre mes cours sur une plateforme de votre choix, plusieurs options s’offrent à vous."
      />
      <Title
        title="Par thématique"
        text="Vous cherchez à développer vos compétences dans un domaine précis ? Mes formations sont organisées en trois grandes thématiques :
        <ul>
        <li>Développement Web : Apprenez à créer des sites et applications modernes avec WordPress, React, Laravel et bien d’autres technologies.</li>
      	<li>Découvrez les technologies de data science, de machine learning et de deep learning.</li>
        <li>Apprenez à développer des applications mobiles avec Flutter et React Native.</li>
        </ul>
        Quel que soit votre objectif, vous trouverez un parcours structuré et progressif pour acquérir des compétences concrètes et applicables."
      />
      <ListeParcours liste_parcours={parcours} type="formation" />
    </div>
  );
}

export default Formations;
