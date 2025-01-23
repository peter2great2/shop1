import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import axios from "axios";

const ExtendedRegister = () => {
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [state, setState] = useState("");
   const [city, setCity] = useState("");
   const [country, setCountry] = useState("");
   const [phone, setPhone] = useState("");
   const [street, setStreet] = useState("");

   const address = { city, state, country, street };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post(
            "http://localhost:3000/api/users/register",
            {
               name,
               email,
               password,
               address,
               phone,
            }
         );
         console.log(response.data);
         navigate("/login");
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-300">
         <div
            className="w-full p-8 space-y-6 bg-white rounded shadow-md"
            style={{ maxHeight: "95vh", maxWidth: "50vw" }}
         >
            <h2 className="text-2xl font-bold text-center">Register</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                     type="text"
                     id="name"
                     required
                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                     placeholder="Name"
                     onChange={(e) => setName(e.target.value)}
                  />
                  <input
                     type="email"
                     id="email"
                     required
                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                     placeholder="Email"
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                     type="password"
                     id="password"
                     required
                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                     placeholder="Password"
                     onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                     type="text"
                     id="phone"
                     required
                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                     placeholder="Phone"
                     onChange={(e) => setPhone(e.target.value)}
                  />
               </div>
               <div>
                  <input
                     type="test"
                     value={street}
                     id="street"
                     required
                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                     placeholder="Street"
                     onChange={(e) => setStreet(e.target.value)}
                  />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                     type="text"
                     id="state"
                     required
                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                     placeholder="State"
                     onChange={(e) => setState(e.target.value)}
                  />
                  <input
                     type="text"
                     id="city"
                     required
                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                     placeholder="City"
                     onChange={(e) => setCity(e.target.value)}
                  />
                  <input
                     type="text"
                     id="country"
                     required
                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                     placeholder="Country"
                     onChange={(e) => setCountry(e.target.value)}
                  />
               </div>
               <div className="flex items-center justify-between mt-2">
                  <p className="mt-4 text-md text-indigo-600">
                     Agree to Terms and Conditions?
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
                  to="/login"
                  className="text-sm text-indigo-600 hover:underline"
               >
                  Sign In
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ExtendedRegister;
