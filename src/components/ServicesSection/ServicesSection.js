import React from 'react';
import './ServicesSection';
import SectionText from '../SectionText/SectionText';
import ServiceCard from '../ServiceCard/ServiceCard'

export default () => {
  return (
    <section className="services section-mb">
      <div className="container">
        <div className="services__inner">
          <SectionText />
          <div className="services__list">
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  )
}