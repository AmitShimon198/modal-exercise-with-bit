import React from 'react';
import classes from './button.module.css';
export type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string,
  className?: string,
  onClick: React.MouseEventHandler,
  disabled?: boolean;
};

export function Button({ disabled = false, className, children, onClick }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
}
