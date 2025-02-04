import React, { useEffect } from "react";
import ProductCard from "../utils/Card";
import camera from "../assets/images/camera.jpg";
import { StickyNavbar } from "../layouts/Navbar";
import { Footer } from "../layouts/Footer";
import axios from "axios";
const Shop = () => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/all", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-24">
      <StickyNavbar />
      <h2 className="mb-4 text-2xl">New Arrivals</h2>
      <div className="flex justify-evenly gap-4 flex-wrap">
        {products.map((product) => (
          <div key={product._id} className="">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
