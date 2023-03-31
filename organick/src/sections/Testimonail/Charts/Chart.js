import React from 'react';
import Heading from '../../../components/Typography/Heading';
import Paragraph from '../../../components/Typography/Paragraph';

const Chart = props => {
  return (
    <div className="flex flex-col justify-center items-center  bg-color-background-light-gray border-solid border-6 border-color-primary-green rounded-full w-[20rem] h-[20rem]">
      <Heading className="text-[5rem] font-bold">{props.counter}</Heading>
      <Paragraph className="text-color-primary-blue">
        {props.subheading}
      </Paragraph>
    </div>
  );
};

export default Chart;
