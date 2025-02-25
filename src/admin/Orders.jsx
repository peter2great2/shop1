import React, { useEffect } from "react";
import { StickyNavbar } from "../layouts/Navbar";
import axios from "axios";
import { Footer } from "../layouts/Footer";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const OrderPage = () => {
  const [orders, setOrders] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/orders/all", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setOrders(response.data.orders);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const practice = [
    {
      name: "Samsung",
      price: 1000,
      quantity: 2,
      totalPrice: 2000,
      userName: "John Doe",
      address: "123 Main St, New York, USA",
      status: "shipped",
      _id: "1",
    },
    {
      name: "Apple",
      price: 5000,
      quantity: 2,
      totalPrice: 6000,
      userName: "John Doe",
      address: "123 Main St, New York, USA",
      status: "pending",
      _id: "2",
    },
  ];
  const getStatusClass = (status) => {
    switch (status) {
      case "shipped":
        return "text-blue-500 font-bold";
      case "delivered":
        return "text-green-500 font-bold";
      case "processing":
        return "text-yellow-500 font-bold";
      case "cancelled":
        return "text-red-500 font-bold";
      case "pending":
        return "text-gray-500 font-bold";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div>
      <StickyNavbar />
      <Link
        to="/admin"
        className="mt-24 ml-2 w-fit flex items-center md:ml-8 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <FiArrowLeft className="mr-2" /> Back to Admin
      </Link>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Total Orders</h1>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Product ID</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Amount</th>
              <th className="border border-gray-300 px-4 py-2">Buyer Name</th>
              <th className="border border-gray-300 px-4 py-2">
                Buyer Address
              </th>
              <th className="border border-gray-300 px-4 py-2">Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {order._id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.items[0].product.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.items[0].quantity}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.items[0].product.price}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.totalPrice}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.userId.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.userId.address[0].street}
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2 ${getStatusClass(
                    order.status
                  )}`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
