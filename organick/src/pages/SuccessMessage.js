import React from 'react';

import Heading from '../components/Typography/Heading';
import SuccessBanner from '../sections/Success/SuccessBanner';

const SuccessMessagePage = () => {
  return (
    <div className="mb-[14rem]">
      <div className="flex justify-center">
        <Heading className="text-[7rem] mb-[4rem]">
          Thank you for your order
        </Heading>
      </div>
      <SuccessBanner />
    </div>
  );
};

export default SuccessMessagePage;
