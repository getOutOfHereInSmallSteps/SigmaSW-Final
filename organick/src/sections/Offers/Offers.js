import React from 'react';

import { useSelector } from 'react-redux';

import FadeInSection from '../../components/Animations/FadeInSection';
import Container from '../../components/UI/Container';
import Subheading from '../../components/Typography/Subheading';
import Heading from '../../components/Typography/Heading';
import ProductsPage from '../Products/ProductsDisplay/ProductsPage';

const Offers = () => {
  const topOffers = useSelector(state => state.products.top);

  return (
    <FadeInSection>
      <div className="bg-color-primary-blue py-80">
        <Container>
          <Subheading className="mb-4">Offer</Subheading>
          <Heading className="mb-20 text-7xl text-color-white">
            We Offer Organic For You
          </Heading>
          <ProductsPage collection={topOffers} onSelect={() => {}} />
        </Container>
      </div>
    </FadeInSection>
  );
};

export default Offers;
