import React from 'react';

import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import FadeInSection from '../../../components/Animations/FadeInSection';

import Heading from '../../../components/Typography/Heading';
import Subheading from '../../../components/Typography/Subheading';
import ProductBackdrop from '../ProductsForm/ProductBackdrop';
import ProductForm from '../ProductsForm/ProductForm';
import ProductsDisplay from './ProductsDisplay';

const ProductsSection = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  // const productsData = useSelector(state => state.products.list);
  const productsRef = useRef();

  // const selectItemHandler = productId => {
  //   const selectedItem = productsData.find(element => element.id === productId);
  //   setActiveItem(selectedItem);
  //   setIsModalActive(true);
  // };

  const selectItemHandler = () => {};

  const closeModalHandler = () => {
    setIsModalActive(false);
  };

  return (
    <FadeInSection>
      <div className="relative mb-[20rem] pt-[18rem]" ref={productsRef}>
        <Subheading className="text-center">Categories</Subheading>
        <Heading className="mb-[4rem] text-center text-[5rem]">
          Our Products
        </Heading>

        <ProductsDisplay
          onSelect={selectItemHandler}
          // products={productsData}
          productsRef={productsRef}
        />

        <ProductForm
          selectedProduct={activeItem}
          onClose={closeModalHandler}
          show={isModalActive}
        />
        <React.Fragment>
          {isModalActive && <ProductBackdrop onClose={closeModalHandler} />}
        </React.Fragment>
      </div>
    </FadeInSection>
  );
};

export default ProductsSection;
