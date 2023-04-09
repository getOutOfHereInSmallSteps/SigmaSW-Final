import React from 'react';

const HeroContainer = props => {
  return (
    <header
      className={`mb-64 flex h-[85vh] w-full items-center justify-center bg-[url('./imgs/hero-background.png')] bg-cover bg-no-repeat max-lg:bg-none`}
    >
      {props.children}
    </header>
  );
};

export default HeroContainer;
