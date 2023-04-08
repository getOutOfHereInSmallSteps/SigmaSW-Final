import React from 'react';

import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import Container from '../../../components/UI/Container';
import Flex from '../../../components/UI/Flex';
import Button from '../../../components/UI/Button';
import ProductsPage from './ProductsPage';

const ProductsDisplay = props => {
  const [isShownMore, setIsShownMore] = useState(false);
  const secondPage = useRef();
  const firstPage = useRef();

  const productsQuantity = props.products.length;

  const productsPageOne = props.products.slice(0, productsQuantity / 2);
  const productsPageTwo = props.products.slice(productsQuantity / 2);

  const toggleShowMoreHandler = () => {
    if (isShownMore)
      firstPage.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    setIsShownMore(prevState => !prevState);
  };

  return (
    <React.Fragment>
      <Container>
        <ProductsPage
          ref={firstPage}
          collection={productsPageOne}
          onSelect={props.onSelect}
        />

        <CSSTransition
          in={isShownMore}
          timeout={{
            enter: 700,
            exit: 700,
          }}
          nodeRef={secondPage}
          classNames={{
            enter: '',
            enterActive: 'animate-fade-in',
            exit: '',
            exitActive: 'animate-fade-out',
          }}
          mountOnEnter
          unmountOnExit
        >
          <ProductsPage
            ref={secondPage}
            onSelect={props.onSelect}
            collection={productsPageTwo}
          />
        </CSSTransition>
      </Container>
      <Flex>
        <Button onClick={toggleShowMoreHandler}>
          {isShownMore ? 'Hide All' : 'Load More'}
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export default ProductsDisplay;
