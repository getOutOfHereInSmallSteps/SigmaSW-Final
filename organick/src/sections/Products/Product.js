import React from 'react';

import styles from './Product.module.scss';

import productImg from '../../imgs/broccoli.png';
import { ReactComponent as Rating } from '../../svg/product-rating.svg';

const Product = props => {
  return (
    <div className={styles.product}>
      <p className={styles['product-tag']}>{props.type}</p>
      <div className={styles['product-img']}></div>
      <h2 className={styles['product-heading']}>{props.name}</h2>
      <hr className={styles['product-separator']} />
      <p className={styles['product-parameters']}>
        <span className={styles['price']}>
          <span className={styles['discount']}>
            ${(+props.price).toFixed(2)}
          </span>
          ${(+props.price - +props.discount).toFixed(2)}
        </span>
        <Rating />
      </p>
    </div>
  );
};

export default Product;
