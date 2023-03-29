import React from 'react';
import Heading from '../../components/Typography/Heading';

import styles from './Totals.module.scss';

const TotalPrice = props => {
  return (
    <div className={styles.total}>
      <div className={styles['total__param']}>
        <Heading>Total Cost</Heading>
        <Heading>{props.price}$</Heading>
      </div>
      <div className={styles['total__param']}>
        <Heading>Discount</Heading>
        <Heading>{props.discount}$</Heading>
      </div>
    </div>
  );
};

export default TotalPrice;
