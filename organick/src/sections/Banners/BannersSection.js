import React from 'react';
import Container from '../../components/UI/Container';
import Banner from './Banner';

const BannersSection = () => {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '3.6rem',
    marginBottom: '19rem',
  };

  return (
    <Container style={containerStyles}>
      <Banner
        className="banner--1"
        heading="Get Garden Fresh Fruits"
        subheading="Natural!!"
      />
      <Banner
        className="banner--2"
        heading="Get 10% off on Vegetables"
        subheading="Offer!!"
      />
    </Container>
  );
};

export default BannersSection;
