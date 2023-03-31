import React from 'react';

import FlexContainer from '../../components/UI/FlexContainer';
import Banner from './Banner';

const BannersSection = () => {
  return (
    <FlexContainer className="gap-[3.6rem] mb-[19rem]">
      <Banner
        heading="Get Garden Fresh Fruits"
        subheading="Natural!!"
        className="bg-[url('./imgs/banner-1.png')]"
      />
      <Banner
        heading="Get 10% off on Vegetables"
        subheading="Offer!!"
        className="bg-[url('./imgs/banner-2.png')]"
      />
    </FlexContainer>
  );
};

export default BannersSection;
