import PropTypes from 'prop-types'
import './index.css'

function Card({title, description, image}) {

    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={`/altitude/assets/images/${image}`} alt={title} />
            <p>{description}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Card
