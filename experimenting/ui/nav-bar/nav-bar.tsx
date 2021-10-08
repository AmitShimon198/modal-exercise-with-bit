import React from 'react';

export type NavBarProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function NavBar({ text }: NavBarProps) {
  return (
    <div>
      {text}
    </div>
  );
}
