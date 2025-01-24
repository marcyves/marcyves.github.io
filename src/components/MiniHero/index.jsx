import PropTypes from 'prop-types'
import './index.css'
import Header from '../Header'

const navLink = [
  { name: 'Formations', href: '/formations/' },
  { name: 'A Propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
]

function MiniHero({text}) {
  return (
    <div>
    <section id="mini-hero">
    <Header navLink={navLink}/>
    </section>      
    <h2 className='mini-hero'>{text}</h2>
    </div>
  )
}

MiniHero.propTypes = {
  text: PropTypes.string.isRequired,
}

export default MiniHero
