import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../layouts/Navbar";
import sampleImage from "../assets/images/peter.jpg";
import axios from "axios";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Textarea } from "@material-tailwind/react";
import { FaBox, FaTag, FaImage, FaDollarSign, FaWarehouse, FaAlignLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [showSearchInput, setShowSearchInput] = useState(false); // State to toggle search input

  // State for form inputs
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/api/products/all", {
          withCredentials: true,
        })
        .then((res) => {
          setProducts(res.data.products);
          setTotalProducts(res.data.allProducts);
          console.log(res.data);
          
        });
    };
    fetchData();
  }, []);

  const handleOpenModal = () => setOpenModal(!openModal);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add search functionality here
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/products/create",
        {
          name,
          description,
          image,
          category,
          price: parseFloat(price), // Convert price to a number
          stock: parseInt(stock, 10), // Convert stock to a number
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        toast.success("Product created successfully!");
        // Reset form fields
        setName("");
        setDescription("");
        setCategory("");
        setImage("");
        setPrice("");
        setStock("");
        // Close the modal
        setOpenModal(false);
        // Refresh the product list
        const fetchData = async () => {
          const res = await axios.get("http://localhost:3000/api/products/all", {
            withCredentials: true,
          });
          setProducts(res.data.products);
          setTotalProducts(res.data.allProducts);
        };
        fetchData();
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div>
      <StickyNavbar />
      <Link
              to="/admin"
              className="mt-24 ml-2 w-fit flex items-center md:mt-20 md:mb-4 md:ml-16 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiArrowLeft className="mr-2" /> Back to Admin
            </Link>
      <div className=" bg-gray-100 p-6 mt-3 overflow-x-auto">
        <header className="mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h1 className="text-3xl font-bold text-gray-800">{`Products ${totalProducts}`}</h1>
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <div className="relative">
              {showSearchInput ? (
                <input
                  type="text"
                  placeholder="Search products"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-48 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                />
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Add Product Button */}
            <Button
              onClick={handleOpenModal}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              Add Product
            </Button>
          </div>
        </header>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 p-4 text-gray-600">ID</th>
                <th className="border-b-2 p-4 text-gray-600">Image</th>
                <th className="border-b-2 p-4 text-gray-600">Name</th>
                <th className="border-b-2 p-4 text-gray-600">Description</th>
                <th className="border-b-2 p-4 text-gray-600">Category</th>
                <th className="border-b-2 p-4 text-gray-600">Price</th>
                <th className="border-b-2 p-4 text-gray-600">Stock</th>
                <th className="border-b-2 p-4 text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="p-4 hover:bg-gray-100 border-b">{product._id}</td>
                  <td className="p-4 hover:bg-gray-100 border-b">
                    <img
                      src={product.image}
                      alt="Sample Product"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </td>
                  <td className="p-4 hover:bg-gray-100 border-b">{product.name}</td>
                  <td className="p-4 hover:bg-gray-100 border-b max-w-[200px] truncate">
                    {product.description}
                  </td>
                  <td className="p-4 hover:bg-gray-100 border-b">{product.category}</td>
                  <td className="p-4 hover:bg-gray-100 border-b">{product.price}</td>
                  <td className="p-4 hover:bg-gray-100 border-b">{product.stock}</td>
                  <td className="p-4 border-b">
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-white bg-red-400 rounded-lg hover:bg-red-600">
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

      {/* Add Product Modal */}
      <Dialog open={openModal} handler={handleOpenModal} size="sm">
        <DialogHeader className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
          Add Product
        </DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="relative">
              <Input
                label="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                icon={<FaBox className="text-gray-500" />}
              />
            </div>
            <div className="relative">
              <Textarea
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                icon={<FaAlignLeft className="text-gray-500" />}
              />
            </div>
            <div className="relative">
              <Input
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                icon={<FaTag className="text-gray-500" />}
              />
            </div>
            <div className="relative">
              <Input
                label="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                icon={<FaImage className="text-gray-500" />}
              />
            </div>
            <div className="relative">
              <Input
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                icon={<FaDollarSign className="text-gray-500" />}
              />
            </div>
            <div className="relative">
              <Input
                label="Stock"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
                icon={<FaWarehouse className="text-gray-500" />}
              />
            </div>
            <DialogFooter>
              <Button variant="text" color="red" onClick={handleOpenModal} className="mr-2">
                Cancel
              </Button>
              <Button type="submit" variant="gradient" color="green">
                Add Product
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default AdminProductsPage;