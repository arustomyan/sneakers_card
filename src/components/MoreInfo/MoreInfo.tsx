import React from 'react';
import styles from './MoreInfo.module.css';
import UnderlineButton from '../UnderlineButton/UnderlineButton';
import Characteristics from '../Characteristics/Characteristics';
import { Root } from '../../model/obj';

const obj: Root = [
  { characteristic: 'Категория', value: 'Кроссовки' },
  { characteristic: 'Производитель', value: 'Nike' },
  { characteristic: 'Гарантия', value: '2 года' },
];

function MoreInfo() {
  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <UnderlineButton>Описание</UnderlineButton>
        <UnderlineButton>Характеристики</UnderlineButton>
        <UnderlineButton>Отзывы</UnderlineButton>
      </div>
      <Characteristics characteristics={obj} />
    </div>
  );
}

export default MoreInfo;
