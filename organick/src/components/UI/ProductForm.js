import React, { useState } from 'react';

import styles from './ProductForm.module.scss';

import { ReactComponent as Rating } from '../../svg/product-rating.svg';

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store';

import { useRef } from 'react';

import Heading from '../Typography/Heading';
import ProductPrice from '../../sections/Products/ProductPrice';
import Paragraph from '../Typography/Paragraph';
import Container from './Container';
import Flex from './Flex';
import Button from './Button';
import ProductTag from '../../sections/Products/ProductTag';
import Input from '../UI/Input';

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

const flexStyles = {
  gap: '2.4rem',
};

const ProductForm = props => {
  const [inputQuantity, setInputQuantity] = useState(1);
  const dispatch = useDispatch();

  const productsAmount = useRef();

  const addToCartHandler = e => {
    e.preventDefault();
    const selectedProductAmount = +productsAmount.current.value;
    // dispatch(increaseCartCounter(selectedProductAmount));

    const addedItem = {
      name: props.selectedProduct.name,
      price: props.selectedProduct.price,
      quantity: selectedProductAmount,
      id: props.selectedProduct.id,
      link: props.selectedProduct.link,
      discount: props.selectedProduct.discount,
    };

    dispatch(addItemToCart(addedItem));
  };

  const productImgBackground = {
    backgroundImage: `url(${props.selectedProduct.link})`,
  };

  const inputChangeHandler = e => {
    setInputQuantity(e.target.value);
  };

  return (
    <div className={styles.product}>
      <Container style={containerStyles}>
        <div className={styles['product__details']}>
          <div
            style={productImgBackground}
            className={styles['product__details-img']}
          >
            <ProductTag>{props.selectedProduct.type}</ProductTag>
          </div>
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
            <Input
              onClick={addToCartHandler}
              inputQuantity={inputQuantity}
              inputChangeHandler={inputChangeHandler}
              ref={productsAmount}
              buttonText={'Add To Cart'}
              hideButtonArrow={false}
            />
          </div>
        </div>
        <div className={styles['product__description']}>
          <Flex style={flexStyles}>
            <Button hideArrow={true}>Product Description</Button>
            <Button hideArrow={true}>Additional Info</Button>
          </Flex>
          <Paragraph>{props.selectedProduct.description}</Paragraph>
        </div>
        <Button
          hideArrow={true}
          onClick={props.onClose}
          style={closeBtnPosition}
        >
          X
        </Button>
      </Container>
    </div>
  );
};

export default ProductForm;
