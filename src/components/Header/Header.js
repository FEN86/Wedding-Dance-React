import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';

export default () => (
  <header className="header">
    <div className="container">
      <div className="header__inner">
        <Logo />
        <nav className="main-nav main-nav--mod" aria-label="menu">
          <p className="main-nav__title">Menu</p>
          <ul className="main-nav__list main-nav__list--mod">
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Services</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Our Coaches</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Testimonials</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">FAQ</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Lesson Review</a>
            </li>
          </ul>
          <button className="transformer-btn transformer-btn--desktop transformer-btn--mobile" type="button"
            data-open-modal>Start</button>
          <button className="close-btn" aria-label="close menu" type="button"></button>
        </nav>
        <button className="burger-btn" type="button" aria-label="open menu">
          <span className="burger-btn__line"></span>
        </button>
      </div>
    </div>
  </header>
)