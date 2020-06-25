import React from 'react';
import './CoachCard.scss';
import Button from '../Button/Button'

const CoachCard = props => {
  const { dataCard: { name, direction, workExperience, teachExperience, style }, index } = props;
  return (
    <div className="coach-card  coach-card--margin">
      <div className="coach-card__inner">
        <div className="coach-card__figure">
          <img src={require(`../../assets/images/coach-content_00${index + 1}.jpg`)} alt="description" className="img coach-card__img" />
        </div>
        <div className="coach-card__body">
          <p className="coach-card__num">{`0${index + 1}`}</p>
          <h3 className="coach-card__title title title--h3">{name}</h3>
          <p className="coach-card__subtitle">{direction}</p>
          <ul className="coach-card__list">
            <li className="coach-card__item"><span>Work experience </span>{workExperience} years</li>
            <li className="coach-card__item"><span>Teacher for </span>{teachExperience} years</li>
            <li className="coach-card__item"><span>Style </span>{style}</li>
          </ul>
          <Button>Let`s start</Button>
        </div>
      </div>
    </div>
  )
}

export default CoachCard