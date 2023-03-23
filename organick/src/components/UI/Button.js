import React from 'react';

import styles from './Button.module.scss';

const Button = props => {
  return (
    <a href="/" className={styles.button}>
      {props.children}
    </a>
  );
};

export default Button;
