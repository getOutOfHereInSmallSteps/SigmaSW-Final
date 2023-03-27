import React from 'react';

import styles from './ProductForm.module.scss';

import { ReactComponent as Rating } from '../../svg/product-rating.svg';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { addItemToCart, increaseCartCounter } from '../../store';
import { clearCart } from '../../store';

import { useRef } from 'react';
import Heading from '../Typography/Heading';
import ProductPrice from '../../sections/Products/ProductPrice';
import Paragraph from '../Typography/Paragraph';
import Container from './Container';

import Button from './Button';

const headingStyles = {
  fontWeight: '600',
  fontSize: '4rem',
};

const containerStyles = {
  position: 'relative',
};

const closeBtnPosition = {
  position: 'absolute',
  top: 0,
  right: 0,
};

const ProductForm = props => {
  const cartCounter = useSelector(state => state.cartCounter);
  const cart = useSelector(state => state.cart);
  const productsAmount = useRef();
  const dispatch = useDispatch();

  const addToCartHandler = e => {
    e.preventDefault();
    const selectedProductAmount = +productsAmount.current.value;
    dispatch(increaseCartCounter(selectedProductAmount));
    const addedItem = {
      name: props.selectedProduct.name,
      price: props.selectedProduct.price,
      quantity: selectedProductAmount,
      id: props.selectedProduct.id,
    };

    dispatch(addItemToCart(addedItem));
    dispatch(clearCart());
    console.log(cartCounter);
    console.log(cart);
  };

  return (
    <div className={styles.product}>
      <Container style={containerStyles}>
        <div className={styles['product__details']}>
          <div className={styles['product__details-img']}></div>
          {/* FLEX CONTAINER */}
          <div>
            <Heading style={headingStyles}>
              {props.selectedProduct.name}
            </Heading>
            <Rating />
            <br />
            <ProductPrice
              price={props.selectedProduct.price}
              discount={props.selectedProduct.discount}
            />
            <Paragraph style={{ maxWidth: '65rem' }}>
              {props.selectedProduct.overview}
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
          {/* FLEX CONTAINER */}
          <Button>Product Description</Button>
          <Button>Additional Info</Button>
          <Paragraph>{props.selectedProduct.description}</Paragraph>
        </div>
        <Button onClick={props.onClose} style={closeBtnPosition}></Button>
      </Container>
    </div>
  );
};

export default ProductForm;
