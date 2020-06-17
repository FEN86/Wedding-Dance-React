import React from 'react';
import './BannerSection.scss';

export default () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__inner">
          <div className="banner__content">
            <h1 className="banner__title">Wedding Dance Lessons</h1>
            <p className="banner__subtitle">New Jersey</p>
            <p className="banner__text">The wedding
            dance
            is one of the most
            important dances in your life.
            You
            look perfect and the whole audience is looking at you. Also, it becomes the favorite moment you like to
                play on videos and photos. Feel the moment</p>
            <button className="btn" type="button">Let’s
                start</button>
          </div>
          <div className="banner__img" aria-label="Wedding Dance"
            style={{ backgroundImage: 'url(../../../../assets/images/content_001.jpg)' }}></div>
        </div>
      </div>
    </section>
  )
}