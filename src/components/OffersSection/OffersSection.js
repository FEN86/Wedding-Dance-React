import React from 'react';
import './OffersSection.scss';
import SectionText from '../SectionText/SectionText';
import OffersItem from '../OffersItem/OffersItem';
import Button from "../Button/Button";
import PropTypes from 'prop-types';

const { shape, string, arrayOf, bool } = PropTypes;
const OffersSection = props => {
  const { data: { meta, content }, isAuthorised, openModal } = props;
  return (
    <section className="offers section-mb">
      <div className="container">
        {
          isAuthorised ?
              <Button size="sm" color="secondary" onClick={openModal}>Edit section</Button>
              : null
        }
        <div className="offers__inner" style={{ border: isAuthorised ? '1px dotted #000' : 'none' }}>
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
  isAuthorised: bool.isRequired,
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