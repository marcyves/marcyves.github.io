import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Camp de base">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Hello World by Marco"
        src="../images/hello.png"
      />
    </Layout>
  )
}

export default IndexPage