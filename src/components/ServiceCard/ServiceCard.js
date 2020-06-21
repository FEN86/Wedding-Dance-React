import React from 'react';
import PropTypes from 'prop-types';
import './ServiceCard.scss';

const ServiceCard = props => {
  const { dataItem: { title, url } } = props;
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__header">
          <img className="img" src={require("../../assets/images/content_002.jpg")} alt="description" />
        </div>
        <div className="card__body">
          <a href={url} className="card__title">{title}</a>
          <ul className="card__list">
            <li className="card__item">First Dance</li>
            <li className="card__item">Parent & Child Dance</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ServiceCard.propTypes = {
  dataItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default ServiceCard