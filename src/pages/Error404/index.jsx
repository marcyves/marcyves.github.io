import Error from '../../components/Error'

import './index.css'

function Error404() {
  const root_id = document.getElementById('root');
  root_id.classList.add('gradient');

  return (
    <section className='error'>
       <Error type="default"/>
    </section>
  )
}

export default Error404
