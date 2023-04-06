import React from 'react';

import { useRef } from 'react';

import Container from '../../components/UI/Container';
import Button from '../../components/UI/Button';

import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

import useInput from '../../hooks/use-input';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const addProduct = async productData => {
  try {
    const orderId = await addDoc(collection(db, 'orders'), productData);
    console.log(orderId);
  } catch (error) {
    console.error('Error adding product: ', error);
  }
};

const SubmissionForm = props => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(lastName => lastName.trim().length !== 0);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(enteredEmail =>
    enteredEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  );

  const {
    value: enteredAddress,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput(address => address.trim().length !== 0);

  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(phone => phone.trim().length !== 0);

  const messageRef = useRef();

  let formIsValid = false;

  if (nameIsValid && phoneIsValid && emailIsValid && addressIsValid)
    formIsValid = true;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = e => {
    e?.preventDefault();

    if (!formIsValid) return;
    const enteredMessage = messageRef.current.value;

    const order = {
      ...props.orderData,
      username: enteredName,
      email: enteredEmail,
      address: enteredAddress,
      phone: enteredPhone,
      message: enteredMessage,
    };

    addProduct(order);

    dispatch(clearCart());

    navigate('/form/success');
    resetNameInput();
    resetAddressInput();
    resetEmailInput();
    resetPhoneInput();
  };

  return (
    <Container className="mb-[10rem] px-0">
      <form onSubmit={submitHandler} className="mb-[12rem]">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[5rem] mb-[5rem]">
          <FormInput
            label={'Full Name*'}
            inptType={'text'}
            errorMessage={'Name Input is Invalid'}
            hasError={nameHasError}
            inptPlaceholder={'Your Email Address'}
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          <FormInput
            label={'Your Email*'}
            inptType={'text'}
            errorMessage={'Email Input is Invalid'}
            hasError={emailHasError}
            inptPlaceholder={'example@yourmail.com'}
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          <FormInput
            label={'Address*'}
            inptType={'text'}
            errorMessage={'Address Input is Invalid'}
            hasError={addressHasError}
            inptPlaceholder={'your company  address'}
            value={enteredAddress}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
          />
          <FormInput
            label={'Phone number*'}
            inptType={'tel'}
            errorMessage={'Phone Input is Invalid'}
            hasError={phoneHasError}
            inptPlaceholder={'Enter your phone'}
            value={enteredPhone}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          />
        </div>
        <FormTextArea
          label={'Message'}
          inptType={'text'}
          inptPlaceholder={'some extra information'}
          ref={messageRef}
        />
      </form>
      <div className="flex justify-center">
        <Button
          onClick={submitHandler}
          hideArrow={true}
          type={!formIsValid ? 'disabled' : ''}
        >
          Confifm
        </Button>
      </div>
    </Container>
  );
};

export default SubmissionForm;
