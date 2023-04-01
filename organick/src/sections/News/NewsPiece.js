import React from 'react';

import Heading from '../../components/Typography/Heading';
import Paragraph from '../../components/Typography/Paragraph';
import Button from '../../components/UI/Button';
import { ReactComponent as UserIcon } from '../../svg/user-icon.svg';

const NewsPiece = props => {
  return (
    <div
      className={`h-[52rem] min-w-[10rem] flex-grow bg-[url('./imgs/news-1.png')] bg-cover bg-center bg-no-repeat p-[3.2rem] rounded-[30px] flex flex-col justify-between ${props.className}`}
    >
      <div className="bg-color-white w-[8rem] h-[8rem] rounded-full flex items-center justify-center flex-col">
        <Heading className="text-[2.5rem]">25</Heading>
        <Heading className="text-[2.5rem]">Nov</Heading>
      </div>

      <div className="rounded-[30px] p-[4.2rem] w-fit max-w-[60rem] bg-color-white translate-y-[25%] shadow-xl">
        <Paragraph className="mb-4 flex gap-4">
          <UserIcon /> By {props.author}
        </Paragraph>
        <Heading className="text-[2.4rem] mb-4">{props.heading}</Heading>
        <Paragraph className="mb-[1.6rem]">{props.description}</Paragraph>
        <Button type="yellow">Read More</Button>
      </div>
    </div>
  );
};

export default NewsPiece;
