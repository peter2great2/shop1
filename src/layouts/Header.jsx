import React from 'react';
import './Header.css'; // External CSS for animation
import cart4herosection from '../assets/images/cartforherosection.jpg';
import {BiStore} from 'react-icons/bi';

const Header = () => {
  return (
    <section className="bg-[rgb(236, 235, 240)] dark:text-gray-800 mt-16 z-40">
      <div className="container flex flex-col justify-center p-2 mx-auto sm:py-12 lg:py-8 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={cart4herosection}
            alt=""
            className="object-contain w-full h-full sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="animate-move-from-left text-5xl font-bold text-left leading-none sm:text-6xl">
            <span className="text-shadow-drop-top">Web 3</span> Shopping Experience
          </h1>
          <p className="animate-move-from-left mt-6 mb-3 text-lg text-left sm:mb-12">
            Shop the difference, Love the experience.
            <br className="hidden md:inline lg:hidden" /> From essentials to luxury, we have it all
          </p>
          <div className="flex flex-col space-y-2 items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-2 lg:justify-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="animate-fall-down  w-full py-3 text-lg font-semibold rounded bg-[#c2807a] hover:bg-brown-700 text-center dark:text-gray-50 flex justify-center items-center gap-2 px-8"
            >
              Go to Store <BiStore size={20}/>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="animate-fall-down px-8 py-3 w-full text-lg font-semibold border rounded text-center dark:border-gray-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;