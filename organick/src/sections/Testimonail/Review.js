import React from 'react';

import Subheading from '../../components/Typography/Subheading';
import Heading from '../../components/Typography/Heading';
import UserAvatar from '../../imgs/user-avatar.jpg';
import Paragraph from '../../components/Typography/Paragraph';
import Controls from '../../imgs/navigation.png';
import { ReactComponent as Stars } from '../../svg/Stars.svg';

const Review = () => {
  return (
    <div className="mb-[10rem] flex flex-col items-center">
      <Subheading className="mb-4 text-[3.6rem]">Testimonail</Subheading>
      <Heading className="mb-[6rem] text-center text-[5rem]">
        What Our Customer Saying?
      </Heading>
      <img src={UserAvatar} className="mb-8 rounded-full" alt="User Avatar" />
      <Stars className="mb-8" />
      <Paragraph className="mb-8 max-w-[78rem] text-center leading-relaxed">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been.
      </Paragraph>
      <Heading>Sara Taylor</Heading>
      <Paragraph className="mb-8 leading-relaxed">Consumer</Paragraph>
      <img src={Controls} alt="" />
    </div>
  );
};

export default Review;
