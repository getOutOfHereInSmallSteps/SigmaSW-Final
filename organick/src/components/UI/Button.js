import React from 'react';

import styles from './Button.module.scss';

const Button = props => {
  return (
    <a href="/" className={styles.button} onClick={props.clickHandler}>
      {props.children}
    </a>
  );
};

export default Button;
