import React from 'react';

const ProductTag = props => {
  return (
    <p className="shrink-1 inline w-min grow-0 rounded-[8px] bg-color-primary-blue px-[1.2rem] py-[0.6rem] text-center font-opensans text-[1.6rem] font-semibold capitalize text-color-white">
      {props.children}
    </p>
  );
};

export default ProductTag;
