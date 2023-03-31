import React from 'react';

const List = props => {
  return (
    <ul style={props.style} className={props.className}>
      {props.children}
    </ul>
  );
};

export default List;
