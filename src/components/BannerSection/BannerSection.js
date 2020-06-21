import React from 'react';
import './BannerSection.scss';
import BannerImg from '../../assets/images/content_001.jpg';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const { shape, string } = PropTypes;
const BannerSection = props => {
  const { data: { meta, action } } = props;
  return (
    <section className="banner section-mb">
      <div className="container">
        <div className="banner__inner">
          <div className="banner__content">
            <h1 className="banner__title">{meta.title}</h1>
            <p className="banner__subtitle">{meta.location}</p>
            <p className="banner__text">{meta.description}</p>
            <Button>{action.title}</Button>
          </div>
          <div className="banner__img" aria-label="Wedding Dance"
            style={{ backgroundImage: `url(${BannerImg})` }}></div>
        </div>
      </div>
    </section>
  )
}

BannerSection.propTypes = {
  data: shape({
    meta: shape({
      title: string.isRequired,
      description: string.isRequired,
      location: string.isRequired
    }).isRequired,
    action: shape({
      title: string.isRequired,
      url: string.isRequired
    }).isRequired
  }).isRequired
}

export default BannerSection