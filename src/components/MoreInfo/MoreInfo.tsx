import React, { useState } from 'react';
import styles from './MoreInfo.module.css';
import UnderlineButton from '../shared/UnderlineButton/UnderlineButton';
import Characteristics from './Characteristics/Characteristics';
import { RootState, useAppSelector } from '../../store';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';

type stateSection = [string, (section: string) => void];

function MoreInfo() {
  const [section, setSection]: stateSection = useState('characteristics');

  const { characteristics } = useAppSelector((state: RootState) => state.product.product);

  const handleDescription = () => {
    setSection('description');
  };

  const handleCharacteristics = () => {
    setSection('characteristics');
  };

  const handleFeedback = () => {
    setSection('feedback');
  };

  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <UnderlineButton
          onClick={handleDescription}
          // prettier-ignore
          modifier={[
            styles.button,
            section === 'description' ? styles.button__active : ''
          ].join(' ',)}
        >
          Описание
        </UnderlineButton>
        <UnderlineButton
          onClick={handleCharacteristics}
          modifier={[
            styles.button,
            section === 'characteristics' ? styles.button__active : '',
          ].join(' ')}
        >
          Характеристики
        </UnderlineButton>
        <UnderlineButton
          onClick={handleFeedback}
          modifier={[styles.button, section === 'feedback' ? styles.button__active : ''].join(' ')}
        >
          Отзывы
        </UnderlineButton>
      </div>
      {section === 'characteristics' && (
        <Characteristics characteristics={Object.values(characteristics)} />
      )}
      {section === 'description' && <Description />}
      {section === 'feedback' && <Feedback />}
    </div>
  );
}

export default MoreInfo;
