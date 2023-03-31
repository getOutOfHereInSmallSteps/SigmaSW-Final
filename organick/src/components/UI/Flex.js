import React from 'react';

const Flex = props => {
  return (
    <div className={`flex items-center justify-center ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Flex;
