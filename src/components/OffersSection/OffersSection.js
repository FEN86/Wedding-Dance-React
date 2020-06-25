import React from 'react';
import './OffersSection.scss';
import SectionText from '../SectionText/SectionText';
import OffersItem from '../OffersItem/OffersItem';
import PropTypes from 'prop-types';

const { shape, string, arrayOf } = PropTypes;
const OffersSection = props => {
  const { data: { meta, content } } = props;
  return (
    <section className="offers section-mb">
      <div className="container">
        <div className="offers__inner">
          <SectionText
            title={meta.title}
            description={meta.description}
          />
          <div className="offers__list">
            {content.map((iconCard, index) => {
              return (
                <OffersItem key={index} dataIconCard={iconCard} index={index} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

OffersSection.propTypes = {
  data: shape({
    meta: shape({
      title: string.isRequired,
      description: string.isRequired,
    }).isRequired,
    content: arrayOf(shape({
      title: string.isRequired,
      url: string.isRequired
    })).isRequired
  }).isRequired
}

export default OffersSection