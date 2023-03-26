import React from 'react';
import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';
import Button from '../../components/UI/Button';
import Container from '../../components/UI/Container';

import HeroContainer from './HeroContainer';

const headingStyles = {
  fontSize: '7rem',
  maxWidth: '52rem',
};

const subheadingStyles = {
  fontSize: '3.6rem',
};

const containerStyles = {
  flex: '1',
};

const HeroSection = () => {
  return (
    <HeroContainer>
      <Container style={containerStyles}>
        <Subheading style={subheadingStyles}>100% Natural Food</Subheading>
        <Heading style={headingStyles}>
          Choose the best healthier way of life
        </Heading>
        <Button>Explore Now</Button>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
