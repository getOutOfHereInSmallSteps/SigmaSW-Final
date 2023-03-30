import React from 'react';
import styles from './SubmissionForm.module.scss';
import Container from '../../components/UI/Container';
import Button from '../../components/UI/Button';

import { Input, Textarea } from './FormInput';

import useInput from '../../hooks/use-input';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../store';
import { useDispatch } from 'react-redux';

const SubmissionForm = () => {
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

  let formIsValid = false;

  if (nameIsValid && phoneIsValid && emailIsValid && addressIsValid)
    formIsValid = true;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = e => {
    e?.preventDefault();

    if (!formIsValid) return;

    dispatch(clearCart());

    navigate('/form/success');
    resetNameInput();
    resetAddressInput();
    resetEmailInput();
    resetPhoneInput();
  };

  return (
    <Container className={styles['form__container']}>
      <form onSubmit={submitHandler}>
        <div className={styles.main}>
          <Input
            label={'Full Name*'}
            inptType={'text'}
            errorMessage={'Name Input is Invalid'}
            hasError={nameHasError}
            inptPlaceholder={'Your Email Address'}
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          <Input
            label={'Your Email*'}
            inptType={'text'}
            errorMessage={'Email Input is Invalid'}
            hasError={emailHasError}
            inptPlaceholder={'example@yourmail.com'}
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          <Input
            label={'Address*'}
            inptType={'text'}
            errorMessage={'Address Input is Invalid'}
            hasError={addressHasError}
            inptPlaceholder={'your company  address'}
            value={enteredAddress}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
          />
          <Input
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
        <Textarea
          label={'Message'}
          inptType={'text'}
          inptPlaceholder={'some extra information'}
        />
      </form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={submitHandler} hideArrow={true}>
          Confifm
        </Button>
      </div>
    </Container>
  );
};

export default SubmissionForm;
