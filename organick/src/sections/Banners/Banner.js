import React from 'react';

import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';

const Banner = props => {
  return (
    <div
      className={`flex flex-col justify-center bg-cover max-w-[68rem] min-w-[50rem] max-sm:min-w-[20rem] py-[12rem] px-[5.4rem] rounded-[30px] grow ${props.bg}`}
    >
      <Subheading className={`text-[3.6rem] ${props.className}`}>
        {props.subheading}
      </Subheading>
      <Heading className={`text-[4rem] max-w-[27rem] ${props.className}`}>
        {props.heading}
      </Heading>
    </div>
  );
};

export default Banner;
