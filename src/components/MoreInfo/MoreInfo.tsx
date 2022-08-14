import React, { useState } from 'react';
import styles from './MoreInfo.module.css';
import UnderlineButton from '../shared/UnderlineButton/UnderlineButton';
import Characteristics from './Characteristics/Characteristics';
import { RootState, useAppSelector } from '../../store';
import Description from './Description/Description';

function MoreInfo() {
  const [section, setSection] = useState('characteristics');

  const { characteristics } = useAppSelector((state: RootState) => state.product.product);

  const handleDescription = () => {
    setSection('description');
  };

  const handleCharacteristics = () => {
    setSection('characteristics');
  };

  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <UnderlineButton onClick={handleDescription}>Описание</UnderlineButton>
        <UnderlineButton onClick={handleCharacteristics}>Характеристики</UnderlineButton>
        <UnderlineButton>Отзывы</UnderlineButton>
      </div>
      {section === 'characteristics' && (
        <Characteristics characteristics={Object.values(characteristics)} />
      )}
      {section === 'description' && <Description />}
    </div>
  );
}

export default MoreInfo;
