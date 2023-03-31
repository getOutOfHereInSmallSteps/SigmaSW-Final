import React from 'react';

const FlexContainer = props => {
  return (
    <div
      className={`flex items-center justify-center max-w-[150rem] mx-auto ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default FlexContainer;
