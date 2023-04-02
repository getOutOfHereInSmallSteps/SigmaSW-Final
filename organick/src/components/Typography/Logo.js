import React from 'react';
import FlexContainer from '../UI/FlexContainer';
import Flex from '../UI/Flex';
import Heading from './Heading';

import { ReactComponent as OrganickLogo } from '../../svg/Logo.svg';

const Logo = props => {
  return (
    <Flex className={`gap-4 items-center ${props.className}`}>
      <OrganickLogo />
      <Heading className="text-[3.8rem]">Organick</Heading>
    </Flex>
  );
};

export default Logo;
