import MiniHero from '../../components/MiniHero'
import AboutText from '../../components/About'

function About() {
    const root_id = document.getElementById('root');
    root_id.classList.add('gradient');

  return (
    <div>
    <MiniHero text="À propos" />
    <AboutText />
    </div>
  )
}

export default About
