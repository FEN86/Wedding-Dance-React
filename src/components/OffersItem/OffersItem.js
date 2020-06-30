import React from 'react';
import './OffersItem.scss';
import PropTypes  from 'prop-types';


const { shape, string, number, arrayOf } = PropTypes;
const OffersItem = props => {
  const { dataIconCard: { title }, index } = props;
  return (
    <a href="#" className="offers__item">
      <div className="offers__figure">
        <i className={`offers__img icon icon-ico0${index + 1}`}></i>
      </div>
      <p className="offers__item-text">{title}</p>
    </a>
  )
}

OffersItem.propTypes = {
    index: number.isRequired,
    data: shape({
        meta: shape({
            title: string.isRequired,
            description: string.isRequired,
        }).isRequired,
        content: arrayOf(shape({
            title: string.isRequired,
            url: string.isRequired
        })).isRequired
    })
}

export default OffersItem