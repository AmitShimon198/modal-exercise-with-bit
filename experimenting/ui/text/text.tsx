import React from 'react';
import classes from './text.module.css'

export type TextProps = {
  className?: string;
  theme?: 'bright' | 'dark';
  children: JSX.Element | JSX.Element[] | string;
};

export function Text({ children, className, theme = 'bright' }: TextProps) {
  const themeStyle = theme === 'bright' ? classes.bright : classes.dark;
  return (
    <span className={`${classes.container} ${themeStyle} ${className}`}>
      {children}
    </span>
  );
}
