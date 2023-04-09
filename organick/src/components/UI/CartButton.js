import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as CartIcon } from '../../svg/cart-icon.svg';

const CartButton = props => {
  return (
    <Link
      to="form"
      className={`max-md:border-1 rounded-full bg-color-primary-blue p-6 max-md:border-solid max-md:border-color-white max-md:p-10 ${props.className}`}
    >
      <CartIcon />
    </Link>
  );
};

export default CartButton;
