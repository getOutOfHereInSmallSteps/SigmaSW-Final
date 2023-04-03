import React from 'react';

import { ReactComponent as SearchIcon } from '../../../svg/search-icon.svg';
import { Link } from 'react-router-dom';

const NavSearch = () => {
  return (
    <div className="bg-[#fafafa] flex items-center p-2 pl-8 rounded-[30px] gap-4 max-xl:bg-[transparent] max-md:hidden">
      <input
        className="bg-[transparent] text-[1.8rem] leading-relaxed outline-none max-w-[20rem] shrink max-xl:hidden"
        type="text"
      />
      <Link className="shrink-0 bg-[#7eb693] p-6 rounded-full">
        <SearchIcon />
      </Link>
    </div>
  );
};

export default NavSearch;
