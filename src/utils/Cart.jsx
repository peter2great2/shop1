import React, { useEffect, useState } from "react";
import {
  FiShoppingCart,
  FiTrash2,
  FiArrowLeft,
  FiCheckCircle,
  FiXCircle,
  FiUser,
  FiMapPin,
  FiHome,
  FiGlobe,
} from "react-icons/fi";
import camera from "../assets/images/camera.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { StickyNavbar } from "../layouts/Navbar";
import { toast } from "react-toastify";
import { Footer } from "../layouts/Footer";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    try {
      const fetchCartItems = async () => {
        const response = await axios.get("http://localhost:3000/api/cart/all", {
          withCredentials: true,
        });
        console.log(response.data);
        setCart(response.data.cart);
        setName(response.data.cart.productDetails.name);
        setAddress(response.data.user.address);
        setPhone(response.data.user.phone);
        setEmail(response.data.user.email);
        setPrice(response.data.cart.productDetails.price);
        setImage(response.data.cart.productDetails.image);
      };
      fetchCartItems();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleClearCart = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/cart/clear`,
        {
          withCredentials: true,
        }
      );
      toast.success(response.data);
      setCart([]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemoveItem = async (productId) => {
    if (!productId) {
      console.error("Product ID is required to remove item from cart");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:3000/api/cart/remove/${productId}`,
        {
          withCredentials: true,
        }
      );

      if (!response.data) {
        console.error("No response data from server");
        return;
      }

      toast.success(response.data.message);

      // Re-fetch cart to get the latest cart items from the database
      const updatedCartResponse = await axios.get(
        "http://localhost:3000/api/cart/all",
        {
          withCredentials: true,
        }
      );

      setCart(updatedCartResponse.data.cart); // Set the cart to updated data from backend
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <div>
      <StickyNavbar />
      <div className="flex items-center mb-4">
        <Link
          to="/admin"
          className=" flex mt-20 ml-4 items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FiArrowLeft className="mr-2" /> Continue Shopping
        </Link>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mt-2">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Cart Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <FiShoppingCart className="mr-3 text-2xl" /> Your Shopping Cart
            </h1>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Cart Items and Buttons */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <div
                      key={Math.round(Math.random() * 9000000000)} // Use a unique key like product ID
                      className="p-4 md:p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-4 md:gap-6">
                        {/* Product Image */}
                        <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                          <img
                            src={item.productDetails?.image || camera} // Fallback to a default image if `image` is missing
                            alt={item.productDetails?.name || "Product Image"} // Fallback alt text
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {item.productDetails?.name || "Product Name"}{" "}
                            {/* Fallback to "Product Name" if `name` is missing */}
                          </h3>
                          <p className="text-lg font-semibold text-gray-900 mb-4">
                            ${item.productDetails?.price?.toFixed(2) || "0.00"}{" "}
                            {/* Fallback to "0.00" if `price` is missing */}
                          </p>

                          {/* Remove Button */}
                          <button
                            className="text-red-600 hover:text-red-700 flex items-center transition-colors"
                            onClick={() =>
                              handleRemoveItem(item.productDetails._id)
                            }
                          >
                            <FiTrash2 className="mr-2" /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Summary Section */}
                <div className="p-4 md:p-6 space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold">Total:</span>
                      <span className="text-xl font-bold text-gray-900">
                        23333
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        onClick={handleClearCart}
                        className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
                      >
                        <FiXCircle className="text-xl" /> Clear Cart
                      </button>

                      <Link
                        to="/user/cart/checkout"
                        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
                      >
                        <FiCheckCircle className="text-xl" /> Proceed to
                        Checkout
                      </Link>
                    </div>

                    {/* Secure Checkout Message */}
                    <p className="text-center text-sm text-gray-500">
                      Secure checkout process
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Shipping Address */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
                  <FiMapPin className="text-gray-600" /> Shipping Address
                </h3>

                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center gap-2">
                    <FiUser className="text-gray-500" />
                    <span>yes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiHome className="text-gray-500" />
                    <span>important</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-gray-500" />
                    <span>my address</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiGlobe className="text-gray-500" />
                    <span>my country</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
