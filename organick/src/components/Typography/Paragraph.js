import React from 'react';

const Paragraph = props => {
  return (
    <p
      className={`font-opensans non-italic font-normal text-3xl text-color-paragraph-gray ${props.className}`}
    >
      {props.children}
    </p>
  );
};

export default Paragraph;
