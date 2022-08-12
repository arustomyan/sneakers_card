import React from 'react';
import styles from './UnderlineButton.module.css';

function UnderlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button className={styles.root} type='button'>
      {children}
    </button>
  );
}

export default UnderlineButton;
