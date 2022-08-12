import React from 'react';
import styles from './UnderlineButton.module.css';

interface IUnderlineButton {
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent) => void;
}

function UnderlineButton({ children, onClick }: IUnderlineButton) {
  return (
    <button className={styles.root} type='button' onClick={onClick}>
      {children}
    </button>
  );
}

export default UnderlineButton;
