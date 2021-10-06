import React from 'react';
import classes from './button.module.css';
export type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string,
  className?: string,
  onClick: React.MouseEventHandler,
};

export function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
}
