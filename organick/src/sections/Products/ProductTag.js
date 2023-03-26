import React from 'react';

import styles from './ProductTag.module.scss';

const ProductTag = props => {
  return <p className={styles['product-tag']}>{props.children}</p>;
};

export default ProductTag;
