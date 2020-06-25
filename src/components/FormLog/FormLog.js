import React from 'react';
import './FormLog.scss';
import Button from '../Button/Button';

const FormLog = props => {
  return (
    <form className="form-log">
      <div className="form-log__row">
        <label className="form-log__label" htmlFor="id_001">Email</label>
        <input className="form-log__input" type="email" id="id_001" required placeholder="Enter email" />
      </div>
      <div className="form-log__row">
        <label className="form-log__label" htmlFor="id_002">Password</label>
        <input className="form-log__input" type="password" id="id_002" required placeholder="Enter password" />
      </div>
      <div className="form-log__row form-log__row--btn">
        <Button type="submit">Ok</Button>
        <Button onClick={props.onClose}>Cancel</Button>
      </div>
    </form>
  )
}

export default FormLog