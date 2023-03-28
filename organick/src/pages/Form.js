import React from 'react';

import SubmissionBanner from '../sections/SubmissionForm/SubmissionBanner';
import SubmissionContainer from '../sections/SubmissionForm/SubmissionContainer';
import CartProduct from '../sections/SubmissionForm/CartProduct';

const FormPage = () => {
  // <FormBanner />
  // <SubmitionContainer>
  //   <Container>
  // <SelectedProducts></SelectedProducts>;
  // <SubmitionForm></SubmitionForm>
  // </Container>
  // </SubmitionContainer>

  return (
    <React.Fragment>
      <SubmissionBanner />
      <SubmissionContainer>
        <CartProduct />
      </SubmissionContainer>
    </React.Fragment>
  );
};

export default FormPage;
