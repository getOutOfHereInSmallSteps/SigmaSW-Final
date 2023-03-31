import React from 'react';

import GalleryItem from './GalleryItem';

const Gallery = () => {
  return (
    <div className="flex flex-wrap gap-[4.2rem] bg-color-primary-green-tint py-[18.7rem]">
      <GalleryItem className="bg-[url('./imgs/gallery-1.png')]">
        Organic Juice
      </GalleryItem>
      <GalleryItem className="bg-[url('./imgs/gallery-2.png')]">
        Organic Food
      </GalleryItem>
      <GalleryItem className="bg-[url('./imgs/gallery-3.png')]">
        Nuts Cookis
      </GalleryItem>
    </div>
  );
};

export default Gallery;
