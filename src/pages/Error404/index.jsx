import Error from '../../components/Error'

function Error404() {
  const root_id = document.getElementById('root');
  root_id.classList.add('gradient');

  return (
    <div>
      <Error type="default"/>
    </div>
  )
}

export default Error404
