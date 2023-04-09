import React from 'react';

const Paragraph = props => {
  return (
    <p
      className={`non-italic font-opensans text-3xl font-normal text-color-paragraph-gray ${props.className}`}
    >
      {props.children}
    </p>
  );
};

export default Paragraph;
