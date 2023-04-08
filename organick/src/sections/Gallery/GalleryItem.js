import React from 'react';

import Flex from '../../components/UI/Flex';
import Heading from '../../components/Typography/Heading';

const GalleryItem = props => {
  return (
    <Flex
      className={`h-[58rem] min-w-[40rem] flex-grow bg-cover ${props.className}`}
    >
      <div className="bg-color-white rounded-[30px] py-12 px-32">
        <Heading>{props.children}</Heading>
      </div>
    </Flex>
  );
};

export default GalleryItem;
