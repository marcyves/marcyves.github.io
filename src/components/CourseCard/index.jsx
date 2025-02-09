import PropTypes from 'prop-types'
import './index.css'

function CourseCard({title, description, image}) {

return (
        <div className="course-card">
            <img src={`/assets/images/${image}`} alt={title} />
            <h2 className='caption'>{title}</h2>
        </div>
    )
}

CourseCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default CourseCard
