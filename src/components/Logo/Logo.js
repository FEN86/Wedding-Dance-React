import React from 'react';
import './Logo.scss'
import PropTypes from 'prop-types';

function Logo(props) {
  return (
    <a className={`logo ${props.mod ? 'logo--color-mod' : ''}`} href="#">{props.children}</a>
  )
}

Logo.propTypes = {
  mod: PropTypes.bool
}

export default Logo

