import React from 'react';

const Heading = props => {
  return (
    <h2
      className={`font-roboto font-extrabold text-color-primary-blue text-5xl ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

export default Heading;
