import React from 'react';

import Heading from '../../Typography/Heading';

const FooterCol = props => {
  return (
    <div
      className={`border-solid border-t-0 border-b-0 px-[5rem] ${props.className}`}
    >
      <Heading className="text-[3rem] mb-10">{props.heading}</Heading>
      <ul className="flex flex-col gap-10">{props.children}</ul>
    </div>
  );
};

export default FooterCol;
