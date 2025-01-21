import Hero from '../../components/Hero'
import './index.css'

function About() {
  return (
    <div>

    <Hero text="À propos" />
    <section className='parcours'>
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
