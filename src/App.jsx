import Homepage from "./pages/Homepage";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import "./App.css";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route
                  path="/"
                  element={<Homepage />}
               />
               <Route
                  path="/login"
                  element={<Login />}
               />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
