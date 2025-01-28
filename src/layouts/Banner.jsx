import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner mt-2">
      <div className="big-text">Enjoy 50% OFF on a Friday</div>
      <button className="px-5 my-4  bg-amber-400 hover:bg-amber-300 text-purple-900 font-semibold rounded-full text-base transition-transform transform hover:scale-105 shadow-md flex items-center mx-auto">
          Shop Now
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
        </button>
    </div>
  );
}

export default Banner;