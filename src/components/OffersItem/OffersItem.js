import React from 'react';
import './OffersItem.scss';
import { checkPropTypes } from 'prop-types';

const OffersItem = props => {
  const { dataIconCard: { title, url } } = props;
  return (
    <div className="offers__item">
      <div className="offers__figure">
        <i className="offers__img icon icon-ico04"></i>
      </div>
      <p className="offers__item-text">{title}</p>
    </div>
  )
}

export default OffersItem