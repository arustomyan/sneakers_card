import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Slider.module.css';
import PreviewImg from '../shared/PreviewImg/PreviewImg';
import { RootState, useAppSelector } from '../../store';

function Slider() {
  const { variation } = useAppSelector((state: RootState) => state.product.product);
  const [searchParams, setSearchParams] = useSearchParams();

  const article: string = searchParams.get('article') || '';
  const articles: string[] = Object.keys(variation).filter((item) => item !== article);

  const handleClick = (value: string) => {
    setSearchParams({ article: value });
  };

  return (
    <div className={styles.root}>
      {articles.map((item) => (
        <PreviewImg
          imgLink={variation[item].img}
          modifier={styles.previewImg}
          onClick={() => {
            handleClick(item);
          }}
          key={item}
        />
      ))}
    </div>
  );
}

export default Slider;
