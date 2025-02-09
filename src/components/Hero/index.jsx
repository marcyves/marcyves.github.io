import PropTypes from 'prop-types'
import './index.css'

function Hero({text}) {
  return (
    <section id="hero">
    <h2>{text}</h2>
    </section>
  )
}

Hero.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Hero
