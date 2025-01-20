import Error from '../../components/Error'

import './index.css'

function NotFound({type}) {
  return (
    <div>
       <Error type={type}/>
    </div>
  )
}

export default NotFound
