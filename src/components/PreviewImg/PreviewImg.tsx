import React from 'react';
import styles from './PreviewImg.module.css';
import img from '../../image/img1.png';

interface PreviewImgProps {
  imgLink: any;
  modifier?: string;
}

function PreviewImg({ imgLink, modifier = '' }: PreviewImgProps) {
  return (
    <div className={`${styles.root} + ${modifier}`}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={imgLink} alt='sneaker' />
      </div>
    </div>
  );
}

export default PreviewImg;
