import React from 'react';

const ProductPrice = props => {
  return (
    <span
      className={`font-opensans font-bold text-[1.8rem] text-color-primary-blue ${props.className}`}
    >
      {props.discount !== 0 && (
        <span className="font-opensans font-semibold text-[1.6rem] text-color-discount line-through mr-[0.5rem]">
          ${(+props.price).toFixed(2)}
        </span>
      )}
      ${(+props.price - +props.discount).toFixed(2)}
    </span>
  );
};

export default ProductPrice;
