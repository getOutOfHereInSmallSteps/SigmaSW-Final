import React from 'react';

import { ReactComponent as ButtonArrow } from '../../svg/button-arrow.svg';

const Button = props => {
  const clickHandler = props.onClick || (e => e.preventDefault());

  const btnStyles = {
    yellow: 'text-color-primary-blue bg-color-primary-yellow',
    blue: 'text-color-white bg-color-primary-blue',
  };

  return (
    <a
      href="/"
      className={`font-roboto py-[2.8rem] px-[4rem]  flex rounded-3xl  text-[2rem] font-bold items-center gap-4 w-[fit-content] ${
        props.className
      } ${btnStyles[props.type] || 'text-color-white bg-color-primary-blue'}`}
      onClick={clickHandler}
    >
      {props.children}

      {!props.hideArrow && <ButtonArrow />}
    </a>
  );
};

export default Button;
