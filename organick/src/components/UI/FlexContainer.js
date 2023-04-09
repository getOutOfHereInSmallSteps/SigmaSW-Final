import React from 'react';

const FlexContainer = props => {
  return (
    <div
      className={`mx-auto flex max-w-[150rem] justify-center ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default FlexContainer;
