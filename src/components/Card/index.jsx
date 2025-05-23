import PropTypes from 'prop-types'
import './index.css'

function Card({title, description, image}) {

return (
        <div className="card">
            <img src={`/assets/images/${image}`} alt={title} />
            <h2 className='caption'>{title}</h2>
            <p className='description' dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Card
