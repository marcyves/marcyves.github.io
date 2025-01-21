import Error from '../../components/Error'

import './index.css'

function NotFound({type}) {
  return (
    <div className='parcours'>
       <Error type={type}/>
    </div>
  )
}

export default NotFound
