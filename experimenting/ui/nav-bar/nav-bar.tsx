import classes from "./navBar.module.css";
import React from 'react';

export type NavBarProps = {
  children: JSX.Element | JSX.Element[] | string;
  logo: string;
  styles: NavBarStyleProps
};

export type NavBarStyleProps = {
  navBarClassName: string;
  logoClassName: string;
}

export function NavBar({ children, logo = 'Logo', styles }: NavBarProps) {
  return (
    <div className={`${classes.container} ${styles.navBarClassName}`}>
      <div className={`${classes.logo} ${styles.logoClassName}`}>{logo}</div>
      {children}
    </div>
  );
}
