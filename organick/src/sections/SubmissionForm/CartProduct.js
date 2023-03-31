import React, { useState } from 'react';

import Heading from '../../components/Typography/Heading';
import ProductPrice from '../../sections/Products/ProductPrice';
import Input from '../../components/UI/Input';
import { useDispatch } from 'react-redux';
import { removeItemFromCart, setCartItemQuantity } from '../../store';

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

  const cartProductImage = {
    backgroundImage: `url(${props.link})`,
  };

  return (
    <div className="flex items-center justify-between pb-[4.2rem]">
      <div className="flex items-center gap-4">
        <div
          style={cartProductImage}
          className={`rounded-[20px] w-[20rem] h-[20rem] bg-cover bg-blend-multiply bg-center bg-color-white p-4`}
        ></div>
        <Heading className="text-[3.6rem]">{props.name}</Heading>
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
