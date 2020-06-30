import React from 'react';
import './Modal.scss';

import PropTypes from 'prop-types';

const { bool, node } = PropTypes;
const Modal = ({ isOpen, children }) => {
  return (
    <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal__inner">{children}</div>
    </div>
  )
}

Modal.propTypes = {
    isOpen: bool.isRequired,
    children: node.isRequired
}

export default Modal