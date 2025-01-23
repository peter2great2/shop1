import Homepage from "./pages/Homepage";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AdminDashboard from "./admin/Admin";
import ProtectedRoute from "./utils/ProtectedRoute";
import UserManagement from "./admin/Users";
import Products from "./admin/Products";
import CategoryPage from "./admin/Category";
import OrderPage from "./admin/Orders";
function App() {
   return (
      <>
         <BrowserRouter>
            <ToastContainer />
            <Routes>
               <Route
                  path="/login"
                  element={<Login />}
               />
               <Route
                  path="/register"
                  element={<Register />}
               />
               <Route element={<ProtectedRoute />}>
                  <Route
                     path="/"
                     element={<Homepage />}
                  />
                  <Route
                     path="/admin"
                     element={<AdminDashboard />}
                  />
                  <Route
                     path="/profile"
                     element={<Profile />}
                  />
                  <Route
                     path="/admin/users"
                     element={<UserManagement />}
                  />
                  <Route
                     path="/admin/products"
                     element={<Products />}
                  />
                  <Route
                     path="/admin/categories"
                     element={<CategoryPage />}
                  />
                  <Route
                     path="/admin/orders"
                     element={<OrderPage />}
                  />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
