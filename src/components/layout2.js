import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ListLink = props => (
<li style={{
  display: `inline-block`,
  marginRight: `1rem`,
}}>
<Link to={props.to}>{props.children}</Link>
</li>

)

const Layout2 = ({children}) => (
  <div style={{
margin: `0 auto`,
maxWidth: `960px`,
padding: `0 1rem`,
  }}>
  <header style = {{ marginBottom: `2.5rem`}}>
  <h2 style={{display: `inline`}}>My First Gatsby Site</h2>

  <ul style={{
    listStyle:`none`,
    float:`right`,
}}>
<ListLink to='/'>Home</ListLink>
<ListLink to='/about'>About</ListLink>
<ListLink to='/contact'>Contact</ListLink>
</ul>
  </header>
  {children}
  </div>
)
Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout2