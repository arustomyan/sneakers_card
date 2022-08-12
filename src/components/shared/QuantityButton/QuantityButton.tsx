import React from 'react';
import styles from './QuantityButton.module.css';
import { useAppDispatch, useAppSelector } from '../../../store';
import { decreaseCount, increaseCount } from '../../../store/slices/shopCartSlice';

function QuantityButton() {
  const count: number = useAppSelector((state) => state.shopCart.count);
  const dispatch = useAppDispatch();

  const IncreaseCount = () => {
    dispatch(increaseCount());
  };

  const DecreaseCount = () => {
    if (count > 1) dispatch(decreaseCount());
  };

  return (
    <div className={styles.root}>
      <button className={styles.btnReduce} type='button' onClick={DecreaseCount}>
        -
      </button>
      <span className={styles.buyQuantity}>{count}</span>
      <button className={styles.btnAdd} type='button' onClick={IncreaseCount}>
        +
      </button>
    </div>
  );
}

export default QuantityButton;
