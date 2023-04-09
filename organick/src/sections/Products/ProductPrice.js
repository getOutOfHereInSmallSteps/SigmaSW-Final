import React from 'react';

const ProductPrice = props => {
  return (
    <span
      className={`font-opensans text-[1.8rem] font-bold text-color-primary-blue ${props.className}`}
    >
      {props.discount !== 0 && (
        <span className="mr-[0.5rem] font-opensans text-[1.6rem] font-semibold text-color-discount line-through">
          ${(+props.price).toFixed(2)}
        </span>
      )}
      ${(+props.price - +props.discount).toFixed(2)}
    </span>
  );
};

export default ProductPrice;
