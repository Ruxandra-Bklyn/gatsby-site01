import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Greeting from '../components/greeting';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Greeting greeting="Welcome" name="Salon Owner" />
    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h3>
   <h4> officia voluptas pariatur incidunt aliquid.</h4>
    <p>Recusandae rem quisquam reiciendis magnam repellat soluta qui porro? Nisi?</p>
    <div style={{ maxWidth: `850px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to About Me page</Link>
    <br/>
    <Link to="/contact/">Contact</Link>
  </Layout>
)

export default IndexPage
