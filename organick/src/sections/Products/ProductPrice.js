import React from 'react';

import styles from './ProductPrice.module.scss';

const ProductPrice = props => {
  return (
    <span className={styles.price}>
      <span className={styles.discount}>${(+props.price).toFixed(2)}</span>$
      {(+props.price - +props.discount).toFixed(2)}
    </span>
  );
};

export default ProductPrice;
