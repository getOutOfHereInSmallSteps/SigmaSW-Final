import React, { useState } from 'react';

import { ReactComponent as Rating } from '../../../svg/product-rating.svg';

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../store';

import { useRef } from 'react';

import Heading from '../../../components/Typography/Heading';
import ProductPrice from '../ProductPrice';
import Paragraph from '../../../components/Typography/Paragraph';
import Container from '../../../components/UI/Container';
import Flex from '../../../components/UI/Flex';
import Button from '../../../components/UI/Button';
import ProductTag from '../ProductTag';
import Input from '../../../components/UI/Input';

const ProductForm = props => {
  const [inputQuantity, setInputQuantity] = useState(1);
  const dispatch = useDispatch();

  const productsAmount = useRef();

  const addToCartHandler = e => {
    e.preventDefault();
    const selectedProductAmount = +productsAmount.current.value;

    const addedItem = {
      name: props.selectedProduct.name,
      price: props.selectedProduct.price,
      quantity: selectedProductAmount,
      id: props.selectedProduct.id,
      link: props.selectedProduct.link,
      discount: props.selectedProduct.discount,
    };

    dispatch(addItemToCart(addedItem));
  };

  const productImgBackground = {
    backgroundImage: `url(${props.selectedProduct.link})`,
  };

  const inputChangeHandler = e => {
    setInputQuantity(e.target.value);
  };

  return (
    <div className="z-20 absolute top-1/2 -translate-y-1/2 w-full px-0 pt-[11.5rem] pb-[14rem] bg-[#fffafa]">
      <Container className="relative">
        <div className="flex items-center justify-around mb-[9rem]">
          <div
            style={productImgBackground}
            className="bg-color-background-light-gray bg-blend-multiply bg-contain bg-no-repeat bg-center w-[59rem] h-[59rem] p-[3.6rem] rounded-[30px]"
          >
            <ProductTag>{props.selectedProduct.type}</ProductTag>
          </div>
          {/* FLEX CONTAINER */}
          <div>
            <Heading className="font-semibold text-[4rem]">
              {props.selectedProduct.name}
            </Heading>
            <Rating />
            <br />
            <ProductPrice
              price={props.selectedProduct.price}
              discount={props.selectedProduct.discount}
            />
            <Paragraph className="max-w-[65rem]">
              {props.selectedProduct.overview}
            </Paragraph>
            <Input
              onClick={addToCartHandler}
              inputQuantity={inputQuantity}
              inputChangeHandler={inputChangeHandler}
              ref={productsAmount}
              buttonText={'Add To Cart'}
              hideButtonArrow={false}
            />
          </div>
        </div>
        <div className="text-center">
          <Flex className="gap-[2.4rem]">
            <Button hideArrow={true}>Product Description</Button>
            <Button hideArrow={true}>Additional Info</Button>
          </Flex>
          <Paragraph>{props.selectedProduct.description}</Paragraph>
        </div>
        <Button
          hideArrow={true}
          onClick={props.onClose}
          className="absolute top-0 right-0"
        >
          X
        </Button>
      </Container>
    </div>
  );
};

export default ProductForm;
