import React from 'react';

import FlexContainer from '../../components/UI/FlexContainer';
import Banner from './Banner';

const BannersSection = () => {
  return (
    <FlexContainer className="gap-[3.6rem] mb-[19rem] flex-wrap px-4">
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
  );
};

export default BannersSection;
