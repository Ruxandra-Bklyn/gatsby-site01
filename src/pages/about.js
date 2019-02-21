import React from 'react';
import { Link } from 'gatsby';
import styles from './info/about.module.css';
import Layout from '../components/layout2';
import SEO from '../components/seo';
import Greeting from '../components/greeting';

import AndraImage from '../images/andraGreenCoat2.jpg';

const User = props => (
<div className={styles.user}>
<img src={props.avatar} className={styles.avatar} alt="" />
<div className={styles.description}>
<h2 className={styles.username}>{props.username}</h2>
<p className={styles.excerpt}>{props.excerpt}</p>
</div>
</div>
)

const AboutPage = () => (
<Layout>
<Greeting /> 
  <div>
    <h1>About Me</h1>
    <User
    username="Ruxandra Vasilescu"
    avatar={AndraImage}
    excerpt="Founder of Digital SalonHub" />
    <br/>
    
    
   <Link to="/">Go back to the Home page</Link>
   <br/>
   <Link to="/contact">Go to Contact page</Link>
   </div>
  
  </Layout> 
)



export default AboutPage