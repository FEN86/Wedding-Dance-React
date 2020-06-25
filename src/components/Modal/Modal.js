import React from 'react';
import './Modal.scss';
import FormLog from '../FormLog/FormLog';
import OffersEditor from '../OffersEditor/OffersEditor';

const Modal = ({ close, isOpen }) => {
  return (
    <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal__inner">
        <FormLog onClose={close} />
      </div>
    </div>
  )
}

export default Modal