import React from 'react';

import Heading from '../../Typography/Heading';

const FooterCol = props => {
  return (
    <div
      className={`border-b-0 border-t-0 border-solid px-[5rem] ${props.className}`}
    >
      <Heading className="mb-10 text-[3rem]">{props.heading}</Heading>
      <ul className="flex flex-col gap-10">{props.children}</ul>
    </div>
  );
};

export default FooterCol;
