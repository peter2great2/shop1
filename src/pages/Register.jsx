import React, { useState } from "react";
import { useNavigate, Link } from "react-router";

const Register = () => {
   return (
      <>
         <div className="flex items-center justify-center min-h-screen bg-gray-300">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
               <h2 className="text-2xl font-bold text-center tracking-in-expand">
                  Register
               </h2>
               <form className="space-y-4">
                  <div>
                     <input
                        type="name"
                        id="name"
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Name"
                     />
                  </div>
                  <div>
                     <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Email"
                     />
                  </div>
                  <div>
                     <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Password"
                     />
                  </div>
                  <div>
                     <input
                        type="text"
                        id="state"
                        required
                        className="w-1/2 px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="State"
                     />
                     <input
                        type="text"
                        id="city"
                        required
                        className="w-1/2 px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="City"
                     />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                     <p className="mt-4 text-md text-indigo-600 ">
                        Agree to Terms and Condition?
                     </p>
                     <input
                        type="checkbox"
                        className="mt-3"
                        style={{ transform: "scale(1.5)", marginRight: "10px" }}
                        required
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full px-4 py-2 font-medium text-white bg-[#212121] rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-indigo-200"
                  >
                     Register
                  </button>
               </form>
               <div className="flex justify-between">
                  <Link
                     to={"/login"}
                     className="text-sm text-indigo-600 hover:underline"
                  >
                     Sign In
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default Register;
