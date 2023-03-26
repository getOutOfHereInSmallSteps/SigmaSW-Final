import React from 'react';

import styles from './ProductForm.module.scss';

import { ReactComponent as Rating } from '../../svg/product-rating.svg';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { increaseCartCounter } from '../../store';

import { useRef } from 'react';
import Heading from '../Typography/Heading';
import ProductPrice from '../../sections/Products/ProductPrice';
import Paragraph from '../Typography/Paragraph';

import Button from './Button';

const headingStyles = {
  fontWeight: '600',
  fontSize: '4rem',
};

const ProductForm = () => {
  const cartCounter = useSelector(state => state.cartCounter);

  const productsAmount = useRef();

  const dispatch = useDispatch();

  const addToCartHandler = e => {
    e.preventDefault();
    const selectedProductAmount = +productsAmount.current.value;
    dispatch(increaseCartCounter(selectedProductAmount));
    console.log(cartCounter);
  };

  console.log(cartCounter);

  return (
    <div className={styles.product}>
      <div className={styles.container}>
        <div className={styles['product__details']}>
          <div className={styles['product__details-img']}></div>
          {/* FLEX CONTAINER */}
          <div className={styles['product__details-info']}>
            <Heading style={headingStyles}>Health Pistachios</Heading>
            <Rating />
            <br />
            <ProductPrice price={20} discount={7} />
            <Paragraph style={{ maxWidth: '65rem' }}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Paragraph>
            <div className={styles['product__controls']}>
              {/* FLEX CONTAINER */}
              <label className={styles['product__controls-label']}>
                Quantity :
              </label>
              <input
                type="number"
                min={0}
                max={99}
                step={1}
                className={styles['product__controls-input']}
                ref={productsAmount}
              />
              <Button onClick={addToCartHandler}>Add To Cart</Button>
            </div>
          </div>
        </div>
        <div className={styles['product__description']}>
          <Button>Product Description</Button>
          <Button>Additional Info</Button>
          <Paragraph>
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8-10%
            carbs. Simple sugars — such as glucose and fructose — make up 70%
            and 80% of the carbs in raw.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
