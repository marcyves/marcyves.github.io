import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
      <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
                Camp de base
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/APropos" className={navLinkText}>À propos</Link></li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout