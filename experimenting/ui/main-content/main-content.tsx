import React from 'react';
import classes from './main-content.module.css';

export type MainContentProps = {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
};

export function MainContent({ children, className = '' }: MainContentProps) {
  return (
    <div className={`${classes.container} ${className}`}>
      {children}
    </div>
  );
}
