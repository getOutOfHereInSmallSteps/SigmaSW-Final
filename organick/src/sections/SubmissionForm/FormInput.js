import React from 'react';

import inptStyles from './FormInput.module.scss';

export const Input = props => {
  const inputStyles = `${inptStyles.input} ${
    props.hasError ? inptStyles['input-error'] : ''
  }`;

  return (
    <label className={inptStyles.label}>
      <p>
        <span className={inptStyles['label-message']}>{props.label}</span>
        {props.hasError && (
          <span className={inptStyles['label-error']}>
            {props.errorMessage}
          </span>
        )}
      </p>

      <input
        type={props.inptType}
        placeholder={props.inptPlaceholder}
        className={inputStyles}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </label>
  );
};

export const Textarea = props => {
  return (
    <label className={inptStyles.label}>
      {props.label}
      <textarea
        type={props.inptType}
        placeholder={props.inptPlaceholder}
        className={`${inptStyles.input} ${inptStyles.textarea}`}
      />
    </label>
  );
};
