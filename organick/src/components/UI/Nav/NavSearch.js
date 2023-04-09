import React from 'react';

import { ReactComponent as SearchIcon } from '../../../svg/search-icon.svg';
import { Link } from 'react-router-dom';

const NavSearch = () => {
  return (
    <div className="flex items-center gap-4 rounded-[30px] bg-[#fafafa] p-2 pl-8 max-xl:bg-[transparent] max-md:hidden">
      <input
        className="max-w-[20rem] shrink bg-[transparent] text-[1.8rem] leading-relaxed outline-none max-xl:hidden"
        type="text"
      />
      <Link className="shrink-0 rounded-full bg-[#7eb693] p-6">
        <SearchIcon />
      </Link>
    </div>
  );
};

export default NavSearch;
