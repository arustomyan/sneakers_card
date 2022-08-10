import React from 'react';
import styles from './SelectColor.module.css';

interface SelectColorProps {
  variation?: object[];
}

function SelectColor({ variation }: SelectColorProps) {
  const variationFake = [
    { color: '#39393A', article: 1531511 },
    { color: '#B9B3B0', article: 425 },
    { color: '#5D70CE', article: 25 },
    { color: '#FF9200', article: 32425 },
    { ...variation },
  ];

  return (
    <div className={styles.root}>
      <span className={styles.title}>Цвет:</span>

      {variationFake.map((variant) => (
        <label>
          <input type='radio' name='color' className={styles.radioBtn} />
          <div className={styles.customRadio} style={{ backgroundColor: `${variant.color}` }}></div>
        </label>
      ))}
    </div>
  );
}

export default SelectColor;
