import React from 'react';

const List = props => {
  return (
    <ul style={props.style} className={`flex flex-col ${props.className}`}>
      {props.children}
    </ul>
  );
};

export default List;
