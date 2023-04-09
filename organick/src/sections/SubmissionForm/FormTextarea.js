import React from 'react';

const FormTextArea = React.forwardRef((props, ref) => {
  return (
    <label className="flex flex-col gap-12 text-[1.8rem] font-semibold italic leading-tight">
      {props.label}
      <textarea
        type={props.inptType}
        placeholder={props.inptPlaceholder}
        ref={ref}
        className={`h-[20rem] rounded-[16px] border border-solid border-color-primary-green bg-color-white p-[3rem] text-[1.8rem] font-normal italic text-[#ababab]`}
      />
    </label>
  );
});

export default FormTextArea;
