import React from 'react';

import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import Container from '../../../components/UI/Container';
import Button from '../../../components/UI/Button';
import Product from './Product';

const ProductsDisplay = props => {
  const [isShownMore, setIsShownMore] = useState(false);

  const productsQuantity = props.products.length;

  const productsPageOne = props.products.slice(0, productsQuantity / 2);
  const productsPageTwo = props.products.slice(productsQuantity / 2);

  const toggleShowMoreHandler = () => {
    if (isShownMore)
      props.productsRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsShownMore(prevState => !prevState);
  };

  return (
    <React.Fragment>
      <Container className="grid grid-cols-auto-fill-minmax gap-[2rem] mb-[2rem]">
        {productsPageOne.map(product => (
          <Product productsData={product} onSelectItem={props.onSelect} />
        ))}
      </Container>

      {/* {isShownMore &&
          productsPageTwo.map(product => (
            <Product
              type={product.type}
              name={product.name}
              price={product.price}
              discount={product.discount}
              onSelectItem={props.onSelect}
              key={product.id}
              id={product.id}
              link={product.link}
            />
          ))} */}
      <CSSTransition
        in={isShownMore}
        timeout={{
          enter: 700,
          exit: 700,
        }}
        classNames={{
          enter: '',
          enterActive: 'animate-fade-in',
          exit: '',
          exitActive: 'animate-fade-out',
        }}
        mountOnEnter
        unmountOnExit
      >
        <Container className="grid grid-cols-auto-fill-minmax gap-[2rem] mb-[4.8rem]">
          {productsPageTwo.map(product => (
            <Product productsData={product} onSelectItem={props.onSelect} />
          ))}
        </Container>
      </CSSTransition>
      <div className="flex justify-center">
        <Button onClick={toggleShowMoreHandler}>
          {isShownMore ? 'Hide All' : 'Load More'}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ProductsDisplay;
