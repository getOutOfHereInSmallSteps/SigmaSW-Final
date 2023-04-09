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
      className={`flex h-[48rem] cursor-pointer flex-col rounded-[30px] bg-color-background-light-gray p-12 ${props.className}`}
      onClick={() => props.onSelectItem(props.productsData?.id)}
    >
      <ProductTag>{props.productsData?.type}</ProductTag>
      <div
        style={productImgBackground}
        className={`h-full w-full bg-color-background-light-gray bg-contain bg-center bg-no-repeat bg-blend-multiply`}
      ></div>
      <Heading className="mb-4 text-[2.4rem]">
        {props.productsData?.name}
      </Heading>
      <hr className="mb-4 w-full border border-solid border-color-black opacity-10" />
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
