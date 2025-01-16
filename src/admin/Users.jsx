import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { StickyNavbar } from "../layouts/Navbar";
import { toast } from "react-toastify";

const UserManagement = () => {
   const [users, setUsers] = useState([]);
   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const response = await axios.get(
               "http://localhost:3000/api/users/all",
               { withCredentials: true }
            );
            setUsers(response.data.users);
            toast.success(response.data.message);
         } catch (error) {
            toast.error(error.response.data.message);
         }
      };

      fetchUsers();
   }, []);

   const handleDelete = async (userId) => {
      try {
         const response = await axios.delete(
            `http://localhost:3000/api/users/delete/${userId}`,
            { withCredentials: true }
         );
         response.data;
         setUsers(users.filter((user) => user._id.toString() !== userId));
      } catch (error) {
         console.error(error.response.data.message);
      }
   };

   return (
      <div>
         <StickyNavbar />
         <br />
         <div className="p-4 sm:p-6 lg:p-8 bg-gray-100">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-gray-800">
               User Management
            </h1>

            <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
               Add User
            </button>

            <div className="overflow-x-auto overflow-y-auto max-h-[400px]">
               <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                  <thead className="bg-gray-700 text-white">
                     <tr>
                        <th className="px-4 sm:px-6 py-2 sm:py-3 border-b text-left text-sm sm:text-base">
                           Name
                        </th>
                        <th className="px-4 sm:px-6 py-2 sm:py-3 border-b text-left text-sm sm:text-base">
                           Email
                        </th>
                        <th className="px-4 sm:px-6 py-2 sm:py-3 border-b text-left text-sm sm:text-base">
                           Role
                        </th>
                        <th className="px-4 sm:px-6 py-2 sm:py-3 border-b text-left text-sm sm:text-base">
                           Actions
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {users.map((user, index) => (
                        <tr
                           key={user._id}
                           className={`${
                              index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                           } hover:bg-gray-200 transition-colors duration-300`}
                        >
                           <td className="px-4 sm:px-6 py-2 sm:py-4 border-b text-sm sm:text-base">
                              {user.name}
                           </td>
                           <td className="px-4 sm:px-6 py-2 sm:py-4 border-b text-sm sm:text-base">
                              {user.email}
                           </td>
                           <td className="px-4 sm:px-6 py-2 sm:py-4 border-b text-sm sm:text-base">
                              {user.isAdmin ? (
                                 <span className="text-green-300">Admin</span>
                              ) : (
                                 <span className="text-black">User</span>
                              )}
                           </td>
                           <td className="px-4 sm:px-6 py-2 sm:py-4 border-b">
                              <button
                                 className="text-red-600 hover:text-red-800"
                                 onClick={() => handleDelete(user._id)}
                              >
                                 <FaTrash />
                              </button>
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

export default UserManagement;
