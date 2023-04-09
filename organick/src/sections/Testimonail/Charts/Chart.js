import React from 'react';
import Heading from '../../../components/Typography/Heading';
import Paragraph from '../../../components/Typography/Paragraph';

const Chart = props => {
  return (
    <div className="border-6 flex h-[20rem] w-[20rem]  flex-col items-center justify-center rounded-full border-solid border-color-primary-green bg-color-background-light-gray">
      <Heading className="text-[5rem] font-bold">{props.counter}</Heading>
      <Paragraph className="text-color-primary-blue">
        {props.subheading}
      </Paragraph>
    </div>
  );
};

export default Chart;
