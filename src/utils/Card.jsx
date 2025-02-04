import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const handleAddToCart = async (product) => {
    console.log("Product added to cart: ", product);
    await axios
      .post(
        "http://localhost:3000/api/orders/create",
        {
          items: [
            {
              product: product._id,
              quantity: 1,
              price: product.price,
            },
          ],
          totalAmount: product.price,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("Product added to cart: ", res.data);
        setCart([...cart, res.data]);

        toast.success("Product added to cart");
      })
      .catch((err) => {
        console.log("Error adding product to cart: ", err);
      });
  };
  return (
    <div className="w-48 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden">
      {/* Product Image */}
      <img
        className="w-full h-32 object-contain object-center"
        src={product.image}
        alt={product.name}
      />

      {/* Product Details */}
      <div className="p-2">
        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-800 truncate">
          {product.name}
        </h3>

        {/* Product Price */}
        <p className="text-lg font-bold text-gray-900 mt-1">${product.price}</p>

        {/* Add to Cart Button */}
        <button
          className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-1 px-2 rounded"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
