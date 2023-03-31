import React from 'react';

const FormTextArea = props => {
  return (
    <label className="font-roboto font-semibold text-[1.8rem] flex flex-col gap-[3rem]">
      {props.label}
      <textarea
        type={props.inptType}
        placeholder={props.inptPlaceholder}
        // className={`${inptStyles.input} ${inptStyles.textarea}`}
        className="italic font-normal text-[1.8rem] "
      />
    </label>
  );
};

export default FormTextArea;
