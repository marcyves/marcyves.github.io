import { useParams } from 'react-router-dom';

import Card from '../../components/Card';
import NotFound  from '../NotFound/';

import './index.css'
import data from '../../data/cours.json';

function Parcours() {

  const { id  } = useParams();
  const filtered = data.filter((data) => data.parcours === id);

  if (filtered.length === 0) {
    return <NotFound type="no_course"/>;
  }

    return (
      <section>
          <h2>Les cours du parcours</h2>
          {filtered.map((cours) => (
            <Card key={cours.id} title={cours.title} image={cours.vignette} description={cours.decription} />
          ))}
      </section>
    )
}

export default Parcours
