import { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { FaUsers, FaBoxes, FaShoppingCart, FaTags } from "react-icons/fa";
import { StickyNavbar } from "../layouts/Navbar";
import axios from "axios";
import { useEffect } from "react";

const AdminDashboard = () => {
   const [allUsers, setAllUsers] = useState(null);
   const [allProducts, setAllProducts] = useState(null);
   const [allAdmins, setAllAdmins] = useState(null);
   const fetchData = async () => {
      try {
         const [userResponse, productsResponse, adminResponse] =
            await Promise.all([
               axios.get("http://localhost:3000/api/users/all", {
                  withCredentials: true,
               }),
               axios.get("http://localhost:3000/api/products/all", {
                  withCredentials: true,
               }),
               axios.get("http://localhost:3000/api/users/admins", {
                  withCredentials: true,
               }),
            ]);
         setAllUsers(userResponse.data.allUsers);
         setAllProducts(productsResponse.data.allProducts);
         setAllAdmins(adminResponse.data.allAdmins);
      } catch (error) {
         console.log(error);
      }
   };
   fetchData();
   return (
      <div>
         <StickyNavbar />
         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 p-6">
            {/* Total Users */}
            <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-red-400 to-red-600 p-6 rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform">
               <BiSolidUser size={40} />
               <h2 className="uppercase mt-2 text-lg">Total Users</h2>
               <h2 className="text-3xl font-bold">{allUsers}</h2>
            </div>

            {/* Total Admin */}
            <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform">
               <FaUsers size={40} />
               <h2 className="uppercase mt-2 text-lg">Total Admin</h2>
               <h2 className="text-3xl font-bold">{allAdmins}</h2>
            </div>

            {/* Total Products */}
            <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-green-400 to-green-600 p-6 rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform">
               <FaBoxes size={40} />
               <h2 className="uppercase mt-2 text-lg">Total products</h2>
               <h2 className="text-3xl font-bold">{allProducts}</h2>
            </div>

            {/* Total Orders */}
            <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform">
               <FaShoppingCart size={40} />
               <h2 className="uppercase mt-2 text-lg">Total Orders</h2>
               <h2 className="text-3xl font-bold">320</h2>
            </div>

            {/* Total Categories */}
            <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-purple-400 to-purple-600 p-6 rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform">
               <FaTags size={40} />
               <h2 className="uppercase mt-2 text-lg">Total Categories</h2>
               <h2 className="text-3xl font-bold">25</h2>
            </div>
         </div>
      </div>
   );
};

export default AdminDashboard;
