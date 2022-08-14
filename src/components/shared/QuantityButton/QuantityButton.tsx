import React from 'react';
import styles from './QuantityButton.module.css';

interface IQuantityButton {
  handleAdding: () => void;
  handleDecrease: () => void;
  count: number;
}

function QuantityButton({ handleAdding, handleDecrease, count }: IQuantityButton) {
  return (
    <div className={styles.root}>
      <button className={styles.btnReduce} type='button' onClick={handleDecrease}>
        -
      </button>
      <span className={styles.buyQuantity}>{count}</span>
      <button className={styles.btnAdd} type='button' onClick={handleAdding}>
        +
      </button>
    </div>
  );
}

export default QuantityButton;
