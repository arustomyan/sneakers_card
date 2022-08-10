import React from 'react';
import styles from './SelectColor.module.css';
import data from '../../fakeData.json';

function SelectColor() {
  const variationFake = Object.values(data[0].variation);

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
