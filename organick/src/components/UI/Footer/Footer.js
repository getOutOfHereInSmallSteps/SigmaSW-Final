import React from 'react';

import { ReactComponent as InstagramLogo } from '../../../svg/Instagram.svg';
import { ReactComponent as FacebookLogo } from '../../../svg/Facebook.svg';
import { ReactComponent as TwitterLogo } from '../../../svg/Twitter.svg';
import { ReactComponent as PinterestLogo } from '../../../svg/Pinterest.svg';

import Logo from '../../Typography/Logo';
import Paragraph from '../../Typography/Paragraph';
import FlexContainer from '../FlexContainer';
import FooterCopyright from './FooterCopyright';
import FooterCol from './FooterCol';

const Footer = () => {
  return (
    <footer>
      <FlexContainer className="justify-between max-w-[140rem] mb-[12rem] items-stretch">
        <FooterCol
          heading="Contact us"
          className="text-right border-l-0 border-r border-r-gray-500"
        >
          <li>
            <Paragraph className="font-[700]">Email</Paragraph>
            <Paragraph>needhelp@Organia.com</Paragraph>
          </li>
          <li>
            <Paragraph className="font-[700]">Phone</Paragraph>

            <Paragraph>666 888 888</Paragraph>
          </li>
          <li>
            <Paragraph className="font-[700]">Address</Paragraph>

            <Paragraph>88 road, borklyn street, USA</Paragraph>
          </li>
        </FooterCol>

        <div className="flex flex-col items-center ">
          <Logo className="mb-[2.4rem]" />
          <Paragraph className="max-w-[50rem] text-center mb-[5rem]">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </Paragraph>

          <div className="flex gap-8">
            <div className="rounded-full bg-color-primary-green-tint w-[6rem] h-[6rem] flex items-center justify-center">
              <InstagramLogo />
            </div>
            <div className="rounded-full bg-color-primary-green-tint w-[6rem] h-[6rem] flex items-center justify-center">
              <FacebookLogo />
            </div>
            <div className="rounded-full bg-color-primary-green-tint w-[6rem] h-[6rem] flex items-center justify-center">
              <TwitterLogo />
            </div>
            <div className="rounded-full bg-color-primary-green-tint w-[6rem] h-[6rem] flex items-center justify-center">
              <PinterestLogo />
            </div>
          </div>
        </div>

        <FooterCol
          heading="Utility Pages"
          className="text-left border-r-0 border-l border-l-gray-500"
        >
          <li>
            <Paragraph>Style Guide</Paragraph>
          </li>
          <li>
            <Paragraph>404 Not Found</Paragraph>
          </li>
          <li>
            <Paragraph>Password Protected</Paragraph>
          </li>
          <li>
            <Paragraph>Licenses</Paragraph>
          </li>
          <li>
            <Paragraph>Changelog</Paragraph>
          </li>
        </FooterCol>
      </FlexContainer>
      <hr className="w-full border opacity-10 border-solid mb-[1.6rem]" />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
