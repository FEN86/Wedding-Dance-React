import React from 'react';
import './ServicesSection.scss';
import SectionText from '../SectionText/SectionText';
import ServiceCard from '../ServiceCard/ServiceCard';
import PropTypes from 'prop-types';

const { shape, string, arrayOf } = PropTypes;
const ServicesSection = props => {
  const { data: { meta, content } } = props;
  return (
    <section className="services section-mb">
      <div className="container">
        <div className="services__inner">
          <SectionText
            title={meta.title}
            description={meta.description}
          />
          <div className="services__list">
            {content.map((item, index) => {
              return (
                <ServiceCard key={item._id} dataItem={item} index={index} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

ServicesSection.propTypes = {
  data: shape({
    meta: shape({
      title: string.isRequired,
      description: string.isRequired,
    }).isRequired,
    content: arrayOf(shape({
      title: string.isRequired,
      url: string.isRequired,
      _id: string.isRequired
    })).isRequired
  }).isRequired
}

export default ServicesSection