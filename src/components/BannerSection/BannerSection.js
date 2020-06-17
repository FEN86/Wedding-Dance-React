import React from 'react';
import './BannerSection.scss';
import BannerImg from '../../assets/images/content_001.jpg';
import Button from '../Button/Button'

export default props => {
  return (
    <section className="banner section-mb">
      <div className="container">
        <div className="banner__inner">
          <div className="banner__content">
            <h1 className="banner__title">{props.title}</h1>
            <p className="banner__subtitle">{props.location}</p>
            <p className="banner__text">{props.description}</p>
            <Button />
          </div>
          <div className="banner__img" aria-label="Wedding Dance"
            style={{ backgroundImage: `url(${BannerImg})` }}></div>
        </div>
      </div>
    </section>
  )
}