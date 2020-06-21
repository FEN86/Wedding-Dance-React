import React from 'react';
import './Button.scss';
import cls from 'classnames';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { size, color, type, children, onClick, className } = props;
  const classNames = cls('btn', `btn--size-${size}`, `btn--color-${color}`, { [className]: className })
  return (
    <button onClick={onClick} className={classNames} type={type}>{children}</button>
  )
}

Button.propTypes = {
  size: PropTypes.oneOf(['md', 'sm']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func
}

Button.defaultProps = {
  size: 'md',
  color: 'primary',
  type: 'button'
}

export default Button;