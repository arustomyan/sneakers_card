import React, { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { addProduct } from '../../store/slices/productSlice';
import Header from '../../components/Header/Header';
import SelectColor from '../../components/shared/SelectColor/SelectColor';
import PreviewImg from '../../components/shared/PreviewImg/PreviewImg';
import BuyButtons from '../../components/BuyButtons/BuyButtons';
import MoreInfo from '../../components/MoreInfo/MoreInfo';
import Slider from '../../components/Slider/Slider';
import Loader from '../../components/shared/Loader/Loader';
import styles from './Product.module.css';
import data from '../../fakeData.json';

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
