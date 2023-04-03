import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../../svg/cart-icon.svg';
import Paragraph from '../../Typography/Paragraph';

import { useSelector } from 'react-redux';
import CartButton from '../CartButton';

const NavCart = () => {
  const cartCounter = useSelector(state => state.cart.productsQuantity);

  return (
    <div className="flex gap-4 items-center border border-solid border-[#e0e0e0] rounded-[33px] p-2 pr-8 max-xl:border-none max-md:fixed max-md:bottom-10 max-md:right-10 max-md:p-0 z-30">
      <CartButton />
      <Paragraph className="font-semibold text-color-primary-blue max-xl:hidden">
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
