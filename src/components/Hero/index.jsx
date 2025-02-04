import PropTypes from 'prop-types'
import './index.css'
import Header from '../Header'

const navLink = [
  { name: 'Formations', href: '/formations/' },
  { name: 'A Propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
]

function Hero({text}) {
  return (
    <section id="hero">
    <Header navLink={navLink}/>
    <h2>{text}</h2>
    </section>
  )
}

Hero.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Hero
