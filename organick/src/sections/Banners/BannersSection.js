import React from 'react';

import FlexContainer from '../../components/UI/FlexContainer';
import Banner from './Banner';

const BannersSection = () => {
  const BannerSectionStyles = {
    gap: '3.6rem',
    marginBottom: '19rem',
  };

  const firstBannerStyles = {
    color: '#fff',
  };

  return (
    <FlexContainer style={BannerSectionStyles}>
      <Banner
        className="banner--1"
        heading="Get Garden Fresh Fruits"
        subheading="Natural!!"
        style={firstBannerStyles}
      />
      <Banner
        className="banner--2"
        heading="Get 10% off on Vegetables"
        subheading="Offer!!"
      />
    </FlexContainer>
  );
};

export default BannersSection;
