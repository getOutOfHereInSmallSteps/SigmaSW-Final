import React from 'react';
import Flex from '../UI/Flex';
import Heading from './Heading';

import { ReactComponent as OrganickLogo } from '../../svg/Logo.svg';

const Logo = props => {
  return (
    <Flex className={`items-center gap-4 ${props.className}`}>
      <OrganickLogo />
      <Heading className="text-[3.8rem]">Organick</Heading>
    </Flex>
  );
};

export default Logo;
