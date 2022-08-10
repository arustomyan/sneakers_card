import React from 'react';
import styles from './Product.module.css';
import Header from '../Header/Header';
import SelectColor from '../SelectColor/SelectColor';
import PreviewImg from '../PreviewImg/PreviewImg';
import BuyButtons from '../BuyButtons/BuyButtons';
import MoreInfo from '../MoreInfo/MoreInfo';
import Slider from '../Slider/Slider';
import data from '../../fakeData.json';

function Product() {
  const { price, article } = data[0].variation[34934934];

  return (
    <div className={styles.root}>
      <Header />

      <div className={styles.content}>
        <p className={styles.article}>Артикул: {article}</p>
        <div className={styles.contentContainer}>
          <div className={styles.preview}>
            <PreviewImg
              imgLink={data[0].variation['34934934'].img}
              modifier={styles.previewActive}
            />
            <Slider />
          </div>

          <div className={styles.info}>
            <span className={styles.price}>
              {price} <span className={styles.currency}>₽</span>
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
