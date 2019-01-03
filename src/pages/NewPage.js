import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NewPage = () => (
<Layout>
    <h1>I'm a new page, but what this site really needs is...</h1>
    <h2> A header and a logo!</h2>
   <Link to="/">Go back to the homepage</Link>
  </Layout> 
)




export default NewPage