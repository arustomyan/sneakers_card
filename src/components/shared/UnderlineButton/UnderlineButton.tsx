import React from 'react';
import styles from './UnderlineButton.module.css';

interface IUnderlineButton {
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent) => void;
  modifier?: string | string[];
}

function UnderlineButton({ children, onClick, modifier = '' }: IUnderlineButton) {
  return (
    <button className={[styles.root, modifier].join(' ')} type='button' onClick={onClick}>
      {children}
    </button>
  );
}

export default UnderlineButton;
