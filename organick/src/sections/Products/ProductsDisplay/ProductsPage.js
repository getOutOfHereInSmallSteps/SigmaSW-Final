import React from 'react';

import Product from './Product';

import useHttp from '../../../hooks/use-http';

const ProductsPage = React.forwardRef((props, ref) => {
  const { productsData, isLoading } = useHttp(props.page);
  // if (props.page === 1) console.log('PAGE 1 INITIATED');
  console.log(isLoading);
  if (isLoading) return <div>Loading...</div>;
  console.log(productsData);
  return (
    <div className="mb-8 grid grid-cols-auto-fill-minmax gap-8" ref={ref}>
      {productsData?.map(product => (
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
