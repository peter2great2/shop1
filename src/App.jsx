import Homepage from "./pages/Homepage";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";

function App() {
   return (
      <>
         <BrowserRouter>
            <ToastContainer />
            <Routes>
               <Route
                  path="/"
                  element={<Homepage />}
               />
               <Route
                  path="/login"
                  element={<Login />}
               />
               <Route
                  path="/register"
                  element={<Register />}
               />
               <Route
                  path="/profile"
                  element={<Profile />}
               />
               <Route
                  path="/admin"
                  element={<Admin />}
               />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
