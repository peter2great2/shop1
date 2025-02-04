import React from "react";
import "./LandingPage.css";
import { BiSolidStore } from "react-icons/bi";
import landingPagePhoto from "../assets/images/LandingPagePhotoHD.png";
import pepsi from "../assets/svgs/pepsi-logo-svgrepo-com.svg";
import dell from "../assets/svgs/dell-2-logo-svgrepo-com.svg";
import fila from "../assets/svgs/fila-9-logo-svgrepo-com.svg";
import nike from "../assets/svgs/nike-4-logo-svgrepo-com.svg";
import samsung from "../assets/svgs/samsung-8.svg";
import apple from "../assets/svgs/apple-14.svg";
import nokia from "../assets/svgs/nokia-3-logo-svgrepo-com.svg";
import gucci from "../assets/svgs/gucci-4.svg";
import lenovo from "../assets/svgs/lenovo-1-logo-svgrepo-com.svg";
import hp from "../assets/svgs/hp-svgrepo-com.svg";
import { Link } from "react-router";

const LandingPage = () => {
  const floatingImages = [
    pepsi,
    dell,
    fila,
    nike,
    samsung,
    apple,
    gucci,
    lenovo,
    hp,
    nokia,
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100">
      <div className="animate-move-from-left relative w-full lg:w-1/2 h-[400px] flex items-center justify-center lg:mb-0">
        <img
          src={landingPagePhoto}
          alt="Web3 Future"
          className="item-shadow w-full h-full md:object-cover object-contain"
        />

        {floatingImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Floating Logo ${index + 1}`}
            className={` absolute w-12 h-12 lg:w-16 lg:h-16 animate-float-${
              index + 1
            } drop-shadow-2xl`}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          />
        ))}
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start px-4 text-start justify-center lg:pl-12 lg:mt-0">
        <h1 className="animate-move-from-left text-2xl lg:text-6xl font-bold text-gray-900 mb-2 lg:mb-4 lg:pr-40 align-center">
          Web3 <br /> Shopping <br /> Experience
        </h1>
        <p className="text-lg text-center md:text-left lg:text-xl text-gray-600 mb-8">
          where shopping meets blockchain innovation. Explore the decentralized
          web and take control of your digital future. Join us in building a
          more open, transparent, and secure internet.
        </p>

        <div className="flex flex-col lg:flex-row gap-4 w-full animate-fall-down">
          <Link
            to={"/products/shop"}
            className="bg-[#f26e29] animate-fall-down  w-full py-3 text-lg font-semibold rounded  text-center flex justify-center items-center gap-2 px-8 text-white"
          >
            Go to Store
            <BiSolidStore />
          </Link>
          <button className="bg-transparent animate-fall-down  w-full py-3 text-lg font-semibold rounded  text-center flex justify-center items-center gap-2 px-8 border-[#f26e29] border-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
