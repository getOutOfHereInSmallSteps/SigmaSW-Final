import React, { useState } from 'react';

import styles from './CartProduct.module.scss';

import Heading from '../../components/Typography/Heading';
import ProductPrice from '../../sections/Products/ProductPrice';
import Input from '../../components/UI/Input';
import { useDispatch } from 'react-redux';
import { removeItemFromCart, setCartItemQuantity } from '../../store';

const headingStyles = {
  fontSize: '3.6rem',
};

const CartProduct = props => {
  const [itemQuantity, setItemQuantity] = useState(props.quantity);

  const dispatch = useDispatch();

  const removeFromCartHandler = e => {
    e.preventDefault();
    dispatch(removeItemFromCart({ id: props.id, quantity: props.quantity }));
  };

  const inputChangeHandler = e => {
    setItemQuantity(+e.target.value);
    dispatch(setCartItemQuantity({ quantity: +e.target.value, id: props.id }));
  };

  return (
    <div className={styles['cart-product']}>
      <div className={styles['cart-product__info']}>
        <div className={styles['cart-product__img']}></div>
        <Heading style={headingStyles}>{props.name}</Heading>
        <ProductPrice price={props.price} discount={props.discount} />
      </div>
      <Input
        hideButtonArrow={true}
        buttonText={'X'}
        inputQuantity={itemQuantity || ''}
        onClick={removeFromCartHandler}
        inputChangeHandler={inputChangeHandler}
      />
    </div>
  );
};

export default CartProduct;
