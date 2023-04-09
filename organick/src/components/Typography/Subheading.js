import React from 'react';

const Subheading = props => {
  return (
    <h2
      className={`mb-4 font-yellowtail text-6xl font-medium text-color-primary-green ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

export default Subheading;
