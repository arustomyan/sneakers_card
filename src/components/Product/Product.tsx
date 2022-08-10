import React from 'react';
import styles from './Product.module.css';
import Header from '../Header/Header';
import SelectColor from '../SelectColor/SelectColor';
import PreviewImg from '../PreviewImg/PreviewImg';
import BuyButtons from '../BuyButtons/BuyButtons';
import MoreInfo from '../MoreInfo/MoreInfo';
import img1 from '../../image/img1.png';
import Slider from '../Slider/Slider';

function Product() {
  return (
    <div className={styles.root}>
      <Header />

      <div className={styles.content}>
        <p className={styles.article}>Артикул: 34934934</p>
        <div className={styles.contentContainer}>
          <div className={styles.preview}>
            <PreviewImg imgLink={img1} />
            <Slider />
          </div>

          <div className={styles.info}>
            <span className={styles.price}>
              12 000 <span className={styles.currency}>₽</span>
            </span>

            <SelectColor />
            <BuyButtons />
            <MoreInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
