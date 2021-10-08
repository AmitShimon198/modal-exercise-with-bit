import React from 'react';
import classes from './card.module.css';
export type CardProps = {
  children: JSX.Element | JSX.Element[] | string;
  containerClassName?: string;
};

export function Card({ children, containerClassName }: CardProps) {
  return (
    <div className={`${classes.container} ${containerClassName}`}>
      {children}
    </div>
  );
}

