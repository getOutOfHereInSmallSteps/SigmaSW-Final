import React from 'react';

import Heading from '../../components/Typography/Heading';

const SubmissionBanner = () => {
  return (
    <div
      className={`bg-[url('./imgs/submission-banner.png')] bg-cover bg-no-repeat bg-center w-full h-[45rem] flex justify-center items-center mb-[14rem]`}
    >
      <div>
        <Heading className="text-[7.2rem]">Cart</Heading>
      </div>
    </div>
  );
};

export default SubmissionBanner;
