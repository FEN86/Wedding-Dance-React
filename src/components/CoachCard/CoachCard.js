import React from 'react';
import './CoachCard.scss';

export default () => {
  return (
    <div className="coach-card">
      <div className="coach-card__inner">
        <div className="coach-card__figure">
          <img src={require("../../assets/images/content_005.jpg")} alt="description" className="img coach-card__img" />
        </div>
        <div className="coach-card__body">
          <p className="coach-card__num">01</p>
          <h3 className="coach-card__title title title--h3">Ann Walker</h3>
          <p className="coach-card__subtitle">Dancer</p>
          <ul className="coach-card__list">
            <li className="coach-card__item"><span>Work experience </span>8 years</li>
            <li className="coach-card__item"><span>Teacher for </span>3 years</li>
            <li className="coach-card__item"><span>Style </span>Viennese Waltz, Salsa</li>
          </ul>
          <button className="btn coach-card__btn" type="button">Let’s start</button>
        </div>
      </div>
    </div>
  )
}