import React from 'react';

import Product from './Product';

const ProductsPage = React.forwardRef((props, ref) => {
  return (
    <div className="grid grid-cols-auto-fill-minmax gap-8 mb-8" ref={ref}>
      {props.collection.map(product => (
        <Product
          productsData={product}
          onSelectItem={props.onSelect}
          key={product.id}
        />
      ))}
    </div>
  );
});

export default ProductsPage;
