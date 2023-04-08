import React from 'react';

import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';

const Banner = props => {
  return (
    <div
      className={` bg-cover max-w-[68rem] min-w-[50rem] max-sm:min-w-[20rem] py-48 px-20 rounded-[30px] grow ${props.bg}`}
    >
      <Subheading className={`text-6xl ${props.className}`}>
        {props.subheading}
      </Subheading>
      <Heading className={`text-7xl max-w-[30rem] ${props.className}`}>
        {props.heading}
      </Heading>
    </div>
  );
};

export default Banner;
