import React, { useEffect, useState } from "react";
import ProductCard from "../utils/Card";
import { StickyNavbar } from "../layouts/Navbar";
import { Footer } from "../layouts/Footer";
import axios from "axios";
import Banner from "../layouts/Banner";

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [phoneProducts, setPhoneProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [allProductsResponse, phoneProductsResponse] = await axios.all([
          axios.get("http://localhost:3000/api/products/all", {
            withCredentials: true,
          }),
          axios.get("http://localhost:3000/api/products/Phones", {
            withCredentials: true,
          }),
        ]);

        // Set the states with the fetched data
        setAllProducts(allProductsResponse.data.products);
        console.log(allProductsResponse.data);
        setPhoneProducts(phoneProductsResponse.data.products);
        console.log(phoneProductsResponse.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-24">
      <StickyNavbar />

      <h2 className="mb-4 text-2xl">Latest Products</h2>
      <div className="flex justify-evenly gap-4 flex-wrap">
        {allProducts.slice(0, 12).map((product) => (
          <div key={product._id} className="">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl mt-8">Premium Phones</h2>
      <div className="flex justify-evenly gap-4 flex-wrap">
        {phoneProducts.map((product) => (
          <div key={product._id} className="">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default Shop;
