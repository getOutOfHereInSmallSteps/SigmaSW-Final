import React from 'react';

import Heading from '../../components/Typography/Heading';

const SubmissionBanner = () => {
  return (
    <div
      className={`mb-[14rem] flex h-[45rem] w-full items-center justify-center bg-[url('./imgs/submission-banner.png')] bg-cover bg-center bg-no-repeat`}
    >
      <div>
        <Heading className="text-[7.2rem]">Cart</Heading>
      </div>
    </div>
  );
};

export default SubmissionBanner;
