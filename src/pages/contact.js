import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Say hello</h1>
    <p>Have something to say?</p>
    <Link to="/">Go back to the Home page</Link>
    <br/>
    <Link to="/about">Go to About Me page</Link>
  </Layout>
)

export default Contact
