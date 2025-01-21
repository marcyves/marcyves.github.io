import Parcours from '../../components/Parcours'
import courses_list from '../../data/parcours.json'

import './index.css'

function Formations() {
  return (
    <section>
        <Parcours courses_list={courses_list} />
    </section>
  )
}

export default Formations
