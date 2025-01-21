import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import Card from '../../components/Card'

import './index.css'

function Parcours({courses_list}) {

  return (
    <section className='parcours'>
    <h2>Les parcours de formation</h2>
    <section className='cards'>
      {courses_list.map((parcours) =>(
          <Link className="card-link" key={parcours.id} to={`/parcours/${parcours.id}`} >
          <Card key={parcours.id} title={parcours.title} description={parcours.description} image={parcours.image} />
          </Link>
      )
      )}
    </section>
  </section>

  )
}

Parcours.propTypes = {
  courses_list: PropTypes.array.isRequired,
}

export default Parcours
