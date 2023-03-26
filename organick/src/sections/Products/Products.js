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
    type: 'vegetable',
    name: 'Calabrese Broccoli',
    price: '20',
    discount: '7',
    id: 'p1',
  },
  {
    type: 'fresh',
    name: 'Fresh Banana Fruites',
    price: '20',
    discount: '6',
    id: 'p1',
  },
  { type: 'millets', name: 'White Nuts', price: '20', discount: '5', id: 'p1' },
  {
    type: 'vegetables',
    name: 'Vegan Red Tomato',
    price: '20',
    discount: '3',
    id: 'p1',
  },
  { type: 'health', name: 'Mung Bean', price: '20', discount: '9', id: 'p1' },
  {
    type: 'nuts',
    name: 'Brown Hazelnut',
    price: '20',
    discount: '8',
    id: 'p1',
  },
  { type: 'fresh', name: 'Eggs', price: '20', discount: '3', id: 'p1' },
  {
    type: 'fresh',
    name: 'Zelco Suji Elaichi Rusk',
    price: '20',
    discount: '5',
    id: 'p1',
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

  const closeModalHandler = e => {
    e.preventDefault();
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
          <ProductForm onClose={closeModalHandler} />
          <ProductBackdrop onClose={closeModalHandler} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Products;
