import Title from "../../components/Title";
import ListeParcours from "../../components/ListeParcours";
import liste_parcours from "../../data/parcours.json";

import { useEffect } from "react";
import SideMediaCard from "../../components/SideMediaCard";
import ThreeColsCard from "../../components/ThreeColsCard";
import TextCard from "../../components/TextCard";
import { Link } from "react-router-dom";

import "./index.css";

function Formations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="formations-page">
      <TextCard
        title="Les parcours de formation"
        items={[
          "Accédez à mes cours en ligne, comprenant des <strong>vidéos détaillées</strong>, des <strong>exercices pratiques</strong> et un suivi structuré, afin de <strong>progresser à votre rythme</strong>, où que vous soyez et quand vous le souhaitez.",
          "Mes formations sont conçues pour être <strong>accessibles à tous</strong>, que vous soyez débutant ou professionnel souhaitant se perfectionner. Chaque parcours est structuré pour <strong>vous guider étape par étape</strong>, avec des ressources variées et des <strong>exercices pratiques</strong>.",
          "Que vous souhaitiez apprendre à votre rythme ou suivre un cursus plus structuré, vous trouverez ici les outils nécessaires pour développer vos compétences et <strong>atteindre vos objectifs professionnels</strong>.",
          "Que vous souhaitiez explorer un domaine spécifique ou suivre mes cours sur une plateforme de votre choix, selon vos besoins et vos préférences d'apprentissage, plusieurs options s'offrent à vous. Vous pouvez retrouver mes formations sur les plateformes UDEMY ou TUTO, qui offrent une expérience d'apprentissage flexible et adaptée à vos besoins.",
        ]}
      />

      <SideMediaCard
        title="Pourquoi choisir mes Cours ?"
        imageSrc="/assets/images/certificate.png"
        items={[
          "<h3>Tarifs accessibles</h3><p>Ces formations démarrent à seulement 9,99€, rendant le savoir accessible à tous les budgets sans compromettre la qualité.</p>",
          "<h3>Certifications reconnues</h3><p>Obtenez des certificats valorisants pour votre CV à la fin de chaque parcours d'apprentissage.</p>",
          "<h3>Expertise à jour</h3><p>Apprenez avec des formateurs experts et des contenus régulièrement actualisés pour rester à la pointe.</p>",
        ]}
      />
      <ThreeColsCard
        title="UDEMY : L'Apprentissage à Grande Échelle"
        items={[
          "<h3>Accès à des centaines de cours</h3><p>Explorez une vaste bibliothèque de formations couvrant divers domaines, du développement web au design graphique.</p>",
          "<h3>Apprentissage flexible</h3><p>Une fois votre cours acheté, profitez d'un accès à vie aux vidéos et ressources, sans abonnement mensuel.</p><p>Suivez les cours à votre rythme, où que vous soyez, avec un accès illimité aux vidéos et ressources.</p>",
          "<h3>Communauté active</h3><p>Rejoignez une communauté d'apprenants pour échanger, poser des questions et partager vos progrès.</p><p>Consultez les avis détaillés et participez aux forums d'entraide pour maximiser votre apprentissage.</p>",
        ]}
      />
      <Link className="parcours-platform-link" to="/plateforme/4">
        Les cours sur UDEMY
      </Link>

      <Title
        title="TUTO : L'Expertise Créative Française"
        text="Préférez-vous une approche plus flexible ? Découvrez mes formations sur :
        <ul>
        <li>Tuto : Profitez d'une bibliothèque de cours variés, allant du développement web au design, avec la possibilité d'apprendre à votre rythme.</li>
        <li>Retrouvez mes cours en ligne et mes formations en ligne.</li>
        </ul>"
      />
      <Link className="parcours-platform-link" to="/plateforme/5">
        Les cours sur TUTO
      </Link>
      <Title
        title="Explorez les Catégories Populaires"
        text="Vous cherchez à développer vos compétences dans un domaine précis ? Mes formations sont organisées en trois grandes thématiques :
        <ul>
        <li>Développement Web : Apprenez à créer des sites et applications modernes avec WordPress, React, Laravel et bien d'autres technologies.</li>
        <li>Découvrez les technologies de data science, de machine learning et de deep learning.</li>
        <li>Apprenez à développer des applications mobiles avec Flutter et React Native.</li>
        </ul>
        Quel que soit votre objectif, vous trouverez un parcours structuré et progressif pour acquérir des compétences concrètes et applicables."
      />
      <ListeParcours liste_parcours={liste_parcours} type="formation" />
      <Title
        title="Choisissez votre parcours et démarrez votre formation dès aujourd'hui !"
        text=""
      />
    </div>
  );
}

export default Formations;
