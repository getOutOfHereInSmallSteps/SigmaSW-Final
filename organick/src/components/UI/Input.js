import React from 'react';

import Button from '../UI/Button';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex flex-wrap items-center gap-[2rem]">
      <label className="font-roboto text-[2rem] font-bold">Quantity :</label>
      <input
        min={0}
        max={99}
        step={1}
        className={`inline-block w-[17rem] rounded-[16px] border-2 border-solid border-color-primary-blue bg-color-white px-[6rem] py-[3rem] font-roboto text-[2rem] font-bold transition duration-300 ${props.className}`}
        ref={ref}
        value={props.inputQuantity}
        onChange={props.inputChangeHandler}
      />
      <Button
        hideArrow={props.hideButtonArrow}
        onClick={props.onClick}
        type={props.btnType}
      >
        {props.buttonText}
      </Button>
    </div>
  );
});

export default Input;
