import React from 'react';

const ProductTag = props => {
  return (
    <p className="grow-0 shrink-1 py-[0.6rem] px-[1.2rem] font-opensans font-semibold text-[1.6rem] text-center text-color-white bg-color-primary-blue inline w-min rounded-[8px] capitalize">
      {props.children}
    </p>
  );
};

export default ProductTag;
