import React, { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import Header from '../Header/Header';
import SelectColor from '../shared/SelectColor/SelectColor';
import PreviewImg from '../shared/PreviewImg/PreviewImg';
import BuyButtons from '../shared/BuyButtons/BuyButtons';
import MoreInfo from '../MoreInfo/MoreInfo';
import Slider from '../Slider/Slider';
import Loader from '../shared/Loader/Loader';
import { addProduct } from '../../store/slices/productSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import data from '../../fakeData.json';
import styles from './Product.module.css';

function Product() {
  const { product, isLoading } = useAppSelector((state: RootState) => state.product);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(addProduct(data[0]));
  }, []);

  const article: string = searchParams.get('article') || '';

  if (!product.variation[article] && product.product) {
    return <Navigate to='/' />;
  }

  return (
    <div className={styles.root}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />

          <div className={styles.content}>
            <p className={styles.article}>Артикул: {product.variation[article].article}</p>
            <div className={styles.contentContainer}>
              <div className={styles.preview}>
                <PreviewImg
                  imgLink={product.variation[article].img}
                  modifier={styles.previewActive}
                />
                <Slider />
              </div>

              <div className={styles.info}>
                <span className={styles.price}>
                  {product.variation[article].price} <span className={styles.currency}>₽</span>
                </span>

                <SelectColor />
                <BuyButtons />
                <MoreInfo />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
