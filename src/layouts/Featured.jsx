import React from 'react';
import './Featured.css';
import { CarouselTransition } from '../utils/Carousel';
const Featured = () => {
  return (
    <div className="p-1">
      <div className="container mx-auto w-screen">
        <div className="flex flex-row overflow-x-auto bg-scroll justify-start items-start gap-6">
        </div>
      </div>
      <div>
         <CarouselTransition />
      </div>
    </div>
  );
}

export default Featured;