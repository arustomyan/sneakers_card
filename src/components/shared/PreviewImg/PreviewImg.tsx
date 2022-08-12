import React from 'react';
import styles from './PreviewImg.module.css';

interface PreviewImgProps {
  imgLink: any;
  modifier?: string;
  onClick?: () => void;
}

function PreviewImg({ imgLink, onClick, modifier = '' }: PreviewImgProps) {
  return (
    // eslint-disable-next-line
    <div className={`${styles.root} + ${modifier}`} onClick={onClick}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={imgLink} alt='sneaker' />
      </div>
    </div>
  );
}

export default PreviewImg;
