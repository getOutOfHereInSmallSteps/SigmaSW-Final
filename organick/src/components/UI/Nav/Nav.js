import React from 'react';

import { NavLink } from 'react-router-dom';

import { ReactComponent as DownArrow } from '../../../svg/arrow-down.svg';

import Logo from '../../Typography/Logo';
import Flex from '../Flex';
import NavSearch from './NavSearch';
import NavCart from './NavCart';

const Nav = () => {
  return (
    <nav className="max-w-[160rem] h-[15vh] mx-auto flex justify-between ">
      <Logo />

      <ul className="flex gap-12">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="about">
          About
        </NavLink>
        <NavLink className="navlink">
          Pages <DownArrow />
        </NavLink>
        <NavLink className="navlink" to="shop">
          Shop
        </NavLink>
        <NavLink className="navlink" to="projects">
          Projects
        </NavLink>
        <NavLink className="navlink" to="news">
          News
        </NavLink>
      </ul>

      <Flex className="items-center gap-4">
        <NavSearch />
        <NavCart />
      </Flex>
    </nav>
  );
};

export default Nav;
