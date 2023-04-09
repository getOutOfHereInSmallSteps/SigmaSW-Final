import React from 'react';

const Heading = props => {
  return (
    <h2
      className={`font-roboto text-5xl font-extrabold text-color-primary-blue ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

export default Heading;
