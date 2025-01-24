import React from 'react';
import { EcommerceCard } from '../utils/Card';
import './Featured.css';

const Featured = () => {
  return (
    <div className="p-1">
      <div className="container mx-auto w-screen">
        <div className="flex flex-row overflow-x-auto bg-scroll justify-start items-start gap-6">
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
        </div>
      </div>
    </div>
  );
}

export default Featured;