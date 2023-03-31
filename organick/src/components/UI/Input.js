import React from 'react';

import Button from '../UI/Button';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex gap-[2rem] items-center">
      <label className="font-roboto font-bold text-[2rem]">Quantity :</label>
      <input
        type="number"
        min={0}
        max={99}
        step={1}
        className="inline-block py-[3rem] px-[6rem] w-[17rem] bg-color-white border-solid border-2 border-color-primary-blue rounded-[16px] font-roboto font-bold text-[2rem]"
        ref={ref}
        value={props.inputQuantity}
        onChange={props.inputChangeHandler}
      />
      <Button hideArrow={props.hideButtonArrow} onClick={props.onClick}>
        {props.buttonText}
      </Button>
    </div>
  );
});

export default Input;
