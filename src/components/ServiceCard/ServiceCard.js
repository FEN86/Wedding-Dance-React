import React from 'react';
import PropTypes, {number} from 'prop-types';
import './ServiceCard.scss';

const { shape, string } = PropTypes;
const ServiceCard = props => {
  const { dataItem: { title, url }, index } = props;
  return (
    <a href={url} className="card">
      <div className="card__inner">
        <div className="card__header">
          <img className="img card__img" src={require(`../../assets/images/service-content_00${index + 1}.jpg`)} alt="description" />
        </div>
        <div className="card__body">
          <h3  className="card__title">{title}</h3>
          <ul className="card__list">
            <li className="card__item">First Dance</li>
            <li className="card__item">Parent & Child Dance</li>
          </ul>
        </div>
      </div>
    </a>
  )
}

ServiceCard.propTypes = {
  index: number.isRequired,
  dataItem: shape({
    title: string.isRequired,
    url: string.isRequired
  }).isRequired
}

export default ServiceCard