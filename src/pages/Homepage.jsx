import React from "react";
import { StickyNavbar } from "../layouts/Navbar";
import Header from "../layouts/Header";
import { Footer } from "../layouts/Footer";
import Featured from "../layouts/Featured";
import Banner from "../layouts/Banner";
const Homepage = () => {
  return (
    <div className="md:w-[100vw] md:px-1">
        <div>
            <StickyNavbar />
        </div>
        <br />
        <div>
             <Header />
        </div>
        <div>
             <Banner />
        </div>
        <br />
        <div className="md:w-[100vw] md:px-1">
             <Featured />
        </div>
        <br />
      <div>
             <Footer />
      </div>
    </div>
  );
};

export default Homepage;
