import React, { useEffect, useState } from 'react';

import { ReactComponent as Rating } from '../../../svg/product-rating.svg';

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../store';

import { useRef } from 'react';

import { CSSTransition } from 'react-transition-group';

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
  const [infoType, setInfoType] = useState('description');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const productsAmount = useRef();

  useEffect(() => {
    if (props.show) {
      document.body.classList.add('remove-scroll');
    }
    return () => document.body.classList.remove('remove-scroll');
  }, [props.show]);

  const addToCartHandler = () => {
    const selectedProductAmount = +productsAmount.current.value;

    const addedItem = {
      quantity: selectedProductAmount,
      name: props.selectedProduct.name,
      price: props.selectedProduct.price,
      id: props.selectedProduct.id,
      link: props.selectedProduct.link,
      discount: props.selectedProduct.discount,
    };
    setIsSubmitted(true);
    dispatch(addItemToCart(addedItem));
  };

  const productImgBackground = {
    backgroundImage: `url(${props.selectedProduct?.link})`,
  };

  const inputChangeHandler = e => {
    if (!isNaN(+e.target.value) || e.target.value === '') {
      setIsSubmitted(false);
      setInputQuantity(e.target.value);
    }
  };

  return (
    <CSSTransition
      in={props.show}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames={{
        enter: '',
        enterActive: 'animate-enter',
        exit: '',
        exitActive: 'animate-leave',
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className="z-20 fixed top-1/2 -translate-y-1/2 w-full p-4 bg-[#fffafa] h-full overflow-scroll">
        <Container className="relative">
          <div className="flex items-center justify-around mb-[9rem]">
            <div
              style={productImgBackground}
              className="bg-color-background-light-gray bg-blend-multiply bg-contain bg-no-repeat bg-center w-[59rem] h-[59rem] p-[3.6rem] rounded-[30px] max-md:hidden"
            >
              <ProductTag>{props.selectedProduct?.type}</ProductTag>
            </div>
            <div>
              <Heading className="font-semibold text-[4rem] mb-6">
                {props.selectedProduct?.name}
              </Heading>
              <Rating />
              <br />
              <ProductPrice
                price={props.selectedProduct?.price}
                discount={props.selectedProduct?.discount}
                className=""
              />
              <Paragraph className="max-w-[65rem] mt-8 mb-10">
                {props.selectedProduct?.overview}
              </Paragraph>
              <Input
                onClick={addToCartHandler}
                inputQuantity={inputQuantity}
                inputChangeHandler={inputChangeHandler}
                ref={productsAmount}
                buttonText={'Add To Cart'}
                hideButtonArrow={false}
                btnType={isSubmitted ? 'yellow' : null}
                className={isSubmitted ? `opacity-40` : null}
              />
            </div>
          </div>
          <div className="text-center">
            <Flex className="gap-[2.4rem] mb-10 flex-wrap">
              <Button
                hideArrow
                type={infoType === 'description' ? 'active' : ''}
                onClick={() => setInfoType('description')}
              >
                Product Description
              </Button>
              <Button
                hideArrow
                type={infoType === 'additionalInfo' ? 'active' : ''}
                onClick={() => setInfoType('additionalInfo')}
              >
                Additional Info
              </Button>
            </Flex>
            <Paragraph className="min-h-[7em]">
              {props.selectedProduct?.[infoType]}
            </Paragraph>
          </div>
          <Button
            hideArrow
            onClick={() => {
              props.onClose();
              setInputQuantity(1);
              setTimeout(() => setIsSubmitted(false), 300);
            }}
            className="absolute top-0 right-0"
          >
            X
          </Button>
        </Container>
      </div>
    </CSSTransition>
  );
};

export default ProductForm;
