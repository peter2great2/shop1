import { Carousel } from "@material-tailwind/react";
import photo1 from "../assets/images/camera.jpg";
import photo2 from "../assets/images/womanforherosection.jpg";
import photo3 from "../assets/images/cartforherosection.jpg";
import carouselphoto1 from '../assets/images/carouselphoto1.jpg';
import carouselphoto2 from '../assets/images/carouselphoto2.jpg';
import carouselphoto3 from '../assets/images/carouselphoto3.png';
import { FaStore } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function CarouselTransition() {
  return (
    <div className="flex justify-center flex-col-reverse md:flex-row md:mt-6 bg-gray-50 py-8">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-2 flex justify-start items-start flex-col space-y-6 md:h-[400px] text-left">
        <h2 className="font-extrabold capitalize text-2xl md:text-4xl text-gray-900">
          Discover Quality Products
        </h2>
        <p className="text-lg text-gray-600">
          Explore our wide range of high-quality products that meet your needs and preferences. Enjoy the best shopping experience with us!
        </p>
        <p className="hidden md:block text-left text-gray-600">
          Discover a wide range of products that cater to all your needs. From electronics to fashion, we have it all. Shop now and enjoy exclusive deals and discounts. Our products are sourced from top brands to ensure quality and satisfaction.
          Experience seamless shopping with fast delivery and excellent customer service. Join our community of happy customers and make the most of your shopping experience with us.
        </p>
        <Link
          to={'/login'}
          className="px-8 w-[90%] md:w-auto py-3 text-lg font-semibold bg-[#f26e29] hover:bg-[#a86b66] text-white mx-auto text-center rounded-lg transition-colors duration-300 flex justify-center gap-2 items-center"
        >
          Go to Store <FaStore className="text-xl" />
        </Link>
      </div>

      {/* Carousel Section */}
      <div className="w-full md:w-1/2">
        <Carousel
          transition={{ duration: 1 }}
          autoplayDelay={2000}
          loop
          autoplay
          className="rounded-lg overflow-hidden shadow-lg"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 w-2 cursor-pointer rounded-full transition-colors ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src={carouselphoto1}
              alt="image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-start justify-start p-4">
              <p className="text-white text-2xl font-bold">Shop the Latest Trends</p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src={photo2}
              alt="image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-start justify-start p-4">
              <p className="text-white text-2xl font-bold">Exclusive Deals Await</p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src={photo3}
              alt="image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-start justify-start p-4">
              <p className="text-white text-2xl font-bold">Fast & Reliable Delivery</p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src={carouselphoto2}
              alt="image 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-start justify-start p-4">
              <p className="text-white text-2xl font-bold">Premium Quality Products</p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src={carouselphoto3}
              alt="image 5"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-start justify-start p-4">
              <p className="text-white text-2xl font-bold">Your One-Stop Shop</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}