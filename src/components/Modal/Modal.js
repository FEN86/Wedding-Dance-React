import React from 'react';
import './Modal.scss';

import PropTypes from 'prop-types';

const { bool, node } = PropTypes;
const Modal = ({ isOpenFormLog, children, isOpenFormEdit }) => {
  return (
    <div className="modal" style={{ display: (isOpenFormLog || isOpenFormEdit) ? 'block' : 'none' }}>
      <div className="modal__inner">{children}</div>
    </div>
  )
}

Modal.propTypes = {
    isOpenFormLog: bool.isRequired,
    children: node.isRequired
}

export default Modal