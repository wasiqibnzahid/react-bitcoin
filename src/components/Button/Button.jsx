// Button.js
import React from 'react';
import './button.css';

const Button = ({ label, variant, className, children, onClick, ...props }) => {
  let classList = 'button';

  if (!variant || variant === 'primary') {
    classList += ' primary';
  } else if (variant === 'dark') {
    classList += ' dark';
  } 
  else if (variant === 'secondary') {
    classList += ' secondary';
  } 

  function handleClick(e) {
    if (!props?.disabled && onClick) {
      onClick(e);
    }
  }

  return (
    <button
      {...props}
      onClick={handleClick}
      className={`${classList} ${className} ${props.disabled ? 'disabled' : ''}`}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
