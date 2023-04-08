import React from 'react';

import { ReactComponent as Rating } from '../../../svg/product-rating.svg';
import ProductTag from '../ProductTag';
import Heading from '../../../components/Typography/Heading';
import ProductPrice from '../ProductPrice';
import Flex from '../../../components/UI/Flex';

const Product = props => {
  const productImgBackground = {
    backgroundImage: `url(${props.productsData?.link})`,
  };
  console.log(props.productsData);
  return (
    <div
      className={`flex flex-col  h-[48rem] p-[3rem] rounded-[30px] bg-color-background-light-gray cursor-pointer ${props.className}`}
      onClick={() => props.onSelectItem(props.productsData?.id)}
    >
      <ProductTag>{props.productsData?.type}</ProductTag>
      <div
        style={productImgBackground}
        className={`bg-contain bg-no-repeat bg-center bg-color-background-light-gray bg-blend-multiply w-full h-full`}
      ></div>
      <Heading className="text-[2.4rem] mb-[1.2rem]">
        {props.productsData?.name}
      </Heading>
      <hr className="w-full border border-solid border-color-black mb-4 opacity-10" />
      <Flex className="justify-between">
        <ProductPrice
          price={props.productsData?.price}
          discount={props.productsData?.discount}
        />
        <Rating />
      </Flex>
    </div>
  );
};

export default Product;
