import React from 'react';

import styles from './Product.module.scss';

import productImg from '../../imgs/broccoli.png';
import { ReactComponent as Rating } from '../../svg/product-rating.svg';
import ProductTag from './ProductTag';
import Heading from '../../components/Typography/Heading';
import ProductPrice from './ProductPrice';

const headingStyles = {
  fontSize: '2.4rem',
  marginBottom: '1.2rem',
};

const Product = props => {
  return (
    <div className={styles.product} onClick={props.onOpenModal}>
      <ProductTag>{props.type}</ProductTag>
      <div className={styles['product-img']}></div>
      <Heading style={headingStyles}>{props.name}</Heading>
      <hr className={styles['product-separator']} />
      {/* FLEX CONTAINER */}
      <p className={styles['product-parameters']}>
        <ProductPrice price={props.price} discount={props.discount} />
        <Rating />
      </p>
    </div>
  );
};

export default Product;
