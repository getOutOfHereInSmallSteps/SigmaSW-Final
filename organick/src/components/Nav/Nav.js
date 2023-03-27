import React from 'react';

import styles from './Nav.module.scss';

import Logo from '../Typography/Logo';
import Heading from '../Typography/Heading';

import { Link, NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { ReactComponent as DownArrow } from '../../svg/arrow-down.svg';
import { ReactComponent as SearchIcon } from '../../svg/search-icon.svg';
import { ReactComponent as CartIcon } from '../../svg/cart-icon.svg';

import FlexContainer from '../UI/FlexContainer';

const Nav = () => {
  const cartCounter = useSelector(state => state.cartCounter);

  return (
    <nav className={styles.nav}>
      <Logo />

      <ul className={styles['nav__links']}>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>
          Pages <DownArrow />
        </NavLink>
        <NavLink>Shop</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>News</NavLink>
      </ul>

      <FlexContainer>
        <div className={styles.search}>
          <input className={styles['search-input']} type="text" name="" id="" />
          <Link className={styles['btn']}>
            <SearchIcon />
          </Link>
        </div>
        <div className={styles.cart}>
          <Link to="form" className={styles['btn']}>
            <CartIcon />
          </Link>
          <Heading
            style={{ fontSize: '1.8rem' }}
          >{`Cart (${cartCounter.value})`}</Heading>
        </div>
      </FlexContainer>
    </nav>
  );
};

export default Nav;
