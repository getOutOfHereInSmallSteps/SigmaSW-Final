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
  { type: 'vegetable', name: 'Calabrese Broccoli', price: '20', discount: '7' },
  { type: 'fresh', name: 'Fresh Banana Fruites', price: '20', discount: '6' },
  { type: 'millets', name: 'White Nuts', price: '20', discount: '5' },
  { type: 'vegetables', name: 'Vegan Red Tomato', price: '20', discount: '3' },
  { type: 'health', name: 'Mung Bean', price: '20', discount: '9' },
  { type: 'nuts', name: 'Brown Hazelnut', price: '20', discount: '8' },
  { type: 'fresh', name: 'Eggs', price: '20', discount: '3' },
  {
    type: 'fresh',
    name: 'Zelco Suji Elaichi Rusk',
    price: '20',
    discount: '5',
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

  const openModalHandler = () => {
    setIsModalActive(true);
  };

  const closeModalHandler = () => {
    setIsModalActive(false);
  };

  return (
    <div className={styles.categories}>
      <Subheading style={subheadingStyles}>Categories</Subheading>
      <Heading style={headingStyles}>Our Products</Heading>

      <Container style={containerStyles}>
        {DUMMY_DB.map(product => (
          <Product
            type={product.type}
            name={product.name}
            price={product.price}
            discount={product.discount}
            onOpenModal={openModalHandler}
          />
        ))}

        {DUMMY_DB.map(product => (
          <Product
            type={product.type}
            name={product.name}
            price={product.price}
            discount={product.discount}
            onOpenModal={openModalHandler}
          />
        ))}
      </Container>

      {isModalActive && (
        <React.Fragment>
          <ProductForm />
          <ProductBackdrop />
        </React.Fragment>
      )}
    </div>
  );
};

export default Products;
