import React from 'react';
import './OffersEditor.scss';
import Button from '../Button/Button';

const OffersEditor = () => {
  return (
    <div className="modal-edit">
      <div className="modal-edit__inner">
        <div className="modal-edit__body">
          <form className="form-modal">
            <h2 className="form-modal__title">Section content editor</h2>
            <div className="form-modal__row">
              <label className="form-modal__label" htmlFor="id_021">Title</label>
              <input className="form-modal__input" type="text" id="id_021" required />
            </div>
            <div className="form-modal__row">
              <label className="form-modal__label" htmlFor="id_022">Description</label>
              <textarea className="form-modal__textarea" id="id_022" required ></textarea>
            </div>
            <div className="form-modal__group">
              <div className="form-modal__row form-modal__row--group">
                <label className="form-modal__label">Content</label>
                <input className=" form-modal__input form-modal__input--content" type="text" required />
              </div>
              <div className="form-modal__row form-modal__row--group">
                <label className="form-modal__label">Url</label>
                <input className="form-modal__input form-modal__input--content" type="text" required />
              </div>
            </div>
            <div className="form-modal__row form-modal__row--btn">
              <Button type="submit">Ok</Button>
              <Button>Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OffersEditor