import React from "react";
import { StickyNavbar } from "../layouts/Navbar";
import Header from "../layouts/Header";
import { Footer } from "../layouts/Footer";

const Homepage = () => {
  return (
    <div className="">
      <StickyNavbar />
      <br />

      <div>
        <Header />
      </div>
      {/* <Header /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
