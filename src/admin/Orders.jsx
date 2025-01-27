import React, { useEffect } from "react";
import { StickyNavbar } from "../layouts/Navbar";
import axios from "axios";
import{ Footer} from "../layouts/Footer"; 
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const OrderPage = () => {
  const [orders, setOrders] = React.useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/orders/all", {
          withCredentials: true,
        });
        setOrders(response.data.orders);
        console.log(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

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
              className="mt-24 ml-2 w-fit flex items-center md:ml-4 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FiArrowLeft className="mr-2" /> Back to Admin
            </Link>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Order Page</h1>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Product ID</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Buyer Name</th>
              <th className="border border-gray-300 px-4 py-2">Buyer Address</th>
              <th className="border border-gray-300 px-4 py-2">Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{order._id}</td>
                <td className="border border-gray-300 px-4 py-2">{order.items[0].name}</td>
                <td className="border border-gray-300 px-4 py-2">{order.userId.name}</td>
                <td className="border border-gray-300 px-4 py-2">{`${order.userId.address[0].street}, ${order.userId.address[0].city}, ${order.userId.address[0].state}`}</td>
                <td className={`border border-gray-300 px-4 py-2 ${getStatusClass(order.status)}`}>
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

