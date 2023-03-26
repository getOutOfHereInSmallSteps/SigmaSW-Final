import React from 'react';
import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';
import Container from '../../components/UI/Container';
import ProductBackdrop from '../../components/UI/ProductBackdrop';
import ProductForm from '../../components/UI/ProductForm';
import Product from './Product';

import styles from './Products.module.scss';

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
  return (
    <React.Fragment>
      <div className={styles.categories}>
        <Subheading style={subheadingStyles}>Categories</Subheading>
        <Heading style={headingStyles}>Our Products</Heading>

        <Container style={containerStyles}>
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
        </Container>
      </div>
      <ProductForm />
      <ProductBackdrop />
    </React.Fragment>
  );
};

export default Products;
