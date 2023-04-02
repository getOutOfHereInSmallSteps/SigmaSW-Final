import React from 'react';

const FormTextArea = props => {
  return (
    <label className="italic font-semibold text-[1.8rem] leading-tight flex flex-col gap-12">
      {props.label}
      <textarea
        type={props.inptType}
        placeholder={props.inptPlaceholder}
        className={`italic font-normal text-[1.8rem] text-[#ababab] bg-color-white border border-solid border-color-primary-green rounded-[16px] p-[3rem] h-[20rem]`}
      />
    </label>
  );
};

export default FormTextArea;
