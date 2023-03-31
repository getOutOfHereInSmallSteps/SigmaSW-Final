import React from 'react';

import Review from './Review';
import ChartsContainer from './Charts/ChartsContainer';
import TestimonialSidebar from '../../imgs/testimonial-sidebar.png';

const Testimonial = () => {
  return (
    <div className="flex w-full justify-between">
      <img src={TestimonialSidebar} alt="" />
      <div className="grow-1 shrink-0 flex flex-col items-center justify-center">
        <Review />
        <hr className="border-solid border-1 border-color-black w-full opacity-10 mb-[10rem]" />
        <ChartsContainer />
      </div>
      <img src={TestimonialSidebar} className="rotate-180" alt="" />
    </div>
  );
};

export default Testimonial;
