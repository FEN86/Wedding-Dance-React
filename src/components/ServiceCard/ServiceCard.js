import React from 'react';
import './ServiceCard.scss';

export default () => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__header">
          <img className="img" src="images/content_002.jpg" alt="description" />
        </div>
        <div className="card__body">
          <h3 className="card__title title title--h3">For Bride and Groom</h3>
          <ul className="card__list">
            <li className="card__item">First Dance</li>
            <li className="card__item">Parent & Child Dance</li>
          </ul>
        </div>
      </div>
    </div>
  )
}