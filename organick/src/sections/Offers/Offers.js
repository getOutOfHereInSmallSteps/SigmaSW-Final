import React from 'react';
import Products from '../Products/Products';
import Product from '../Products/Product';

import styles from './Offers.module.scss';

const Offers = () => {
  return (
    <div className={styles['offers']}>
      <div className={styles['offers__container']}>
        <h3 className={styles['offers-subheading']}>Offer</h3>
        <h2 className={styles['offers-heading']}>We Offer Organic For You</h2>
        <div className={styles['products__container']}>
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
    </div>
  );
};

export default Offers;
