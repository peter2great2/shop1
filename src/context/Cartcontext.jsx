import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/api/cart/all", {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data.cart);
          setCart(response.data.cart);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
