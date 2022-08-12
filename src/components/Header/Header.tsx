import React from 'react';
import styles from './Header.module.css';
import ShopCart from '../shared/ShopCart/ShopCart';
import { useAppSelector } from '../../store';

function Header() {
  const title: string = useAppSelector((state) => state.product.product.product);

  return (
    <div className={styles.root}>
      <svg width='51' height='18' viewBox='0 0 51 18' fill='none' className={styles.brandLogo}>
        <path
          d='M5.61067 17.9194C4.09514 17.8599 2.8552 17.4498 1.88568 16.6881C1.70065 16.5426 1.25974 16.1063 1.11182 15.9223C0.718658 15.4334 0.451365 14.9576 0.273082 14.4297C-0.275521 12.8047 0.00682497 10.6724 1.08068 8.33211C2.00012 6.32858 3.41886 4.34147 5.89406 1.58934C6.25867 1.18437 7.34446 0 7.35146 0C7.35406 0 7.29489 0.101372 7.22041 0.224813C6.57683 1.29087 6.02615 2.54657 5.72616 3.63367C5.24425 5.37801 5.30237 6.87495 5.89639 8.0357C6.30616 8.83537 7.00865 9.52803 7.7986 9.91092C9.18152 10.581 11.2062 10.6364 13.6788 10.0731C13.8491 10.0341 22.2847 7.81962 32.4248 5.15192C42.5648 2.48396 50.8627 0.30283 50.8639 0.304627C50.8668 0.306936 27.3057 10.2771 15.0747 15.4496C13.1377 16.2685 12.6198 16.4753 11.7091 16.7915C9.38135 17.5999 7.29619 17.9856 5.61067 17.9194Z'
          fill='#131212'
        />
      </svg>
      <h1 className={styles.title}>{title}</h1>

      <ShopCart />
    </div>
  );
}

export default Header;
