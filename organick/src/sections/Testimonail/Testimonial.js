import React from 'react';

import Review from './Review';
import ChartsContainer from './Charts/ChartsContainer';
import TestimonialSidebar from '../../imgs/testimonial-sidebar.png';
import FadeInSection from '../../components/Animations/FadeInSection';

const Testimonial = () => {
  return (
    <FadeInSection>
      <div className="flex justify-between items-center w-full max-xl:justify-center max-lg:p-8 max-xl:mb-[15rem]">
        <div className="max-xl:hidden">
          <img src={TestimonialSidebar} alt="" className="shrink" />
        </div>
        <div className="flex flex-col shrink items-center justify-center">
          <Review />
          <hr className="border-solid border-1 border-color-black opacity-10 mb-[10rem] w-full" />
          <ChartsContainer />
        </div>
        <div className="max-xl:hidden">
          <img src={TestimonialSidebar} className="rotate-180 shrink" alt="" />
        </div>
      </div>
    </FadeInSection>
  );
};

export default Testimonial;
