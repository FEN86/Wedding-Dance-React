import React from 'react';
import './CoachCard.scss';

export default () => {
  return (
    <div className="slider-card">
      <div className="slider-card__inner">
        <div className="slider-card__figure">
          <img data-lazy="images/content_005.jpg" alt="description" className="img slider-card__img" />
        </div>
        <div className="slider-card__body">
          <p className="slider-card__num">01</p>
          <h3 className="slider-card__title title title--h3">Ann Walker</h3>
          <p className="slider-card__subtitle">Dancer</p>
          <ul className="slider-card__list">
            <li className="slider-card__item"><span>Work experience </span>8 years</li>
            <li className="slider-card__item"><span>Teacher for </span>3 years</li>
            <li className="slider-card__item"><span>Style </span>Viennese Waltz, Salsa</li>
          </ul>
          <button className="btn slider-card__btn" type="button">Let’s start</button>
        </div>
      </div>
    </div>
  )
}