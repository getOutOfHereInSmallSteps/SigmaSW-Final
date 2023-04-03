import React from 'react';

import Subheading from '../../components/Typography/Subheading';
import Heading from '../../components/Typography/Heading';
import UserAvatar from '../../imgs/user-avatar.jpg';
import Paragraph from '../../components/Typography/Paragraph';
import Controls from '../../imgs/navigation.png';
import { ReactComponent as Stars } from '../../svg/Stars.svg';

const Review = () => {
  return (
    <div className="flex flex-col items-center mb-[10rem]">
      <Subheading className="text-[3.6rem] mb-4">Testimonail</Subheading>
      <Heading className="text-[5rem] mb-[6rem] text-center">
        What Our Customer Saying?
      </Heading>
      <img src={UserAvatar} className="rounded-full mb-8" alt="User Avatar" />
      <Stars className="mb-8" />
      <Paragraph className="max-w-[78rem] text-center leading-relaxed mb-8">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been.
      </Paragraph>
      <Heading>Sara Taylor</Heading>
      <Paragraph className="leading-relaxed mb-8">Consumer</Paragraph>
      <img src={Controls} alt="" />
    </div>
  );
};

export default Review;
