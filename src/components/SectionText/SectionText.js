import React from 'react';
import './SectionText.scss';
import PropTypes from 'prop-types';

const SectionText = props => {
  return (
    <div className="section-text">
      <h2 className="section-text__title">{props.title}</h2>
      <p className="section-text__desc">{props.description}</p>
    </div>
  )
}

SectionText.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default SectionText