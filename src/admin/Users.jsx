import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { StickyNavbar } from "../layouts/Navbar";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { toast } from "react-toastify";

const UserManagement = () => {
   const [users, setUsers] = useState([]);
   const [openDialog, setOpenDialog] = useState(false);
   const [editingUser, setEditingUser] = useState(null);
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      isAdmin: false,
   });

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const response = await axios.get(
               "http://localhost:3000/api/users/all",
               {
                  withCredentials: true,
               }
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
         await axios.delete(
            `http://localhost:3000/api/users/delete/${userId}`,
            {
               withCredentials: true,
            }
         );
         setUsers(users.filter((user) => user._id.toString() !== userId));
         toast.success("User deleted successfully");
      } catch (error) {
         toast.error(error.response.data.message);
      }
   };

   const handleEdit = (userId) => {
      const user = users.find((u) => u._id === userId);
      setEditingUser(user);
      setFormData({
         name: user.name,
         email: user.email,
         isAdmin: user.isAdmin,
      });
      setOpenDialog(true);
   };

   const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
         ...formData,
         [name]: type === "checkbox" ? checked : value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.put(
            `http://localhost:3000/api/users/update/${editingUser._id}`,
            formData,
            { withCredentials: true }
         );
         setUsers(
            users.map((user) =>
               user._id === editingUser._id ? { ...user, ...formData } : user
            )
         );
         toast.success(response.data.message);
         setOpenDialog(false);
         setEditingUser(null);
      } catch (error) {
         toast.error(error.response.data.message);
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
                                 <span className="text-green-500">Admin</span>
                              ) : (
                                 <span className="text-black">User</span>
                              )}
                           </td>
                           <td className="px-4 sm:px-6 py-2 sm:py-4 border-b">
                              <button>
                                 <div className="flex justify-between items-center gap-4">
                                    <FaEdit
                                       className="text-blue-gray-700 hover:text-gray-900"
                                       onClick={() => handleEdit(user._id)}
                                    />
                                    <FaTrash
                                       className="text-red-500 hover:text-red-800"
                                       onClick={() => handleDelete(user._id)}
                                    />
                                 </div>
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         <Dialog
            open={openDialog}
            handler={() => setOpenDialog(false)}
            size="lg"
            className="bg-white rounded-lg p-4"
         >
            <DialogBody>
               <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
               >
                  <div>
                     <label className="block text-sm font-medium text-gray-700">
                        Name
                     </label>
                     <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700">
                        Email
                     </label>
                     <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                     />
                  </div>
                  <div className="flex items-center">
                     <input
                        type="checkbox"
                        name="isAdmin"
                        checked={formData.isAdmin}
                        onChange={handleInputChange}
                        className="mr-2"
                     />
                     <label className="text-sm text-gray-700">Admin</label>
                  </div>
               </form>
            </DialogBody>
            <DialogFooter>
               <button
                  className="px-4 py-2 bg-gray-500 text-white rounded mx-2 hover:bg-gray-700"
                  onClick={() => setOpenDialog(false)}
               >
                  Cancel
               </button>
               <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
               >
                  Save
               </button>
            </DialogFooter>
         </Dialog>
      </div>
   );
};

export default UserManagement;
