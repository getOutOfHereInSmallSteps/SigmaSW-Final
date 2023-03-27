import React from 'react';

import styles from './Button.module.scss';

import { ReactComponent as ButtonArrow } from '../../svg/button-arrow.svg';

const Button = props => {
  const clickHandler = props.onClick || (e => e.preventDefault());
  const buttonStyles = `${styles.button} ${styles[props.className]}`;

  return (
    <a
      href="/"
      className={buttonStyles}
      onClick={clickHandler}
      style={props.style}
    >
      {props.children}

      {!props.hideArrow && <ButtonArrow />}
    </a>
  );
};

export default Button;
