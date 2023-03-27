import React from 'react';
import FlexContainer from '../UI/FlexContainer';
import Heading from './Heading';

import { ReactComponent as OrganickLogo } from '../../svg/Logo.svg';

const logoHeadingStyles = {
  fontSize: '3.8rem',
};

const logoContainerStyles = {
  gap: '1rem',
};

const Logo = () => {
  return (
    <FlexContainer style={logoContainerStyles}>
      <OrganickLogo />
      <Heading style={logoHeadingStyles}>Organick</Heading>
    </FlexContainer>
  );
};

export default Logo;
