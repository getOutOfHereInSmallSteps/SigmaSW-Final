import React from 'react';

const Input = props => {
  return (
    <label className="italic font-semibold text-[1.8rem] leading-tight flex flex-col gap-12">
      <p>
        <span className="mr-8">{props.label}</span>
        {props.hasError && (
          <span className="text-color-red font-bold">{props.errorMessage}</span>
        )}
      </p>

      <input
        type={props.inptType}
        placeholder={props.inptPlaceholder}
        className={`italic font-normal text-[1.8rem] text-[#ababab] bg-color-white border-solid border border-color-primary-green rounded-[16px] p-[3rem] ${
          props.hasError
            ? 'bg-[#fff5f5] border border-solid border-color-red'
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
