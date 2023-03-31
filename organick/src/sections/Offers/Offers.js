import React from 'react';

import Container from '../../components/UI/Container';
import Product from '../Products/ProductsDisplay/Product';
import Subheading from '../../components/Typography/Subheading';
import Heading from '../../components/Typography/Heading';

const Offers = () => {
  return (
    <div className="bg-color-primary-blue py-[20rem]">
      <Container>
        <Subheading className="mb-[0.8rem]">Offer</Subheading>
        <Heading className="mb-[5rem] text-[5rem] text-color-white">
          We Offer Organic For You
        </Heading>
        <div className="grid grid-cols-4 gap-[2rem]">
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
          <Product
            type="Vegetable"
            name="Calabrese Broccoli"
            price="20"
            discount="7"
          />
        </div>
      </Container>
    </div>
  );
};

export default Offers;
