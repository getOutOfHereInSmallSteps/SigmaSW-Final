import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../../svg/cart-icon.svg';
import Paragraph from '../../Typography/Paragraph';

import { useSelector } from 'react-redux';

const NavCart = () => {
  const cartCounter = useSelector(state => state.cart.productsQuantity);

  return (
    <div className="flex gap-4 items-center border border-solid border-[#e0e0e0] rounded-[33px] p-2 pr-8">
      <Link to="form" className="bg-color-primary-blue p-6 rounded-full">
        <CartIcon />
      </Link>
      <Paragraph className="font-semibold text-color-primary-blue">
        Cart (
        <span className={cartCounter !== 0 ? 'text-color-red' : undefined}>
          {cartCounter}
        </span>
        )
      </Paragraph>
    </div>
  );
};

export default NavCart;
