import React from 'react';
import classes from './hr.module.css';


export type HrProps = {
  style?: React.CSSProperties,
  className?: string,
  theme?: 'bright' | 'dark',
};

export function Hr({ style, className = '', theme = "bright" }: HrProps) {
  const themeStyle = theme === 'bright' ? classes.bright : classes.dark;
  return (
    <hr style={style} className={`${classes.hr} ${themeStyle} ${className}`} />
  );
}
