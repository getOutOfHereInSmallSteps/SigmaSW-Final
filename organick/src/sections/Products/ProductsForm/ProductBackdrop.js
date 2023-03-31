import React from 'react';

const ProductBackdrop = props => {
  return (
    <div
      className="w-full h-full bg-color-white opacity-50 absolute top-0 z-10"
      onClick={props.onClose}
    ></div>
  );
};

export default ProductBackdrop;
