import React, { useState, useEffect, useRef } from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const { shape, string, arrayOf, bool, func } = PropTypes;
const useShadow = () => {
  const [shadow, setShadow] = useState(false);
  const shadowRef = useRef(shadow);

  useEffect(() => {
    shadowRef.current = shadow;
  }, [shadow])

  useEffect(() => {
    const handler = () => {
      if (window.pageYOffset > 0 && !shadowRef.current) {
        setShadow(true);
      }
      else if (window.pageYOffset === 0 && shadowRef.current) {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handler);
    window.addEventListener('resize', handler);


    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    }
  }, [shadowRef])

  return shadow;
}

const Header = (props) => {
  const { data: { meta, content }, openModal, isAuthorised, logOut} = props;
  const shadow = useShadow();


  return (
    <header className={`header ${shadow ? 'header--shadow' : ''}`}>
      <div className="container">
        <div className="header__inner">
          <Logo>{meta.title}</Logo>
          <nav className="main-nav main-nav--mod" aria-label="menu">
            <p className="main-nav__title">Menu</p>
            <ul className="main-nav__list main-nav__list--mod">
              {content.map((link) => {
                return (
                  <li key={link._id} className="main-nav__item">
                    <a href={link.url} className="main-nav__link">{link.title}</a>
                  </li>
                )
              })}
            </ul>
            {
              isAuthorised ? <Button size="sm" color="secondary" onClick={logOut}>Logout</Button>
                  : <Button size="sm" color="secondary" onClick={openModal}>Login</Button>
            }
            <button className="close-btn" aria-label="close menu" type="button"></button>
          </nav>
          <button className="burger-btn" type="button" aria-label="open menu">
            <span className="burger-btn__line"></span>
          </button>
        </div>
      </div>
    </header>
  )

}



Header.propTypes = {
  logOut: func.isRequired,
  isAuthorised: bool.isRequired,
  data: shape({
    meta: shape({
      title: string.isRequired
    }).isRequired,
    action: shape({
      title: string.isRequired,
      url: string.isRequired
    }).isRequired,
    content: arrayOf(shape({
      title: string.isRequired,
      url: string.isRequired
    })).isRequired
  }).isRequired
}

export default Header