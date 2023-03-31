import React from 'react';

import Container from '../../components/UI/Container';

const SubmissionContainer = props => {
  return (
    <div className="bg-color-primary-yellow-tint py-[14.88rem]">
      <Container>{props.children}</Container>
    </div>
  );
};

export default SubmissionContainer;
