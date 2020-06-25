import React from 'react';
import './Footer.scss';
import Logo from '../Logo/Logo';
import PropTypes from 'prop-types';


const { shape, string } = PropTypes;
const Footer = (props) => {
  const { data: { meta } } = props;
  return (
    <footer className="footer footer--sticky">
      <div className="container">
        <div className="footer__inner">
          <Logo mod>{meta.title}</Logo>
          <p className="copyright">Copyright © 2019</p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  data: shape({
    meta: shape({
      title: string.isRequired
    }).isRequired
  }).isRequired
}

export default Footer