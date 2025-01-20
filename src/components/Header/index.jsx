import { Link, NavLink } from 'react-router-dom'

import './index.css'

//Data for nav links //All new header link should be added here and in the router
  
function Header({navLink}) {
  return (
    <header className='header'>
        <h1>Altitude</h1>
        <nav>
            <ul>

            {navLink.map((item) => (
                <li key={item.name}>
          <NavLink
            to={item.href}
            key={item.name}
            className={({ isActive }) => {
              return isActive ? 'active-link' : ''
            }}
          >
            {item.name}
          </NavLink>
          </li>
            ))} 
            </ul>
        </nav>
        </header>
    )
}

export default Header
