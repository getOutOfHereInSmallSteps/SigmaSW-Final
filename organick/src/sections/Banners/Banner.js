import React from 'react';

import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';

const Banner = props => {
  return (
    <div
      className={` min-w-[50rem] max-w-[68rem] grow rounded-[30px] bg-cover px-20 py-48 max-sm:min-w-[20rem] ${props.bg}`}
    >
      <Subheading className={`text-6xl ${props.className}`}>
        {props.subheading}
      </Subheading>
      <Heading className={`max-w-[30rem] text-7xl ${props.className}`}>
        {props.heading}
      </Heading>
    </div>
  );
};

export default Banner;
