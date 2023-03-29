import React from 'react';

import styles from './Product.module.scss';

import { ReactComponent as Rating } from '../../svg/product-rating.svg';
import ProductTag from './ProductTag';
import Heading from '../../components/Typography/Heading';
import ProductPrice from './ProductPrice';
import Flex from '../../components/UI/Flex';

import brocolliImg from '../../imgs/broccoli.png';

const headingStyles = {
  fontSize: '2.4rem',
  marginBottom: '1.2rem',
};

const flexStyles = {
  justifyContent: 'space-between',
};

const Product = props => {
  const selectionHandler = () => {
    props.onOpenModal();
    props.onSelectItem(props.id);
  };

  const productImgBackground = {
    backgroundImage: `url(${props.link})`,
    // backgroundImage: `url(${brocolliImg})`,
  };

  return (
    <div className={styles.product} onClick={selectionHandler}>
      <ProductTag>{props.type}</ProductTag>
      <div style={productImgBackground} className={styles['product-img']}></div>
      <Heading style={headingStyles}>{props.name}</Heading>
      <hr className={styles['product-separator']} />
      <Flex style={flexStyles}>
        <ProductPrice price={props.price} discount={props.discount} />
        <Rating />
      </Flex>
    </div>
  );
};

export default Product;
