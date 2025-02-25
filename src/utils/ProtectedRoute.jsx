import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
   const user = true;
   return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default ProtectedRoute;
