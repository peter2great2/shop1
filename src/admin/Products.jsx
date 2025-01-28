import React, { useEffect, useState } from "react";
import { StickyNavbar } from "../layouts/Navbar";
import axios from "axios";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { FaBox, FaTag, FaImage, FaDollarSign, FaWarehouse, FaAlignLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Form states
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/products/all", {
          withCredentials: true,
        });
        setProducts(res.data.products);
        setTotalProducts(res.data.allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleEdit = (product) => {
    setEditMode(true);
    setSelectedProductId(product._id);
    setName(product.name);
    setDescription(product.description);
    setCategory(product.category);
    setImage(product.image);
    setPrice(product.price);
    setStock(product.stock);
    setOpenModal(true);
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/products/delete/${productId}`,
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editMode) {
        // Update product
        const response = await axios.put(
          `http://localhost:3000/api/products/update/${selectedProductId}`,
          {
            name,
            description,
            image,
            category,
            price: parseFloat(price),
            stock: parseInt(stock, 10),
          },
          { withCredentials: true }
        );
        if (response.status === 200) {
          toast.success("Product updated successfully!");
        }
      } else {
        // Create product
        const response = await axios.post(
          "http://localhost:3000/api/products/create",
          {
            name,
            description,
            image,
            category,
            price: parseFloat(price),
            stock: parseInt(stock, 10),
          },
          { withCredentials: true }
        );
        if (response.status === 201) {
          toast.success("Product created successfully!");
        }
      }

      // Reset form
      setName("");
      setDescription("");
      setCategory("");
      setImage("");
      setPrice("");
      setStock("");
      setOpenModal(false);
      setEditMode(false);

      // Refresh products
      const res = await axios.get("http://localhost:3000/api/products/all", {
        withCredentials: true,
      });
      setProducts(res.data.products);
      setTotalProducts(res.data.allProducts);
    } catch (error) {
      console.error("Error submitting product:", error);
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
      <div className="bg-gray-100 p-6 mt-3 overflow-x-auto">
        <header className="mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h1 className="text-3xl font-bold text-gray-800">{`Products ${totalProducts}`}</h1>
          <Button
            onClick={() => {
              setEditMode(false);
              setName("");
              setDescription("");
              setCategory("");
              setImage("");
              setPrice("");
              setStock("");
              handleOpenModal();
            }}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Add Product
          </Button>
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
                      <button
                        onClick={() => handleEdit(product)}
                        className="px-3 py-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="px-3 py-1 text-white bg-red-400 rounded-lg hover:bg-red-600"
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

      {/* Add/Edit Product Modal */}
      <Dialog open={openModal} handler={handleOpenModal} size="sm">
        <DialogHeader className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
          {editMode ? "Edit Product" : "Add Product"}
        </DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmit} className="space-y-2">
            <Input
              label="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Textarea
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Input
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <Input
              label="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <Input
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <Input
              label="Stock"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
            <DialogFooter>
              <Button variant="text" color="red" onClick={handleOpenModal} className="mr-2">
                Cancel
              </Button>
              <Button type="submit" variant="gradient" color="green">
                {editMode ? "Update Product" : "Add Product"}
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default AdminProductsPage;
