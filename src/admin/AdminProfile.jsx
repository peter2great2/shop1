import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCog,
  FaBell,
  FaChartLine,
  FaHistory,
  FaSignOutAlt,
  FaMapMarker,
} from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";
import { StickyNavbar } from "../layouts/Navbar";
import { Link } from "react-router-dom";

const AdminProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    document.title = "Admin Profile";
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users/profile", {
          withCredentials: true,
        });
        console.log(response.data);
        const { data } = response.data;
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setImage(data.image);
        setStreet(data.address[0]?.street || "");
        setCity(data.address[0]?.city || "");
        setState(data.address[0]?.state || "");
        setCountry(data.address[0]?.country || "");
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <StickyNavbar />
      <Link
              to="/admin"
              className="mt-24 mb-4 ml-2 w-fit flex items-center md:mt-20 md:mb-2 md:ml-14 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiArrowLeft className="mr-2" /> Back to Admin
            </Link>
        <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Admin Profile</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition duration-300">
            <FaBell className="text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition duration-300">
            <FaCog className="text-gray-600" />
          </button>
        </div>
      </header>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            {image ? (
              <img src={image} alt="Profile" className="w-full h-full rounded-full object-cover" />
            ) : (
              <FaUser className="text-4xl text-gray-500" />
            )}
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500">Admin</p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-gray-500" />
            <p className="text-gray-700">{email}</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-gray-500" />
            <p className="text-gray-700">{phone}</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarker className="text-gray-500" />
            <p className="text-gray-700">
              {street && `${street}, `}
              {city && `${city}, `}
              {state && `${state}, `}
              {country && `${country}`}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:bg-gray-50 transition duration-300">
          <FaChartLine className="text-2xl text-blue-500" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Analytics</h3>
            <p className="text-gray-500">View site analytics</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:bg-gray-50 transition duration-300">
          <FaHistory className="text-2xl text-green-500" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Activity Log</h3>
            <p className="text-gray-500">Check recent activities</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:bg-gray-50 transition duration-300">
          <FaSignOutAlt className="text-2xl text-red-500" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Logout</h3>
            <p className="text-gray-500">Sign out of your account</p>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Updated user permissions</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Added new product</p>
            <p className="text-sm text-gray-500">5 hours ago</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Resolved support ticket</p>
            <p className="text-sm text-gray-500">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminProfilePage;