import React, { useState, useEffect, useContext } from "react";
import {
  FaCreditCard,
  FaMapMarker,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/Cartcontext";

const CheckoutPage = () => {
  const cart = useContext(CartContext);
  console.log(cart);

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [countdown, setCountdown] = useState(3); // State for countdown timer
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowModal(true); // Show the modal
  };

  // Countdown and redirection logic
  useEffect(() => {
    if (showModal) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      // Redirect to homepage after 3 seconds
      const redirectTimer = setTimeout(() => {
        navigate("/"); // Replace "/" with your homepage route
      }, 3000);

      // Cleanup timers
      return () => {
        clearInterval(timer);
        clearTimeout(redirectTimer);
      };
    }
  }, [showModal, navigate]);

  return (
    <div>
      <Link
        to="/products/shop"
        className=" flex mt-4 mb-4 ml-4 items-center text-gray-600 hover:text-gray-900 transition-colors"
      >
        <FiArrowLeft className="mr-2" /> Continue Shopping
      </Link>
      <div className="min-h-screen bg-gray-100 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form (Left Side) */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
            <form onSubmit={handleSubmit}>
              {/* Card Number Field */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <FaCreditCard className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Expiry and CVV Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <div className="relative">
                    <FaCreditCard className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address Field (Text Display) */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shipping Address
                </label>
                <div className="relative">
                  <FaMapMarker className="absolute left-3 top-3 text-gray-400" />
                  <p className="w-full pl-10 pr-4 py-2 text-gray-700">
                    123 Main St, City, Country
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary (Right Side) */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart.cart.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between border-t pt-4"
                >
                  <p>{item.productDetails.name}</p>
                  <p>${item.productDetails.price}</p>
                </div>
              ))}
              <div className="flex justify-between border-t pt-4">
                <p className="font-bold">Total</p>
                <p className="font-bold">
                  {cart.cart.reduce(
                    (acc, item) => acc + item.productDetails.price,
                    0
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center w-11/12 max-w-md">
              {/* Big Green Checkmark Icon */}
              <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Payment is Successful</h2>
              <p className="text-gray-700 mb-4">
                You will be redirected to the homepage in{" "}
                <span className="font-bold">{countdown}</span> seconds.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
