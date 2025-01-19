import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../layouts/Navbar";
import sampleImage from "../assets/images/ei_1663268459705-removebg-preview.jpg";
import axios from "axios";

const AdminProductsPage = () => {
   const [products, setProducts] = useState([]);
   const [totalProducts, setTotalProducts] = useState(0);
   useEffect(() => {
      const fetchData = async () => {
         await axios
            .get("http://localhost:3000/api/products/all", {
               withCredentials: true,
            })
            .then((res) => {
               setProducts(res.data.products);
               setTotalProducts(res.data.allProducts);
            });
      };
      fetchData();
   }, []);
   return (
      <div>
         <StickyNavbar />
         <div className="min-h-screen bg-gray-100 p-6">
            <header className="mb-8">
               <h1 className="text-3xl font-bold text-gray-800">{`Products ${totalProducts}`}</h1>
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
                     {products.map((product) => (
                        <tr key={product._id}>
                           <td>{product._id}</td>
                           <td>
                              <img
                                 src={product.image}
                                 alt="Sample Product"
                                 className="w-12 h-12 object-cover rounded-full"
                              />
                           </td>
                           <td className="p-4 hover:bg-gray-100 border-b">
                              {product.name}
                           </td>
                           <td className="p-4 hover:bg-gray-100 border-b">
                              {product.category}
                           </td>
                           <td className="p-4 hover:bg-gray-100 border-b">
                              {product.price}
                           </td>
                           <td className="p-4 hover:bg-gray-100 border-b">
                              {product.stock}
                           </td>
                           <td className="p-4 border-b">
                              <div className="flex space-x-2">
                                 <button
                                    className="
                                    px-3
                                    py-1
                                    text-white
                                    bg-blue-500
                                    rounded-lg
                                    hover:bg-blue-600"
                                 >
                                    Edit
                                 </button>
                                 <button
                                    className="
                                    px-3
                                    py-1
                                    text-white
                                    bg-red-400
                                    rounded-lg
                                    hover:bg-red-600"
                                 >
                                    Delete
                                 </button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default AdminProductsPage;

// <tr className="hover:bg-gray-100">
//    <td className="p-4 border-b">1</td>
//    <td className="p-4 border-b">
//       <img
//          src={sampleImage}
//          alt="Sample Product"
//          className="w-12 h-12 object-cover rounded-full"
//       />
//    </td>
//    <td className="p-4 border-b">Television</td>
//    <td className="p-4 border-b">Electronics</td>
//    <td className="p-4 border-b">$10.00</td>
//    <td className="p-4 border-b">50</td>
//    <td className="p-4 border-b">
//       <div className="flex space-x-2">
//          <button >
//             Edit
//          </button>
//          <button className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600">
//             Delete
//          </button>
//       </div>
//    </td>
// </tr>
