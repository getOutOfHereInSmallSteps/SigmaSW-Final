import React from 'react';
import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';

const Banner = props => {
  // const bannerStyles = `${styles.banner} ${styles[`${props.className}`]}`;

  return (
    <div
      className={`flex flex-col justify-center bg-cover w-[68rem] py-[12rem] px-[5.4rem] rounded-[30px] ${props.className}`}
    >
      <Subheading className="text-[3.6rem]">{props.subheading}</Subheading>
      <Heading className="text-[4rem] max-w-[27rem]">{props.heading}</Heading>
    </div>
  );
};

export default Banner;
