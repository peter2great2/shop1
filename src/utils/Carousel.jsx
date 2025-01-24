import { Carousel } from "@material-tailwind/react";
import photo1 from "../assets/images/camera.jpg";
import "../utils/Carousel.css"
import photo2 from "../assets/images/womanforherosection.jpg";
import photo3 from "../assets/images/cartforherosection.jpg";
import carouselphoto1 from '../assets/images/carouselphoto1.jpg'
import carouselphoto2 from '../assets/images/carouselphoto2.jpg'
import carouselphoto3 from '../assets/images/carouselphoto3.png'
import { FaStore } from "react-icons/fa6";
import { BiStore } from "react-icons/bi";
import { Link } from "react-router";

export function CarouselTransition() {
  return (
    <div className=" flex justify-center flex-col-reverse md:flex-row items-start md:mt-6">
      <div className="  w-screen md:w-1/2 p-4 text-center flex justify-start items-center flex-col space-y-6 md:h-[400px]">
        <h2 className="font-extrabold capitalize text-2xl md:text-3xl text-center">Discover Quality Products</h2>
        <p>Explore our wide range of high-quality products that meet your needs and preferences. Enjoy the best shopping experience with us!</p>
        <p className="hidden md:block">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur necessitatibus dolore ducimus, incidunt hic esse velit expedita possimus sequi quis ad soluta eaque, saepe voluptatibus consequuntur facere. Nesciunt, cum alias?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, accusantium culpa ducimus ipsam optio, sit dolor architecto vitae, reprehenderit aperiam ut inventore eaque consectetur libero nulla beatae sequi labore aliquam.
            Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. klase kiers faeer ffires fdees
        </p>
        <Link to={'/login'} rel="noopener noreferrer" href="#" className="px-8  w-[90%] py-3 text-lg font-semibold bg-[#c2807a] hover:bg-brown-700 text-center dark:text-gray-50 flex justify-center gap-2 items-center">Go to Store <FaStore/></Link>
      </div>
      <Carousel transition={{ duration: 1 }} autoplayDelay={2000} loop autoplay navigation={""} prevArrow={""} nextArrow={""}  className=" w-full md:w-1/2">
        <div>
          <img
            src={carouselphoto1}
            alt="image 1"
            className=" w-full object-cover"
          />
        </div>
        <div>
          <img
            src={photo2}
            alt="image 2"
            className=" w-full object-cover"
          />
        </div>
        <div>
          <img
            src={photo3}
            alt="image 3"
            className="w-full object-cover"
          />
        </div>
        <div>
          <img
            src={carouselphoto2}
            alt="image 4"
            className="w-full object-cover"
          />
        </div>
        <div>
          <img
            src={carouselphoto3}
            alt="image 5"
            className="w-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
}