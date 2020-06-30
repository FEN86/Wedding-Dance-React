import React, {useState} from 'react';
import './FormLog.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import {BASE_URL} from "../../constants";

const { func } = PropTypes;
const FormLog = props => {
    const { onClose, onSuccess } = props;

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setError('');
        const dataLog = await fetch(`${BASE_URL}/app/api/v1/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({email: emailValue, password: passwordValue})
        }).then(r => r.json()).catch(() => {
            console.log(1)
            setError('Error!')
        }).finally(() => {
            setProcessing(false)
        });
        if (dataLog && dataLog.access_token) {
            onSuccess(dataLog.access_token);
            localStorage.setItem('access_token', dataLog.access_token);
        }
    }

  return (
    <form className="form-log" onSubmit={handleSubmit}>
      <div className="form-log__row">
        <label className="form-log__label" htmlFor="id_001">Email</label>
        <input className="form-log__input" type="email" id="id_001" required placeholder="Enter email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}/>
      </div>
      <div className="form-log__row">
        <label className="form-log__label" htmlFor="id_002">Password</label>
        <input className="form-log__input" type="password" id="id_002" required placeholder="Enter password" value={passwordValue} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="form-log__row form-log__row--btn">
        <Button type="submit" disabled={processing}>Ok</Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
        {
            error && <span>{error}</span>
        }
    </form>
  )
}

FormLog.propTypes = {
    onClose: func.isRequired,
    onSuccess: func.isRequired
}

export default FormLog