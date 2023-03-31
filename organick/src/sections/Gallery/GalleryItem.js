import React from 'react';

import Heading from '../../components/Typography/Heading';

const GalleryItem = props => {
  return (
    <div
      className={`h-[58rem] min-w-[40rem] flex justify-center items-center bg-cover ${props.className} flex-grow `}
    >
      <div className="bg-color-white rounded-[30px] py-[3.4rem] px-[8.2rem] ">
        <Heading>{props.children}</Heading>
      </div>
    </div>
  );
};

export default GalleryItem;
