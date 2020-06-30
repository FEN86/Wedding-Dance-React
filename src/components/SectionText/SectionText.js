import React from 'react';
import './SectionText.scss';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const SectionText = props => {
    const { title, description } = props;
  return (
    <div className="section-text">
      <h2 className="section-text__title">{title}</h2>
      <p className="section-text__desc">{description}</p>
    </div>
  )
}

SectionText.propTypes = {
  title: string.isRequired,
  description: string.isRequired
}

export default SectionText