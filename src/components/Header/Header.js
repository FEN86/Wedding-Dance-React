import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';

export default () => (
  <header className="header">
    <div className="container">
      <div className="header__inner">
        <Logo />
        <nav class="main-nav main-nav--mod" aria-label="menu">
          <p class="main-nav__title">Menu</p>
          <ul class="main-nav__list main-nav__list--mod">
            <li class="main-nav__item">
              <a href="#" class="main-nav__link">Services</a>
            </li>
            <li class="main-nav__item">
              <a href="#" class="main-nav__link">Our Coaches</a>
            </li>
            <li class="main-nav__item">
              <a href="#" class="main-nav__link">Testimonials</a>
            </li>
            <li class="main-nav__item">
              <a href="#" class="main-nav__link">FAQ</a>
            </li>
            <li class="main-nav__item">
              <a href="#" class="main-nav__link">Lesson Review</a>
            </li>
          </ul>
          <button class="transformer-btn transformer-btn--desktop transformer-btn--mobile" type="button"
            data-open-modal>Start</button>
          <button class="close-btn" aria-label="close menu" type="button"></button>
        </nav>
        <button class="burger-btn" type="button" aria-label="open menu">
          <span class="burger-btn__line"></span>
        </button>
      </div>
    </div>
  </header>
)