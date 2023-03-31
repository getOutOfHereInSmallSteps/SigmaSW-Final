import React from 'react';

const Container = props => {
  return (
    <div className={`max-w-[150rem] px-[5rem] mx-auto ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
