import React from "react";
import { StickyNavbar } from "../layouts/Navbar";
import sampleImage from "../assets/images/ei_1663268459705-removebg-preview.jpg";

const AdminProductsPage = () => {
   return (
      <div>
         <StickyNavbar />
         <div className="min-h-screen bg-gray-100 p-6">
            <header className="mb-8">
               <h1 className="text-3xl font-bold text-gray-800">Products</h1>
            </header>

            <div className="bg-white rounded-lg shadow-md p-6">
               <div className="mb-4">
                  <input
                     type="text"
                     placeholder="Search products"
                     className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                  />
               </div>

               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr>
                        <th className="border-b-2 p-4 text-gray-600">ID</th>
                        <th className="border-b-2 p-4 text-gray-600">Image</th>
                        <th className="border-b-2 p-4 text-gray-600">Name</th>
                        <th className="border-b-2 p-4 text-gray-600">
                           Category
                        </th>
                        <th className="border-b-2 p-4 text-gray-600">Price</th>
                        <th className="border-b-2 p-4 text-gray-600">Stock</th>
                        <th className="border-b-2 p-4 text-gray-600">
                           Actions
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="hover:bg-gray-100">
                        <td className="p-4 border-b">1</td>
                        <td className="p-4 border-b">
                           <img
                              src={sampleImage}
                              alt="Sample Product"
                              className="w-12 h-12 object-cover rounded-full"
                           />
                        </td>
                        <td className="p-4 border-b">Television</td>
                        <td className="p-4 border-b">Electronics</td>
                        <td className="p-4 border-b">$10.00</td>
                        <td className="p-4 border-b">50</td>
                        <td className="p-4 border-b">
                           <div className="flex space-x-2">
                              <button className="px-3 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                 Edit
                              </button>
                              <button className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600">
                                 Delete
                              </button>
                           </div>
                        </td>
                     </tr>
                     <tr className="hover:bg-gray-100">
                        <td className="p-4 border-b">2</td>
                        <td className="p-4 border-b">
                           <img
                              src={sampleImage}
                              alt="Another Product"
                              className="w-12 h-12 object-cover rounded-full"
                           />
                        </td>
                        <td className="p-4 border-b">Samsung Galaxy S21</td>
                        <td className="p-4 border-b">Mobile Phones</td>
                        <td className="p-4 border-b">$20.00</td>
                        <td className="p-4 border-b">30</td>
                        <td className="p-4 border-b">
                           <div className="flex space-x-2">
                              <button className="px-3 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                 Edit
                              </button>
                              <button className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600">
                                 Delete
                              </button>
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default AdminProductsPage;
