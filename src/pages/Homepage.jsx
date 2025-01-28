import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../layouts/Navbar";
// import Header from "../layouts/Header";
import { Footer } from "../layouts/Footer";
import Featured from "../layouts/Featured";
import Banner from "../layouts/Banner";
import { TestimonialCard } from "../utils/Testimonial";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import LandingPage from "./LandingPage";
import peter from '../assets/images/peter.jpg'

const Homepage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 200000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="md:w-[100vw]">
      <StickyNavbar />
      <LandingPage />
      {/* <Header /> */}
      <Banner />
      <Featured />
      <div className="mt-8 px-3">
        <div>
          <h2 className="text-xl font-bold text-center">What our customers are saying</h2>
        </div>
        <div className="md:flex-row flex-col flex gap-5">
          <TestimonialCard text='Overall, this has been one of the best online shopping experiences I’ve had. I’ll definitely be returning for more and recommending this site to my friends and family!'
            image={peter}
            name="Peter Sambo"
          />
          <TestimonialCard text="I ordered a pair of sneakers, and they exceeded my expectations! The quality is top-notch, and they fit perfectly. Highly recommended!"
            image={peter}
            name="Henry Robinson"
          />
          <TestimonialCard text="The website is user-friendly, and the prices are reasonable. However, I’d like to see more variety in the product selection"
            image={peter}
            name="Mary Jackson"
          />
        </div>
      </div>
      <Footer />
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Read Me!</DialogHeader>
          <DialogBody>
          Thanks for visiting! Please note that this website is still under development and not yet production-ready. During this phase, you’ll have admin privileges to explore and test features. Rest assured, your data is safe and securely handled. 
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" className="outline-none" onClick={handleOpen}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Homepage;
