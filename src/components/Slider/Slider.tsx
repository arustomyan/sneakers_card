import React from 'react';
import styles from './Slider.module.css';
import PreviewImg from '../PreviewImg/PreviewImg';
import img2 from '../../image/img2.png';
import img3 from '../../image/img3.png';
import img4 from '../../image/img4.png';

function Slider() {
  return (
    <div className={styles.root}>
      <PreviewImg imgLink={img2} modifier={styles.previewImg} />
      <PreviewImg imgLink={img3} modifier={styles.previewImg} />
      <PreviewImg imgLink={img4} modifier={styles.previewImg} />
    </div>
  );
}

export default Slider;
