import React from 'react';

import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';
import Container from '../../components/UI/Container';
import ProductBackdrop from '../../components/UI/ProductBackdrop';
import ProductForm from '../../components/UI/ProductForm';
import Product from './Product';

import styles from './Products.module.scss';

import { useState } from 'react';

const DUMMY_DB = [
  {
    id: 'p1',
    type: 'vegetable',
    name: 'Calabrese Broccoli',
    price: '20',
    discount: '7',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
  },
  {
    id: 'p2',
    type: 'fresh',
    name: 'Fresh Banana Fruites',
    price: '20',
    discount: '6',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
  },
  {
    type: 'millets',
    name: 'White Nuts',
    price: '20',
    discount: '5',
    id: 'p3',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
  },
  {
    type: 'vegetables',
    name: 'Vegan Red Tomato',
    price: '20',
    discount: '3',
    id: 'p4',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
  },
  {
    type: 'health',
    name: 'Mung Bean',
    price: '20',
    discount: '9',
    id: 'p5',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
  },
  {
    type: 'nuts',
    name: 'Brown Hazelnut',
    price: '20',
    discount: '8',
    id: 'p6',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
  },
  {
    type: 'fresh',
    name: 'Eggs',
    price: '20',
    discount: '3',
    id: 'p7',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
  },
  {
    type: 'fresh',
    name: 'Zelco Suji Elaichi Rusk',
    price: '20',
    discount: '5',
    id: 'p8',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
  },
];

const subheadingStyles = {
  textAlign: 'center',
  marginBottom: '1rem',
};
const headingStyles = {
  textAlign: 'center',
  marginBottom: '4rem',
};

const containerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2rem',
};

const Products = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const selectItemHandler = productId => {
    const selectedItem = DUMMY_DB.find(element => element.id === productId);
    setActiveItem(selectedItem);
  };

  const openModalHandler = () => {
    setIsModalActive(true);
  };

  const closeModalHandler = e => {
    e.preventDefault();
    setIsModalActive(false);
    setActiveItem(null);
  };

  return (
    <div className={styles.categories}>
      <Subheading style={subheadingStyles}>Categories</Subheading>
      <Heading style={headingStyles}>Our Products</Heading>

      <Container style={containerStyles}>
        {/* {DUMMY_DB.map(product => (
          <Product
            type={product.type}
            name={product.name}
            price={product.price}
            discount={product.discount}
            onOpenModal={openModalHandler}
            key={product.id}
          />
        ))} */}

        {DUMMY_DB.map(product => (
          <Product
            type={product.type}
            name={product.name}
            price={product.price}
            discount={product.discount}
            onOpenModal={openModalHandler}
            onSelectItem={selectItemHandler}
            key={product.id}
            id={product.id}
          />
        ))}
      </Container>

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

export default Products;
