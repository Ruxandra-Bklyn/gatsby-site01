import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
<Layout>
  <div>
    <h1>About Me</h1>
    <h2>I need more here</h2>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum consequatur sed illum velit est accusamus, quae fuga autem, sunt, eius assumenda tempora sint laborum commodi praesentium officia quasi maxime!
    </p>
    <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum consequatur sed illum velit est accusamus, quae fuga autem, sunt, eius assumenda tempora sint laborum commodi praesentium officia quasi maxime!</p>
   <Link to="/">Go back to the Home page</Link>
   <br/>
   <Link to="/contact">Go to Contact page</Link>
   </div>
  </Layout> 
)



export default AboutPage