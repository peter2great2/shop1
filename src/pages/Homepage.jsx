import React from "react";
import { StickyNavbar } from "../layouts/Navbar";
import Header from "../layouts/Header";
import { Footer } from "../layouts/Footer";
import Featured from "../layouts/Featured";
import Banner from "../layouts/Banner";
import { TestimonialCard } from "../utils/Testimonial";


const Homepage = () => {
  return (
    <div className="md:w-[100vw] md:px-1">
      <StickyNavbar />
      <Header />
      <Banner />
      <Featured />
      <div className="mt-8  px-10">
        <div>
          <h2 className="text-xl font-bold text-center">What our customers are saying</h2>
        </div>
        <div className="md:flex-row flex-col flex gap-5">
          <TestimonialCard text='Overall, this has been one of the best online shopping experiences I’ve had. I’ll definitely be returning for more and recommending this site to my friends and family!"
'/>
          <TestimonialCard text="I ordered a pair of sneakers, and they exceeded my expectations! The quality is top-notch, and they fit perfectly. Highly recommended!
"/>
          <TestimonialCard text="The website is user-friendly, and the prices are reasonable. However, I’d like to see more variety in the product selection"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
