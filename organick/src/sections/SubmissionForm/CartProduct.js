import React from 'react';

import styles from './CartProduct.module.scss';

import Heading from '../../components/Typography/Heading';
import ProductPrice from '../../sections/Products/ProductPrice';
import Input from '../../components/UI/Input';

const CartProduct = () => {
  return (
    <div className="cart-product">
      <div className="cart-product__info">
        <div className="cart-product__img"></div>
        <Heading>Cart Product</Heading>;
        <ProductPrice price={20} discount={8} />
      </div>
      <Input />
    </div>
  );
};

export default CartProduct;
