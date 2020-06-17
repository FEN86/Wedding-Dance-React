import React from 'react';
import './OffersSection.scss';
import SectionText from '../SectionText/SectionText';
import OffersItem from '../OffersItem/OffersItem';

export default () => {
  return (
    <section className="offers">
      <div className="container">
        <div className="offers__inner">
          <SectionText />
          <div className="offers__list">
            <OffersItem />
          </div>
        </div>
      </div>
    </section>
  )
}