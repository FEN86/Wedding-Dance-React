import React from 'react';
import './Footer.scss';
import Logo from '../Logo/Logo'

const Footer = () => {

  return (
    <footer className="footer footer--sticky">
      <div className="container">
        <div className="footer__inner">
          <Logo mod />
          <p className="copyright">Copyright © 2019</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer