import React from 'react';
import './Modal.scss';
import FormLog from '../FormLog/FormLog';
import OffersEditor from '../OffersEditor/OffersEditor';

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__inner">
        <FormLog />
        <OffersEditor />
      </div>
    </div>
  )
}

export default Modal