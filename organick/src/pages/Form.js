import React from 'react';
import { Link } from 'react-router-dom';

import Heading from '../components/Typography/Heading';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store';
import Paragraph from '../components/Typography/Paragraph';
import Button from '../components/UI/Button';

const FormPage = () => {
  const cart = useSelector(state => state.cart);

  console.log(cart);

  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearCart([]));
  };

  return (
    <React.Fragment>
      <Heading>Here will go some form</Heading>;
      <Link to="success">Success Message</Link>
      <Link to="/">Go Main</Link>
      <Link to="dasdas">Error</Link>
      {cart.map(cartItem => (
        <Paragraph>
          {cartItem.name}
          {cartItem.quantity}
        </Paragraph>
      ))}
      <Button onClick={clear}>Clear Cart</Button>
    </React.Fragment>
  );
};

export default FormPage;
