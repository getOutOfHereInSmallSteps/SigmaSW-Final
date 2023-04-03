import React from 'react';

import { useSelector } from 'react-redux';

import Container from '../../components/UI/Container';
import Product from '../Products/ProductsDisplay/Product';
import Subheading from '../../components/Typography/Subheading';
import Heading from '../../components/Typography/Heading';

const Offers = () => {
  const topOffers = useSelector(state => state.products.top);

  return (
    <div className="bg-color-primary-blue py-[20rem]">
      <Container>
        <Subheading className="mb-[0.8rem]">Offer</Subheading>
        <Heading className="mb-[5rem] text-[5rem] text-color-white">
          We Offer Organic For You
        </Heading>
        <div className="grid grid-cols-4 grid-cols-auto-fill-minmax gap-[2rem]">
          {topOffers.map(product => (
            <Product
              type={product.type}
              name={product.name}
              price={product.price}
              discount={product.discount}
              onOpenModal={() => {}}
              onSelectItem={() => {}}
              key={product.id}
              id={product.id}
              link={product.link}
              className="cursor-default"
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Offers;
