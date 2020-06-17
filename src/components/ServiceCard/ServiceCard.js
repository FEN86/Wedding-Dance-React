import React from 'react';
import './ServiceCard.scss';

export default () => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__header">
          <img className="img" src={require("../../assets/images/content_002.jpg")} alt="description" />
        </div>
        <div className="card__body">
          <a href="#" className="card__title">For Bride and Groom</a>
          <ul className="card__list">
            <li className="card__item">First Dance</li>
            <li className="card__item">Parent & Child Dance</li>
          </ul>
        </div>
      </div>
    </div>
  )
}