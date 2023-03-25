import React from 'react';
import ProductBackdrop from '../../components/UI/ProductBackdrop';
import ProductForm from '../../components/UI/ProductForm';
import Product from './Product';

import styles from './Products.module.scss';

const Products = () => {
  return (
    <React.Fragment>
      <div className={styles.categories}>
        <h3 className={styles['categories-subheading']}>Categories</h3>
        <h2 className={styles['categories-heading']}>Our Products</h2>
        <div className={styles['categories__container']}>
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
        </div>
      </div>
      <ProductForm />
      <ProductBackdrop />
    </React.Fragment>
  );
};

export default Products;
