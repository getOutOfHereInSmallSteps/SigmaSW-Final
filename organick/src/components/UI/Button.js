import React from 'react';

import { ReactComponent as ButtonArrow } from '../../svg/button-arrow.svg';

const Button = props => {
  const clickHandler = e => {
    e.preventDefault?.();

    props.onClick?.(e);
  };

  const btnStyles = {
    yellow:
      'text-color-primary-blue bg-color-primary-yellow hover:bg-[#f1d780] active:bg-[#d7be67]',
    active: 'bg-color-primary-green-tint text-color-primary-blue',
    white:
      'bg-color-white border-2 border-solid border-color-primary-blue hover:bg-[#e6e6e6] active:bg-[#ccc]',
    disabled: 'pointer-events-none bg-[#dee2e6] cursor-not-allowed',
  };

  return (
    <a
      href="/"
      className={`flex w-fit items-center gap-4 rounded-3xl px-16 py-12 font-roboto text-4xl font-bold transition duration-300 ${
        props.className
      } ${
        btnStyles[props.type] ||
        'bg-color-primary-blue text-color-white hover:bg-[#3d5e6b] active:bg-[#234452]'
      }`}
      onClick={clickHandler}
    >
      {props.children}

      {!props.hideArrow && <ButtonArrow />}
    </a>
  );
};

export default Button;
