import React from 'react';

import { useSelector } from 'react-redux';

import Heading from '../../../components/Typography/Heading';
import Subheading from '../../../components/Typography/Subheading';
import Container from '../../../components/UI/Container';
import ProductBackdrop from '../ProductsForm/ProductBackdrop';
import ProductForm from '../ProductsForm/ProductForm';
import Product from './Product';
import Button from '../../../components/UI/Button';

import { useState } from 'react';
import CartButton from '../../../components/UI/CartButton';

const ProductsDisplay = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isShownMore, setIsShownMore] = useState(false);

  const productsData = useSelector(state => state.products.list);

  const selectItemHandler = productId => {
    const selectedItem = productsData.find(element => element.id === productId);
    setActiveItem(selectedItem);
  };

  const openModalHandler = () => {
    setIsModalActive(true);
  };

  const closeModalHandler = () => {
    setIsModalActive(false);
    setActiveItem(null);
  };

  const productsPageOne = productsData.slice(0, productsData.length / 2);
  const productsPageTwo = productsData.slice(productsData.length / 2);

  const toggleShowMoreHandler = () => {
    setIsShownMore(prevState => !prevState);
  };

  return (
    <div className="mb-[20rem] relative">
      <Subheading className="text-center">Categories</Subheading>
      <Heading className="text-center mb-[4rem] text-[5rem]">
        Our Products
      </Heading>

      <Container className="grid grid-cols-4 grid-cols-auto-fill-minmax gap-[2rem] mb-[4.8rem]">
        {productsPageOne.map(product => (
          <Product
            type={product.type}
            name={product.name}
            price={product.price}
            discount={product.discount}
            onOpenModal={openModalHandler}
            onSelectItem={selectItemHandler}
            key={product.id}
            id={product.id}
            link={product.link}
          />
        ))}
        {isShownMore &&
          productsPageTwo.map(product => (
            <Product
              type={product.type}
              name={product.name}
              price={product.price}
              discount={product.discount}
              onOpenModal={openModalHandler}
              onSelectItem={selectItemHandler}
              key={product.id}
              id={product.id}
              link={product.link}
            />
          ))}
      </Container>

      <div className="flex justify-center">
        <Button onClick={toggleShowMoreHandler}>
          {isShownMore ? 'Hide All' : 'Load More'}
        </Button>
      </div>

      {isModalActive && (
        <React.Fragment>
          <ProductForm
            selectedProduct={activeItem}
            onClose={closeModalHandler}
          />
          <ProductBackdrop onClose={closeModalHandler} />
        </React.Fragment>
      )}
    </div>
  );
};

export default ProductsDisplay;
