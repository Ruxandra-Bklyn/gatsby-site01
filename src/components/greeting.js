import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({greeting, name}) => (
  <div style={{color: `#000`}}>
  <h1 style={{color: `#cc0066`}}>{greeting} {name}</h1>
  </div>
)

Greeting.PropTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string,
}

Greeting.defaultProps = {
  greeting: 'Welcome To Digital SalonHub',
}

export default Greeting