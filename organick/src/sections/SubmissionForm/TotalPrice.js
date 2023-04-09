import React from 'react';
import Heading from '../../components/Typography/Heading';

const TotalPrice = props => {
  return (
    <div className="mb-[4.6rem] flex flex-col gap-[2rem]">
      <div className="flex gap-[3.2rem] self-end justify-self-end">
        <Heading>Total Cost</Heading>
        <Heading>{props.price}$</Heading>
      </div>
      <div className="flex gap-[3.2rem] self-end justify-self-end">
        <Heading>Discount</Heading>
        <Heading>{props.discount}$</Heading>
      </div>
    </div>
  );
};

export default TotalPrice;
