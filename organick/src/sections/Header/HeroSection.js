import React from 'react';
import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';
import Button from '../../components/UI/Button';
import Container from '../../components/UI/Container';
import HeroContainer from './HeroContainer';

const HeroSection = () => {
  return (
    <HeroContainer>
      <Container className="flex-1">
        <Subheading>100% Natural Food</Subheading>
        <Heading className="text-9xl mb-10 max-w-[52rem]">
          Choose the best healthier way of life
        </Heading>
        <Button type="yellow">Explore Now</Button>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
