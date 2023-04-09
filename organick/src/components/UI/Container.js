import React from 'react';

const Container = props => {
  return (
    <div className={`mx-auto max-w-[150rem] px-[5rem] ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
