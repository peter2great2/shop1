import React, { useEffect } from 'react';
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
} from 'react-icons/fi';
import camera from '../assets/images/camera.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StickyNavbar } from '../layouts/Navbar';

const Cart = () => {
  // Dummy static data
  const cartItems = [
    
    {
      _id: '2',
      productDetails: {
        name: 'Wireless Mouse',
        price: 59.99,
        image: 'https://via.placeholder.com/150',
      },
    },
  ];

  const totalPrice = cartItems.reduce((sum, item) => sum + item.productDetails.price, 0);
  const shippingAddress = {
    name: 'John Doe',
    street: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'United States',
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/cart/pending', {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <StickyNavbar/>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mt-8">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Back to Shopping Link */}
          <div className="flex items-center mb-4">
            <Link
              to="/"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiArrowLeft className="mr-2" /> Continue Shopping
            </Link>
          </div>

          {/* Cart Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <FiShoppingCart className="mr-3 text-2xl" /> Your Shopping Cart
          </h1>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Cart Items and Buttons */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item._id} className="p-4 md:p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start gap-4 md:gap-6">
                      {/* Product Image */}
                      <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                        <img
                          src={camera}
                          alt={item.productDetails.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.productDetails.name}
                        </h3>
                        <p className="text-lg font-semibold text-gray-900 mb-4">
                          ${item.productDetails.price.toFixed(2)}
                        </p>

                        {/* Remove Button */}
                        <button className="text-red-600 hover:text-red-700 flex items-center transition-colors">
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
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
                      <FiXCircle className="text-xl" /> Clear Cart
                    </button>

                    <Link
                      to="/user/cart/checkout"
                      className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
                    >
                      <FiCheckCircle className="text-xl" /> Proceed to Checkout
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
                  <span>{shippingAddress.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiHome className="text-gray-500" />
                  <span>{shippingAddress.street}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-gray-500" />
                  <span>
                    {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zip}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiGlobe className="text-gray-500" />
                  <span>{shippingAddress.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;