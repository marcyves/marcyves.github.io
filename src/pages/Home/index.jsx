//Import Components
import Hero from '../../components/Hero'
import Socials from '../../components/Socials'

import './index.css'

import courses_list from '../../data/parcours.json'
import Parcours from '../../components/Parcours'

function Home() {
  
  return (
    <div>
      <Hero />
      <Parcours courses_list={courses_list}/>
      <Socials />
    </div>
  )
}

export default Home
