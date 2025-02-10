import Title from '../../components/Title'
import AboutText from '../../components/About'

function About() {
    const root_id = document.getElementById('root');
    root_id.classList.add('gradient');

  return (
    <div>
    <Title text="À propos" />
    <AboutText />
    </div>
  )
}

export default About
