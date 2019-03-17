import React from 'react';
import { Link } from 'gatsby';


const Menu = () => (
 
  <div 
  style={{
    background: '#006666',
    paddingTop: '12px',
    color: '#ffffff',
    }}
    >
   <ul 
   style={{ 
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
   }}
   >
    <li>
    <Link to="/">Home</Link>
      </li>
    <li>
      <Link to="/about">About Me</Link>
      </li>  
    <li>
      <Link to="/contact">Contact Me</Link>
      </li>  
    </ul> 
    </div>
    )



export default Menu 