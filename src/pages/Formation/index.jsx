import { useParams } from 'react-router-dom';

import Card from '../../components/Card';
import NotFound  from '../NotFound';

import './index.css'
import data from '../../data/cours.json';
import parcours_data from '../../data/parcours.json';
import MiniHero from '../../components/MiniHero';

function Formation() {

  const { id  } = useParams();
  const filtered = data.filter((data) => data.parcours === id);
  const parcours = parcours_data.find((data) => data.id === id);

  if (filtered.length === 0) {
    return <NotFound type="no_course"/>;
  }

  const root_id = document.getElementById('root');
  root_id.classList.add('gradient');

    return (
      <div>
      <MiniHero text={`Les cours du parcours ${parcours.title}`} />
      <section className='parcours'>
          {filtered.map((cours) => (
            <Card key={cours.id} title={cours.title} image={cours.vignette} description={cours.description} />
          ))}
      </section>
      </div>
    )
}

export default Formation
