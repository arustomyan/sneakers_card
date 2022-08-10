import React from 'react';
import styles from './Slider.module.css';
import PreviewImg from '../PreviewImg/PreviewImg';
import data from '../../fakeData.json';

function Slider() {
  return (
    <div className={styles.root}>
      <PreviewImg imgLink={data[0].variation['34934935'].img} modifier={styles.previewImg} />
      <PreviewImg imgLink={data[0].variation['34934936'].img} modifier={styles.previewImg} />
      <PreviewImg imgLink={data[0].variation['34934937'].img} modifier={styles.previewImg} />
    </div>
  );
}

export default Slider;
