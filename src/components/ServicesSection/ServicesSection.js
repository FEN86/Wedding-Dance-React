import React from 'react';
import './ServicesSection';
import SectionText from '../SectionText/SectionText';
import SercviceCatd from '../ServiceCard/ServiceCard'

export default () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__inner">
          <SectionText />
          <div className="services__list">
            <SercviceCatd />
          </div>
        </div>
      </div>
    </section>
  )
}