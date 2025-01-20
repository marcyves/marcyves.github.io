import Parcours from '../../components/Parcours'
import courses_list from '../../data/parcours.json'

import './index.css'

function Courses() {
  return (
    <section>
        <h2>Catalogue des formations</h2>
        <Parcours courses_list={courses_list} />
    </section>
  )
}

export default Courses
