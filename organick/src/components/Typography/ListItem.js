import React from 'react';

import Flex from '../UI/Flex';
import Heading from './Heading';
import Paragraph from './Paragraph';

const ListItem = props => {
  return (
    <li className={props.className}>
      <Flex className="gap-4">
        {!props.hideIcon && (
          <div className="w-40 h-40 bg-color-white shrink-0 rounded-[20px] flex justify-center items-center">
            {props.icon}
          </div>
        )}

        <div>
          <Heading className="text-4xl mb-4 w-fit">{props.heading}</Heading>
          <Paragraph className="w-fit">{props.children}</Paragraph>
        </div>
      </Flex>
    </li>
  );
};

export default ListItem;
