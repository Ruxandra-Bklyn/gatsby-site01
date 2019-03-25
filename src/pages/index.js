import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Greeting from '../components/greeting';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`digital marketing`, `digital salonhub`, `beauty salons websites`, `medical spa marketing`]} />
    <h1>{data.site.siteMetadata.description}</h1>
    <Greeting greeting="Welcome" name="savvy entrepreneur!" />
    <p>Recusandae rem quisquam reiciendis magnam repellat soluta qui porro? Nisi?</p>
    <div style={{ maxWidth: `960px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to About Me page</Link>
    <br/>
    <Link to="/contact/">Contact</Link>
  </Layout>
)

export default IndexPage
export const query=graphql`
{
  site {
    siteMetadata {
      title
      description
      keywords
      author
    }
  }
}
`
