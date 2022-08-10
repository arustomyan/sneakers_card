import React from 'react';
import styles from './MoreInfo.module.css';
import UnderlineButton from '../UnderlineButton/UnderlineButton';
import Characteristics from '../Characteristics/Characteristics';
import data from '../../fakeData.json';

function MoreInfo() {
  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <UnderlineButton>Описание</UnderlineButton>
        <UnderlineButton>Характеристики</UnderlineButton>
        <UnderlineButton>Отзывы</UnderlineButton>
      </div>
      <Characteristics characteristics={Object.values(data[0].characteristics)} />
    </div>
  );
}

export default MoreInfo;
