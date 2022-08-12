import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SelectColor.module.css';
import { useAppSelector } from '../../../store';
import { IProduct } from '../../../model/product';

function SelectColor() {
  const { variation }: IProduct = useAppSelector((state) => state.product.product);

  const [searchParams, setSearchParams] = useSearchParams();

  const article = searchParams.get('article') || '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ article: e.target.value });
  };

  return (
    <div className={styles.root}>
      <span className={styles.title}>Цвет:</span>

      {Object.values(variation).map((variant) => (
        <label key={variant.article} className={styles.label}>
          <input
            type='radio'
            name='color'
            className={styles.radioBtn}
            value={variant.article}
            onChange={handleChange}
            checked={+article === variant.article}
          />
          <div className={styles.customRadio} style={{ backgroundColor: `${variant.color}` }}></div>
        </label>
      ))}
    </div>
  );
}

export default SelectColor;
