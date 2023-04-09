import React from 'react';

const Input = props => {
  return (
    <label className="flex flex-col gap-12 text-[1.8rem] font-semibold italic leading-tight">
      <p>
        <span className="mr-8">{props.label}</span>
        {props.hasError && (
          <span className="font-bold text-color-red">{props.errorMessage}</span>
        )}
      </p>

      <input
        type={props.inptType}
        placeholder={props.inptPlaceholder}
        className={`rounded-[16px] border border-solid border-color-primary-green bg-color-white p-[3rem] text-[1.8rem] font-normal italic text-[#ababab] ${
          props.hasError
            ? 'border border-solid border-color-red bg-[#fff5f5]'
            : undefined
        }`}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </label>
  );
};

export default Input;
