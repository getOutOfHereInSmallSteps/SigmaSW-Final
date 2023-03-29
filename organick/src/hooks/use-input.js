import { useReducer } from 'react';

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      ...state,
      value: action.value,
    };
  }

  if (action.type === 'BLUR') {
    return {
      ...state,
      isTouched: true,
    };
  }

  if (action.type === 'RESET') {
    return {
      value: '',
      isTouched: false,
    };
  }

  return inputStateReducer;
};

const initialInputState = {
  value: '',
  isTouched: false,
};

const useInput = validateValue => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = e => {
    dispatch({
      type: 'INPUT',
      value: e.target.value,
    });
  };

  const inputBlurHandler = () => {
    dispatch({
      type: 'BLUR',
    });
  };

  const reset = () => {
    dispatch({
      type: 'RESET',
    });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
