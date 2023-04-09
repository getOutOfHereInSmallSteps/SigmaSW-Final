import React from 'react';

import Heading from '../../components/Typography/Heading';
import Paragraph from '../../components/Typography/Paragraph';
import Button from '../../components/UI/Button';
import { ReactComponent as UserIcon } from '../../svg/user-icon.svg';

const NewsPiece = props => {
  return (
    <div
      className={`flex h-[52rem] min-w-[42rem] shrink grow basis-0 flex-col justify-between rounded-[30px] bg-[url('./imgs/news-1.png')] bg-cover bg-center bg-no-repeat p-[3.2rem] max-sm:min-w-[34rem] ${props.className}`}
    >
      <div className="flex h-[8rem] w-[8rem] flex-col items-center justify-center rounded-full bg-color-white">
        <Heading className="text-[2.5rem]">25</Heading>
        <Heading className="text-[2.5rem]">Nov</Heading>
      </div>

      <div className="translate-y-[25%] rounded-[30px]  bg-color-white p-[4.2rem] shadow-xl">
        <Paragraph className="mb-4 flex gap-4">
          <UserIcon /> By {props.author}
        </Paragraph>
        <Heading className="mb-4 text-[2.4rem]">{props.heading}</Heading>
        <Paragraph className="mb-[1.6rem]">{props.description}</Paragraph>
        <Button type="yellow">Read More</Button>
      </div>
    </div>
  );
};

export default NewsPiece;
