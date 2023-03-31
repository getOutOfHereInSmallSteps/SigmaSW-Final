import React from 'react';

const ProductBackdrop = props => {
  return (
    <div
      className="w-full h-full bg-color-white opacity-50 fixed top-0 z-10 overflow-hidden"
      onClick={props.onClose}
    ></div>
  );
};

export default ProductBackdrop;
