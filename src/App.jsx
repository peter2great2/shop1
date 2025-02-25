import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router";
import { CartProvider } from "./context/Cartcontext";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AdminDashboard from "./admin/Admin";
import ProtectedRoute from "./utils/ProtectedRoute";
import UserManagement from "./admin/Users";
import CheckoutPage from "./pages/Checkout";
import Products from "./admin/Products";
import CategoryPage from "./admin/Category";
import OrderPage from "./admin/Orders";
import Cart from "./utils/Cart";
import Shop from "./pages/Shop";
import AdminProfilePage from "./admin/AdminProfile";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <ToastContainer
            autoClose={1000}
            position="top-right"
            className="z-50 mt-5"
          />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin/users" element={<UserManagement />} />
              <Route path="/admin/products" element={<Products />} />
              <Route path="/admin/categories" element={<CategoryPage />} />
              <Route path="/admin/orders" element={<OrderPage />} />
              <Route path="/user/cart" element={<Cart />} />
              <Route path="/user/cart/checkout" element={<CheckoutPage />} />
              <Route path="/products/shop" element={<Shop />} />
              <Route path="/admin/profile" element={<AdminProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
