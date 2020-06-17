import React from 'react';
import './CoachesSection.scss';
import SectionText from '../SectionText/SectionText';
import CoachCard from '../CoachCard/CoachCard';

export default () => {
  return (
    <section className="coaches">
      <div className="container">
        <div className="coaches__inner">
          <SectionText />
          <div className="coaches-slider">
            <CoachCard />
          </div>
        </div>
      </div>
    </section>
  )
}