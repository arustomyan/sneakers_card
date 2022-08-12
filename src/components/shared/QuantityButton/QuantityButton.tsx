import React from 'react';
import styles from './QuantityButton.module.css';

function QuantityButton() {
  return (
    <div className={styles.root}>
      <button className={styles.btnReduce} type='button'>
        -
      </button>
      <span className={styles.buyQuantity}>5</span>
      <button className={styles.btnAdd} type='button'>
        +
      </button>
    </div>
  );
}

export default QuantityButton;
