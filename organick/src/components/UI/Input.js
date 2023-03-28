import React from 'react';

import Button from '../UI/Button';

import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles['product__controls']}>
      <label className={styles['product__controls-label']}>Quantity :</label>
      <input
        type="number"
        min={0}
        max={99}
        step={1}
        className={styles['product__controls-input']}
        ref={ref}
        value={props.inputQuantity}
        onChange={props.inputChangeHandler}
      />
      <Button onClick={props.addToCartHandler}>Add To Cart</Button>
    </div>
  );
});

export default Input;
