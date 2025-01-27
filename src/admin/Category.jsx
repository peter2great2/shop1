import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { StickyNavbar } from "../layouts/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const CategoryPage = () => {
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      axios
         .get("http://localhost:3000/api/category/all", {
            withCredentials: true,
         })
         .then((res) => {
            console.log(res.data.categories);
            setCategories(res.data.categories);
         });
   }, []);
   const handleDelete = (categoryName) => {
      alert(`Delete action for ${categoryName} is not functional.`);
   };

   return (
      <div>
         <StickyNavbar />
         <Link
              to="/admin"
              className="mt-24 mb-3 ml-2 w-fit flex items-center md:mb-4 md:ml-8 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiArrowLeft className="mr-2" /> Back to Admin
            </Link>
         <div className="min-h-screen bg-gray-100 p-6">
            {/* Header Section */}
            <header className="flex justify-between items-center mb-8">
               <h1 className="text-2xl font-semibold text-gray-800">
                  Categories
               </h1>
               <button
                  onClick={() => alert("This button is non-functional.")}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
               >
                  + Add Category
               </button>
            </header>

            {/* Category Grid */}
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               {categories.map((category, index) => (
                  <div
                     key={index}
                     className="relative bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 group"
                  >
                     {/* Delete Icon (Visible on Hover) */}
                     <button
                        onClick={() => handleDelete(category.name)}
                        className="absolute top-2 right-2 text-gray-400 hidden group-hover:block hover:text-red-600 transition duration-300"
                     >
                        <AiOutlineDelete size={20} />
                     </button>

                     {/* Category Content */}
                     <h2 className="text-xl font-medium text-gray-800 mb-2">
                        {category.name}
                     </h2>
                     <p className="text-sm text-gray-600">
                        {category.description}
                     </p>
                  </div>
               ))}
            </main>
         </div>
      </div>
   );
};

export default CategoryPage;
