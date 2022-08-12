import React from 'react';
import styles from './MoreInfo.module.css';
import UnderlineButton from '../shared/UnderlineButton/UnderlineButton';
import Characteristics from './Characteristics/Characteristics';
import { RootState, useAppSelector } from '../../store';

function MoreInfo() {
  const { characteristics } = useAppSelector((state: RootState) => state.product.product);

  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <UnderlineButton>Описание</UnderlineButton>
        <UnderlineButton>Характеристики</UnderlineButton>
        <UnderlineButton>Отзывы</UnderlineButton>
      </div>
      <Characteristics characteristics={Object.values(characteristics)} />
    </div>
  );
}

export default MoreInfo;
