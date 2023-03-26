import React from 'react';

import styles from './ProductBackdrop.module.scss';

const ProductBackdrop = props => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

export default ProductBackdrop;
