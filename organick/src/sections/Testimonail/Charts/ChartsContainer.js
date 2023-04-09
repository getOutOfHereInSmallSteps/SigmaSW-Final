import React from 'react';

import Chart from './Chart';

const Charts = () => {
  return (
    <div className="mx-auto flex max-w-[110rem] flex-wrap justify-around gap-[2rem] overflow-hidden">
      <Chart counter="100%" subheading="Organic" />
      <Chart counter="285" subheading="Active Product" />
      <Chart counter="350+" subheading="Organic Orchads" />
      <Chart counter="25+" subheading="Years of Farming" />
    </div>
  );
};

export default Charts;
