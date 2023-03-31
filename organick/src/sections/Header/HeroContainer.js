import React from 'react';

const HeroContainer = props => {
  return (
    <header
      className={`bg-[url('./imgs/hero-background.png')] bg-cover bg-no-repeat h-[85vh] w-full flex items-center justify-center mb-64`}
    >
      {props.children}
    </header>
  );
};

export default HeroContainer;
