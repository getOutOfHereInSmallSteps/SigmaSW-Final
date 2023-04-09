import React from 'react';

import Paragraph from '../../Typography/Paragraph';

import { useSelector } from 'react-redux';
import CartButton from '../CartButton';

const NavCart = () => {
  const cartCounter = useSelector(state => state.cart.productsQuantity);

  return (
    <div className="z-30 flex items-center gap-4 rounded-[33px] border border-solid border-[#e0e0e0] p-2 pr-8 max-xl:border-none max-md:fixed max-md:bottom-10 max-md:right-10 max-md:p-0">
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
