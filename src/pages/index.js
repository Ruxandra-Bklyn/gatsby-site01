import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Ruxandra Vasilescu</h1>
    <h2>A Website built with Gatsby JS </h2>
    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h3>
   <h4> officia voluptas pariatur incidunt aliquid.</h4>
    <p>Recusandae rem quisquam reiciendis magnam repellat soluta qui porro? Nisi?</p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to About Me page</Link>
    <br/>
    <Link to="/contact/">Contact</Link>
  </Layout>
)

export default IndexPage
