import MiniHero from '../../components/MiniHero'
import './index.css'

function About() {
    const root_id = document.getElementById('root');
    root_id.classList.add('gradient');

  return (
    <div>
    <MiniHero text="À propos" />
    <section className='home-text'>
      <article>
      <p>Vous êtes sur le site de Marc Augier</p>
      <p>
          Je suis un développeur web, je suis aussi un formateur et un
          enseignant, et je suis à la recherche de nouvelles méthodes de
          communication et de formation.
        </p>
        </article>
    </section>
    </div>
  )
}

export default About
