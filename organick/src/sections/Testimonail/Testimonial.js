import React from 'react';

import Review from './Review';
import ChartsContainer from './Charts/ChartsContainer';
import TestimonialSidebar from '../../imgs/testimonial-sidebar.png';
import FadeInSection from '../../components/Animations/FadeInSection';

const Testimonial = () => {
  return (
    <FadeInSection>
      <div className="flex w-full items-center justify-between max-xl:mb-[15rem] max-xl:justify-center max-lg:p-8">
        <div className="max-xl:hidden">
          <img src={TestimonialSidebar} alt="" className="shrink" />
        </div>
        <div className="flex shrink flex-col items-center justify-center">
          <Review />
          <hr className="border-1 mb-[10rem] w-full border-solid border-color-black opacity-10" />
          <ChartsContainer />
        </div>
        <div className="max-xl:hidden">
          <img src={TestimonialSidebar} className="shrink rotate-180" alt="" />
        </div>
      </div>
    </FadeInSection>
  );
};

export default Testimonial;
