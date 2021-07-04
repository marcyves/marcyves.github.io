import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    icon,
    label
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
<main className={container}>
<title>{pageTitle} | {data.site.siteMetadata.title}</title>
  <p className={siteTitle}>{data.site.siteMetadata.title}</p>
    <nav>
      <ul className={navLinks}>
        <li><a href="https://twitter.com/marcyves" className={icon}><FontAwesomeIcon icon={faTwitter} /><span className={label}>Twitter</span></a></li>
        <li><a href="https://facebook.com/marc.augier" className={icon}><FontAwesomeIcon icon={faFacebook} /><span className={label}>Facebook</span></a></li>
        <li><a href="https://linkedin.com/in/marcaugier" className={icon}><FontAwesomeIcon icon={faLinkedin} /><span className={label}>Dribbble</span></a></li>
        <li><a href="https://github.com/marcyves" className={icon}><FontAwesomeIcon icon={faGithub} /><span className={label}>Github</span></a></li>
        <li><a href="mailto:marc.augier@xdm-consulting.fr" className={icon}><FontAwesomeIcon icon={faMailBulk} /><span className={label}>Email</span></a></li>
      </ul>
    </nav>

    <h1 className={heading}>{pageTitle}</h1>

    <nav>
      <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
                Camp de base
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>Blog</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/APropos" className={navLinkText}>À propos</Link>
          </li>
        </ul>
      </nav>

      {children}
    </main>
  )
}

export default Layout