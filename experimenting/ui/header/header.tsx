import React from 'react';
import classes from './header.module.css';

export type HeaderProps = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
};

export function Header({ children, className = '' }: HeaderProps) {
  return (
    <div className={`${classes.container} ${className}`}>
      {children}
    </div>
  );
}
