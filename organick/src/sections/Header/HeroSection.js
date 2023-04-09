import React from 'react';
import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';
import Button from '../../components/UI/Button';
import Container from '../../components/UI/Container';
import HeroContainer from './HeroContainer';

import FadeInSection from '../../components/Animations/FadeInSection';

const HeroSection = () => {
  return (
    <FadeInSection>
      <HeroContainer>
        <Container className="flex-1">
          <Subheading>100% Natural Food</Subheading>
          <Heading className="mb-10 max-w-[52rem] text-9xl max-lg:text-8xl">
            Choose the best healthier way of life
          </Heading>
          <Button type="yellow">Explore Now</Button>
        </Container>
      </HeroContainer>
    </FadeInSection>
  );
};

export default HeroSection;
