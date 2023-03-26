import React from 'react';

import styles from './Button.module.scss';

import { ReactComponent as ButtonArrow } from '../../svg/button-arrow.svg';

const Button = props => {
  const clickHandler = props.onClick || (e => e.preventDefault());

  return (
    <a
      href="/"
      className={styles.button}
      onClick={clickHandler}
      style={props.style}
    >
      {props.children}
      <ButtonArrow />
    </a>
  );
};

export default Button;
