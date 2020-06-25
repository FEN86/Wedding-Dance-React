import React from 'react';
import './CoachesSection.scss';
import SectionText from '../SectionText/SectionText';
import CoachCard from '../CoachCard/CoachCard';
import PropTypes from 'prop-types';


const { shape, string, arrayOf, array } = PropTypes;
const CoachesSection = props => {
  const { data: { meta, content } } = props;
  return (
    <section className="coaches section-mb">
      <div className="container">
        <div className="coaches__inner">
          <SectionText
            title={meta.title}
            description={meta.description}
          />
          <div className="coaches__list">
            {content.map((card, index) => {
              return (
                <CoachCard key={card._id} dataCard={card} index={index} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

CoachesSection.propTypes = {
  data: shape({
    meta: shape({
      title: string.isRequired,
      description: string.isRequired
    }).isRequired,
    content: arrayOf(shape({
      style: array.isRequired,
      name: string.isRequired,
      direction: string.isRequired,
      workExperience: string.isRequired,
      teachExperience: string.isRequired
    })).isRequired
  }).isRequired
}

export default CoachesSection