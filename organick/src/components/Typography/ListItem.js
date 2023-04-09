import React from 'react';

import Flex from '../UI/Flex';
import Heading from './Heading';
import Paragraph from './Paragraph';

const ListItem = props => {
  return (
    <li className={props.className}>
      <Flex className="gap-4">
        {!props.hideIcon && (
          <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-[20px] bg-color-white">
            {props.icon}
          </div>
        )}

        <div>
          <Heading className="mb-4 w-fit text-4xl">{props.heading}</Heading>
          <Paragraph className="w-fit">{props.children}</Paragraph>
        </div>
      </Flex>
    </li>
  );
};

export default ListItem;
