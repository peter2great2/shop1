import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { StickyNavbar } from "../layouts/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Input, Button } from "@material-tailwind/react";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // Fetch all categories
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

  // Handle delete action
  const handleDelete = (categoryName) => {
   axios
      .delete(`http://localhost:3000/api/category/delete/${categoryName}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.message);
        setCategories(previousCategories => previousCategories.filter(category => category.name !== categoryName));
      });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/category/create",
        { name, description, image },
        { withCredentials: true }
      );
      console.log(response.data);
      setOpenModal(false); // Close the modal
      setName(""); // Reset form fields
      setDescription("");
      setImage("");
      // Refresh the categories list
      const res = await axios.get("http://localhost:3000/api/category/all", {
        withCredentials: true,
      });
      setCategories(res.data.categories);
    } catch (error) {
      console.error("Error creating category:", error);
    }
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
          <h1 className="text-2xl font-semibold text-gray-800">Categories</h1>
          <button
            onClick={() => setOpenModal(true)}
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
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </main>
      </div>

      {/* Add Category Modal */}
      <Dialog open={openModal} handler={() => setOpenModal(false)}>
        <DialogHeader>Add New Category</DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Input
              label="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={() => setOpenModal(false)}
                className="mr-2"
              >
                Cancel
              </Button>
              <Button type="submit" color="blue">
                Add Category
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default CategoryPage;