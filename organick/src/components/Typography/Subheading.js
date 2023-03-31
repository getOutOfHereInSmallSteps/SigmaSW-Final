import React from 'react';

const Subheading = props => {
  return (
    <h2
      className={`text-color-primary-green font-yellowtail text-6xl font-medium mb-4 ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

export default Subheading;
