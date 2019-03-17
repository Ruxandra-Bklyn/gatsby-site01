import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

import AndraImage from '../images/andraGreenCoat2.jpg';


const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0, auto, 12px, auto;
` 

const Avatar = styled.img`
     flex: 0 0 96px;
     width: 96px;
     margin: 0;
`

const Description = styled.div`
     flex: 1;
     margin-left: 18px;
     padding: 12px;
`
const Username = styled.div`
     margin: 0 0 12px 0;
`
const Excerpt = styled.p`
     margin: 0;
`

const User = props => (
<UserWrapper>
<Avatar src={props.avatar} alt="Ruxandra Vasilescu" />
<Description>
  <Username>{props.username}</Username>
  <Excerpt>
    {props.excerpt}
  </Excerpt>
</Description>
</UserWrapper>
)

const AboutPage = () => (
<Layout>
  <div>
    <h1>About Me</h1>
    
    
    <User 
    avatar={AndraImage}
    username="Ruxandra Vasilescu"
    excerpt="This is about me, embelish as much as you can that's how people do it here"
    />

<br />

   <Link to="/">Go back to the Home page</Link>
   <br/>
   <Link to="/contact">Go to Contact page</Link>
   </div>
  
  </Layout> 
)



export default AboutPage