import React from 'react';

import styles from './ProductForm.module.scss';

import { ReactComponent as Rating } from '../../svg/product-rating.svg';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { increaseCartCounter } from '../../store';

import { useRef } from 'react';

const ProductForm = () => {
  const cartCounter = useSelector(state => state.cartCounter);

  const productsAmount = useRef();

  const dispatch = useDispatch();

  const addToCartHandler = () => {
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
          <div className={styles['product__details-info']}>
            <h2 className={styles['product-title']}>Health Pistachios</h2>
            <Rating />
            <p className={styles['product-price']}>
              <span className={styles['product-discount']}>$20.00</span>$13.00
            </p>
            <p className={styles['product-paragraph']}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className={styles['product__controls']}>
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
              <a
                onClick={addToCartHandler}
                className={styles['product__controls-add']}
              >
                Add To Cart
              </a>
            </div>
          </div>
        </div>
        <div className={styles['product__description']}>
          <a className={styles['product__description-button']}>
            Product Description
          </a>
          <a className={styles['product__description-button']}>
            Additional Info
          </a>
          <p className={styles['product__description-paragraph']}>
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8-10%
            carbs. Simple sugars — such as glucose and fructose — make up 70%
            and 80% of the carbs in raw.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
