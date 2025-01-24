import React from 'react';
import { EcommerceCard } from '../utils/Card';

const Featured = () => {
  return (
    <div className="p-1">
      <div className="container mx-auto w-screen">
        <h2 className="text-3xl font-bold mb-6 text-center">Black Friday</h2>
        <div className="flex flex-row overflow-x-auto bg-scroll  justify-start items-start gap-6">
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
        </div>
      </div>
    </div>
  );
}

export default Featured;