import React from 'react';
import FadeInSection from '../../components/Animations/FadeInSection';

import FlexContainer from '../../components/UI/FlexContainer';
import Banner from './Banner';

const BannersSection = () => {
  return (
    <FadeInSection>
      <FlexContainer className="gap-14 mb-80 flex-wrap px-4">
        <Banner
          heading="Get Garden Fresh Fruits"
          subheading="Natural!!"
          bg="bg-[url('./imgs/banner-1.png')]"
          className="text-color-white"
        />
        <Banner
          heading="Get 10% off on Vegetables"
          subheading="Offer!!"
          bg="bg-[url('./imgs/banner-2.png')]"
        />
      </FlexContainer>
    </FadeInSection>
  );
};

export default BannersSection;
