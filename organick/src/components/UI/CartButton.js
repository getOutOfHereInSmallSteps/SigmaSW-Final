import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as CartIcon } from '../../svg/cart-icon.svg';

const CartButton = props => {
  return (
    <Link
      to="form"
      className={`bg-color-primary-blue p-6 rounded-full max-md:p-10 max-md:border-solid max-md:border-1 max-md:border-color-white ${props.className}`}
    >
      <CartIcon />
    </Link>
  );
};

export default CartButton;
