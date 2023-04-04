import React from 'react';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import Heading from '../../../components/Typography/Heading';
import Subheading from '../../../components/Typography/Subheading';
import ProductBackdrop from '../ProductsForm/ProductBackdrop';
import ProductForm from '../ProductsForm/ProductForm';
import ProductsDisplay from './ProductsDisplay';

const ProductsSection = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const productsData = useSelector(state => state.products.list);

  const selectItemHandler = productId => {
    const selectedItem = productsData.find(element => element.id === productId);
    setActiveItem(selectedItem);
    setIsModalActive(true);
  };

  const closeModalHandler = () => {
    setIsModalActive(false);
    setActiveItem(null);
  };

  return (
    <div className="mb-[20rem] relative">
      <Subheading className="text-center">Categories</Subheading>
      <Heading className="text-center mb-[4rem] text-[5rem]">
        Our Products
      </Heading>

      <ProductsDisplay onSelect={selectItemHandler} products={productsData} />

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

export default ProductsSection;
