import React, { useEffect } from "react";
import { StickyNavbar } from "../layouts/Navbar";
import axios from "axios";

const OrderPage = () => {
   const [orders, setOrders] = React.useState([]);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               "http://localhost:3000/api/orders/all",
               {
                  withCredentials: true,
               }
            );
            setOrders(response.data.orders);
            console.log(response.data.orders);
         } catch (error) {
            console.error("Error fetching orders:", error);
         }
      };
      fetchData();
   }, []);

   const getStatusClass = (status) => {
      switch (status) {
         case "Shipped":
            return "text-blue-500 font-bold";
         case "Delivered":
            return "text-green-500 font-bold";
         case "Processing":
            return "text-yellow-500 font-bold";
         default:
            return "text-gray-500";
      }
   };

   return (
      <div>
         <StickyNavbar />
         <br />
         <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Order Page</h1>
            <table className="min-w-full border-collapse border border-gray-300">
               <thead>
                  <tr className="bg-gray-100">
                     <th className="border border-gray-300 px-4 py-2">
                        Product ID
                     </th>
                     <th className="border border-gray-300 px-4 py-2">
                        Product Name
                     </th>
                     <th className="border border-gray-300 px-4 py-2">
                        Buyer ID
                     </th>
                     <th className="border border-gray-300 px-4 py-2">
                        Buyer Name
                     </th>
                     <th className="border border-gray-300 px-4 py-2">
                        Buyer Address
                     </th>
                     <th className="border border-gray-300 px-4 py-2">
                        Order Status
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {orders.map((order, index) => (
                     <tr
                        key={index}
                        className="text-center"
                     >
                        <td className="border border-gray-300 px-4 py-2">
                           {" "}
                           {order.productId}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                           {order.productName}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                           {order.buyerId}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                           {order.name}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                           {order.buyerAddress}
                        </td>
                        <td
                           className={`border border-gray-300 px-4 py-2 ${getStatusClass(
                              order.items.status
                           )}`}
                        >
                           {order.orderStatus}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default OrderPage;

{
   /* {orders.map((order, index) => (
                     <tr
                        key={index}
                        className="text-center"
                     >
                        <td className="border border-gray-300 px-4 py-2">
                           {order.productId}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                           {order.productName}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                           {order.buyerId}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                           {order.name}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                           {order.buyerAddress}
                        </td>
                        <td
                           className={`border border-gray-300 px-4 py-2 ${getStatusClass(
                              order.orderStatus
                           )}`}
                        >
                           {order.orderStatus}
                        </td>
                     </tr>
                  ))} */
}

// Sample data for demonstration purposes
//  const orders = [
//     {
//        productId: "P001",
//        productName: "Laptop",
//        buyerId: "B1001",
//        buyerName: "John Doe",
//        buyerAddress: "123 Elm Street, Springfield",
//        orderStatus: "Shipped",
//     },
//     {
//        productId: "P002",
//        productName: "Smartphone",
//        buyerId: "B1002",
//        buyerName: "Jane Smith",
//        buyerAddress: "456 Oak Avenue, Metropolis",
//        orderStatus: "Delivered",
//     },
//     {
//        productId: "P003",
//        productName: "Headphones",
//        buyerId: "B1003",
//        buyerName: "Bruce Wayne",
//        buyerAddress: "789 Pine Road, Gotham",
//        orderStatus: "Processing",
//     },
//  ];
