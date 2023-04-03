import React, { useState } from 'react';

import SubmissionBanner from '../sections/SubmissionForm/SubmissionBanner';
import SubmissionContainer from '../sections/SubmissionForm/SubmissionContainer';
import CartProduct from '../sections/SubmissionForm/CartProduct';
import TotalPrice from '../sections/SubmissionForm/TotalPrice';
import Button from '../components/UI/Button';
import SubmissionForm from '../sections/SubmissionForm/SubmissionForm';
import Heading from '../components/Typography/Heading';

import { useSelector } from 'react-redux';

const FormPage = () => {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const cart = useSelector(state => state.cart.products);

  const orderConfirmHandler = e => {
    e.preventDefault();
    setIsOrderConfirmed(true);
  };

  const prices = cart.reduce(
    (acc, curr) => {
      acc.totalDiscount += +curr.discount * curr.quantity;
      acc.totalPrice += (+curr.price - +curr.discount) * curr.quantity;

      return acc;
    },
    { totalPrice: 0, totalDiscount: 0 }
  );

  return (
    <div className="mb-[14rem]">
      <SubmissionBanner />
      <SubmissionContainer>
        {cart.map(cartItem => (
          <CartProduct
            name={cartItem.name}
            price={cartItem.price}
            discount={cartItem.discount}
            quantity={cartItem.quantity}
            id={cartItem.id}
            key={cartItem.id}
            link={cartItem.link}
          />
        ))}
        {cart.length !== 0 ? (
          <TotalPrice
            price={prices.totalPrice}
            discount={prices.totalDiscount}
          />
        ) : (
          <div className="flex justify-center">
            <Heading>No Products Found</Heading>
          </div>
        )}

        {!isOrderConfirmed && cart.length !== 0 && (
          <div className="flex justify-center">
            <Button onClick={orderConfirmHandler}>To order</Button>
          </div>
        )}
        {isOrderConfirmed && cart.length !== 0 && <SubmissionForm />}
      </SubmissionContainer>
    </div>
  );
};

export default FormPage;
