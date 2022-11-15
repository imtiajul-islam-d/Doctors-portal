import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loadingState } = useContext(AuthContext);
  const location = useLocation();
  if (loadingState) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="border border-dashed border-black w-16 h-9 rounded-full animate-spin"></div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
