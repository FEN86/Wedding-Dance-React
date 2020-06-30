import React from 'react';
import './OffersEditor.scss';
import Button from '../Button/Button';
import PropTypes from "prop-types";

const { func } = PropTypes;
const OffersEditor = props => {
    const { onClose } = props;

    const handleSubmitEdit = (e) => {
        e.preventDefault();
    }
  return (
    <form className="form-edit" onSubmit={handleSubmitEdit}>
      <h2 className="form-edit__title">Section content editor</h2>
      <div className="form-edit__row">
        <label className="form-edit__label" htmlFor="id_021">Title</label>
        <input className="form-edit__input" type="text" id="id_021" required />
      </div>
      <div className="form-edit__row">
        <label className="form-edit__label" htmlFor="id_022">Description</label>
        <textarea className="form-edit__textarea" id="id_022" required ></textarea>
      </div>
      <div className="form-edit__group">
        <div className="form-edit__row form-edit__row--group">
          <label className="form-edit__label">Content</label>
          <input className=" form-edit__input form-edit__input--content" type="text" required />
        </div>
        <div className="form-edit__row form-edit__row--group">
          <label className="form-edit__label">Url</label>
          <input className="form-edit__input form-edit__input--content" type="text" required />
        </div>
      </div>
      <div className="form-edit__row form-edit__row--btn">
        <Button type="submit">Ok</Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </form>
  )
}

OffersEditor.propTypes = {
    onClose: func.isRequired
}

export default OffersEditor